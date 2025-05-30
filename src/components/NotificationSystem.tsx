import React, { useState, useEffect } from 'react';
import { Bell, Mail, MessageSquare, AlertTriangle, CheckCircle, X, Settings, Filter } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  timestamp: string;
  read: boolean;
  category: 'system' | 'content' | 'analytics' | 'user';
  actionUrl?: string;
}

interface NotificationPreferences {
  email: boolean;
  push: boolean;
  sms: boolean;
  desktop: boolean;
  categories: {
    system: boolean;
    content: boolean;
    analytics: boolean;
    user: boolean;
  };
}

const mockNotifications: Notification[] = [
  {
    id: '1',
    title: 'Campaign Performance Alert',
    message: 'Q4 campaign engagement is 25% above target',
    type: 'success',
    timestamp: '2 minutes ago',
    read: false,
    category: 'analytics',
    actionUrl: '/analytics'
  },
  {
    id: '2',
    title: 'Content Approval Required',
    message: 'Holiday social media post needs review',
    type: 'warning',
    timestamp: '1 hour ago',
    read: false,
    category: 'content',
    actionUrl: '/content'
  },
  {
    id: '3',
    title: 'System Maintenance',
    message: 'Scheduled maintenance tonight at 2 AM EST',
    type: 'info',
    timestamp: '3 hours ago',
    read: true,
    category: 'system'
  },
  {
    id: '4',
    title: 'New User Registered',
    message: 'Sarah Johnson joined your team',
    type: 'info',
    timestamp: '1 day ago',
    read: true,
    category: 'user',
    actionUrl: '/admin'
  }
];

const typeIcons = {
  info: Bell,
  success: CheckCircle,
  warning: AlertTriangle,
  error: AlertTriangle
};

const typeColors = {
  info: 'text-blue-500',
  success: 'text-green-500',
  warning: 'text-blue-500',
  error: 'text-red-500'
};

export const NotificationSystem: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>(mockNotifications);
  const [preferences, setPreferences] = useState<NotificationPreferences>({
    email: true,
    push: true,
    sms: false,
    desktop: true,
    categories: {
      system: true,
      content: true,
      analytics: true,
      user: true
    }
  });
  const [isOpen, setIsOpen] = useState(false);
  const [filter, setFilter] = useState<'all' | 'unread'>('all');

  const unreadCount = notifications.filter(n => !n.read).length;

  const filteredNotifications = notifications.filter(notification => {
    if (filter === 'unread') return !notification.read;
    return true;
  });

  const markAsRead = (id: string) => {
    setNotifications(prev => 
      prev.map(notification => 
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(notification => ({ ...notification, read: true })));
  };

  const deleteNotification = (id: string) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  };

  const updatePreference = (key: keyof NotificationPreferences, value: boolean) => {
    setPreferences(prev => ({ ...prev, [key]: value }));
  };

  const updateCategoryPreference = (category: keyof NotificationPreferences['categories'], value: boolean) => {
    setPreferences(prev => ({
      ...prev,
      categories: { ...prev.categories, [category]: value }
    }));
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="sm" className="relative">
          <Bell className="h-4 w-4" />
          {unreadCount > 0 && (
            <Badge variant="destructive" className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs">
              {unreadCount}
            </Badge>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0" align="end">
        <Tabs defaultValue="notifications" className="w-full">
          <div className="flex items-center justify-between p-4 border-b">
            <h3 className="font-semibold">Notifications</h3>
            <TabsList className="h-8">
              <TabsTrigger value="notifications" className="text-xs">
                Inbox
              </TabsTrigger>
              <TabsTrigger value="settings" className="text-xs">
                <Settings className="h-3 w-3" />
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="notifications" className="mt-0">
            <div className="flex items-center justify-between p-2 border-b">
              <div className="flex items-center gap-2">
                <Button
                  variant={filter === 'all' ? 'default' : 'ghost'}
                  size="sm"
                  className="h-7 text-xs"
                  onClick={() => setFilter('all')}
                >
                  All
                </Button>
                <Button
                  variant={filter === 'unread' ? 'default' : 'ghost'}
                  size="sm"
                  className="h-7 text-xs"
                  onClick={() => setFilter('unread')}
                >
                  Unread ({unreadCount})
                </Button>
              </div>
              {unreadCount > 0 && (
                <Button variant="ghost" size="sm" className="h-7 text-xs" onClick={markAllAsRead}>
                  Mark all read
                </Button>
              )}
            </div>

            <div className="max-h-96 overflow-y-auto">
              {filteredNotifications.length === 0 ? (
                <div className="p-4 text-center text-sm text-slate-500">
                  {filter === 'unread' ? 'No unread notifications' : 'No notifications'}
                </div>
              ) : (
                filteredNotifications.map((notification) => {
                  const IconComponent = typeIcons[notification.type];
                  return (
                    <div
                      key={notification.id}
                      className={`p-3 border-b last:border-b-0 hover:bg-slate-50 ${
                        !notification.read ? 'bg-blue-50/50' : ''
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <IconComponent className={`h-4 w-4 mt-0.5 ${typeColors[notification.type]}`} />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between">
                            <h4 className={`text-sm font-medium ${!notification.read ? 'text-slate-900' : 'text-slate-700'}`}>
                              {notification.title}
                            </h4>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-6 w-6 p-0 ml-2"
                              onClick={() => deleteNotification(notification.id)}
                            >
                              <X className="h-3 w-3" />
                            </Button>
                          </div>
                          <p className="text-xs text-slate-500 mt-1">{notification.message}</p>
                          <div className="flex items-center justify-between mt-2">
                            <span className="text-xs text-slate-400">{notification.timestamp}</span>
                            <div className="flex items-center gap-2">
                              <Badge variant="secondary" className="text-xs">
                                {notification.category}
                              </Badge>
                              {!notification.read && (
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="h-6 text-xs"
                                  onClick={() => markAsRead(notification.id)}
                                >
                                  Mark read
                                </Button>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </TabsContent>

          <TabsContent value="settings" className="mt-0">
            <div className="p-4 space-y-4">
              <div>
                <h4 className="text-sm font-medium mb-3">Notification Methods</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="email" className="text-sm">Email notifications</Label>
                    <Switch
                      id="email"
                      checked={preferences.email}
                      onCheckedChange={(value) => updatePreference('email', value)}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="push" className="text-sm">Push notifications</Label>
                    <Switch
                      id="push"
                      checked={preferences.push}
                      onCheckedChange={(value) => updatePreference('push', value)}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="sms" className="text-sm">SMS alerts</Label>
                    <Switch
                      id="sms"
                      checked={preferences.sms}
                      onCheckedChange={(value) => updatePreference('sms', value)}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="desktop" className="text-sm">Desktop notifications</Label>
                    <Switch
                      id="desktop"
                      checked={preferences.desktop}
                      onCheckedChange={(value) => updatePreference('desktop', value)}
                    />
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="text-sm font-medium mb-3">Categories</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="system" className="text-sm">System updates</Label>
                    <Switch
                      id="system"
                      checked={preferences.categories.system}
                      onCheckedChange={(value) => updateCategoryPreference('system', value)}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="content" className="text-sm">Content updates</Label>
                    <Switch
                      id="content"
                      checked={preferences.categories.content}
                      onCheckedChange={(value) => updateCategoryPreference('content', value)}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="analytics" className="text-sm">Analytics alerts</Label>
                    <Switch
                      id="analytics"
                      checked={preferences.categories.analytics}
                      onCheckedChange={(value) => updateCategoryPreference('analytics', value)}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="user" className="text-sm">User activity</Label>
                    <Switch
                      id="user"
                      checked={preferences.categories.user}
                      onCheckedChange={(value) => updateCategoryPreference('user', value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </PopoverContent>
    </Popover>
  );
};

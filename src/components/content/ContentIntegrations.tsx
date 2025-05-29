
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  BarChart3, 
  Zap, 
  Link,
  CheckCircle,
  AlertCircle,
  Settings
} from 'lucide-react';

const ContentIntegrations = () => {
  const [integrations] = useState([
    {
      id: '1',
      name: 'Facebook',
      icon: Facebook,
      category: 'Social Media',
      connected: true,
      status: 'active',
      lastSync: '2 mins ago',
      features: ['Auto-posting', 'Analytics sync', 'Comment monitoring']
    },
    {
      id: '2',
      name: 'Twitter',
      icon: Twitter,
      category: 'Social Media',
      connected: true,
      status: 'active',
      lastSync: '5 mins ago',
      features: ['Auto-posting', 'Hashtag suggestions', 'Engagement tracking']
    },
    {
      id: '3',
      name: 'Instagram',
      icon: Instagram,
      category: 'Social Media',
      connected: false,
      status: 'inactive',
      lastSync: 'Never',
      features: ['Story posting', 'Image optimization', 'Insights']
    },
    {
      id: '4',
      name: 'LinkedIn',
      icon: Linkedin,
      category: 'Social Media',
      connected: true,
      status: 'warning',
      lastSync: '1 hour ago',
      features: ['Company page posting', 'Professional analytics']
    },
    {
      id: '5',
      name: 'Mailchimp',
      icon: Mail,
      category: 'Email Marketing',
      connected: true,
      status: 'active',
      lastSync: '10 mins ago',
      features: ['List sync', 'Campaign automation', 'A/B testing']
    },
    {
      id: '6',
      name: 'Google Analytics',
      icon: BarChart3,
      category: 'Analytics',
      connected: true,
      status: 'active',
      lastSync: '15 mins ago',
      features: ['Traffic tracking', 'Conversion monitoring', 'Goal tracking']
    },
    {
      id: '7',
      name: 'Zapier',
      icon: Zap,
      category: 'Automation',
      connected: false,
      status: 'inactive',
      lastSync: 'Never',
      features: ['Workflow automation', 'Multi-app connections', 'Trigger actions']
    },
    {
      id: '8',
      name: 'Canva',
      icon: Link,
      category: 'Design',
      connected: true,
      status: 'active',
      lastSync: '30 mins ago',
      features: ['Template import', 'Brand kit sync', 'Asset library']
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-600 text-white';
      case 'warning': return 'bg-gray-600 text-white';
      case 'inactive': return 'bg-slate-400 text-white';
      default: return 'bg-slate-200 text-slate-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active': return <CheckCircle className="h-4 w-4" />;
      case 'warning': return <AlertCircle className="h-4 w-4" />;
      case 'inactive': return <AlertCircle className="h-4 w-4" />;
      default: return <AlertCircle className="h-4 w-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Social Media': return 'bg-blue-600';
      case 'Email Marketing': return 'bg-green-600';
      case 'Analytics': return 'bg-purple-600';
      case 'Automation': return 'bg-red-600';
      case 'Design': return 'bg-teal-600';
      default: return 'bg-slate-600';
    }
  };

  const groupedIntegrations = integrations.reduce((acc, integration) => {
    if (!acc[integration.category]) {
      acc[integration.category] = [];
    }
    acc[integration.category].push(integration);
    return acc;
  }, {} as Record<string, typeof integrations>);

  return (
    <div className="space-y-6">
      {/* Integration Overview */}
      <Card className="border border-slate-200 bg-white">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-slate-800 flex items-center gap-2">
            <Link className="h-5 w-5 text-blue-600" />
            Content Integrations
          </CardTitle>
          <CardDescription>Connect your favorite tools and platforms</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="text-2xl font-bold text-blue-600">
                {integrations.filter(i => i.connected).length}
              </div>
              <div className="text-sm text-blue-700">Connected</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="text-2xl font-bold text-green-600">
                {integrations.filter(i => i.status === 'active').length}
              </div>
              <div className="text-sm text-green-700">Active</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="text-2xl font-bold text-gray-600">
                {integrations.filter(i => i.status === 'warning').length}
              </div>
              <div className="text-sm text-gray-700">Needs Attention</div>
            </div>
            <div className="text-center p-4 bg-slate-50 rounded-lg border border-slate-200">
              <div className="text-2xl font-bold text-slate-600">
                {integrations.filter(i => !i.connected).length}
              </div>
              <div className="text-sm text-slate-700">Available</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Integration Categories */}
      {Object.entries(groupedIntegrations).map(([category, categoryIntegrations]) => (
        <Card key={category} className="border border-slate-200 bg-white">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-slate-800 flex items-center gap-2">
              <div className={`w-4 h-4 rounded ${getCategoryColor(category)}`}></div>
              {category}
            </CardTitle>
            <CardDescription>
              {categoryIntegrations.filter(i => i.connected).length} of {categoryIntegrations.length} connected
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {categoryIntegrations.map((integration) => {
                const IconComponent = integration.icon;
                return (
                  <div key={integration.id} className="border border-slate-200 rounded-lg p-4 hover:shadow-sm transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-slate-100 rounded-lg">
                          <IconComponent className="h-5 w-5 text-slate-700" />
                        </div>
                        <div>
                          <h3 className="font-medium text-slate-800">{integration.name}</h3>
                          <p className="text-sm text-slate-500">Last sync: {integration.lastSync}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className={getStatusColor(integration.status)}>
                          {getStatusIcon(integration.status)}
                          <span className="ml-1 capitalize">{integration.status}</span>
                        </Badge>
                      </div>
                    </div>

                    <div className="mb-3">
                      <h4 className="text-sm font-medium text-slate-700 mb-2">Features:</h4>
                      <div className="flex flex-wrap gap-1">
                        {integration.features.map((feature, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Switch checked={integration.connected} />
                        <span className="text-sm text-slate-600">
                          {integration.connected ? 'Connected' : 'Disconnected'}
                        </span>
                      </div>
                      <div className="flex gap-2">
                        {integration.connected ? (
                          <>
                            <Button size="sm" variant="outline" className="text-xs">
                              <Settings className="h-3 w-3 mr-1" />
                              Configure
                            </Button>
                            <Button size="sm" variant="outline" className="text-xs">
                              Sync Now
                            </Button>
                          </>
                        ) : (
                          <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white text-xs">
                            Connect
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      ))}

      {/* Integration Settings */}
      <Card className="border border-slate-200 bg-white">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-slate-800 flex items-center gap-2">
            <Settings className="h-5 w-5 text-slate-600" />
            Global Integration Settings
          </CardTitle>
          <CardDescription>Configure how integrations work across your content</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
              <div>
                <h3 className="font-medium text-slate-800">Auto-sync Content</h3>
                <p className="text-sm text-slate-600">Automatically sync content across all connected platforms</p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
              <div>
                <h3 className="font-medium text-slate-800">Real-time Analytics</h3>
                <p className="text-sm text-slate-600">Enable real-time data sync from analytics platforms</p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
              <div>
                <h3 className="font-medium text-slate-800">Error Notifications</h3>
                <p className="text-sm text-slate-600">Get notified when integrations encounter issues</p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="p-4 border border-slate-200 rounded-lg">
              <h3 className="font-medium text-slate-800 mb-3">API Rate Limits</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">Social Media Posts per Hour</span>
                  <Input className="w-20" defaultValue="10" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">Email Campaigns per Day</span>
                  <Input className="w-20" defaultValue="5" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">Analytics Sync Interval (minutes)</span>
                  <Input className="w-20" defaultValue="15" />
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">Save Settings</Button>
              <Button variant="outline">Reset to Defaults</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContentIntegrations;

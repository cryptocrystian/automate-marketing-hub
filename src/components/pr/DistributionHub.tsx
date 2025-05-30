
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Send, 
  Brain, 
  Radio, 
  Globe, 
  Share, 
  CheckCircle, 
  Clock, 
  AlertCircle,
  TrendingUp,
  Users,
  Zap,
  Plus,
  BarChart3,
  ExternalLink,
  Settings,
  Calendar,
  Target,
  Eye
} from 'lucide-react';

const DistributionHub = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const distributionMetrics = {
    activeDistributions: 12,
    totalChannels: 8,
    successRate: 89,
    avgPickupRate: 73
  };

  const distributionChannels = [
    { 
      name: 'PR Newswire', 
      type: 'traditional', 
      status: 'active', 
      successRate: 87, 
      cost: 'Paid',
      icon: Globe,
      unique: false
    },
    { 
      name: 'ChatGPT Indexing', 
      type: 'ai', 
      status: 'optimized', 
      successRate: 94, 
      cost: 'Free',
      icon: Brain,
      unique: true
    },
    { 
      name: 'Perplexity AI', 
      type: 'ai', 
      status: 'optimized', 
      successRate: 91, 
      cost: 'Free',
      icon: Zap,
      unique: true
    },
    { 
      name: 'Podcast Networks', 
      type: 'audio', 
      status: 'active', 
      successRate: 76, 
      cost: 'Partner',
      icon: Radio,
      unique: true
    },
    { 
      name: 'Business Wire', 
      type: 'traditional', 
      status: 'active', 
      successRate: 82, 
      cost: 'Paid',
      icon: Globe,
      unique: false
    },
    { 
      name: 'Social Media', 
      type: 'social', 
      status: 'ready', 
      successRate: 68, 
      cost: 'Free',
      icon: Share,
      unique: false
    },
    { 
      name: 'Custom Media Lists', 
      type: 'direct', 
      status: 'ready', 
      successRate: 85, 
      cost: 'Free',
      icon: Users,
      unique: false
    },
    { 
      name: 'Spotify Podcasts', 
      type: 'audio', 
      status: 'beta', 
      successRate: 72, 
      cost: 'Partner',
      icon: Radio,
      unique: true
    }
  ];

  const activeDistributions = [
    {
      id: 1,
      title: 'Q1 Product Launch Announcement',
      date: '2024-01-15',
      status: 'distributing',
      channels: 5,
      delivered: 3,
      pickup: 18,
      aiIndexed: true,
      podcastMentions: 2
    },
    {
      id: 2,
      title: 'Executive Leadership Hire',
      date: '2024-01-12',
      status: 'completed',
      channels: 4,
      delivered: 4,
      pickup: 12,
      aiIndexed: true,
      podcastMentions: 1
    },
    {
      id: 3,
      title: 'Strategic Partnership Update',
      date: '2024-01-10',
      status: 'analyzing',
      channels: 6,
      delivered: 6,
      pickup: 25,
      aiIndexed: true,
      podcastMentions: 4
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800 border-green-300';
      case 'optimized': return 'bg-purple-100 text-purple-800 border-purple-300';
      case 'ready': return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'beta': return 'bg-orange-100 text-orange-800 border-orange-300';
      default: return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const getDistributionStatusIcon = (status: string) => {
    switch (status) {
      case 'distributing': return Clock;
      case 'completed': return CheckCircle;
      case 'analyzing': return BarChart3;
      default: return AlertCircle;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Send className="w-8 h-8 text-blue-600" />
          <div>
            <h1 className="text-3xl font-bold">Distribution Hub</h1>
            <p className="text-muted-foreground">Multi-channel press release distribution and tracking</p>
          </div>
          <Badge className="bg-purple-100 text-purple-800 border-purple-300">
            <Brain className="w-3 h-3 mr-1" />
            AI-Enhanced
          </Badge>
        </div>
        <div className="flex items-center space-x-2">
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="w-4 h-4 mr-2" />
            New Distribution
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="channels">Channels</TabsTrigger>
          <TabsTrigger value="active">Active Distributions</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Distribution Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Distributions</CardTitle>
                <Send className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{distributionMetrics.activeDistributions}</div>
                <p className="text-xs text-muted-foreground">Currently distributing</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Channels</CardTitle>
                <Globe className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{distributionMetrics.totalChannels}</div>
                <p className="text-xs text-muted-foreground">Distribution channels</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
                <TrendingUp className="h-4 w-4 text-green-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">{distributionMetrics.successRate}%</div>
                <p className="text-xs text-muted-foreground">Delivery success</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Avg Pickup Rate</CardTitle>
                <Eye className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{distributionMetrics.avgPickupRate}%</div>
                <p className="text-xs text-muted-foreground">Media pickup</p>
              </CardContent>
            </Card>
          </div>

          {/* Quick Channel Overview */}
          <Card>
            <CardHeader>
              <CardTitle>Distribution Channels Overview</CardTitle>
              <CardDescription>Status and performance of available distribution channels</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {distributionChannels.slice(0, 6).map((channel, index) => {
                  const IconComponent = channel.icon;
                  return (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <IconComponent className={`w-5 h-5 ${channel.unique ? 'text-purple-600' : 'text-blue-600'}`} />
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="font-medium">{channel.name}</span>
                            {channel.unique && (
                              <Badge className="bg-purple-100 text-purple-800 text-xs">
                                UNIQUE
                              </Badge>
                            )}
                          </div>
                          <div className="text-sm text-muted-foreground">{channel.successRate}% success • {channel.cost}</div>
                        </div>
                      </div>
                      <Badge className={getStatusColor(channel.status)}>
                        {channel.status}
                      </Badge>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Recent Distributions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Recent Distributions
                <Button variant="outline" size="sm">
                  View All
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {activeDistributions.map((distribution) => {
                const StatusIcon = getDistributionStatusIcon(distribution.status);
                return (
                  <div key={distribution.id} className="border rounded-lg p-4 space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-medium">{distribution.title}</h4>
                        <p className="text-sm text-muted-foreground">{distribution.date}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <StatusIcon className="w-4 h-4 text-blue-600" />
                        <Badge variant="outline">{distribution.status}</Badge>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-4 gap-4 text-sm">
                      <div className="text-center">
                        <div className="font-medium">{distribution.delivered}/{distribution.channels}</div>
                        <div className="text-muted-foreground">Channels</div>
                      </div>
                      <div className="text-center">
                        <div className="font-medium">{distribution.pickup}</div>
                        <div className="text-muted-foreground">Pickups</div>
                      </div>
                      <div className="text-center">
                        <div className="font-medium flex items-center justify-center">
                          <Brain className="w-3 h-3 mr-1 text-purple-600" />
                          {distribution.aiIndexed ? 'Yes' : 'No'}
                        </div>
                        <div className="text-muted-foreground">AI Indexed</div>
                      </div>
                      <div className="text-center">
                        <div className="font-medium flex items-center justify-center">
                          <Radio className="w-3 h-3 mr-1 text-orange-600" />
                          {distribution.podcastMentions}
                        </div>
                        <div className="text-muted-foreground">Podcasts</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="channels" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Distribution Channels</CardTitle>
              <CardDescription>Manage and configure your distribution network</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {distributionChannels.map((channel, index) => {
                  const IconComponent = channel.icon;
                  return (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <IconComponent className={`w-6 h-6 ${channel.unique ? 'text-purple-600' : 'text-blue-600'}`} />
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="font-medium">{channel.name}</span>
                            {channel.unique && (
                              <Badge className="bg-purple-100 text-purple-800 text-xs">
                                UNIQUE ADVANTAGE
                              </Badge>
                            )}
                            <Badge className={getStatusColor(channel.status)}>
                              {channel.status}
                            </Badge>
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Success Rate: {channel.successRate}% • Cost: {channel.cost} • Type: {channel.type}
                          </div>
                          <div className="mt-1">
                            <Progress value={channel.successRate} className="h-2 w-32" />
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Settings className="w-3 h-3 mr-1" />
                          Configure
                        </Button>
                        <Button variant="outline" size="sm">
                          <BarChart3 className="w-3 h-3 mr-1" />
                          Analytics
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="active" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Active Distributions</CardTitle>
              <CardDescription>Monitor ongoing and recent distribution campaigns</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {activeDistributions.map((distribution) => {
                const StatusIcon = getDistributionStatusIcon(distribution.status);
                return (
                  <div key={distribution.id} className="border rounded-lg p-6 space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-semibold">{distribution.title}</h3>
                        <p className="text-muted-foreground">Distributed on {distribution.date}</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <StatusIcon className="w-5 h-5 text-blue-600" />
                        <Badge variant="outline" className="capitalize">{distribution.status}</Badge>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="text-2xl font-bold">{distribution.delivered}/{distribution.channels}</div>
                        <div className="text-sm text-muted-foreground">Channels Delivered</div>
                      </div>
                      <div className="text-center p-3 bg-blue-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">{distribution.pickup}</div>
                        <div className="text-sm text-muted-foreground">Media Pickups</div>
                      </div>
                      <div className="text-center p-3 bg-purple-50 rounded-lg">
                        <div className="text-2xl font-bold text-purple-600 flex items-center justify-center">
                          <Brain className="w-5 h-5 mr-1" />
                          {distribution.aiIndexed ? 'Yes' : 'No'}
                        </div>
                        <div className="text-sm text-muted-foreground">AI Indexed</div>
                      </div>
                      <div className="text-center p-3 bg-orange-50 rounded-lg">
                        <div className="text-2xl font-bold text-orange-600 flex items-center justify-center">
                          <Radio className="w-5 h-5 mr-1" />
                          {distribution.podcastMentions}
                        </div>
                        <div className="text-sm text-muted-foreground">Podcast Mentions</div>
                      </div>
                      <div className="text-center p-3 bg-green-50 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">
                          {Math.round((distribution.pickup / distribution.channels) * 10)}%
                        </div>
                        <div className="text-sm text-muted-foreground">Pickup Rate</div>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        View Details
                      </Button>
                      <Button variant="outline" size="sm">
                        <BarChart3 className="w-3 h-3 mr-1" />
                        Analytics
                      </Button>
                      <Button variant="outline" size="sm">
                        <Calendar className="w-3 h-3 mr-1" />
                        Schedule Follow-up
                      </Button>
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Distribution Analytics</CardTitle>
              <CardDescription>Performance insights and optimization recommendations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-medium">Channel Performance Comparison</h4>
                  {distributionChannels.slice(0, 4).map((channel, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>{channel.name}</span>
                        <span>{channel.successRate}%</span>
                      </div>
                      <Progress value={channel.successRate} className="h-2" />
                    </div>
                  ))}
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-medium">Unique Advantage Metrics</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <Brain className="w-4 h-4 text-purple-600" />
                        <span className="font-medium">AI Platform Citations</span>
                      </div>
                      <span className="text-lg font-bold text-purple-600">28</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <Radio className="w-4 h-4 text-orange-600" />
                        <span className="font-medium">Podcast Mentions</span>
                      </div>
                      <span className="text-lg font-bold text-orange-600">15</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <TrendingUp className="w-4 h-4 text-green-600" />
                        <span className="font-medium">Cross-Platform Synergy</span>
                      </div>
                      <span className="text-lg font-bold text-green-600">+45%</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DistributionHub;


import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { 
  Eye, 
  Brain, 
  TrendingUp, 
  TrendingDown, 
  Plus, 
  Bell, 
  Search, 
  ExternalLink,
  MessageSquare,
  Radio,
  Globe,
  Users,
  AlertTriangle,
  CheckCircle,
  Clock,
  Filter,
  Download,
  Share,
  BarChart3
} from 'lucide-react';

const MediaMonitoring = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [monitoringActive, setMonitoringActive] = useState(true);

  const monitoringMetrics = {
    totalMentions: { value: 156, change: '+23%', trend: 'up' },
    sentimentScore: { value: 82, status: 'positive' },
    totalReach: { value: '2.3M', change: '+15%' },
    alertTriggers: { value: 8, status: 'new' }
  };

  const liveMentions = [
    {
      id: 1,
      source: 'TechCrunch',
      title: 'Innovative AI Platform Disrupts Traditional Marketing',
      snippet: 'The new platform demonstrates significant advancement in automated content generation...',
      sentiment: 'positive',
      reach: '850K',
      timestamp: '2 hours ago',
      type: 'news'
    },
    {
      id: 2,
      source: 'Marketing Podcast Network',
      title: 'Future of PR Technology Discussion',
      snippet: 'Industry experts discuss the latest trends in AI-powered public relations tools...',
      sentiment: 'positive',
      reach: '45K',
      timestamp: '4 hours ago',
      type: 'podcast'
    },
    {
      id: 3,
      source: 'LinkedIn',
      title: 'CEO Sarah Johnson shares insights on industry innovation',
      snippet: 'Thought leadership post about the evolution of marketing technology receives strong engagement...',
      sentiment: 'neutral',
      reach: '12K',
      timestamp: '6 hours ago',
      type: 'social'
    }
  ];

  const sentimentBreakdown = {
    positive: 68,
    neutral: 24,
    negative: 8
  };

  const trendingTopics = [
    { topic: 'AI Marketing', mentions: 45, trend: 'up' },
    { topic: 'Automation Tools', mentions: 32, trend: 'up' },
    { topic: 'Digital Transformation', mentions: 28, trend: 'stable' },
    { topic: 'Customer Experience', mentions: 19, trend: 'down' }
  ];

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case 'positive': return 'text-green-600 bg-green-50 border-green-200';
      case 'negative': return 'text-red-600 bg-red-50 border-red-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getSourceIcon = (type: string) => {
    switch (type) {
      case 'podcast': return Radio;
      case 'social': return Users;
      default: return Globe;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Eye className="w-8 h-8 text-blue-600" />
          <div>
            <h1 className="text-3xl font-bold">Media Monitoring</h1>
            <p className="text-muted-foreground">Real-time coverage tracking and sentiment analysis</p>
          </div>
          <Badge className="bg-purple-100 text-purple-800 border-purple-300">
            <Brain className="w-3 h-3 mr-1" />
            AI-Enhanced
          </Badge>
          {monitoringActive && (
            <Badge className="bg-green-100 text-green-800 border-green-300">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-1 animate-pulse" />
              Active
            </Badge>
          )}
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline">
            <Plus className="w-4 h-4 mr-2" />
            Add Keywords
          </Button>
          <Button variant="outline">
            <Bell className="w-4 h-4 mr-2" />
            Set Alerts
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="mentions">Live Mentions</TabsTrigger>
          <TabsTrigger value="sentiment">Sentiment Analysis</TabsTrigger>
          <TabsTrigger value="alerts">Alert Management</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Monitoring Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Mentions</CardTitle>
                <MessageSquare className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{monitoringMetrics.totalMentions.value}</div>
                <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                  <TrendingUp className="w-3 h-3 text-green-600" />
                  <span className="text-green-600">{monitoringMetrics.totalMentions.change}</span>
                  <span>this week</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Sentiment Score</CardTitle>
                <Brain className="h-4 w-4 text-purple-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">{monitoringMetrics.sentimentScore.value}%</div>
                <p className="text-xs text-muted-foreground">Positive sentiment</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Reach</CardTitle>
                <Eye className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{monitoringMetrics.totalReach.value}</div>
                <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                  <TrendingUp className="w-3 h-3 text-green-600" />
                  <span className="text-green-600">{monitoringMetrics.totalReach.change}</span>
                  <span>impressions</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Alert Triggers</CardTitle>
                <Bell className="h-4 w-4 text-orange-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{monitoringMetrics.alertTriggers.value}</div>
                <p className="text-xs text-muted-foreground">New alerts</p>
              </CardContent>
            </Card>
          </div>

          {/* Live Mentions Preview */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Recent Mentions
                <Button variant="outline" size="sm">
                  View All
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {liveMentions.slice(0, 3).map((mention) => {
                const SourceIcon = getSourceIcon(mention.type);
                return (
                  <div key={mention.id} className="border rounded-lg p-4 space-y-2">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-2">
                        <SourceIcon className="w-4 h-4 text-blue-600" />
                        <span className="font-medium">{mention.source}</span>
                        <Badge className={`text-xs ${getSentimentColor(mention.sentiment)}`}>
                          {mention.sentiment}
                        </Badge>
                      </div>
                      <span className="text-xs text-muted-foreground">{mention.timestamp}</span>
                    </div>
                    <h4 className="font-medium">{mention.title}</h4>
                    <p className="text-sm text-muted-foreground">{mention.snippet}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">Reach: {mention.reach}</span>
                      <Button variant="outline" size="sm">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        View
                      </Button>
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="mentions" className="space-y-6">
          {/* Search and Filters */}
          <Card>
            <CardHeader>
              <CardTitle>Live Mentions Feed</CardTitle>
              <CardDescription>Real-time monitoring of brand mentions across all channels</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-2 mb-4">
                <div className="flex-1">
                  <Input placeholder="Search mentions..." className="w-full" />
                </div>
                <Button variant="outline">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
                <Button variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Export
                </Button>
              </div>

              <div className="space-y-4">
                {liveMentions.map((mention) => {
                  const SourceIcon = getSourceIcon(mention.type);
                  return (
                    <div key={mention.id} className="border rounded-lg p-4 space-y-3">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-3">
                          <SourceIcon className="w-5 h-5 text-blue-600" />
                          <div>
                            <span className="font-medium">{mention.source}</span>
                            <div className="text-xs text-muted-foreground">{mention.timestamp}</div>
                          </div>
                          <Badge className={`text-xs ${getSentimentColor(mention.sentiment)}`}>
                            {mention.sentiment}
                          </Badge>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            Add to Report
                          </Button>
                          <Button variant="outline" size="sm">
                            Contact
                          </Button>
                        </div>
                      </div>
                      <h4 className="font-medium">{mention.title}</h4>
                      <p className="text-sm text-muted-foreground">{mention.snippet}</p>
                      <div className="flex items-center justify-between pt-2 border-t">
                        <span className="text-sm text-muted-foreground">Reach: {mention.reach}</span>
                        <Button variant="outline" size="sm">
                          <ExternalLink className="w-3 h-3 mr-1" />
                          View Full Article
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sentiment" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Sentiment Breakdown */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Brain className="w-5 h-5 mr-2 text-purple-600" />
                  Sentiment Analysis
                </CardTitle>
                <CardDescription>AI-powered sentiment breakdown</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Positive</span>
                    <span className="text-sm font-medium text-green-600">{sentimentBreakdown.positive}%</span>
                  </div>
                  <Progress value={sentimentBreakdown.positive} className="h-2" />
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Neutral</span>
                    <span className="text-sm font-medium text-gray-600">{sentimentBreakdown.neutral}%</span>
                  </div>
                  <Progress value={sentimentBreakdown.neutral} className="h-2" />
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Negative</span>
                    <span className="text-sm font-medium text-red-600">{sentimentBreakdown.negative}%</span>
                  </div>
                  <Progress value={sentimentBreakdown.negative} className="h-2" />
                </div>
              </CardContent>
            </Card>

            {/* Trending Topics */}
            <Card>
              <CardHeader>
                <CardTitle>Trending Topics</CardTitle>
                <CardDescription>Popular discussion themes and keywords</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {trendingTopics.map((topic, index) => (
                  <div key={index} className="flex items-center justify-between p-2 border rounded">
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">{topic.topic}</span>
                      {topic.trend === 'up' && <TrendingUp className="w-3 h-3 text-green-600" />}
                      {topic.trend === 'down' && <TrendingDown className="w-3 h-3 text-red-600" />}
                    </div>
                    <span className="text-sm text-muted-foreground">{topic.mentions} mentions</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="alerts" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Alert Management</CardTitle>
              <CardDescription>Configure monitoring alerts and notifications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Button className="w-full">
                  <Plus className="w-4 h-4 mr-2" />
                  Create New Alert
                </Button>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <div className="font-medium">Brand Mention Alert</div>
                      <div className="text-sm text-muted-foreground">Keywords: company name, CEO name</div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="secondary">Active</Badge>
                      <Button variant="outline" size="sm">Edit</Button>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <div className="font-medium">Sentiment Drop Alert</div>
                      <div className="text-sm text-muted-foreground">Trigger: Sentiment below 60%</div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="secondary">Active</Badge>
                      <Button variant="outline" size="sm">Edit</Button>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <div className="font-medium">Competitor Monitoring</div>
                      <div className="text-sm text-muted-foreground">Track: Competitor A, Competitor B</div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="secondary">Active</Badge>
                      <Button variant="outline" size="sm">Edit</Button>
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

export default MediaMonitoring;

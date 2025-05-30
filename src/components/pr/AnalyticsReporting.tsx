
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  BarChart3, 
  Brain, 
  Radio, 
  TrendingUp, 
  TrendingDown, 
  Eye, 
  DollarSign,
  Target,
  Users,
  Calendar,
  Download,
  Share,
  Filter,
  RefreshCw,
  Zap,
  Globe,
  MessageSquare,
  Award,
  Activity
} from 'lucide-react';

const AnalyticsReporting = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [dateRange, setDateRange] = useState('30d');

  const keyMetrics = {
    totalReach: { value: '4.2M', change: '+23%', trend: 'up' },
    earnedMediaValue: { value: '$312K', change: '+18%', trend: 'up' },
    pickupRate: { value: 73, change: '+5%', trend: 'up' },
    aiCitations: { value: 28, change: '+67%', trend: 'up' },
    podcastMentions: { value: 15, change: '+25%', trend: 'up' }
  };

  const campaignPerformance = [
    {
      id: 1,
      name: 'Q4 Product Launch',
      status: 'completed',
      reach: '1.8M',
      pickupRate: 78,
      emv: '$125K',
      aiCitations: 12,
      podcastMentions: 6,
      roi: '340%'
    },
    {
      id: 2,
      name: 'Executive Hire Announcement',
      status: 'active',
      reach: '890K',
      pickupRate: 65,
      emv: '$67K',
      aiCitations: 8,
      podcastMentions: 3,
      roi: '290%'
    },
    {
      id: 3,
      name: 'Partnership Series',
      status: 'completed',
      reach: '1.2M',
      pickupRate: 82,
      emv: '$89K',
      aiCitations: 15,
      podcastMentions: 7,
      roi: '425%'
    }
  ];

  const crossPillarMetrics = {
    contentAmplification: 23,
    seoBacklinks: 156,
    socialAmplification: 89,
    automateROI: '+45%'
  };

  const competitiveAdvantages = [
    {
      metric: 'AI Platform Discoverability',
      value: '94%',
      benchmark: '23%',
      advantage: '+71%',
      icon: Brain,
      color: 'purple'
    },
    {
      metric: 'Podcast Syndication Success',
      value: '76%',
      benchmark: '12%',
      advantage: '+64%',
      icon: Radio,
      color: 'orange'
    },
    {
      metric: 'Cross-Pillar Synergy ROI',
      value: '+45%',
      benchmark: '+8%',
      advantage: '+37%',
      icon: Zap,
      color: 'green'
    },
    {
      metric: 'Media Relationship Scoring',
      value: '8.4/10',
      benchmark: '6.1/10',
      advantage: '+38%',
      icon: Users,
      color: 'blue'
    }
  ];

  const getTrendIcon = (trend: string) => {
    return trend === 'up' ? TrendingUp : TrendingDown;
  };

  const getTrendColor = (trend: string) => {
    return trend === 'up' ? 'text-green-600' : 'text-red-600';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <BarChart3 className="w-8 h-8 text-blue-600" />
          <div>
            <h1 className="text-3xl font-bold">PR Analytics</h1>
            <p className="text-muted-foreground">Comprehensive performance analytics and reporting</p>
          </div>
          <Badge className="bg-purple-100 text-purple-800 border-purple-300">
            <Brain className="w-3 h-3 mr-1" />
            AI-Enhanced
          </Badge>
        </div>
        <div className="flex items-center space-x-2">
          <Select value={dateRange} onValueChange={setDateRange}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="90d">Last 3 months</SelectItem>
              <SelectItem value="1y">Last year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Generate Report
          </Button>
          <Button variant="outline">
            <Share className="w-4 h-4 mr-2" />
            Export Data
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="campaigns">Campaign Performance</TabsTrigger>
          <TabsTrigger value="competitive">Competitive Advantage</TabsTrigger>
          <TabsTrigger value="integration">Cross-Pillar Integration</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Key Performance Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Reach</CardTitle>
                <Eye className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{keyMetrics.totalReach.value}</div>
                <div className="flex items-center space-x-1 text-xs">
                  {React.createElement(getTrendIcon(keyMetrics.totalReach.trend), {
                    className: `w-3 h-3 ${getTrendColor(keyMetrics.totalReach.trend)}`
                  })}
                  <span className={getTrendColor(keyMetrics.totalReach.trend)}>
                    {keyMetrics.totalReach.change}
                  </span>
                  <span className="text-muted-foreground">vs last period</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Earned Media Value</CardTitle>
                <DollarSign className="h-4 w-4 text-green-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">{keyMetrics.earnedMediaValue.value}</div>
                <div className="flex items-center space-x-1 text-xs">
                  <TrendingUp className="w-3 h-3 text-green-600" />
                  <span className="text-green-600">{keyMetrics.earnedMediaValue.change}</span>
                  <span className="text-muted-foreground">this period</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Pickup Rate</CardTitle>
                <Target className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{keyMetrics.pickupRate.value}%</div>
                <div className="flex items-center space-x-1 text-xs">
                  <TrendingUp className="w-3 h-3 text-green-600" />
                  <span className="text-green-600">{keyMetrics.pickupRate.change}</span>
                  <span className="text-muted-foreground">improvement</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-purple-200 bg-purple-50">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">AI Citations</CardTitle>
                <Brain className="h-4 w-4 text-purple-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-purple-600">{keyMetrics.aiCitations.value}</div>
                <div className="flex items-center space-x-1 text-xs">
                  <TrendingUp className="w-3 h-3 text-purple-600" />
                  <span className="text-purple-600">{keyMetrics.aiCitations.change}</span>
                  <span className="text-purple-600">UNIQUE METRIC</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-orange-200 bg-orange-50">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Podcast Mentions</CardTitle>
                <Radio className="h-4 w-4 text-orange-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-orange-600">{keyMetrics.podcastMentions.value}</div>
                <div className="flex items-center space-x-1 text-xs">
                  <TrendingUp className="w-3 h-3 text-orange-600" />
                  <span className="text-orange-600">{keyMetrics.podcastMentions.change}</span>
                  <span className="text-orange-600">UNIQUE METRIC</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Performance Charts Placeholder */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Monthly Performance Trends</CardTitle>
                <CardDescription>Reach and impression trends over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                  <div className="text-center text-muted-foreground">
                    <BarChart3 className="w-12 h-12 mx-auto mb-2" />
                    <p>Interactive chart showing monthly reach, impressions, and EMV trends</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Sentiment Analysis Over Time</CardTitle>
                <CardDescription>Media sentiment trends and patterns</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                  <div className="text-center text-muted-foreground">
                    <Activity className="w-12 h-12 mx-auto mb-2" />
                    <p>Area chart displaying sentiment analysis over time with positive/negative breakdown</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Insights */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Brain className="w-5 h-5 mr-2 text-purple-600" />
                AI-Powered Insights
              </CardTitle>
              <CardDescription>Automated analysis and recommendations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                  <h4 className="font-medium text-purple-800 mb-2">Performance Insight</h4>
                  <p className="text-sm text-purple-700">Your AI-optimized press releases show 67% higher pickup rates compared to traditional releases. Continue leveraging AI optimization features.</p>
                </div>
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <h4 className="font-medium text-green-800 mb-2">Timing Recommendation</h4>
                  <p className="text-sm text-green-700">Tuesday releases at 9 AM EST show optimal performance for your industry vertical. Consider scheduling future releases accordingly.</p>
                </div>
                <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
                  <h4 className="font-medium text-orange-800 mb-2">Channel Optimization</h4>
                  <p className="text-sm text-orange-700">Podcast syndication generates 3x higher engagement rates than traditional channels for your target audience. Increase podcast distribution focus.</p>
                </div>
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h4 className="font-medium text-blue-800 mb-2">Relationship Opportunity</h4>
                  <p className="text-sm text-blue-700">5 journalists show increased engagement patterns. Consider prioritizing relationship building with these contacts for better coverage.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="campaigns" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Campaign Performance Analysis</CardTitle>
              <CardDescription>Detailed performance metrics for all campaigns</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {campaignPerformance.map((campaign) => (
                  <div key={campaign.id} className="border rounded-lg p-6 space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-semibold">{campaign.name}</h3>
                        <Badge variant={campaign.status === 'completed' ? 'default' : 'secondary'}>
                          {campaign.status}
                        </Badge>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-600">{campaign.roi}</div>
                        <div className="text-sm text-muted-foreground">ROI</div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                      <div className="text-center p-3 bg-blue-50 rounded-lg">
                        <div className="text-xl font-bold text-blue-600">{campaign.reach}</div>
                        <div className="text-xs text-muted-foreground">Total Reach</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="text-xl font-bold">{campaign.pickupRate}%</div>
                        <div className="text-xs text-muted-foreground">Pickup Rate</div>
                      </div>
                      <div className="text-center p-3 bg-green-50 rounded-lg">
                        <div className="text-xl font-bold text-green-600">{campaign.emv}</div>
                        <div className="text-xs text-muted-foreground">EMV</div>
                      </div>
                      <div className="text-center p-3 bg-purple-50 rounded-lg">
                        <div className="text-xl font-bold text-purple-600 flex items-center justify-center">
                          <Brain className="w-4 h-4 mr-1" />
                          {campaign.aiCitations}
                        </div>
                        <div className="text-xs text-muted-foreground">AI Citations</div>
                      </div>
                      <div className="text-center p-3 bg-orange-50 rounded-lg">
                        <div className="text-xl font-bold text-orange-600 flex items-center justify-center">
                          <Radio className="w-4 h-4 mr-1" />
                          {campaign.podcastMentions}
                        </div>
                        <div className="text-xs text-muted-foreground">Podcasts</div>
                      </div>
                      <div className="text-center p-3 bg-blue-50 rounded-lg">
                        <div className="text-xl font-bold text-blue-600">A+</div>
                        <div className="text-xs text-muted-foreground">Grade</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="competitive" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Competitive Advantage Metrics</CardTitle>
              <CardDescription>Unique capabilities that differentiate your PR performance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {competitiveAdvantages.map((advantage, index) => {
                  const IconComponent = advantage.icon;
                  return (
                    <div key={index} className={`p-6 border-2 border-${advantage.color}-200 bg-${advantage.color}-50 rounded-lg`}>
                      <div className="flex items-center space-x-3 mb-4">
                        <IconComponent className={`w-8 h-8 text-${advantage.color}-600`} />
                        <div>
                          <h3 className="font-semibold">{advantage.metric}</h3>
                          <Badge className={`bg-${advantage.color}-100 text-${advantage.color}-800 text-xs`}>
                            COMPETITIVE ADVANTAGE
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Your Performance</span>
                          <span className={`text-2xl font-bold text-${advantage.color}-600`}>{advantage.value}</span>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Industry Benchmark</span>
                          <span className="text-lg font-medium text-gray-600">{advantage.benchmark}</span>
                        </div>
                        
                        <div className="flex justify-between items-center pt-2 border-t">
                          <span className="text-sm font-medium">Advantage</span>
                          <span className={`text-xl font-bold text-${advantage.color}-600`}>{advantage.advantage}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="integration" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Cross-Pillar Integration Metrics</CardTitle>
              <CardDescription>Performance impact from integrated Content → PR → SEO workflows</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="text-center p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600">{crossPillarMetrics.contentAmplification}</div>
                  <div className="text-sm text-muted-foreground">Content Pieces Amplified</div>
                  <div className="text-xs text-blue-600 mt-1">Through PR Campaigns</div>
                </div>
                
                <div className="text-center p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="text-3xl font-bold text-green-600">{crossPillarMetrics.seoBacklinks}</div>
                  <div className="text-sm text-muted-foreground">SEO Backlinks Generated</div>
                  <div className="text-xs text-green-600 mt-1">From Media Coverage</div>
                </div>
                
                <div className="text-center p-4 bg-purple-50 border border-purple-200 rounded-lg">
                  <div className="text-3xl font-bold text-purple-600">{crossPillarMetrics.socialAmplification}%</div>
                  <div className="text-sm text-muted-foreground">Social Amplification</div>
                  <div className="text-xs text-purple-600 mt-1">Cross-Platform Boost</div>
                </div>
                
                <div className="text-center p-4 bg-orange-50 border border-orange-200 rounded-lg">
                  <div className="text-3xl font-bold text-orange-600">{crossPillarMetrics.automateROI}</div>
                  <div className="text-sm text-muted-foreground">AUTOMATE ROI</div>
                  <div className="text-xs text-orange-600 mt-1">Methodology Impact</div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">Integration Impact Analysis</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium mb-2">Content → PR Pipeline</h5>
                    <p className="text-sm text-muted-foreground mb-3">Content pieces successfully amplified through PR campaigns</p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Blog posts to press releases</span>
                        <span className="font-medium">12 pieces</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Thought leadership amplification</span>
                        <span className="font-medium">8 pieces</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Case studies to media stories</span>
                        <span className="font-medium">3 pieces</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium mb-2">PR → SEO Impact</h5>
                    <p className="text-sm text-muted-foreground mb-3">SEO benefits generated from PR activities</p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>High-authority backlinks</span>
                        <span className="font-medium">156 links</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Domain authority improvement</span>
                        <span className="font-medium">+12 points</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Organic traffic boost</span>
                        <span className="font-medium">+34%</span>
                      </div>
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

export default AnalyticsReporting;

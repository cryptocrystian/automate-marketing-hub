
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Brain, 
  Search, 
  TrendingUp, 
  Eye, 
  Target, 
  Zap, 
  BarChart3, 
  MessageSquare, 
  FileText, 
  Globe, 
  Bot, 
  Lightbulb, 
  Award, 
  Activity,
  CheckCircle,
  AlertCircle,
  Clock
} from 'lucide-react';

const GEOCenter = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const aiPlatforms = [
    {
      name: 'ChatGPT',
      logo: '🤖',
      citations: 15,
      visibility: 78,
      trend: '+12%',
      color: 'green'
    },
    {
      name: 'Perplexity',
      logo: '🔍',
      citations: 22,
      visibility: 85,
      trend: '+18%',
      color: 'blue'
    },
    {
      name: 'Google SGE',
      logo: '🌐',
      citations: 8,
      visibility: 65,
      trend: '+7%',
      color: 'purple'
    },
    {
      name: 'Bing Copilot',
      logo: '💡',
      citations: 5,
      visibility: 42,
      trend: '+3%',
      color: 'orange'
    },
    {
      name: 'Claude',
      logo: '🧠',
      citations: 3,
      visibility: 35,
      trend: '+5%',
      color: 'indigo'
    }
  ];

  const geoOptimizations = [
    {
      title: 'Question-Answer Format',
      description: 'Structure content as Q&A for better AI understanding',
      status: 'implemented',
      impact: '+23% AI visibility'
    },
    {
      title: 'Schema Markup Enhancement',
      description: 'Rich snippets for better AI parsing',
      status: 'in-progress',
      impact: 'Expected +15% visibility'
    },
    {
      title: 'Citation-Worthy Content',
      description: 'Data-driven insights and statistics',
      status: 'implemented',
      impact: '+31% citation rate'
    },
    {
      title: 'Voice Search Optimization',
      description: 'Natural language patterns',
      status: 'planned',
      impact: 'Projected +20% reach'
    }
  ];

  const contentPerformance = [
    {
      title: 'AI Marketing Automation Guide',
      aiMentions: 12,
      platforms: ['ChatGPT', 'Perplexity', 'Claude'],
      score: 92,
      status: 'high-performing'
    },
    {
      title: 'Digital Transformation Trends 2024',
      aiMentions: 8,
      platforms: ['Google SGE', 'Bing Copilot'],
      score: 78,
      status: 'moderate'
    },
    {
      title: 'Customer Experience Best Practices',
      aiMentions: 15,
      platforms: ['ChatGPT', 'Perplexity'],
      score: 85,
      status: 'high-performing'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'implemented': return 'bg-green-100 text-green-800 border-green-300';
      case 'in-progress': return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'planned': return 'bg-blue-100 text-blue-800 border-blue-300';
      default: return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'implemented': return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'in-progress': return <Clock className="w-4 h-4 text-blue-600" />;
      case 'planned': return <AlertCircle className="w-4 h-4 text-blue-600" />;
      default: return <Clock className="w-4 h-4 text-gray-600" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Brain className="w-8 h-8 text-purple-600" />
          <div>
            <h1 className="text-3xl font-bold">GEO Center</h1>
            <p className="text-muted-foreground">Generative Engine Optimization - Next-Gen AI Search</p>
          </div>
          <Badge className="bg-purple-100 text-purple-800 border-purple-300">
            <Bot className="w-3 h-3 mr-1" />
            AI-First Optimization
          </Badge>
        </div>
        <div className="flex items-center space-x-2">
          <div className="text-sm text-muted-foreground">
            Tracking <span className="font-semibold text-purple-600">156 keywords</span> across
            <span className="font-semibold text-blue-600"> 5 AI platforms</span>
          </div>
          <Button className="bg-purple-600 hover:bg-purple-700">
            <Zap className="w-4 h-4 mr-2" />
            Optimize for AI Search
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="dashboard">AI Visibility Dashboard</TabsTrigger>
          <TabsTrigger value="optimization">GEO Optimization</TabsTrigger>
          <TabsTrigger value="content">Content Performance</TabsTrigger>
          <TabsTrigger value="analytics">Advanced Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard" className="space-y-6">
          {/* AI Platform Visibility Grid */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Globe className="w-5 h-5 mr-2" />
                AI Platform Visibility Overview
              </CardTitle>
              <CardDescription>Real-time monitoring of your content across major AI platforms</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {aiPlatforms.map((platform, index) => (
                  <Card key={index} className="p-4 text-center hover:shadow-md transition-shadow">
                    <div className="text-3xl mb-2">{platform.logo}</div>
                    <h3 className="font-semibold text-sm mb-2">{platform.name}</h3>
                    <div className="space-y-2">
                      <div className="text-2xl font-bold text-purple-600">{platform.citations}</div>
                      <div className="text-xs text-muted-foreground">Citations This Month</div>
                      <div className="text-sm font-medium">{platform.visibility}% Visibility</div>
                      <div className="text-xs text-green-600">{platform.trend}</div>
                    </div>
                    <Progress value={platform.visibility} className="mt-2 h-1" />
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Overall GEO Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total AI Citations</CardTitle>
                <MessageSquare className="h-4 w-4 text-purple-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-purple-600">53</div>
                <p className="text-xs text-green-600">+67% vs last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">AI Visibility Score</CardTitle>
                <Eye className="h-4 w-4 text-blue-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600">73%</div>
                <p className="text-xs text-green-600">+12% improvement</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Content Optimized</CardTitle>
                <FileText className="h-4 w-4 text-green-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">28</div>
                <p className="text-xs text-blue-600">pieces this quarter</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">GEO ROI</CardTitle>
                <TrendingUp className="h-4 w-4 text-orange-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-orange-600">+145%</div>
                <p className="text-xs text-green-600">AI traffic growth</p>
              </CardContent>
            </Card>
          </div>

          {/* AI Search Trends */}
          <Card>
            <CardHeader>
              <CardTitle>AI Search Performance Trends</CardTitle>
              <CardDescription>Monthly visibility and citation trends across AI platforms</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                <div className="text-center text-muted-foreground">
                  <BarChart3 className="w-12 h-12 mx-auto mb-2" />
                  <p>Interactive chart showing AI platform performance over time</p>
                  <p className="text-sm">Citations, visibility scores, and trend analysis</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="optimization" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="w-5 h-5 mr-2" />
                GEO Optimization Strategies
              </CardTitle>
              <CardDescription>AI-friendly content optimization techniques and implementations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {geoOptimizations.map((optimization, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        {getStatusIcon(optimization.status)}
                        <div>
                          <h4 className="font-medium">{optimization.title}</h4>
                          <p className="text-sm text-muted-foreground">{optimization.description}</p>
                        </div>
                      </div>
                      <Badge className={getStatusColor(optimization.status)}>
                        {optimization.status}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-green-600">{optimization.impact}</span>
                      <Button size="sm" variant="outline">
                        View Details
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Integration with Content & PR */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="w-5 h-5 mr-2" />
                  Content Integration
                </CardTitle>
                <CardDescription>Content pieces optimized for AI search</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="font-medium text-blue-800">Blog Posts → AI Optimization</div>
                  <div className="text-sm text-blue-600">23 pieces enhanced for AI discoverability</div>
                </div>
                <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                  <div className="font-medium text-green-800">Case Studies → Citation Format</div>
                  <div className="text-sm text-green-600">Data-rich content for AI references</div>
                </div>
                <div className="p-3 bg-purple-50 border border-purple-200 rounded-lg">
                  <div className="font-medium text-purple-800">Guides → Q&A Structure</div>
                  <div className="text-sm text-purple-600">FAQ format for better AI parsing</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="w-5 h-5 mr-2" />
                  Authority Building
                </CardTitle>
                <CardDescription>PR coverage driving AI platform citations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-orange-50 border border-orange-200 rounded-lg">
                  <div className="font-medium text-orange-800">Media Coverage → AI Citations</div>
                  <div className="text-sm text-orange-600">8 PR pieces referenced by AI platforms</div>
                </div>
                <div className="p-3 bg-indigo-50 border border-indigo-200 rounded-lg">
                  <div className="font-medium text-indigo-800">Expert Quotes → Authority Signals</div>
                  <div className="text-sm text-indigo-600">Leadership positioning in AI responses</div>
                </div>
                <div className="p-3 bg-pink-50 border border-pink-200 rounded-lg">
                  <div className="font-medium text-pink-800">Industry Reports → Data Sources</div>
                  <div className="text-sm text-pink-600">Statistics cited by AI platforms</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="content" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Content Performance in AI Platforms</CardTitle>
              <CardDescription>Track how your content performs across different AI search engines</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {contentPerformance.map((content, index) => (
                  <div key={index} className="border rounded-lg p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-lg">{content.title}</h4>
                      <div className="flex items-center space-x-2">
                        <Badge className={content.status === 'high-performing' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}>
                          {content.status}
                        </Badge>
                        <div className="text-lg font-bold text-purple-600">{content.score}/100</div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <div className="text-muted-foreground">AI Mentions</div>
                        <div className="text-2xl font-bold text-purple-600">{content.aiMentions}</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Active Platforms</div>
                        <div className="font-medium">{content.platforms.length} platforms</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Platforms</div>
                        <div className="flex flex-wrap gap-1">
                          {content.platforms.map((platform, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {platform}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between items-center pt-2 border-t">
                      <div className="text-sm text-muted-foreground">
                        Last updated: 2 days ago
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">View Details</Button>
                        <Button size="sm" variant="outline">Optimize Further</Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Activity className="w-5 h-5 mr-2" />
                  AI Search Query Analysis
                </CardTitle>
                <CardDescription>Trending queries and opportunities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-48 flex items-center justify-center bg-gray-50 rounded-lg">
                  <div className="text-center text-muted-foreground">
                    <Search className="w-8 h-8 mx-auto mb-2" />
                    <p>Query trending analysis</p>
                    <p className="text-sm">AI search patterns and opportunities</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2" />
                  Competitive AI Visibility
                </CardTitle>
                <CardDescription>How you compare to competitors in AI search</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-48 flex items-center justify-center bg-gray-50 rounded-lg">
                  <div className="text-center text-muted-foreground">
                    <TrendingUp className="w-8 h-8 mx-auto mb-2" />
                    <p>Competitive analysis</p>
                    <p className="text-sm">AI platform market share comparison</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>GEO ROI Measurement</CardTitle>
              <CardDescription>Return on investment for AI search optimization efforts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-purple-50 border border-purple-200 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">+145%</div>
                  <div className="text-sm text-muted-foreground">AI Traffic Growth</div>
                </div>
                <div className="text-center p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">67%</div>
                  <div className="text-sm text-muted-foreground">Citation Rate</div>
                </div>
                <div className="text-center p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">+89%</div>
                  <div className="text-sm text-muted-foreground">Brand Visibility</div>
                </div>
                <div className="text-center p-4 bg-orange-50 border border-orange-200 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">23:1</div>
                  <div className="text-sm text-muted-foreground">ROI Ratio</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default GEOCenter;

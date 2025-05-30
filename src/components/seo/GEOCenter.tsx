
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
  BarChart3, 
  Globe, 
  Eye, 
  Target, 
  Zap, 
  AlertTriangle,
  CheckCircle,
  ExternalLink,
  MessageSquare,
  Mic,
  FileText,
  Megaphone,
  ArrowRight,
  Plus,
  Activity,
  Radio
} from 'lucide-react';

const GEOCenter = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const aiPlatformData = [
    {
      platform: 'ChatGPT',
      logo: '🤖',
      citations: 15,
      visibility: 88,
      trend: '+12%',
      color: 'green'
    },
    {
      platform: 'Perplexity',
      logo: '🔍',
      citations: 22,
      visibility: 92,
      trend: '+18%',
      color: 'blue'
    },
    {
      platform: 'Google SGE',
      logo: '🌐',
      citations: 8,
      visibility: 76,
      trend: '+5%',
      color: 'purple'
    },
    {
      platform: 'Bing Copilot',
      logo: '💼',
      citations: 5,
      visibility: 64,
      trend: '+8%',
      color: 'orange'
    },
    {
      platform: 'Claude',
      logo: '🧠',
      citations: 3,
      visibility: 52,
      trend: '+15%',
      color: 'indigo'
    }
  ];

  const geoOptimizations = [
    {
      type: 'structure',
      title: 'Add FAQ Section',
      description: 'Include frequently asked questions to improve AI understanding',
      impact: 'High',
      aiPlatforms: ['ChatGPT', 'Perplexity'],
      status: 'recommended'
    },
    {
      type: 'schema',
      title: 'Enhanced Schema Markup',
      description: 'Implement Article and FAQPage schema for better AI parsing',
      impact: 'High',
      aiPlatforms: ['Google SGE', 'Bing Copilot'],
      status: 'in-progress'
    },
    {
      type: 'citations',
      title: 'Citation-Worthy Content',
      description: 'Add data points and statistics that AI models prefer to cite',
      impact: 'Medium',
      aiPlatforms: ['All platforms'],
      status: 'completed'
    },
    {
      type: 'voice',
      title: 'Voice Search Optimization',
      description: 'Optimize for conversational queries and voice search patterns',
      impact: 'Medium',
      aiPlatforms: ['Bing Copilot', 'Google SGE'],
      status: 'recommended'
    }
  ];

  const contentPerformance = [
    {
      title: 'AI Marketing Automation Guide',
      aiVisibility: 95,
      citations: 8,
      platforms: ['ChatGPT', 'Perplexity', 'Claude'],
      trend: 'up',
      integration: 'complete'
    },
    {
      title: 'Digital Transformation Trends 2024',
      aiVisibility: 87,
      citations: 12,
      platforms: ['Perplexity', 'Google SGE'],
      trend: 'up',
      integration: 'partial'
    },
    {
      title: 'Customer Experience Optimization',
      aiVisibility: 72,
      citations: 5,
      platforms: ['ChatGPT', 'Bing Copilot'],
      trend: 'stable',
      integration: 'opportunity'
    }
  ];

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <TrendingUp className="w-4 h-4 text-green-600" />;
      case 'down': return <TrendingUp className="w-4 h-4 text-red-600 rotate-180" />;
      default: return <Activity className="w-4 h-4 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800 border-green-300';
      case 'in-progress': return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'recommended': return 'bg-blue-100 text-blue-800 border-blue-300';
      default: return 'bg-gray-100 text-gray-800 border-gray-300';
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
            <p className="text-muted-foreground">Next-Gen AI Search Optimization</p>
          </div>
          <Badge className="bg-purple-100 text-purple-800 border-purple-300">
            <Brain className="w-3 h-3 mr-1" />
            AI-Powered
          </Badge>
        </div>
        <div className="flex items-center space-x-4">
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
          <TabsTrigger value="overview">AI Platform Visibility</TabsTrigger>
          <TabsTrigger value="optimization">GEO Optimization</TabsTrigger>
          <TabsTrigger value="performance">Content Performance</TabsTrigger>
          <TabsTrigger value="analytics">Advanced Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* AI Platform Visibility Grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {aiPlatformData.map((platform, index) => (
              <Card key={index} className="border-2 border-purple-200">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{platform.platform}</CardTitle>
                  <span className="text-2xl">{platform.logo}</span>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-purple-600">{platform.citations}</div>
                  <p className="text-xs text-muted-foreground">Citations this month</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-sm font-medium">{platform.visibility}% visibility</span>
                    <span className="text-xs text-green-600">{platform.trend}</span>
                  </div>
                  <Progress value={platform.visibility} className="mt-1 h-1" />
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Real-Time AI Monitoring */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Activity className="w-5 h-5 mr-2 text-blue-600" />
                  Real-Time AI Monitoring
                </CardTitle>
                <CardDescription>Live tracking of AI platform mentions and citations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <div>
                      <div className="font-medium">ChatGPT Citation</div>
                      <div className="text-sm text-muted-foreground">AI Marketing Guide mentioned</div>
                    </div>
                  </div>
                  <span className="text-xs text-muted-foreground">2 min ago</span>
                </div>
                
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    <div>
                      <div className="font-medium">Perplexity Reference</div>
                      <div className="text-sm text-muted-foreground">Digital transformation query</div>
                    </div>
                  </div>
                  <span className="text-xs text-muted-foreground">5 min ago</span>
                </div>

                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                    <div>
                      <div className="font-medium">Google SGE Appearance</div>
                      <div className="text-sm text-muted-foreground">Marketing automation search</div>
                    </div>
                  </div>
                  <span className="text-xs text-muted-foreground">12 min ago</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="w-5 h-5 mr-2 text-green-600" />
                  GEO Performance Summary
                </CardTitle>
                <CardDescription>Overall AI search optimization metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Overall GEO Score</span>
                      <span className="text-2xl font-bold text-purple-600">85/100</span>
                    </div>
                    <Progress value={85} className="h-2" />
                    <p className="text-xs text-muted-foreground mt-1">Excellent AI search optimization</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 border rounded">
                      <div className="text-lg font-bold text-blue-600">53</div>
                      <div className="text-xs text-muted-foreground">Total Citations</div>
                    </div>
                    <div className="text-center p-3 border rounded">
                      <div className="text-lg font-bold text-green-600">76%</div>
                      <div className="text-xs text-muted-foreground">Avg Visibility</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span>Citation Growth</span>
                    <span className="text-green-600 font-medium">+24% this month</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="optimization" className="space-y-6">
          {/* GEO Optimization Recommendations */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Zap className="w-5 h-5 mr-2 text-yellow-600" />
                GEO Optimization Recommendations
              </CardTitle>
              <CardDescription>AI-friendly content structure and schema optimizations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {geoOptimizations.map((optimization, index) => (
                  <div key={index} className="border rounded-lg p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">{optimization.title}</h4>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline">Impact: {optimization.impact}</Badge>
                        <Badge className={getStatusColor(optimization.status)}>
                          {optimization.status}
                        </Badge>
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground">{optimization.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-xs text-muted-foreground">Platforms:</span>
                        {optimization.aiPlatforms.map((platform, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {platform}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex space-x-2">
                        {optimization.status === 'recommended' && (
                          <Button size="sm" variant="outline">
                            <Plus className="w-3 h-3 mr-1" />
                            Implement
                          </Button>
                        )}
                        {optimization.status === 'completed' && (
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Cross-Pillar Integration */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="w-5 h-5 mr-2 text-blue-600" />
                  Content Integration
                </CardTitle>
                <CardDescription>GEO optimization for existing content pieces</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 border rounded-lg">
                  <div className="font-medium">AI Marketing Guide</div>
                  <div className="text-sm text-muted-foreground">Ready for FAQ section addition</div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-xs text-green-600">95% AI visibility</span>
                    <Button size="sm" variant="outline">Optimize</Button>
                  </div>
                </div>
                <div className="p-3 border rounded-lg">
                  <div className="font-medium">Digital Transformation Report</div>
                  <div className="text-sm text-muted-foreground">Needs schema markup enhancement</div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-xs text-yellow-600">87% AI visibility</span>
                    <Button size="sm" variant="outline">Optimize</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Megaphone className="w-5 h-5 mr-2 text-green-600" />
                  PR Integration
                </CardTitle>
                <CardDescription>PR coverage driving AI platform citations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 border rounded-lg">
                  <div className="font-medium">TechCrunch Coverage Impact</div>
                  <div className="text-sm text-muted-foreground">+3 new AI platform citations</div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-xs text-green-600">Citation boost: +18%</span>
                    <Button size="sm" variant="outline">View Impact</Button>
                  </div>
                </div>
                <div className="p-3 border rounded-lg">
                  <div className="font-medium">Forbes Article Mention</div>
                  <div className="text-sm text-muted-foreground">Enhanced authority signals</div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-xs text-purple-600">Authority boost: +12%</span>
                    <Button size="sm" variant="outline">View Impact</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="performance" className="space-y-6">
          {/* Content Performance in AI Responses */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="w-5 h-5 mr-2" />
                Content Performance in AI Responses
              </CardTitle>
              <CardDescription>How your content performs across different AI platforms</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {contentPerformance.map((content, index) => (
                  <div key={index} className="border rounded-lg p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">{content.title}</h4>
                      <div className="flex items-center space-x-2">
                        {getTrendIcon(content.trend)}
                        <span className="text-sm font-medium">{content.aiVisibility}% AI Visibility</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <div className="text-muted-foreground">Citations</div>
                        <div className="font-medium text-purple-600">{content.citations}</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Platforms</div>
                        <div className="font-medium">{content.platforms.length} platforms</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Integration</div>
                        <Badge variant="outline" className="text-xs">
                          {content.integration}
                        </Badge>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t">
                      <div className="flex space-x-1">
                        {content.platforms.map((platform, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {platform}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <Eye className="w-3 h-3 mr-1" />
                          View Citations
                        </Button>
                        <Button size="sm" variant="outline">
                          <Zap className="w-3 h-3 mr-1" />
                          Optimize
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          {/* Advanced GEO Analytics */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  AI Search Query Trends
                </CardTitle>
                <CardDescription>Trending queries and optimization opportunities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center p-8 border rounded-lg">
                    <div className="text-4xl font-bold text-purple-600 mb-2">+127%</div>
                    <div className="text-lg text-muted-foreground">AI Query Growth</div>
                    <div className="text-sm text-muted-foreground mt-1">vs last quarter</div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">"AI marketing automation"</span>
                      <span className="text-sm text-green-600">+45%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">"Digital transformation strategy"</span>
                      <span className="text-sm text-green-600">+32%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">"Customer experience AI"</span>
                      <span className="text-sm text-green-600">+28%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Globe className="w-5 h-5 mr-2" />
                  Competitor AI Visibility
                </CardTitle>
                <CardDescription>Your performance vs competitors in AI search</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center p-8 border rounded-lg">
                    <div className="text-4xl font-bold text-blue-600 mb-2">#2</div>
                    <div className="text-lg text-muted-foreground">Industry Ranking</div>
                    <div className="text-sm text-muted-foreground mt-1">AI visibility score</div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Your Company</span>
                      <span className="text-sm font-medium text-blue-600">85/100</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Competitor A</span>
                      <span className="text-sm text-muted-foreground">89/100</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Competitor B</span>
                      <span className="text-sm text-muted-foreground">78/100</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Competitor C</span>
                      <span className="text-sm text-muted-foreground">72/100</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* ROI Measurement */}
          <Card>
            <CardHeader>
              <CardTitle>GEO ROI Measurement</CardTitle>
              <CardDescription>Return on investment for AI optimization efforts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-2xl font-bold text-green-600">312%</div>
                  <div className="text-sm text-muted-foreground">ROI Increase</div>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">$45K</div>
                  <div className="text-sm text-muted-foreground">Attribution Value</div>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">68%</div>
                  <div className="text-sm text-muted-foreground">Citation Rate</div>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">2.3M</div>
                  <div className="text-sm text-muted-foreground">AI Impressions</div>
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

import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import KeywordResearch from '@/components/seo/KeywordResearch';
import ContentOptimization from '@/components/seo/ContentOptimization';
import GEOCenter from '@/components/seo/GEOCenter';
import { 
  TrendingUp, 
  Brain, 
  Search, 
  Link2, 
  BarChart3, 
  Target, 
  Zap, 
  ArrowRight,
  Eye,
  Users,
  FileText,
  ExternalLink,
  Plus,
  Download,
  RefreshCw,
  CheckCircle,
  AlertTriangle,
  Activity,
  Globe,
  MessageSquare,
  Calendar,
  Filter,
  ArrowUpRight,
  TrendingDown,
  Radio,
  Megaphone
} from 'lucide-react';

const SEODashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Cross-pillar performance metrics
  const crossPillarMetrics = {
    unifiedReach: { value: '2.8M', breakdown: 'SEO: 1.2M | PR: 850K | Content: 750K' },
    authorityScore: { value: 87, components: 'Domain: 85 | PR Links: 92 | Content: 84' },
    aiVisibility: { value: 82, platforms: 'ChatGPT: 85% | Perplexity: 82% | SGE: 79%' },
    contentAmplification: { value: 23, success: 89 },
    integratedROI: { value: '$445K', attribution: 'SEO: 45% | PR: 35% | Content: 20%' }
  };

  const geoMetrics = {
    chatgptCitations: 15,
    perplexityMentions: 22,
    sgeAppearances: 8,
    geoScore: 85
  };

  const contentMatrix = [
    {
      id: 1,
      title: 'AI Marketing Automation Guide',
      seoRank: 3,
      prPickup: 8,
      socialShares: 342,
      integration: 'complete',
      automateStep: 7,
      status: 'amplifying'
    },
    {
      id: 2,
      title: 'Future of Digital Transformation',
      seoRank: 1,
      prPickup: 12,
      socialShares: 589,
      integration: 'partial',
      automateStep: 5,
      status: 'optimizing'
    },
    {
      id: 3,
      title: 'Customer Experience Innovation',
      seoRank: 7,
      prPickup: 4,
      socialShares: 156,
      integration: 'pending',
      automateStep: 3,
      status: 'ready'
    }
  ];

  const integrationFeed = [
    {
      id: 1,
      type: 'content-published',
      message: 'AI Marketing Guide published → SEO tracking initiated',
      timestamp: '2 hours ago',
      impact: 'positive'
    },
    {
      id: 2,
      type: 'pr-coverage',
      message: 'TechCrunch coverage received → 3 new backlinks acquired',
      timestamp: '4 hours ago',
      impact: 'positive'
    },
    {
      id: 3,
      type: 'seo-improvement',
      message: 'Page speed optimization → Content update recommended',
      timestamp: '6 hours ago',
      impact: 'opportunity'
    }
  ];

  const optimizationRecommendations = [
    {
      type: 'content-to-pr',
      title: 'Amplify "Digital Transformation" content',
      description: 'High-performing content ready for PR outreach',
      impact: 'High',
      effort: 'Medium'
    },
    {
      type: 'pr-to-seo',
      title: 'Leverage recent Forbes coverage',
      description: 'Create supporting content for new backlinks',
      impact: 'High',
      effort: 'Low'
    },
    {
      type: 'seo-gap',
      title: 'Target "marketing automation" keywords',
      description: 'Content + PR opportunity for untapped keywords',
      impact: 'Medium',
      effort: 'High'
    }
  ];

  const getIntegrationColor = (integration: string) => {
    switch (integration) {
      case 'complete': return 'bg-green-100 text-green-800 border-green-300';
      case 'partial': return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'pending': return 'bg-gray-100 text-gray-800 border-gray-300';
      default: return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'amplifying': return <TrendingUp className="w-4 h-4 text-green-600" />;
      case 'optimizing': return <RefreshCw className="w-4 h-4 text-blue-600" />;
      case 'ready': return <AlertTriangle className="w-4 h-4 text-orange-600" />;
      default: return <Activity className="w-4 h-4 text-gray-600" />;
    }
  };

  return (
    <Layout>
      <div className="space-y-6">
        {/* Integrated Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <TrendingUp className="w-8 h-8 text-blue-600" />
            <div>
              <h1 className="text-3xl font-bold">SEO Intelligence</h1>
              <p className="text-muted-foreground">Unified marketing intelligence across Content, PR, and SEO</p>
            </div>
            <div className="flex space-x-2">
              <Badge className="bg-purple-100 text-purple-800 border-purple-300">
                <Brain className="w-3 h-3 mr-1" />
                AI-Enhanced
              </Badge>
              <Badge className="bg-blue-100 text-blue-800 border-blue-300">
                <Search className="w-3 h-3 mr-1" />
                GEO-Optimized
              </Badge>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="text-sm text-muted-foreground">
              Connected to <span className="font-semibold text-green-600">23 Content Pieces</span>, 
              <span className="font-semibold text-blue-600"> 8 PR Campaigns</span>
            </div>
            <Button className="bg-purple-600 hover:bg-purple-700">
              <Zap className="w-4 h-4 mr-2" />
              Optimize Content
            </Button>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-8">
            <TabsTrigger value="overview">Unified Overview</TabsTrigger>
            <TabsTrigger value="keyword-research">Keyword Research</TabsTrigger>
            <TabsTrigger value="content-optimization">Content Optimization</TabsTrigger>
            <TabsTrigger value="geo">GEO Center</TabsTrigger>
            <TabsTrigger value="content-matrix">Content Matrix</TabsTrigger>
            <TabsTrigger value="authority">Authority Building</TabsTrigger>
            <TabsTrigger value="analytics">Integrated Analytics</TabsTrigger>
            <TabsTrigger value="workflow">Workflow</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Cross-Pillar Performance Overview */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <Card className="border-2 border-blue-200">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Unified Reach</CardTitle>
                  <Eye className="h-4 w-4 text-blue-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-blue-600">{crossPillarMetrics.unifiedReach.value}</div>
                  <p className="text-xs text-muted-foreground">{crossPillarMetrics.unifiedReach.breakdown}</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-200">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Authority Score</CardTitle>
                  <Link2 className="h-4 w-4 text-green-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">{crossPillarMetrics.authorityScore.value}/100</div>
                  <p className="text-xs text-muted-foreground">{crossPillarMetrics.authorityScore.components}</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-purple-200">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">AI Visibility</CardTitle>
                  <Brain className="h-4 w-4 text-purple-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-purple-600">{crossPillarMetrics.aiVisibility.value}%</div>
                  <p className="text-xs text-muted-foreground">{crossPillarMetrics.aiVisibility.platforms}</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-orange-200">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Content Amplification</CardTitle>
                  <Megaphone className="h-4 w-4 text-orange-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-orange-600">{crossPillarMetrics.contentAmplification.value}</div>
                  <p className="text-xs text-muted-foreground">{crossPillarMetrics.contentAmplification.success}% success rate</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-emerald-200">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Integrated ROI</CardTitle>
                  <BarChart3 className="h-4 w-4 text-emerald-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-emerald-600">{crossPillarMetrics.integratedROI.value}</div>
                  <p className="text-xs text-muted-foreground">{crossPillarMetrics.integratedROI.attribution}</p>
                </CardContent>
              </Card>
            </div>

            {/* Main Dashboard Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Smart Optimization Recommendations */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Brain className="w-5 h-5 mr-2 text-purple-600" />
                    Smart Optimization Recommendations
                  </CardTitle>
                  <CardDescription>AI-powered cross-pillar opportunities</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {optimizationRecommendations.map((rec, index) => (
                    <div key={index} className="border rounded-lg p-4 space-y-2">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">{rec.title}</h4>
                        <div className="flex space-x-2">
                          <Badge variant="outline" className="text-xs">
                            Impact: {rec.impact}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            Effort: {rec.effort}
                          </Badge>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">{rec.description}</p>
                      <Button size="sm" variant="outline">
                        <ArrowRight className="w-3 h-3 mr-1" />
                        Execute
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Real-Time Integration Feed */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Activity className="w-5 h-5 mr-2 text-blue-600" />
                    Real-Time Integration Feed
                  </CardTitle>
                  <CardDescription>Cross-pillar activities and opportunities</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {integrationFeed.map((item) => (
                    <div key={item.id} className="flex items-start space-x-3 p-3 border rounded-lg">
                      <div className={`w-2 h-2 rounded-full mt-2 ${
                        item.impact === 'positive' ? 'bg-green-500' : 'bg-orange-500'
                      }`} />
                      <div className="flex-1">
                        <p className="text-sm">{item.message}</p>
                        <p className="text-xs text-muted-foreground">{item.timestamp}</p>
                      </div>
                      <Button size="sm" variant="ghost">
                        <ExternalLink className="w-3 h-3" />
                      </Button>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full" size="sm">
                    View All Activities
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions - Integrated Workflow */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions - Integrated Workflow</CardTitle>
                <CardDescription>One-click actions across Content, PR, and SEO</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                  <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
                    <Zap className="w-5 h-5" />
                    <span className="text-xs">Optimize Content</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
                    <Target className="w-5 h-5" />
                    <span className="text-xs">SEO-PR Campaign</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
                    <FileText className="w-5 h-5" />
                    <span className="text-xs">Content Brief</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
                    <Link2 className="w-5 h-5" />
                    <span className="text-xs">Link Opportunities</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
                    <Download className="w-5 h-5" />
                    <span className="text-xs">Integrated Report</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="keyword-research">
            <KeywordResearch />
          </TabsContent>

          <TabsContent value="content-optimization">
            <ContentOptimization />
          </TabsContent>

          <TabsContent value="geo">
            <GEOCenter />
          </TabsContent>

          <TabsContent value="content-matrix" className="space-y-6">
            {/* Unified Content Performance Matrix */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2" />
                  Unified Content Performance Matrix
                </CardTitle>
                <CardDescription>Content performance across SEO, PR, and social channels</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {contentMatrix.map((content) => (
                    <div key={content.id} className="border rounded-lg p-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">{content.title}</h4>
                        <div className="flex items-center space-x-2">
                          <Badge className={getIntegrationColor(content.integration)}>
                            {content.integration}
                          </Badge>
                          {getStatusIcon(content.status)}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-4 gap-4 text-sm">
                        <div>
                          <div className="text-muted-foreground">SEO Rank</div>
                          <div className="font-medium">#{content.seoRank}</div>
                        </div>
                        <div>
                          <div className="text-muted-foreground">PR Pickup</div>
                          <div className="font-medium">{content.prPickup} outlets</div>
                        </div>
                        <div>
                          <div className="text-muted-foreground">Social Shares</div>
                          <div className="font-medium">{content.socialShares}</div>
                        </div>
                        <div>
                          <div className="text-muted-foreground">AUTOMATE Step</div>
                          <div className="font-medium">{content.automateStep}/8</div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t">
                        <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                          <FileText className="w-3 h-3" />
                          <ArrowRight className="w-3 h-3" />
                          <Megaphone className="w-3 h-3" />
                          <ArrowRight className="w-3 h-3" />
                          <TrendingUp className="w-3 h-3" />
                          <span>Integration Flow</span>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            Optimize
                          </Button>
                          <Button size="sm" variant="outline">
                            Amplify
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="authority" className="space-y-6">
            {/* Authority Building Dashboard */}
            <Card>
              <CardHeader>
                <CardTitle>Authority Building Dashboard</CardTitle>
                <CardDescription>Cross-pillar authority development and measurement</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center p-4 border rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">23</div>
                      <div className="text-sm text-muted-foreground">PR-Driven Backlinks</div>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <div className="text-2xl font-bold text-green-600">18</div>
                      <div className="text-sm text-muted-foreground">Content-Based Links</div>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">87</div>
                      <div className="text-sm text-muted-foreground">Authority Score</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            {/* Integrated Analytics & Attribution */}
            <Card>
              <CardHeader>
                <CardTitle>Integrated Analytics & Attribution</CardTitle>
                <CardDescription>Unified performance measurement across all marketing pillars</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="text-center p-8 border rounded-lg">
                    <div className="text-4xl font-bold text-blue-600 mb-2">$445K</div>
                    <div className="text-lg text-muted-foreground">Total Integrated ROI</div>
                    <div className="text-sm text-muted-foreground mt-2">
                      SEO: 45% • PR: 35% • Content: 20%
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="workflow" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Integrated SEO Workflow</CardTitle>
                <CardDescription>Cross-pillar workflow management and automation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="text-center p-8 border rounded-lg">
                    <div className="text-2xl font-bold text-blue-600 mb-2">8 Active Workflows</div>
                    <div className="text-lg text-muted-foreground">Content → PR → SEO Integration</div>
                    <div className="text-sm text-muted-foreground mt-2">
                      Average completion time: 12 days
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default SEODashboard;

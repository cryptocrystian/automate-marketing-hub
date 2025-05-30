
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Search, 
  Brain, 
  Target, 
  TrendingUp, 
  Eye, 
  FileText, 
  Megaphone,
  ArrowRight,
  ExternalLink,
  Plus,
  Filter,
  BarChart3,
  Users,
  Globe,
  Lightbulb
} from 'lucide-react';

const KeywordResearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('discovery');

  const keywordData = [
    {
      keyword: 'AI marketing automation',
      volume: 12000,
      difficulty: 65,
      intent: 'commercial',
      contentStatus: 'published',
      prPotential: 'high',
      aiVisibility: 88,
      cpcValue: '$4.50'
    },
    {
      keyword: 'digital transformation strategy',
      volume: 8500,
      difficulty: 72,
      intent: 'informational',
      contentStatus: 'in-progress',
      prPotential: 'high',
      aiVisibility: 92,
      cpcValue: '$6.20'
    },
    {
      keyword: 'customer experience optimization',
      volume: 6200,
      difficulty: 58,
      intent: 'commercial',
      contentStatus: 'opportunity',
      prPotential: 'medium',
      aiVisibility: 76,
      cpcValue: '$3.80'
    },
    {
      keyword: 'marketing automation ROI',
      volume: 4100,
      difficulty: 45,
      intent: 'transactional',
      contentStatus: 'published',
      prPotential: 'medium',
      aiVisibility: 82,
      cpcValue: '$5.10'
    }
  ];

  const topicClusters = [
    {
      topic: 'AI Marketing',
      keywords: 15,
      contentPieces: 8,
      prCoverage: 3,
      seoRanking: 'top-10',
      automateStep: 6
    },
    {
      topic: 'Digital Transformation',
      keywords: 22,
      contentPieces: 12,
      prCoverage: 5,
      seoRanking: 'top-5',
      automateStep: 7
    },
    {
      topic: 'Customer Experience',
      keywords: 18,
      contentPieces: 6,
      prCoverage: 2,
      seoRanking: 'top-20',
      automateStep: 4
    }
  ];

  const getIntentColor = (intent: string) => {
    switch (intent) {
      case 'commercial': return 'bg-green-100 text-green-800 border-green-300';
      case 'informational': return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'transactional': return 'bg-purple-100 text-purple-800 border-purple-300';
      case 'navigational': return 'bg-orange-100 text-orange-800 border-orange-300';
      default: return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const getContentStatusColor = (status: string) => {
    switch (status) {
      case 'published': return 'bg-green-100 text-green-800 border-green-300';
      case 'in-progress': return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'opportunity': return 'bg-blue-100 text-blue-800 border-blue-300';
      default: return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const getPrPotentialColor = (potential: string) => {
    switch (potential) {
      case 'high': return 'bg-green-100 text-green-800 border-green-300';
      case 'medium': return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'low': return 'bg-gray-100 text-gray-800 border-gray-300';
      default: return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Search className="w-8 h-8 text-blue-600" />
          <div>
            <h1 className="text-3xl font-bold">Keyword Research & Strategy</h1>
            <p className="text-muted-foreground">AI-powered keyword intelligence with cross-pillar integration</p>
          </div>
          <Badge className="bg-purple-100 text-purple-800 border-purple-300">
            <Brain className="w-3 h-3 mr-1" />
            AI-Enhanced
          </Badge>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-sm text-muted-foreground">
            Analyzing <span className="font-semibold text-blue-600">23 Content Pieces</span> + 
            <span className="font-semibold text-green-600"> 8 PR Campaigns</span>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <FileText className="w-4 h-4 mr-2" />
            Generate Content Brief
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="discovery">Smart Discovery</TabsTrigger>
          <TabsTrigger value="matrix">Keyword Matrix</TabsTrigger>
          <TabsTrigger value="clusters">Topic Clusters</TabsTrigger>
          <TabsTrigger value="opportunities">Opportunities</TabsTrigger>
        </TabsList>

        <TabsContent value="discovery" className="space-y-6">
          {/* Smart Keyword Discovery */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Brain className="w-5 h-5 mr-2 text-purple-600" />
                Smart Keyword Discovery
              </CardTitle>
              <CardDescription>AI-powered keyword research with intent clustering and cross-pillar opportunities</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex space-x-2">
                <Input 
                  placeholder="Enter topic or analyze existing content..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1"
                />
                <Button>
                  <Search className="w-4 h-4 mr-2" />
                  Analyze
                </Button>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Card className="p-4 text-center border-blue-200">
                  <div className="text-2xl font-bold text-blue-600">1,247</div>
                  <div className="text-sm text-muted-foreground">Informational</div>
                </Card>
                <Card className="p-4 text-center border-green-200">
                  <div className="text-2xl font-bold text-green-600">892</div>
                  <div className="text-sm text-muted-foreground">Commercial</div>
                </Card>
                <Card className="p-4 text-center border-purple-200">
                  <div className="text-2xl font-bold text-purple-600">456</div>
                  <div className="text-sm text-muted-foreground">Transactional</div>
                </Card>
                <Card className="p-4 text-center border-orange-200">
                  <div className="text-2xl font-bold text-orange-600">234</div>
                  <div className="text-sm text-muted-foreground">Navigational</div>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="matrix" className="space-y-6">
          {/* Keyword Matrix */}
          <Card>
            <CardHeader>
              <CardTitle>Keyword Matrix with Integration</CardTitle>
              <CardDescription>Complete keyword analysis with content status, PR potential, and AI visibility</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {keywordData.map((keyword, index) => (
                  <div key={index} className="border rounded-lg p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-lg">{keyword.keyword}</h4>
                      <div className="flex items-center space-x-2">
                        <Badge className={getContentStatusColor(keyword.contentStatus)}>
                          {keyword.contentStatus}
                        </Badge>
                        <Badge className={getPrPotentialColor(keyword.prPotential)}>
                          PR: {keyword.prPotential}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-6 gap-4 text-sm">
                      <div>
                        <div className="text-muted-foreground">Volume</div>
                        <div className="font-medium">{keyword.volume.toLocaleString()}</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Difficulty</div>
                        <div className="font-medium">{keyword.difficulty}%</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Intent</div>
                        <Badge className={getIntentColor(keyword.intent)} variant="outline">
                          {keyword.intent}
                        </Badge>
                      </div>
                      <div>
                        <div className="text-muted-foreground">AI Visibility</div>
                        <div className="font-medium text-purple-600">{keyword.aiVisibility}%</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">CPC</div>
                        <div className="font-medium">{keyword.cpcValue}</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Actions</div>
                        <div className="flex space-x-1">
                          <Button size="sm" variant="outline">
                            <FileText className="w-3 h-3" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Megaphone className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t">
                      <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                        <FileText className="w-3 h-3" />
                        <ArrowRight className="w-3 h-3" />
                        <Megaphone className="w-3 h-3" />
                        <ArrowRight className="w-3 h-3" />
                        <TrendingUp className="w-3 h-3" />
                        <span>Cross-Pillar Flow</span>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">Create Content</Button>
                        <Button size="sm" variant="outline">PR Outreach</Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="clusters" className="space-y-6">
          {/* Topic Clusters */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="w-5 h-5 mr-2" />
                Topic Cluster Visualization
              </CardTitle>
              <CardDescription>Hub and spoke model showing content relationships and cross-pillar integration</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topicClusters.map((cluster, index) => (
                  <div key={index} className="border rounded-lg p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold">{cluster.topic}</h3>
                      <Badge className="bg-blue-100 text-blue-800 border-blue-300">
                        AUTOMATE Step {cluster.automateStep}/8
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-5 gap-4">
                      <div className="text-center p-3 border rounded">
                        <div className="text-2xl font-bold text-blue-600">{cluster.keywords}</div>
                        <div className="text-sm text-muted-foreground">Keywords</div>
                      </div>
                      <div className="text-center p-3 border rounded">
                        <div className="text-2xl font-bold text-green-600">{cluster.contentPieces}</div>
                        <div className="text-sm text-muted-foreground">Content</div>
                      </div>
                      <div className="text-center p-3 border rounded">
                        <div className="text-2xl font-bold text-purple-600">{cluster.prCoverage}</div>
                        <div className="text-sm text-muted-foreground">PR Coverage</div>
                      </div>
                      <div className="text-center p-3 border rounded">
                        <div className="text-2xl font-bold text-orange-600">{cluster.seoRanking}</div>
                        <div className="text-sm text-muted-foreground">SEO Ranking</div>
                      </div>
                      <div className="text-center p-3 border rounded">
                        <Button size="sm" className="w-full">
                          <Plus className="w-3 h-3 mr-1" />
                          Expand
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span>AI Visibility: 85%</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <BarChart3 className="w-4 h-4" />
                          <span>Growth: +12%</span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">View Cluster</Button>
                        <Button size="sm" variant="outline">Optimize</Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="opportunities" className="space-y-6">
          {/* Cross-Pillar Opportunities */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Lightbulb className="w-5 h-5 mr-2 text-blue-600" />
                  Content Opportunities
                </CardTitle>
                <CardDescription>Keyword gaps that need content creation</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 border rounded-lg">
                  <div className="font-medium">AI-powered customer segmentation</div>
                  <div className="text-sm text-muted-foreground">High volume, low competition</div>
                  <div className="flex space-x-2 mt-2">
                    <Badge variant="outline">8.5K volume</Badge>
                    <Badge variant="outline">32% difficulty</Badge>
                  </div>
                </div>
                <div className="p-3 border rounded-lg">
                  <div className="font-medium">Marketing automation best practices</div>
                  <div className="text-sm text-muted-foreground">Ready for PR amplification</div>
                  <div className="flex space-x-2 mt-2">
                    <Badge variant="outline">6.2K volume</Badge>
                    <Badge variant="outline">28% difficulty</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Megaphone className="w-5 h-5 mr-2 text-green-600" />
                  PR Opportunities
                </CardTitle>
                <CardDescription>Content ready for media outreach</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 border rounded-lg">
                  <div className="font-medium">Digital Transformation Report</div>
                  <div className="text-sm text-muted-foreground">High media interest, trending topic</div>
                  <div className="flex space-x-2 mt-2">
                    <Badge variant="outline">Tech beat</Badge>
                    <Badge variant="outline">85% pickup rate</Badge>
                  </div>
                </div>
                <div className="p-3 border rounded-lg">
                  <div className="font-medium">AI Marketing Study</div>
                  <div className="text-sm text-muted-foreground">Data-driven story angle</div>
                  <div className="flex space-x-2 mt-2">
                    <Badge variant="outline">Marketing beat</Badge>
                    <Badge variant="outline">78% pickup rate</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default KeywordResearch;

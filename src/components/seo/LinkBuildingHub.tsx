
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { 
  ExternalLink, 
  TrendingUp, 
  Users, 
  Star, 
  Target,
  Brain,
  Globe,
  MessageSquare,
  FileText,
  Search,
  Settings,
  Activity,
  Link,
  Award,
  Zap,
  BarChart3
} from 'lucide-react';

const LinkBuildingHub = () => {
  const [authorityScore] = useState(87);
  const [activeTab, setActiveTab] = useState('dashboard');

  const linkMetrics = [
    { label: 'PR Backlinks', value: 156, growth: '+23%', source: 'Media Coverage' },
    { label: 'Content Links', value: 89, growth: '+15%', source: 'Organic Linking' },
    { label: 'Outreach Links', value: 45, growth: '+8%', source: 'Direct Outreach' },
    { label: 'Guest Posts', value: 32, growth: '+12%', source: 'Content Collaboration' }
  ];

  const linkAcquisitionSources = [
    {
      source: 'PR Media Coverage',
      links: 156,
      quality: 'High',
      trend: 'up',
      integration: 'PR Pillar',
      recentWins: ['TechCrunch feature', 'Forbes mention', 'VentureBeat interview']
    },
    {
      source: 'Content-Based Earning',
      links: 89,
      quality: 'High',
      trend: 'up',
      integration: 'Content Pillar',
      recentWins: ['Tutorial series links', 'Resource page mentions', 'Industry roundups']
    },
    {
      source: 'Traditional Outreach',
      links: 45,
      quality: 'Medium',
      trend: 'stable',
      integration: 'SEO Direct',
      recentWins: ['Partnership mentions', 'Directory listings', 'Resource links']
    },
    {
      source: 'Guest Content',
      links: 32,
      quality: 'High',
      trend: 'up',
      integration: 'Content + PR',
      recentWins: ['Industry blog posts', 'Podcast appearances', 'Expert roundtables']
    }
  ];

  const smartProspects = [
    {
      name: 'Sarah Mitchell',
      outlet: 'TechCrunch',
      type: 'Journalist',
      relationship: 9.2,
      linkPotential: 'High',
      prIntegration: true,
      lastContact: '2 weeks ago',
      opportunities: ['AI feature story', 'Funding announcement coverage']
    },
    {
      name: 'James Wilson',
      outlet: 'Forbes',
      type: 'Journalist',
      relationship: 7.8,
      linkPotential: 'High',
      prIntegration: true,
      lastContact: '1 month ago',
      opportunities: ['Enterprise tech roundup', 'Industry expert quote']
    },
    {
      name: 'DevTech Weekly',
      outlet: 'Industry Newsletter',
      type: 'Content Curator',
      relationship: 6.5,
      linkPotential: 'Medium',
      prIntegration: false,
      lastContact: '3 weeks ago',
      opportunities: ['Tool review', 'Resource mention']
    },
    {
      name: 'Maria Rodriguez',
      outlet: 'VentureBeat',
      type: 'Journalist',
      relationship: 8.9,
      linkPotential: 'High',
      prIntegration: true,
      lastContact: '1 week ago',
      opportunities: ['Startup spotlight', 'Technology trend piece']
    }
  ];

  const authorityBuilding = [
    {
      strategy: 'PR-Driven Authority',
      description: 'Leverage media coverage for high-authority backlinks',
      progress: 78,
      impact: 'High',
      integration: 'PR + SEO',
      nextActions: ['Pitch upcoming product launch', 'Follow up on recent coverage']
    },
    {
      strategy: 'Content Link Earning',
      description: 'Create linkable assets that naturally attract backlinks',
      progress: 65,
      impact: 'High',
      integration: 'Content + SEO',
      nextActions: ['Publish industry research', 'Update resource guides']
    },
    {
      strategy: 'Relationship Building',
      description: 'Nurture journalist and influencer relationships',
      progress: 82,
      impact: 'Medium',
      integration: 'PR + Outreach',
      nextActions: ['Schedule quarterly check-ins', 'Share exclusive insights']
    },
    {
      strategy: 'Guest Collaboration',
      description: 'Strategic content partnerships for mutual benefit',
      progress: 56,
      impact: 'Medium',
      integration: 'Content + PR',
      nextActions: ['Identify collaboration opportunities', 'Propose guest content']
    }
  ];

  const crossPillarAttribution = [
    {
      pillar: 'PR Coverage',
      links: 156,
      authorityImpact: '+23 points',
      trafficBoost: '+45%',
      integration: 'Direct media backlinks from coverage'
    },
    {
      pillar: 'Content Marketing',
      links: 89,
      authorityImpact: '+18 points',
      trafficBoost: '+32%',
      integration: 'Organic links from valuable content'
    },
    {
      pillar: 'SEO Outreach',
      links: 77,
      authorityImpact: '+12 points',
      trafficBoost: '+28%',
      integration: 'Traditional link building campaigns'
    }
  ];

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <TrendingUp className="w-4 h-4 text-green-600" />;
      case 'down': return <TrendingUp className="w-4 h-4 text-red-600 rotate-180" />;
      default: return <Activity className="w-4 h-4 text-blue-600" />;
    }
  };

  const getQualityColor = (quality: string) => {
    switch (quality) {
      case 'High': return 'bg-green-600 text-white';
      case 'Medium': return 'bg-blue-600 text-white';
      case 'Low': return 'bg-gray-600 text-white';
      default: return 'bg-slate-400 text-white';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <ExternalLink className="w-8 h-8 text-blue-600" />
          <div>
            <h1 className="text-3xl font-bold">Link Building & Authority Management</h1>
            <p className="text-muted-foreground">Integrated authority building across PR, Content, and SEO</p>
          </div>
          <Badge className="bg-purple-100 text-purple-800 border-purple-300">
            <Brain className="w-3 h-3 mr-1" />
            Smart Prospects
          </Badge>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Target className="w-4 h-4 mr-2" />
          Launch Link Campaign
        </Button>
      </div>

      {/* Authority Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-2 border-purple-200 bg-purple-50">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center">
              <Award className="w-5 h-5 mr-2 text-purple-600" />
              Authority Score
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <div className="text-3xl font-bold text-purple-600">{authorityScore}</div>
              <div className="text-sm text-purple-600">/100</div>
            </div>
            <div className="text-xs text-purple-600 mt-1">Domain + PR Authority</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Integration Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-1 text-sm">
              <div>156 PR Backlinks</div>
              <div>89 Content Links</div>
              <div>45 Outreach Links</div>
            </div>
            <Badge className="bg-green-600 text-white text-xs mt-2">
              Cross-Pillar Growth
            </Badge>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Authority Growth</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-green-600" />
              <span className="text-lg font-semibold text-green-600">+23 points</span>
            </div>
            <div className="text-xs text-slate-500 mt-1">This quarter</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Link Velocity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <Zap className="w-5 h-5 text-blue-600" />
              <span className="text-lg font-semibold">47</span>
            </div>
            <div className="text-xs text-slate-500 mt-1">New links this month</div>
          </CardContent>
        </Card>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="dashboard">Overview</TabsTrigger>
          <TabsTrigger value="prospects">Smart Prospects</TabsTrigger>
          <TabsTrigger value="attribution">Cross-Pillar Attribution</TabsTrigger>
          <TabsTrigger value="workflows">Authority Workflows</TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard" className="space-y-6">
          {/* Link Acquisition Sources */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Link className="w-5 h-5 mr-2 text-blue-600" />
                Integrated Link Acquisition
              </CardTitle>
              <CardDescription>Multi-channel link building with cross-pillar attribution</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {linkAcquisitionSources.map((source, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h4 className="font-medium">{source.source}</h4>
                        <Badge className={getQualityColor(source.quality)}>
                          {source.quality} Quality
                        </Badge>
                        <Badge className="bg-purple-100 text-purple-800 text-xs">
                          {source.integration}
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-slate-600 mb-2">
                        <span>{source.links} links acquired</span>
                        <span>•</span>
                        <div className="flex items-center space-x-1">
                          {getTrendIcon(source.trend)}
                          <span>Trending {source.trend}</span>
                        </div>
                      </div>
                      <div className="text-xs text-slate-500">
                        Recent wins: {source.recentWins.join(', ')}
                      </div>
                    </div>
                    <Button size="sm" variant="outline">
                      View Details
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="prospects" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Brain className="w-5 h-5 mr-2 text-purple-600" />
                Smart Prospect Intelligence
              </CardTitle>
              <CardDescription>AI-powered prospects with Media Database integration and relationship scoring</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {smartProspects.map((prospect, index) => (
                  <div key={index} className="flex items-start justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <Users className="w-4 h-4 text-blue-600" />
                        <h4 className="font-medium">{prospect.name}</h4>
                        <Badge variant="outline" className="text-xs">
                          {prospect.outlet}
                        </Badge>
                        {prospect.prIntegration && (
                          <Badge className="bg-purple-100 text-purple-800 text-xs">
                            PR Relationship
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-slate-600 mb-2">
                        <div className="flex items-center space-x-1">
                          <Star className="w-3 h-3 text-blue-500 fill-current" />
                          <span>{prospect.relationship} relationship score</span>
                        </div>
                        <span>•</span>
                        <span>{prospect.linkPotential} link potential</span>
                        <span>•</span>
                        <span>Last contact: {prospect.lastContact}</span>
                      </div>
                      <div className="text-xs text-slate-500">
                        Opportunities: {prospect.opportunities.join(', ')}
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        Outreach
                      </Button>
                      <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                        AI Personalize
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="attribution" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="w-5 h-5 mr-2 text-green-600" />
                Cross-Pillar Authority Attribution
              </CardTitle>
              <CardDescription>Authority building impact across PR, Content, and SEO pillars</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {crossPillarAttribution.map((pillar, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium mb-2">{pillar.pillar}</h4>
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <span className="text-slate-500">Links: </span>
                          <span className="font-medium">{pillar.links}</span>
                        </div>
                        <div>
                          <span className="text-slate-500">Authority Impact: </span>
                          <span className="font-medium text-green-600">{pillar.authorityImpact}</span>
                        </div>
                        <div>
                          <span className="text-slate-500">Traffic Boost: </span>
                          <span className="font-medium text-blue-600">{pillar.trafficBoost}</span>
                        </div>
                      </div>
                      <div className="text-xs text-slate-500 mt-2">
                        {pillar.integration}
                      </div>
                    </div>
                    <Button size="sm" variant="outline">
                      Deep Dive
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="workflows" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="w-5 h-5 mr-2 text-purple-600" />
                Authority Building Workflows
              </CardTitle>
              <CardDescription>AUTOMATE methodology for integrated link building strategies</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {authorityBuilding.map((strategy, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h4 className="font-medium">{strategy.strategy}</h4>
                        <Badge className={strategy.impact === 'High' ? 'bg-green-600 text-white' : 'bg-blue-600 text-white'}>
                          {strategy.impact} Impact
                        </Badge>
                        <Badge className="bg-purple-100 text-purple-800 text-xs">
                          {strategy.integration}
                        </Badge>
                      </div>
                      <p className="text-sm text-slate-600 mb-3">{strategy.description}</p>
                      <div className="flex items-center space-x-4 mb-2">
                        <div className="text-sm text-slate-500">Progress:</div>
                        <Progress value={strategy.progress} className="flex-1 max-w-40" />
                        <span className="text-sm font-medium">{strategy.progress}%</span>
                      </div>
                      <div className="text-xs text-slate-500">
                        Next: {strategy.nextActions.join(', ')}
                      </div>
                    </div>
                    <Button size="sm" variant="outline">
                      <Settings className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Quick Actions Panel */}
      <Card className="border-purple-200 bg-purple-50">
        <CardHeader>
          <CardTitle className="text-purple-800">Authority Building Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            <Button variant="outline" size="sm" className="border-purple-300 hover:bg-purple-100">
              <FileText className="w-4 h-4 mr-2" />
              Optimize Content for SEO
            </Button>
            <Button variant="outline" size="sm" className="border-purple-300 hover:bg-purple-100">
              <Target className="w-4 h-4 mr-2" />
              Create PR-SEO Campaign
            </Button>
            <Button variant="outline" size="sm" className="border-purple-300 hover:bg-purple-100">
              <TrendingUp className="w-4 h-4 mr-2" />
              Generate Authority Report
            </Button>
            <Button variant="outline" size="sm" className="border-purple-300 hover:bg-purple-100">
              <Search className="w-4 h-4 mr-2" />
              Find Content Gaps
            </Button>
            <Button variant="outline" size="sm" className="border-purple-300 hover:bg-purple-100">
              <ExternalLink className="w-4 h-4 mr-2" />
              Export Analytics
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LinkBuildingHub;


import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { 
  BarChart3, 
  TrendingUp, 
  Activity, 
  Target, 
  Users,
  Globe,
  Brain,
  Zap,
  DollarSign,
  FileText,
  Search,
  ExternalLink,
  Eye,
  MousePointer,
  Award,
  Calendar,
  Settings,
  Download,
  Share,
  AlertCircle,
  CheckCircle,
  Clock
} from 'lucide-react';

const UnifiedSEOAnalytics = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const unifiedMetrics = [
    { label: 'Organic Traffic', value: '1.4M', change: '+23%', icon: Users, color: 'text-blue-600' },
    { label: 'Content Amplification', value: '+45%', change: 'from PR', icon: TrendingUp, color: 'text-green-600' },
    { label: 'Authority Growth', value: '+23', change: 'points', icon: Award, color: 'text-purple-600' },
    { label: 'AI Visibility', value: '82%', change: '+15%', icon: Brain, color: 'text-purple-600' },
    { label: 'Integrated ROI', value: '$445K', change: '+32%', icon: DollarSign, color: 'text-green-600' },
    { label: 'Cross-Pillar Synergy', value: '94%', change: '+8%', icon: Target, color: 'text-blue-600' }
  ];

  const multiChannelPerformance = [
    {
      channel: 'Organic Search',
      sessions: '1.4M',
      growth: '+23%',
      attribution: 'SEO + Content',
      conversion: '4.2%',
      revenue: '$180K'
    },
    {
      channel: 'Content Marketing',
      sessions: '892K',
      growth: '+45%',
      attribution: 'Content + PR Amplification',
      conversion: '6.8%',
      revenue: '$156K'
    },
    {
      channel: 'PR & Media',
      sessions: '445K',
      growth: '+67%',
      attribution: 'PR + SEO Integration',
      conversion: '8.9%',
      revenue: '$109K'
    },
    {
      channel: 'Direct Traffic',
      sessions: '234K',
      growth: '+12%',
      attribution: 'Brand Authority',
      conversion: '9.2%',
      revenue: '$89K'
    }
  ];

  const customerJourney = [
    {
      stage: 'Awareness',
      touchpoint: 'SEO Blog Content',
      nextStep: 'PR Media Coverage',
      conversion: '23%',
      attribution: 'Content → PR'
    },
    {
      stage: 'Consideration',
      touchpoint: 'Press Release Landing',
      nextStep: 'Product Pages',
      conversion: '34%',
      attribution: 'PR → SEO'
    },
    {
      stage: 'Decision',
      touchpoint: 'Optimized Product Pages',
      nextStep: 'Conversion',
      conversion: '67%',
      attribution: 'SEO → Conversion'
    },
    {
      stage: 'Advocacy',
      touchpoint: 'Customer Success Content',
      nextStep: 'PR Coverage',
      conversion: '12%',
      attribution: 'Content → PR Loop'
    }
  ];

  const predictiveAnalytics = [
    {
      metric: 'Organic Traffic Forecast',
      prediction: '2.1M sessions next quarter',
      confidence: '87%',
      factors: ['Content publishing velocity', 'PR amplification', 'Authority growth']
    },
    {
      metric: 'Authority Score Trajectory',
      prediction: '95/100 by Q2',
      confidence: '92%',
      factors: ['PR backlink velocity', 'Content quality', 'Technical optimization']
    },
    {
      metric: 'Content-PR Synergy',
      prediction: '+78% amplification potential',
      confidence: '84%',
      factors: ['Media relationships', 'Content relevance', 'Timing optimization']
    },
    {
      metric: 'ROI Projection',
      prediction: '$680K integrated revenue',
      confidence: '79%',
      factors: ['Cross-pillar optimization', 'Conversion improvements', 'Authority impact']
    }
  ];

  const realTimeIntelligence = [
    {
      type: 'achievement',
      message: 'PR coverage drove 45% traffic spike to SEO-optimized landing page',
      time: '2 minutes ago',
      impact: 'High',
      pillars: ['PR', 'SEO']
    },
    {
      type: 'opportunity',
      message: 'Content piece trending - optimize for additional keywords',
      time: '15 minutes ago',
      impact: 'Medium',
      pillars: ['Content', 'SEO']
    },
    {
      type: 'alert',
      message: 'New backlink from TechCrunch article - track authority impact',
      time: '1 hour ago',
      impact: 'High',
      pillars: ['PR', 'SEO']
    },
    {
      type: 'completion',
      message: 'Cross-pillar campaign exceeded 150% of traffic targets',
      time: '3 hours ago',
      impact: 'High',
      pillars: ['All Pillars']
    }
  ];

  const competitorBenchmarks = [
    {
      competitor: 'Competitor A',
      organicTraffic: '890K',
      authorityScore: '78',
      prMentions: '23',
      gap: 'Content velocity',
      opportunity: '+67% traffic potential'
    },
    {
      competitor: 'Competitor B',
      organicTraffic: '1.2M',
      authorityScore: '82',
      prMentions: '41',
      gap: 'PR integration',
      opportunity: '+34% authority growth'
    },
    {
      competitor: 'Competitor C',
      organicTraffic: '654K',
      authorityScore: '71',
      prMentions: '18',
      gap: 'Technical SEO',
      opportunity: '+89% visibility improvement'
    }
  ];

  const getIntelligenceIcon = (type: string) => {
    switch (type) {
      case 'achievement': return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'opportunity': return <Target className="w-4 h-4 text-blue-600" />;
      case 'alert': return <AlertCircle className="w-4 h-4 text-blue-600" />;
      case 'completion': return <Award className="w-4 h-4 text-purple-600" />;
      default: return <Activity className="w-4 h-4 text-slate-600" />;
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
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
          <BarChart3 className="w-8 h-8 text-blue-600" />
          <div>
            <h1 className="text-3xl font-bold">SEO Analytics & Reporting</h1>
            <p className="text-muted-foreground">Unified performance measurement across SEO, Content, and PR pillars</p>
          </div>
          <Badge className="bg-purple-100 text-purple-800 border-purple-300">
            <Brain className="w-3 h-3 mr-1" />
            Predictive Analytics
          </Badge>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <FileText className="w-4 h-4 mr-2" />
          Generate Integrated Report
        </Button>
      </div>

      {/* Unified Metrics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {unifiedMetrics.map((metric, index) => {
          const IconComponent = metric.icon;
          return (
            <Card key={index} className="border border-slate-200">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm flex items-center">
                  <IconComponent className={`w-4 h-4 mr-2 ${metric.color}`} />
                  {metric.label}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold">{metric.value}</div>
                  <div className="text-sm text-green-600 font-medium">{metric.change}</div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="dashboard">Overview</TabsTrigger>
          <TabsTrigger value="attribution">Attribution</TabsTrigger>
          <TabsTrigger value="predictive">Predictive</TabsTrigger>
          <TabsTrigger value="intelligence">Real-Time</TabsTrigger>
          <TabsTrigger value="reporting">Reporting</TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard" className="space-y-6">
          {/* Multi-Channel Performance */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Activity className="w-5 h-5 mr-2 text-blue-600" />
                Multi-Channel Performance
              </CardTitle>
              <CardDescription>Integrated performance across all marketing pillars</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {multiChannelPerformance.map((channel, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h4 className="font-medium">{channel.channel}</h4>
                        <Badge className="bg-purple-100 text-purple-800 text-xs">
                          {channel.attribution}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-4 gap-4 text-sm">
                        <div>
                          <span className="text-slate-500">Sessions: </span>
                          <span className="font-medium">{channel.sessions}</span>
                          <span className="text-green-600 text-xs ml-1">({channel.growth})</span>
                        </div>
                        <div>
                          <span className="text-slate-500">Conversion: </span>
                          <span className="font-medium">{channel.conversion}</span>
                        </div>
                        <div>
                          <span className="text-slate-500">Revenue: </span>
                          <span className="font-medium">{channel.revenue}</span>
                        </div>
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

          {/* Competitor Benchmarking */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="w-5 h-5 mr-2 text-green-600" />
                Competitive Intelligence
              </CardTitle>
              <CardDescription>Performance benchmarking against key competitors</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {competitorBenchmarks.map((competitor, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium mb-2">{competitor.competitor}</h4>
                      <div className="grid grid-cols-4 gap-4 text-sm">
                        <div>
                          <span className="text-slate-500">Traffic: </span>
                          <span className="font-medium">{competitor.organicTraffic}</span>
                        </div>
                        <div>
                          <span className="text-slate-500">Authority: </span>
                          <span className="font-medium">{competitor.authorityScore}</span>
                        </div>
                        <div>
                          <span className="text-slate-500">PR Mentions: </span>
                          <span className="font-medium">{competitor.prMentions}</span>
                        </div>
                        <div>
                          <span className="text-slate-500">Gap: </span>
                          <span className="font-medium">{competitor.gap}</span>
                        </div>
                      </div>
                      <div className="text-xs text-green-600 mt-2">
                        Opportunity: {competitor.opportunity}
                      </div>
                    </div>
                    <Button size="sm" variant="outline">
                      Analyze
                    </Button>
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
                <Target className="w-5 h-5 mr-2 text-purple-600" />
                Advanced Attribution Analytics
              </CardTitle>
              <CardDescription>Customer journey mapping across Content → PR → SEO → Conversion</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {customerJourney.map((stage, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h4 className="font-medium">{stage.stage}</h4>
                        <Badge className="bg-purple-100 text-purple-800 text-xs">
                          {stage.attribution}
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-slate-600">
                        <span>From: {stage.touchpoint}</span>
                        <span>→</span>
                        <span>To: {stage.nextStep}</span>
                        <span>•</span>
                        <span className="text-green-600 font-medium">{stage.conversion} conversion</span>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">
                      Optimize
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="predictive" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Brain className="w-5 h-5 mr-2 text-purple-600" />
                Predictive Analytics Engine
              </CardTitle>
              <CardDescription>AI-powered performance forecasting across all pillars</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {predictiveAnalytics.map((prediction, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-medium">{prediction.metric}</h4>
                      <Badge className="bg-purple-100 text-purple-800 text-xs">
                        {prediction.confidence} confidence
                      </Badge>
                    </div>
                    <div className="text-lg font-semibold text-purple-600 mb-3">
                      {prediction.prediction}
                    </div>
                    <div className="text-sm text-slate-600">
                      <span className="font-medium">Key factors: </span>
                      {prediction.factors.join(', ')}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="intelligence" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Activity className="w-5 h-5 mr-2 text-green-600" />
                Real-Time Intelligence Feed
              </CardTitle>
              <CardDescription>Live updates and optimization opportunities across all pillars</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {realTimeIntelligence.map((item, index) => (
                  <div key={index} className="flex items-start justify-between p-4 border rounded-lg">
                    <div className="flex items-start space-x-3 flex-1">
                      {getIntelligenceIcon(item.type)}
                      <div className="flex-1">
                        <p className="text-sm font-medium mb-1">{item.message}</p>
                        <div className="flex items-center space-x-4 text-xs text-slate-500">
                          <span>{item.time}</span>
                          <Badge className={getImpactColor(item.impact)}>
                            {item.impact} Impact
                          </Badge>
                          <span>Pillars: {item.pillars.join(', ')}</span>
                        </div>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">
                      Act
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reporting" className="space-y-6">
          {/* Executive Dashboard */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="w-5 h-5 mr-2 text-blue-600" />
                Unified Reporting Suite
              </CardTitle>
              <CardDescription>Executive dashboard combining all three marketing pillars</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <Button variant="outline" className="flex flex-col items-center p-4 h-auto">
                  <FileText className="w-6 h-6 mb-2 text-blue-600" />
                  <span className="text-sm">Executive Summary</span>
                </Button>
                <Button variant="outline" className="flex flex-col items-center p-4 h-auto">
                  <TrendingUp className="w-6 h-6 mb-2 text-green-600" />
                  <span className="text-sm">Performance Report</span>
                </Button>
                <Button variant="outline" className="flex flex-col items-center p-4 h-auto">
                  <Target className="w-6 h-6 mb-2 text-purple-600" />
                  <span className="text-sm">Attribution Analysis</span>
                </Button>
                <Button variant="outline" className="flex flex-col items-center p-4 h-auto">
                  <Award className="w-6 h-6 mb-2 text-blue-600" />
                  <span className="text-sm">ROI Dashboard</span>
                </Button>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <span className="font-medium">AUTOMATE Methodology ROI Report</span>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">
                      <Eye className="w-4 h-4 mr-1" />
                      Preview
                    </Button>
                    <Button size="sm">
                      <Download className="w-4 h-4 mr-1" />
                      Export
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <span className="font-medium">Cross-Pillar Success Stories</span>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">
                      <Eye className="w-4 h-4 mr-1" />
                      Preview
                    </Button>
                    <Button size="sm">
                      <Share className="w-4 h-4 mr-1" />
                      Share
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <span className="font-medium">Competitive Benchmark Report</span>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">
                      <Eye className="w-4 h-4 mr-1" />
                      Preview
                    </Button>
                    <Button size="sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      Schedule
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Quick Actions Panel */}
      <Card className="border-purple-200 bg-purple-50">
        <CardHeader>
          <CardTitle className="text-purple-800">Integrated Analytics Quick Actions</CardTitle>
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
              Export Integrated Analytics
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UnifiedSEOAnalytics;

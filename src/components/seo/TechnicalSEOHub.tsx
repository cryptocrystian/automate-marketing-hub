
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { 
  Settings, 
  Bot, 
  Activity, 
  Smartphone, 
  Zap, 
  Shield, 
  Search,
  AlertTriangle,
  CheckCircle,
  Clock,
  Code,
  Globe,
  Target,
  TrendingUp,
  ExternalLink,
  FileText,
  Gauge
} from 'lucide-react';

const TechnicalSEOHub = () => {
  const [siteHealthScore] = useState(92);
  const [activeTab, setActiveTab] = useState('dashboard');

  const coreWebVitals = [
    { metric: 'Largest Contentful Paint', value: '1.2s', status: 'good', target: '< 2.5s' },
    { metric: 'First Input Delay', value: '45ms', status: 'good', target: '< 100ms' },
    { metric: 'Cumulative Layout Shift', value: '0.08', status: 'needs-improvement', target: '< 0.1' },
    { metric: 'First Contentful Paint', value: '0.9s', status: 'good', target: '< 1.8s' }
  ];

  const technicalIssues = [
    {
      type: 'Critical',
      title: 'Missing Schema Markup',
      description: '12 content pages need structured data',
      impact: 'High',
      autoFix: true,
      pages: ['Product Launch Blog', 'PR Landing Page', 'About Us']
    },
    {
      type: 'Warning',
      title: 'Image Optimization',
      description: 'Large images affecting Core Web Vitals',
      impact: 'Medium',
      autoFix: true,
      pages: ['Holiday Campaign', 'Executive Profiles']
    },
    {
      type: 'Info',
      title: 'Mobile Usability',
      description: 'Minor viewport issues on 3 pages',
      impact: 'Low',
      autoFix: false,
      pages: ['Contact Form', 'Newsletter Signup']
    }
  ];

  const integratedPages = [
    {
      title: 'Q1 Marketing Campaign',
      type: 'Content',
      techScore: 89,
      issues: 2,
      status: 'optimizing',
      prIntegration: true
    },
    {
      title: 'Executive Hire Announcement',
      type: 'PR Landing',
      techScore: 94,
      issues: 0,
      status: 'optimized',
      prIntegration: true
    },
    {
      title: 'Product Tutorial Series',
      type: 'Content',
      techScore: 76,
      issues: 4,
      status: 'needs-work',
      prIntegration: false
    },
    {
      title: 'Partnership Press Release',
      type: 'PR Landing',
      techScore: 91,
      issues: 1,
      status: 'optimizing',
      prIntegration: true
    }
  ];

  const automationWorkflows = [
    {
      name: 'XML Sitemap Generation',
      description: 'Auto-updates when new content is published',
      status: 'active',
      lastRun: '2 minutes ago',
      integration: 'Content + PR'
    },
    {
      name: 'Schema Markup Automation',
      description: 'Generates structured data for content types',
      status: 'active',
      lastRun: '1 hour ago',
      integration: 'Content'
    },
    {
      name: 'Performance Monitoring',
      description: 'Alerts for PR traffic spikes impact',
      status: 'active',
      lastRun: '5 minutes ago',
      integration: 'PR + SEO'
    },
    {
      name: 'Technical Issue Detection',
      description: 'Scans for cross-pillar optimization opportunities',
      status: 'active',
      lastRun: '15 minutes ago',
      integration: 'All Pillars'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'good': return 'text-green-600';
      case 'needs-improvement': return 'text-blue-600';
      case 'poor': return 'text-red-600';
      default: return 'text-slate-600';
    }
  };

  const getIssueColor = (type: string) => {
    switch (type) {
      case 'Critical': return 'bg-red-600 text-white';
      case 'Warning': return 'bg-blue-600 text-white';
      case 'Info': return 'bg-blue-600 text-white';
      default: return 'bg-slate-400 text-white';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Settings className="w-8 h-8 text-blue-600" />
          <div>
            <h1 className="text-3xl font-bold">Technical SEO Automation</h1>
            <p className="text-muted-foreground">AI-powered technical optimization and monitoring</p>
          </div>
          <Badge className="bg-purple-100 text-purple-800 border-purple-300">
            <Bot className="w-3 h-3 mr-1" />
            AI-Enhanced
          </Badge>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Activity className="w-4 h-4 mr-2" />
          Run Full Site Audit
        </Button>
      </div>

      {/* Site Health Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-2 border-green-200 bg-green-50">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center">
              <Gauge className="w-5 h-5 mr-2 text-green-600" />
              Site Health Score
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <div className="text-3xl font-bold text-green-600">{siteHealthScore}</div>
              <div className="text-sm text-green-600">/100</div>
            </div>
            <div className="flex items-center mt-2 text-sm text-green-600">
              <Activity className="w-3 h-3 mr-1" />
              Real-time monitoring active
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Integration Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="text-sm text-slate-600">Optimizing 23 Content Pages</div>
              <div className="text-sm text-slate-600">+ 8 PR Landing Pages</div>
              <Badge className="bg-purple-100 text-purple-800 text-xs mt-2">
                Cross-Pillar Active
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Core Web Vitals</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="text-sm">3/4 Metrics Good</span>
            </div>
            <div className="text-xs text-slate-500 mt-1">1 needs improvement</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Active Issues</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <AlertTriangle className="w-5 h-5 text-blue-600" />
              <span className="text-sm">3 Issues Detected</span>
            </div>
            <div className="text-xs text-slate-500 mt-1">2 auto-fixable</div>
          </CardContent>
        </Card>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="dashboard">Overview</TabsTrigger>
          <TabsTrigger value="vitals">Core Web Vitals</TabsTrigger>
          <TabsTrigger value="integration">Cross-Pillar Pages</TabsTrigger>
          <TabsTrigger value="automation">Automation</TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard" className="space-y-6">
          {/* Technical Issues Panel */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2 text-blue-600" />
                Automated Issue Detection
              </CardTitle>
              <CardDescription>AI-powered monitoring with automated fix recommendations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {technicalIssues.map((issue, index) => (
                  <div key={index} className="flex items-start justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge className={getIssueColor(issue.type)}>
                          {issue.type}
                        </Badge>
                        <h4 className="font-medium">{issue.title}</h4>
                        {issue.autoFix && (
                          <Badge className="bg-purple-100 text-purple-800 text-xs">
                            <Bot className="w-3 h-3 mr-1" />
                            Auto-Fix
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-slate-600 mb-2">{issue.description}</p>
                      <div className="flex items-center space-x-2 text-xs text-slate-500">
                        <span>Impact: {issue.impact}</span>
                        <span>•</span>
                        <span>{issue.pages.length} pages affected</span>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      {issue.autoFix ? (
                        <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                          Auto-Fix
                        </Button>
                      ) : (
                        <Button size="sm" variant="outline">
                          Review
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="vitals" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Zap className="w-5 h-5 mr-2 text-green-600" />
                Core Web Vitals Monitoring
              </CardTitle>
              <CardDescription>Real-time performance metrics with Google PageSpeed integration</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {coreWebVitals.map((vital, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">{vital.metric}</h4>
                      <Badge className={vital.status === 'good' ? 'bg-green-600 text-white' : 'bg-blue-600 text-white'}>
                        {vital.status === 'good' ? 'Good' : 'Needs Work'}
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className={`text-xl font-bold ${getStatusColor(vital.status)}`}>
                        {vital.value}
                      </div>
                      <div className="text-sm text-slate-500">
                        Target: {vital.target}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="integration" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="w-5 h-5 mr-2 text-purple-600" />
                Content-Integrated Technical Optimization
              </CardTitle>
              <CardDescription>Technical SEO scores for content and PR pages with cross-pillar optimization</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {integratedPages.map((page, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h4 className="font-medium">{page.title}</h4>
                        <Badge variant="outline" className="text-xs">
                          {page.type}
                        </Badge>
                        {page.prIntegration && (
                          <Badge className="bg-purple-100 text-purple-800 text-xs">
                            PR Integrated
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-slate-600">
                        <span>Technical Score: {page.techScore}/100</span>
                        <span>•</span>
                        <span>{page.issues} issues</span>
                        <span>•</span>
                        <span className="capitalize">{page.status}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Progress value={page.techScore} className="w-20" />
                      <Button size="sm" variant="outline">
                        Optimize
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="automation" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bot className="w-5 h-5 mr-2 text-purple-600" />
                Automation Workflows
              </CardTitle>
              <CardDescription>AI-powered technical optimization across all marketing pillars</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {automationWorkflows.map((workflow, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h4 className="font-medium">{workflow.name}</h4>
                        <Badge className="bg-green-600 text-white text-xs">
                          {workflow.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-slate-600 mb-2">{workflow.description}</p>
                      <div className="flex items-center space-x-4 text-xs text-slate-500">
                        <span>Last run: {workflow.lastRun}</span>
                        <span>•</span>
                        <span>Integration: {workflow.integration}</span>
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
          <CardTitle className="text-purple-800">Cross-Pillar Quick Actions</CardTitle>
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

export default TechnicalSEOHub;

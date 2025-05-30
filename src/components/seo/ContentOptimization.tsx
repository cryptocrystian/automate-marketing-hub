
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Textarea } from '@/components/ui/textarea';
import { 
  Edit3, 
  Brain, 
  BarChart3, 
  CheckCircle, 
  AlertTriangle, 
  TrendingUp, 
  Eye, 
  Users, 
  FileText, 
  Megaphone,
  Target,
  Lightbulb,
  Award,
  Clock,
  Zap
} from 'lucide-react';

const ContentOptimization = () => {
  const [contentText, setContentText] = useState(`AI-powered marketing automation is transforming how businesses approach customer engagement and lead generation. By leveraging machine learning algorithms, companies can now personalize customer experiences at scale, optimize campaign performance in real-time, and significantly improve ROI across all marketing channels.

The integration of artificial intelligence in marketing workflows enables predictive analytics, automated content creation, and intelligent customer segmentation. This technological advancement is particularly valuable for B2B organizations looking to streamline their marketing operations while maintaining high-quality customer relationships.`);

  const [seoScore, setSeoScore] = useState(78);
  const [geoScore, setGeoScore] = useState(85);
  const [readabilityGrade, setReadabilityGrade] = useState(8);

  const optimizationSuggestions = [
    {
      type: 'keyword',
      priority: 'high',
      suggestion: 'Add target keyword "marketing automation platform" to the first paragraph',
      impact: '+5 SEO points'
    },
    {
      type: 'structure',
      priority: 'medium',
      suggestion: 'Include H2 subheadings to improve content structure',
      impact: '+3 SEO points'
    },
    {
      type: 'geo',
      priority: 'high',
      suggestion: 'Add FAQ section for better AI search optimization',
      impact: '+8 GEO points'
    },
    {
      type: 'pr',
      priority: 'medium',
      suggestion: 'This content could be pitched to MarTech journalists',
      impact: 'PR opportunity'
    }
  ];

  const crossPillarMetrics = {
    seoImpact: 85,
    prPotential: 78,
    socialSharing: 92,
    backlinkEarning: 68
  };

  const getSuggestionIcon = (type: string) => {
    switch (type) {
      case 'keyword': return <Target className="w-4 h-4 text-blue-600" />;
      case 'structure': return <BarChart3 className="w-4 h-4 text-green-600" />;
      case 'geo': return <Brain className="w-4 h-4 text-purple-600" />;
      case 'pr': return <Megaphone className="w-4 h-4 text-orange-600" />;
      default: return <Lightbulb className="w-4 h-4 text-blue-600" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 border-red-300';
      case 'medium': return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'low': return 'bg-green-100 text-green-800 border-green-300';
      default: return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Edit3 className="w-8 h-8 text-blue-600" />
          <div>
            <h1 className="text-3xl font-bold">Content Optimization Engine</h1>
            <p className="text-muted-foreground">Real-time AI-powered content optimization with cross-pillar insights</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline">
            <Clock className="w-4 h-4 mr-2" />
            Auto-Save
          </Button>
          <Button className="bg-purple-600 hover:bg-purple-700">
            <Zap className="w-4 h-4 mr-2" />
            Optimize Now
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Content Editor */}
        <div className="lg:col-span-2 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Content Editor</CardTitle>
              <CardDescription>Write and edit your content with real-time optimization feedback</CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea
                value={contentText}
                onChange={(e) => setContentText(e.target.value)}
                placeholder="Start writing your content here..."
                className="min-h-[400px] resize-none"
              />
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <span>{contentText.length} characters</span>
                  <span>{contentText.split(' ').length} words</span>
                  <span>{contentText.split('\n\n').length} paragraphs</span>
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline">Preview</Button>
                  <Button size="sm" variant="outline">Save Draft</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Cross-Pillar Performance Prediction */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="w-5 h-5 mr-2" />
                Cross-Pillar Performance Prediction
              </CardTitle>
              <CardDescription>Predicted performance across SEO, PR, and social channels</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-3 border rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">{crossPillarMetrics.seoImpact}%</div>
                  <div className="text-sm text-muted-foreground">SEO Impact</div>
                  <Progress value={crossPillarMetrics.seoImpact} className="mt-2" />
                </div>
                <div className="text-center p-3 border rounded-lg">
                  <div className="text-2xl font-bold text-green-600">{crossPillarMetrics.prPotential}%</div>
                  <div className="text-sm text-muted-foreground">PR Potential</div>
                  <Progress value={crossPillarMetrics.prPotential} className="mt-2" />
                </div>
                <div className="text-center p-3 border rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">{crossPillarMetrics.socialSharing}%</div>
                  <div className="text-sm text-muted-foreground">Social Sharing</div>
                  <Progress value={crossPillarMetrics.socialSharing} className="mt-2" />
                </div>
                <div className="text-center p-3 border rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">{crossPillarMetrics.backlinkEarning}%</div>
                  <div className="text-sm text-muted-foreground">Backlink Earning</div>
                  <Progress value={crossPillarMetrics.backlinkEarning} className="mt-2" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* AI Optimization Sidebar */}
        <div className="space-y-4">
          {/* Live Scores */}
          <Card className="border-purple-200">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Brain className="w-5 h-5 mr-2 text-purple-600" />
                AI Optimization Scores
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">SEO Score</span>
                  <span className="text-lg font-bold text-blue-600">{seoScore}/100</span>
                </div>
                <Progress value={seoScore} className="h-2" />
                <p className="text-xs text-muted-foreground mt-1">Good optimization, room for improvement</p>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">GEO Score</span>
                  <span className="text-lg font-bold text-purple-600">{geoScore}/100</span>
                </div>
                <Progress value={geoScore} className="h-2" />
                <p className="text-xs text-muted-foreground mt-1">Excellent AI search optimization</p>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Readability</span>
                  <span className="text-lg font-bold text-green-600">Grade {readabilityGrade}</span>
                </div>
                <Progress value={85} className="h-2" />
                <p className="text-xs text-muted-foreground mt-1">Good reading level for target audience</p>
              </div>
            </CardContent>
          </Card>

          {/* E-E-A-T Analysis */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Award className="w-5 h-5 mr-2 text-blue-600" />
                E-E-A-T Analysis
              </CardTitle>
              <CardDescription>Experience, Expertise, Authoritativeness, Trust</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Experience</span>
                  <div className="flex items-center space-x-2">
                    <Progress value={78} className="w-16 h-2" />
                    <span className="text-sm font-medium">78%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Expertise</span>
                  <div className="flex items-center space-x-2">
                    <Progress value={85} className="w-16 h-2" />
                    <span className="text-sm font-medium">85%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Authoritativeness</span>
                  <div className="flex items-center space-x-2">
                    <Progress value={72} className="w-16 h-2" />
                    <span className="text-sm font-medium">72%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Trust</span>
                  <div className="flex items-center space-x-2">
                    <Progress value={88} className="w-16 h-2" />
                    <span className="text-sm font-medium">88%</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Optimization Suggestions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Lightbulb className="w-5 h-5 mr-2 text-blue-600" />
                AI Suggestions
              </CardTitle>
              <CardDescription>Real-time optimization recommendations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {optimizationSuggestions.map((suggestion, index) => (
                  <div key={index} className="p-3 border rounded-lg space-y-2">
                    <div className="flex items-start space-x-2">
                      {getSuggestionIcon(suggestion.type)}
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <Badge className={getPriorityColor(suggestion.priority)} variant="outline">
                            {suggestion.priority}
                          </Badge>
                          <span className="text-xs font-medium text-green-600">{suggestion.impact}</span>
                        </div>
                        <p className="text-sm">{suggestion.suggestion}</p>
                      </div>
                    </div>
                    <Button size="sm" variant="outline" className="w-full">
                      Apply Suggestion
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Integration Workflow */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="w-5 h-5 mr-2" />
                Integration Workflow
              </CardTitle>
              <CardDescription>Cross-pillar optimization opportunities</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="p-3 border rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Megaphone className="w-4 h-4 text-orange-600" />
                  <span className="font-medium text-sm">PR Opportunity</span>
                </div>
                <p className="text-xs text-muted-foreground">This content could be pitched to MarTech journalists covering AI trends</p>
                <Button size="sm" variant="outline" className="w-full mt-2">
                  Create PR Campaign
                </Button>
              </div>

              <div className="p-3 border rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <TrendingUp className="w-4 h-4 text-blue-600" />
                  <span className="font-medium text-sm">SEO Enhancement</span>
                </div>
                <p className="text-xs text-muted-foreground">Optimize for "AI marketing automation platform" keyword cluster</p>
                <Button size="sm" variant="outline" className="w-full mt-2">
                  Apply SEO Updates
                </Button>
              </div>

              <div className="p-3 border rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Users className="w-4 h-4 text-purple-600" />
                  <span className="font-medium text-sm">Social Amplification</span>
                </div>
                <p className="text-xs text-muted-foreground">Content ready for LinkedIn and Twitter distribution</p>
                <Button size="sm" variant="outline" className="w-full mt-2">
                  Schedule Social Posts
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContentOptimization;

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { 
  Edit3, 
  Brain, 
  Star, 
  TrendingUp, 
  Target, 
  Users, 
  Globe, 
  Radio, 
  Eye, 
  MessageSquare, 
  Plus, 
  Send, 
  Calendar, 
  Bookmark, 
  Lightbulb,
  Clock,
  CheckCircle,
  Bot,
  Zap,
  FileText,
  ExternalLink,
  Download,
  Share
} from 'lucide-react';

interface PressReleaseBuilderProps {
  preSelectedContact?: {
    id: string;
    name: string;
    outlet: string;
  };
  onClose?: () => void;
}

const PressReleaseBuilder: React.FC<PressReleaseBuilderProps> = ({ preSelectedContact, onClose }) => {
  const [activeTab, setActiveTab] = useState('builder');
  const [seoScore, setSeoScore] = useState(78);
  const [aiDiscoverability, setAiDiscoverability] = useState(85);
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [selectedContacts, setSelectedContacts] = useState(preSelectedContact ? [preSelectedContact] : []);

  const templates = [
    { id: 'product-launch', name: 'Product Launch', pickupRate: 72, icon: Zap },
    { id: 'funding', name: 'Funding News', pickupRate: 89, icon: TrendingUp },
    { id: 'partnership', name: 'Partnership', pickupRate: 65, icon: Users },
    { id: 'award', name: 'Award', pickupRate: 58, icon: Star },
    { id: 'executive', name: 'Executive Hire', pickupRate: 43, icon: Users }
  ];

  const aiSuggestions = [
    { type: 'headline', suggestion: 'Add power words like "Revolutionary" or "Breakthrough"', score: 85 },
    { type: 'keyword', suggestion: 'Include "AI-powered" for better discoverability', score: 92 },
    { type: 'structure', suggestion: 'Add quote in second paragraph for better pickup', score: 78 }
  ];

  const distributionChannels = [
    { name: 'PR Newswire', status: 'ready', icon: Globe },
    { name: 'ChatGPT Indexing', status: 'optimized', icon: Bot, unique: true },
    { name: 'Perplexity AI', status: 'optimized', icon: Brain, unique: true },
    { name: 'Podcast Networks', status: 'ready', icon: Radio, unique: true },
    { name: 'Social Media', status: 'ready', icon: Share }
  ];

  const suggestedJournalists = [
    { name: 'Sarah Mitchell', outlet: 'TechCrunch', score: 9.2, beat: 'AI & ML' },
    { name: 'James Wilson', outlet: 'Forbes', score: 7.8, beat: 'Enterprise Tech' },
    { name: 'Maria Rodriguez', outlet: 'VentureBeat', score: 8.9, beat: 'Startups' }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Edit3 className="w-8 h-8 text-blue-600" />
          <div>
            <h1 className="text-3xl font-bold">Press Release Builder</h1>
            <p className="text-muted-foreground">AI-enhanced content creation and distribution</p>
          </div>
          <Badge className="bg-purple-100 text-purple-800 border-purple-300">
            <Brain className="w-3 h-3 mr-1" />
            AI-Enhanced
          </Badge>
        </div>
        <div className="flex items-center space-x-2">
          {onClose && (
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
          )}
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Send className="w-4 h-4 mr-2" />
            Publish & Distribute
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="builder">Builder</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
          <TabsTrigger value="distribution">Distribution</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="builder" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Main Editor */}
            <div className="lg:col-span-3 space-y-6">
              {/* Content Editor */}
              <Card>
                <CardHeader>
                  <CardTitle>Content Editor</CardTitle>
                  <CardDescription>Create your press release with AI assistance</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="headline">Headline</Label>
                    <Input 
                      id="headline" 
                      placeholder="Enter compelling headline..."
                      className="text-lg font-semibold"
                    />
                  </div>
                  <div>
                    <Label htmlFor="subheading">Subheading</Label>
                    <Input 
                      id="subheading" 
                      placeholder="Supporting headline or key message..."
                    />
                  </div>
                  <div>
                    <Label htmlFor="content">Body Content</Label>
                    <Textarea 
                      id="content" 
                      placeholder="Write your press release content here..."
                      className="min-h-[300px]"
                    />
                  </div>
                  
                  {/* Performance Metrics */}
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                    <div>
                      <Label className="text-sm">SEO Score</Label>
                      <div className="flex items-center space-x-2 mt-1">
                        <Progress value={seoScore} className="flex-1" />
                        <span className={`text-sm font-medium ${seoScore >= 80 ? 'text-green-600' : seoScore >= 60 ? 'text-orange-600' : 'text-red-600'}`}>
                          {seoScore}/100
                        </span>
                      </div>
                    </div>
                    <div>
                      <Label className="text-sm">AI Discoverability</Label>
                      <div className="flex items-center space-x-2 mt-1">
                        <Progress value={aiDiscoverability} className="flex-1" />
                        <span className="text-sm font-medium text-purple-600">{aiDiscoverability}/100</span>
                      </div>
                    </div>
                    <div>
                      <Label className="text-sm">Readability</Label>
                      <div className="flex items-center space-x-2 mt-1">
                        <div className="text-sm font-medium text-blue-600">Grade 8</div>
                        <Badge variant="secondary" className="text-xs">Good</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Media Targeting */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Target className="w-5 h-5 mr-2" />
                    Media Targeting
                  </CardTitle>
                  <CardDescription>Select journalists and outlets for distribution</CardDescription>
                </CardHeader>
                <CardContent>
                  {preSelectedContact && (
                    <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-blue-600" />
                        <span className="text-sm font-medium">Pre-selected from profile:</span>
                        <span className="text-sm">{preSelectedContact.name} ({preSelectedContact.outlet})</span>
                      </div>
                    </div>
                  )}
                  
                  <div className="space-y-3">
                    <h4 className="font-medium">Suggested Journalists</h4>
                    {suggestedJournalists.map((journalist, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            <Users className="w-4 h-4 text-blue-600" />
                          </div>
                          <div>
                            <div className="font-medium">{journalist.name}</div>
                            <div className="text-sm text-muted-foreground">{journalist.outlet} • {journalist.beat}</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center space-x-1">
                            <Star className="w-3 h-3 text-blue-500 fill-current" />
                            <span className="text-xs">{journalist.score}</span>
                          </div>
                          <Button variant="outline" size="sm">
                            Add
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* AI Optimization Sidebar */}
            <div className="space-y-6">
              <Card className="border-purple-200 bg-purple-50">
                <CardHeader>
                  <CardTitle className="flex items-center text-purple-800">
                    <Brain className="w-5 h-5 mr-2" />
                    AI Optimization
                  </CardTitle>
                  <CardDescription className="text-purple-600">Real-time suggestions to improve your release</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {aiSuggestions.map((suggestion, index) => (
                    <div key={index} className="p-3 bg-white border border-purple-200 rounded-lg">
                      <div className="flex items-start justify-between mb-2">
                        <Lightbulb className="w-4 h-4 text-purple-600 mt-0.5" />
                        <Badge variant="secondary" className="text-xs">{suggestion.score}%</Badge>
                      </div>
                      <p className="text-sm text-gray-700">{suggestion.suggestion}</p>
                      <Button variant="outline" size="sm" className="mt-2 w-full">
                        Apply
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quick Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Word Count</span>
                    <span className="text-sm font-medium">324</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Read Time</span>
                    <span className="text-sm font-medium">1.3 min</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Target Contacts</span>
                    <span className="text-sm font-medium">{selectedContacts.length}</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="templates" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Template Selection</CardTitle>
              <CardDescription>Choose from proven templates or create your own</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {templates.map((template) => {
                  const IconComponent = template.icon;
                  return (
                    <div key={template.id} className="border rounded-lg p-4 hover:border-blue-300 cursor-pointer transition-colors">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <IconComponent className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-medium">{template.name}</h4>
                          <div className="text-sm text-muted-foreground">{template.pickupRate}% pickup rate</div>
                        </div>
                      </div>
                      <Button variant="outline" className="w-full">
                        Use Template
                      </Button>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="distribution" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Distribution Channels</CardTitle>
              <CardDescription>Configure your press release distribution</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {distributionChannels.map((channel, index) => {
                  const IconComponent = channel.icon;
                  return (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <IconComponent className="w-5 h-5 text-blue-600" />
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="font-medium">{channel.name}</span>
                            {channel.unique && (
                              <Badge className="bg-purple-100 text-purple-800 text-xs">
                                UNIQUE
                              </Badge>
                            )}
                          </div>
                          <span className="text-sm text-muted-foreground capitalize">{channel.status}</span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Configure
                      </Button>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Performance Analytics Setup</CardTitle>
              <CardDescription>Configure tracking and measurement</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>UTM Campaign</Label>
                    <Input placeholder="press-release-q4-launch" />
                  </div>
                  <div className="space-y-2">
                    <Label>UTM Source</Label>
                    <Input placeholder="press-release" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Success Metrics</Label>
                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="outline" size="sm">Media Pickup</Button>
                    <Button variant="outline" size="sm">Website Traffic</Button>
                    <Button variant="outline" size="sm">Social Mentions</Button>
                    <Button variant="outline" size="sm">Lead Generation</Button>
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

export default PressReleaseBuilder;

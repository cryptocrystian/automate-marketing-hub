
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Bot, Clock, Calendar, Zap, Plus, Settings, Sparkles } from 'lucide-react';

const ContentAutomation = () => {
  const [templates] = useState([
    {
      id: '1',
      name: 'Welcome Email Series',
      category: 'Email',
      usage: 45,
      description: 'Onboarding sequence for new subscribers'
    },
    {
      id: '2',
      name: 'Social Media Posts',
      category: 'Social',
      usage: 32,
      description: 'Daily engagement posts template'
    },
    {
      id: '3',
      name: 'Product Announcement',
      category: 'Blog',
      usage: 18,
      description: 'Template for new product launches'
    }
  ]);

  const [automationRules] = useState([
    {
      id: '1',
      name: 'Daily Social Posts',
      trigger: 'Every day at 9:00 AM',
      action: 'Post to Instagram & Twitter',
      status: 'active'
    },
    {
      id: '2',
      name: 'Weekly Newsletter',
      trigger: 'Every Monday at 8:00 AM',
      action: 'Send newsletter to subscribers',
      status: 'active'
    },
    {
      id: '3',
      name: 'Product Updates',
      trigger: 'When new product is added',
      action: 'Create announcement blog post',
      status: 'paused'
    }
  ]);

  const [contentSeries] = useState([
    {
      id: '1',
      name: 'Q1 Marketing Campaign',
      posts: 12,
      schedule: 'Weekly',
      nextPost: '2024-01-22'
    },
    {
      id: '2',
      name: 'Tutorial Series',
      posts: 8,
      schedule: 'Bi-weekly',
      nextPost: '2024-01-25'
    }
  ]);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Email': return 'bg-blue-600';
      case 'Social': return 'bg-green-600';
      case 'Blog': return 'bg-purple-600';
      default: return 'bg-slate-600';
    }
  };

  return (
    <div className="space-y-6">
      {/* Template Library */}
      <Card className="border border-slate-200 bg-white">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-lg font-semibold text-slate-800 flex items-center gap-2">
                <Bot className="h-5 w-5 text-blue-600" />
                Template Library
              </CardTitle>
              <CardDescription>Pre-built templates to speed up content creation</CardDescription>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Plus className="h-4 w-4 mr-2" />
                  New Template
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Create New Template</DialogTitle>
                  <DialogDescription>Build a reusable template for your content</DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <Input placeholder="Template name" />
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="email">Email</SelectItem>
                      <SelectItem value="social">Social</SelectItem>
                      <SelectItem value="blog">Blog</SelectItem>
                      <SelectItem value="newsletter">Newsletter</SelectItem>
                    </SelectContent>
                  </Select>
                  <div className="flex gap-2">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">Create Template</Button>
                    <Button variant="outline">Cancel</Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {templates.map((template) => (
              <div key={template.id} className="p-4 border border-slate-200 rounded-lg hover:shadow-sm transition-shadow">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-medium text-slate-800">{template.name}</h3>
                  <Badge className={getCategoryColor(template.category)}>
                    {template.category}
                  </Badge>
                </div>
                <p className="text-sm text-slate-600 mb-3">{template.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500">{template.usage} uses</span>
                  <div className="flex gap-1">
                    <Button size="sm" variant="outline" className="text-xs">Use</Button>
                    <Button size="sm" variant="outline" className="text-xs">Edit</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Automation Rules */}
      <Card className="border border-slate-200 bg-white">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-lg font-semibold text-slate-800 flex items-center gap-2">
                <Zap className="h-5 w-5 text-green-600" />
                Automation Rules
              </CardTitle>
              <CardDescription>Set up automated content scheduling and publishing</CardDescription>
            </div>
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              <Plus className="h-4 w-4 mr-2" />
              New Rule
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {automationRules.map((rule) => (
              <div key={rule.id} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                <div className="flex-1">
                  <h3 className="font-medium text-slate-800 mb-1">{rule.name}</h3>
                  <div className="flex items-center gap-4 text-sm text-slate-600">
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {rule.trigger}
                    </span>
                    <span>→</span>
                    <span>{rule.action}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge 
                    className={rule.status === 'active' ? 'bg-green-600 text-white' : 'bg-slate-400 text-white'}
                  >
                    {rule.status}
                  </Badge>
                  <Button size="sm" variant="outline">
                    <Settings className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Content Series */}
      <Card className="border border-slate-200 bg-white">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-lg font-semibold text-slate-800 flex items-center gap-2">
                <Calendar className="h-5 w-5 text-purple-600" />
                Content Series
              </CardTitle>
              <CardDescription>Manage multi-part content campaigns</CardDescription>
            </div>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">
              <Plus className="h-4 w-4 mr-2" />
              New Series
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {contentSeries.map((series) => (
              <div key={series.id} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                <div className="flex-1">
                  <h3 className="font-medium text-slate-800 mb-1">{series.name}</h3>
                  <div className="flex items-center gap-4 text-sm text-slate-600">
                    <span>{series.posts} posts</span>
                    <span>•</span>
                    <span>{series.schedule}</span>
                    <span>•</span>
                    <span>Next: {series.nextPost}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">Manage</Button>
                  <Button size="sm" variant="outline">Preview</Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* AI Suggestions */}
      <Card className="border border-slate-200 bg-white">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-slate-800 flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-blue-600" />
            AI Content Suggestions
          </CardTitle>
          <CardDescription>Smart recommendations based on your content performance</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <h4 className="font-medium text-slate-800 mb-1">Trending Topic Alert</h4>
              <p className="text-sm text-slate-600">Create content about "AI in Marketing" - 45% engagement boost predicted</p>
            </div>
            <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
              <h4 className="font-medium text-slate-800 mb-1">Optimal Posting Time</h4>
              <p className="text-sm text-slate-600">Your audience is most active on Tuesdays at 2:00 PM</p>
            </div>
            <div className="p-3 bg-purple-50 border border-purple-200 rounded-lg">
              <h4 className="font-medium text-slate-800 mb-1">Content Gap Analysis</h4>
              <p className="text-sm text-slate-600">Consider creating more video content - competitors see 30% higher engagement</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContentAutomation;

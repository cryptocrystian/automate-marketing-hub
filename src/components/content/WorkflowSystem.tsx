
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { GitBranch, MessageSquare, Clock, CheckCircle, AlertCircle, Users, History } from 'lucide-react';

const WorkflowSystem = () => {
  const [workflowItems] = useState([
    {
      id: '1',
      title: 'Holiday Email Campaign',
      type: 'Email',
      currentStage: 'review',
      assignee: 'Sarah Johnson',
      dueDate: '2024-01-20',
      comments: 3,
      version: '2.1'
    },
    {
      id: '2',
      title: 'Q1 Social Media Strategy',
      type: 'Social',
      currentStage: 'draft',
      assignee: 'Mike Chen',
      dueDate: '2024-01-25',
      comments: 1,
      version: '1.0'
    },
    {
      id: '3',
      title: 'Product Launch Blog',
      type: 'Blog',
      currentStage: 'approved',
      assignee: 'Emily Davis',
      dueDate: '2024-01-18',
      comments: 5,
      version: '3.2'
    }
  ]);

  const [comments] = useState([
    {
      id: '1',
      contentId: '1',
      author: 'John Doe',
      message: 'The subject line needs to be more compelling',
      timestamp: '2024-01-15 10:30',
      resolved: false
    },
    {
      id: '2',
      contentId: '1',
      author: 'Sarah Johnson',
      message: 'Updated the CTA button. Please review.',
      timestamp: '2024-01-15 14:45',
      resolved: true
    }
  ]);

  const getStageColor = (stage: string) => {
    switch (stage) {
      case 'draft': return 'bg-slate-400 text-white';
      case 'review': return 'bg-gray-600 text-white';
      case 'approved': return 'bg-blue-600 text-white';
      case 'published': return 'bg-green-600 text-white';
      default: return 'bg-slate-200 text-slate-800';
    }
  };

  const getStageIcon = (stage: string) => {
    switch (stage) {
      case 'draft': return <Clock className="h-4 w-4" />;
      case 'review': return <AlertCircle className="h-4 w-4" />;
      case 'approved': return <CheckCircle className="h-4 w-4" />;
      case 'published': return <CheckCircle className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Workflow Overview */}
      <Card className="border border-slate-200 bg-white">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-slate-800 flex items-center gap-2">
            <GitBranch className="h-5 w-5 text-blue-600" />
            Content Workflow
          </CardTitle>
          <CardDescription>Track content through approval stages</CardDescription>
        </CardHeader>
        <CardContent>
          {/* Workflow Stages */}
          <div className="flex items-center justify-between mb-6 p-4 bg-slate-50 rounded-lg">
            {['draft', 'review', 'approved', 'published'].map((stage, index) => (
              <div key={stage} className="flex items-center">
                <div className={`flex items-center gap-2 px-3 py-2 rounded-lg ${getStageColor(stage)}`}>
                  {getStageIcon(stage)}
                  <span className="capitalize font-medium">{stage}</span>
                </div>
                {index < 3 && (
                  <div className="w-8 h-0.5 bg-slate-300 mx-2"></div>
                )}
              </div>
            ))}
          </div>

          {/* Content Items in Workflow */}
          <div className="space-y-4">
            {workflowItems.map((item) => (
              <div key={item.id} className="border border-slate-200 rounded-lg p-4 hover:shadow-sm transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="font-medium text-slate-800 mb-1">{item.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-slate-600">
                      <Badge variant="outline">{item.type}</Badge>
                      <span className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {item.assignee}
                      </span>
                      <span>Due: {item.dueDate}</span>
                      <span>v{item.version}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className={getStageColor(item.currentStage)}>
                      {getStageIcon(item.currentStage)}
                      <span className="ml-1 capitalize">{item.currentStage}</span>
                    </Badge>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Button size="sm" variant="outline" className="text-xs">
                      <MessageSquare className="h-3 w-3 mr-1" />
                      Comments ({item.comments})
                    </Button>
                    <Button size="sm" variant="outline" className="text-xs">
                      <History className="h-3 w-3 mr-1" />
                      Version History
                    </Button>
                  </div>
                  
                  <div className="flex gap-2">
                    {item.currentStage === 'draft' && (
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white text-xs">
                        Submit for Review
                      </Button>
                    )}
                    {item.currentStage === 'review' && (
                      <>
                        <Button size="sm" variant="outline" className="text-xs">
                          Request Changes
                        </Button>
                        <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white text-xs">
                          Approve
                        </Button>
                      </>
                    )}
                    {item.currentStage === 'approved' && (
                      <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white text-xs">
                        Publish
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Comments & Feedback */}
      <Card className="border border-slate-200 bg-white">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-slate-800 flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-green-600" />
            Comments & Feedback
          </CardTitle>
          <CardDescription>Collaborate with your team on content improvements</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {comments.map((comment) => (
              <div key={comment.id} className={`p-4 rounded-lg border ${
                comment.resolved ? 'border-green-200 bg-green-50' : 'border-slate-200 bg-white'
              }`}>
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-slate-800">{comment.author}</span>
                    <span className="text-sm text-slate-500">{comment.timestamp}</span>
                  </div>
                  <Badge className={comment.resolved ? 'bg-green-600 text-white' : 'bg-slate-400 text-white'}>
                    {comment.resolved ? 'Resolved' : 'Open'}
                  </Badge>
                </div>
                <p className="text-slate-700">{comment.message}</p>
                {!comment.resolved && (
                  <div className="flex gap-2 mt-3">
                    <Button size="sm" variant="outline" className="text-xs">Reply</Button>
                    <Button size="sm" variant="outline" className="text-xs">Resolve</Button>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 border border-slate-200 rounded-lg">
            <h4 className="font-medium text-slate-800 mb-3">Add New Comment</h4>
            <div className="space-y-3">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select content item" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Holiday Email Campaign</SelectItem>
                  <SelectItem value="2">Q1 Social Media Strategy</SelectItem>
                  <SelectItem value="3">Product Launch Blog</SelectItem>
                </SelectContent>
              </Select>
              <Input placeholder="Enter your comment..." />
              <div className="flex gap-2">
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                  Add Comment
                </Button>
                <Button size="sm" variant="outline">Cancel</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Version Control */}
      <Card className="border border-slate-200 bg-white">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-slate-800 flex items-center gap-2">
            <History className="h-5 w-5 text-purple-600" />
            Version Control
          </CardTitle>
          <CardDescription>Track changes and manage content versions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-slate-800">Holiday Email Campaign</h4>
                <Badge className="bg-blue-600 text-white">Current: v2.1</Badge>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600">v2.1 - Updated CTA button design</span>
                  <span className="text-slate-500">Jan 15, 2024</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600">v2.0 - Revised email copy</span>
                  <span className="text-slate-500">Jan 14, 2024</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600">v1.0 - Initial draft</span>
                  <span className="text-slate-500">Jan 12, 2024</span>
                </div>
              </div>
              <div className="flex gap-2 mt-3">
                <Button size="sm" variant="outline" className="text-xs">Compare Versions</Button>
                <Button size="sm" variant="outline" className="text-xs">Restore Version</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WorkflowSystem;

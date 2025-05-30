
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  ArrowLeft, 
  Settings, 
  Workflow, 
  Database, 
  Users, 
  CheckCircle, 
  Target,
  Upload,
  Download,
  Zap,
  BarChart3,
  Cog
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const OptimizeSystems = () => {
  const navigate = useNavigate();

  // Category states for tracking completion
  const [categories, setCategories] = useState({
    techStack: {
      name: 'Technology Stack Assessment',
      items: [
        'Current marketing tools and platform inventory',
        'Integration mapping and data flow analysis',
        'Tool effectiveness and ROI evaluation',
        'Gap identification and redundancy elimination',
        'Platform consolidation and optimization recommendations'
      ],
      completed: [],
      score: 6,
      notes: ''
    },
    workflowAutomation: {
      name: 'Workflow Automation Setup',
      items: [
        'Content creation and approval workflow design',
        'PR campaign and media outreach automation',
        'SEO monitoring and optimization processes',
        'Cross-pillar campaign coordination workflows',
        'Task management and team collaboration optimization'
      ],
      completed: [],
      score: 7,
      notes: ''
    },
    dataIntegration: {
      name: 'Data Integration & Analytics',
      items: [
        'Analytics platform configuration and tracking setup',
        'Data consolidation and reporting automation',
        'Performance monitoring and alert systems',
        'Attribution modeling and conversion tracking',
        'Real-time dashboard and reporting optimization'
      ],
      completed: [],
      score: 5,
      notes: ''
    },
    processOptimization: {
      name: 'Process Optimization',
      items: [
        'Team roles and responsibility clarification',
        'Communication protocols and escalation procedures',
        'Quality assurance and approval processes',
        'Resource allocation and capacity planning',
        'Efficiency improvement and bottleneck elimination'
      ],
      completed: [],
      score: 8,
      notes: ''
    }
  });

  const [uploadedFiles, setUploadedFiles] = useState({});

  const handleItemToggle = (categoryKey, itemIndex) => {
    setCategories(prev => ({
      ...prev,
      [categoryKey]: {
        ...prev[categoryKey],
        completed: prev[categoryKey].completed.includes(itemIndex)
          ? prev[categoryKey].completed.filter(i => i !== itemIndex)
          : [...prev[categoryKey].completed, itemIndex]
      }
    }));
  };

  const handleScoreChange = (categoryKey, score) => {
    setCategories(prev => ({
      ...prev,
      [categoryKey]: {
        ...prev[categoryKey],
        score: parseInt(score)
      }
    }));
  };

  const handleNotesChange = (categoryKey, notes) => {
    setCategories(prev => ({
      ...prev,
      [categoryKey]: {
        ...prev[categoryKey],
        notes
      }
    }));
  };

  const handleFileUpload = (categoryKey, files) => {
    setUploadedFiles(prev => ({
      ...prev,
      [categoryKey]: Array.from(files)
    }));
  };

  // Calculate overall progress
  const totalItems = Object.values(categories).reduce((sum, cat) => sum + cat.items.length, 0);
  const completedItems = Object.values(categories).reduce((sum, cat) => sum + cat.completed.length, 0);
  const overallProgress = Math.round((completedItems / totalItems) * 100);

  // Calculate average score
  const averageScore = Object.values(categories).reduce((sum, cat) => sum + cat.score, 0) / Object.keys(categories).length;

  const categoryIcons = {
    techStack: Settings,
    workflowAutomation: Workflow,
    dataIntegration: Database,
    processOptimization: Users
  };

  const categoryColors = {
    techStack: 'bg-blue-100 border-blue-200',
    workflowAutomation: 'bg-green-100 border-green-200',
    dataIntegration: 'bg-purple-100 border-purple-200',
    processOptimization: 'bg-orange-100 border-orange-200'
  };

  const generateActionItems = () => {
    const actionItems = [];
    
    Object.entries(categories).forEach(([key, category]) => {
      const incompleteItems = category.items.filter((_, index) => !category.completed.includes(index));
      if (incompleteItems.length > 0) {
        actionItems.push({
          category: category.name,
          items: incompleteItems.slice(0, 2), // Top 2 priority items
          urgency: category.score < 5 ? 'High' : category.score < 7 ? 'Medium' : 'Low'
        });
      }
    });

    return actionItems;
  };

  const actionItems = generateActionItems();

  return (
    <Layout>
      <div className="p-6">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" onClick={() => navigate('/automate')} className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Strategy Center
            </Button>
            <SidebarTrigger />
            <div>
              <div className="flex items-center gap-3 mb-1">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                  O
                </div>
                <h1 className="text-2xl font-bold text-gray-900">Optimize Systems - Step 4 of 8</h1>
              </div>
              <p className="text-gray-600">Marketing tech stack and workflow optimization</p>
            </div>
          </div>
          <Badge variant="outline" className="text-blue-600 border-blue-200">
            Systems & Automation
          </Badge>
        </div>

        {/* Progress Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-blue-50 to-indigo-100 border-blue-200">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <Target className="h-5 w-5 text-blue-600" />
                Optimization Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{overallProgress}%</div>
                <Progress value={overallProgress} className="mb-3" />
                <p className="text-sm text-gray-600">{completedItems} of {totalItems} optimization areas complete</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-emerald-100 border-green-200">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-green-600" />
                System Efficiency Score
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">{averageScore.toFixed(1)}/10</div>
                <Progress value={averageScore * 10} className="mb-3" />
                <p className="text-sm text-gray-600">Current optimization effectiveness</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-violet-100 border-purple-200">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <Zap className="h-5 w-5 text-purple-600" />
                Priority Actions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">{actionItems.length}</div>
                <p className="text-sm text-gray-600">High-impact optimization areas</p>
                <Button size="sm" variant="outline" className="mt-2">
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* System Optimization Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {Object.entries(categories).map(([key, category]) => {
            const IconComponent = categoryIcons[key];
            const completionRate = Math.round((category.completed.length / category.items.length) * 100);
            
            return (
              <Card key={key} className={`${categoryColors[key]} border-l-4 border-l-blue-600`}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <IconComponent className="h-5 w-5 text-blue-600" />
                    {category.name}
                  </CardTitle>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">{completionRate}% Complete</span>
                    <Badge variant="outline">Score: {category.score}/10</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Checklist Items */}
                  <div className="space-y-2">
                    {category.items.map((item, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <Checkbox
                          id={`${key}-${index}`}
                          checked={category.completed.includes(index)}
                          onCheckedChange={() => handleItemToggle(key, index)}
                          className="mt-1"
                        />
                        <label 
                          htmlFor={`${key}-${index}`}
                          className="text-sm text-gray-700 leading-5 cursor-pointer"
                        >
                          {item}
                        </label>
                      </div>
                    ))}
                  </div>

                  {/* Score Slider */}
                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Optimization Level (1-10)</Label>
                    <Input
                      type="range"
                      min="1"
                      max="10"
                      value={category.score}
                      onChange={(e) => handleScoreChange(key, e.target.value)}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>Basic</span>
                      <span>Advanced</span>
                    </div>
                  </div>

                  {/* Notes */}
                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Optimization Notes</Label>
                    <Textarea
                      placeholder="Document current systems, integration challenges, optimization opportunities..."
                      value={category.notes}
                      onChange={(e) => handleNotesChange(key, e.target.value)}
                      className="min-h-[80px]"
                    />
                  </div>

                  {/* File Upload */}
                  <div className="space-y-2">
                    <Label className="text-sm font-medium">System Documentation</Label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                      <input
                        type="file"
                        multiple
                        onChange={(e) => handleFileUpload(key, e.target.files)}
                        className="hidden"
                        id={`upload-${key}`}
                      />
                      <label htmlFor={`upload-${key}`} className="cursor-pointer">
                        <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-600">Upload system maps, workflows, and documentation</p>
                      </label>
                      {uploadedFiles[key] && (
                        <div className="mt-2 text-xs text-green-600">
                          {uploadedFiles[key].length} file(s) uploaded
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Action Items and Next Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                Priority Optimization Actions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {actionItems.length > 0 ? (
                  actionItems.map((action, index) => (
                    <div key={index} className="border-l-4 border-l-blue-500 pl-4 py-2">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-medium text-gray-900">{action.category}</h4>
                        <Badge variant={action.urgency === 'High' ? 'destructive' : action.urgency === 'Medium' ? 'default' : 'secondary'}>
                          {action.urgency} Priority
                        </Badge>
                      </div>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {action.items.map((item, idx) => (
                          <li key={idx}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-4">
                    <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-2" />
                    <p className="text-gray-600">All optimization areas are complete!</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Download className="h-5 w-5 text-blue-600" />
                Optimization Resources
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <Download className="h-4 w-4 mr-2" />
                System Integration Roadmap Template
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Download className="h-4 w-4 mr-2" />
                Workflow Automation Guide
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Download className="h-4 w-4 mr-2" />
                Analytics Configuration Checklist
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Download className="h-4 w-4 mr-2" />
                Process Optimization Framework
              </Button>
              <div className="pt-2 border-t">
                <Button className="w-full" onClick={() => navigate('/automate/measure-monitor')}>
                  Continue to Measure & Monitor
                  <Cog className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default OptimizeSystems;

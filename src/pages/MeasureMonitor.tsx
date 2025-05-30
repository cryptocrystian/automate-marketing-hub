
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
  BarChart3, 
  Monitor, 
  Target,
  FileText,
  CheckCircle, 
  TrendingUp,
  Upload,
  Download,
  Activity,
  AlertTriangle,
  LineChart
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MeasureMonitor = () => {
  const navigate = useNavigate();

  // Category states for tracking completion
  const [categories, setCategories] = useState({
    analyticsImplementation: {
      name: 'Analytics Implementation',
      items: [
        'Tracking code installation and configuration across all platforms',
        'Goal and conversion setup for each marketing channel',
        'Event tracking and custom metrics definition',
        'Attribution modeling and multi-touch analysis setup',
        'Data quality assurance and validation processes'
      ],
      completed: [],
      score: 6,
      notes: ''
    },
    performanceMonitoring: {
      name: 'Performance Monitoring Systems',
      items: [
        'Real-time dashboard setup and customization',
        'Automated alert and notification configuration',
        'Performance threshold and benchmark establishment',
        'Competitive monitoring and market intelligence',
        'Crisis detection and response monitoring systems'
      ],
      completed: [],
      score: 7,
      notes: ''
    },
    crossPillarMetrics: {
      name: 'Cross-Pillar Metrics Integration',
      items: [
        'Content performance tracking and optimization metrics',
        'PR coverage monitoring and sentiment analysis',
        'SEO ranking and traffic performance measurement',
        'Cross-channel attribution and synergy measurement',
        'Integrated campaign performance evaluation framework'
      ],
      completed: [],
      score: 5,
      notes: ''
    },
    reportingInsights: {
      name: 'Reporting & Insights',
      items: [
        'Automated reporting schedule and distribution setup',
        'Stakeholder-specific dashboard customization',
        'Performance trend analysis and forecasting tools',
        'Insight generation and recommendation systems',
        'ROI calculation and business impact measurement'
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

  // Calculate average analytics maturity score
  const averageScore = Object.values(categories).reduce((sum, cat) => sum + cat.score, 0) / Object.keys(categories).length;

  const categoryIcons = {
    analyticsImplementation: BarChart3,
    performanceMonitoring: Monitor,
    crossPillarMetrics: Target,
    reportingInsights: FileText
  };

  const categoryColors = {
    analyticsImplementation: 'bg-blue-100 border-blue-200',
    performanceMonitoring: 'bg-green-100 border-green-200',
    crossPillarMetrics: 'bg-purple-100 border-purple-200',
    reportingInsights: 'bg-orange-100 border-orange-200'
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
                  M
                </div>
                <h1 className="text-2xl font-bold text-gray-900">Measure & Monitor - Step 5 of 8</h1>
              </div>
              <p className="text-gray-600">Analytics implementation and performance tracking</p>
            </div>
          </div>
          <Badge variant="outline" className="text-blue-600 border-blue-200">
            Analytics & Monitoring
          </Badge>
        </div>

        {/* Progress Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-blue-50 to-indigo-100 border-blue-200">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <Target className="h-5 w-5 text-blue-600" />
                Implementation Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{overallProgress}%</div>
                <Progress value={overallProgress} className="mb-3" />
                <p className="text-sm text-gray-600">{completedItems} of {totalItems} measurement areas complete</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-emerald-100 border-green-200">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-green-600" />
                Analytics Maturity Score
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">{averageScore.toFixed(1)}/10</div>
                <Progress value={averageScore * 10} className="mb-3" />
                <p className="text-sm text-gray-600">Current measurement sophistication</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-violet-100 border-purple-200">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <Activity className="h-5 w-5 text-purple-600" />
                Priority Implementations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">{actionItems.length}</div>
                <p className="text-sm text-gray-600">Critical measurement gaps</p>
                <Button size="sm" variant="outline" className="mt-2">
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Measurement Framework Categories */}
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

                  {/* Analytics Maturity Slider */}
                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Analytics Maturity Level (1-10)</Label>
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

                  {/* Strategy Notes */}
                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Measurement Strategy Notes</Label>
                    <Textarea
                      placeholder="Document analytics setup, tracking requirements, reporting needs..."
                      value={category.notes}
                      onChange={(e) => handleNotesChange(key, e.target.value)}
                      className="min-h-[80px]"
                    />
                  </div>

                  {/* File Upload */}
                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Analytics Documentation</Label>
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
                        <p className="text-sm text-gray-600">Upload tracking configs, reports, and analytics documentation</p>
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

        {/* Action Items and Resources */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-orange-600" />
                Priority Implementation Actions
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
                    <p className="text-gray-600">All measurement implementations are complete!</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Download className="h-5 w-5 text-blue-600" />
                Measurement Resources
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <Download className="h-4 w-4 mr-2" />
                Analytics Configuration Checklist
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Download className="h-4 w-4 mr-2" />
                KPI Tracking Template
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Download className="h-4 w-4 mr-2" />
                Dashboard Setup Guide
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Download className="h-4 w-4 mr-2" />
                Reporting Framework Template
              </Button>
              <div className="pt-2 border-t">
                <Button className="w-full" onClick={() => navigate('/automate/accelerate-growth')}>
                  Continue to Accelerate Growth
                  <LineChart className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default MeasureMonitor;

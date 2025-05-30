
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Checkbox } from '@/components/ui/checkbox';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { 
  ArrowLeft,
  CheckCircle,
  Users,
  Heart,
  Settings,
  Upload,
  FileText,
  Target,
  BarChart3,
  Award,
  Crown,
  Star,
  Shield
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ExecuteExcellence = () => {
  const navigate = useNavigate();

  // State for tracking completion and scores
  const [completedItems, setCompletedItems] = useState<Set<string>>(new Set());
  const [scores, setScores] = useState<Record<string, number>>({});
  const [notes, setNotes] = useState<Record<string, string>>({});

  const excellenceCategories = [
    {
      id: 'quality-assurance',
      title: 'Quality Assurance Framework',
      icon: Shield,
      color: 'bg-green-600',
      description: 'Standards and review processes for all marketing outputs',
      items: [
        { id: 'content-standards', title: 'Content Quality Standards and Review Processes', description: 'Comprehensive content evaluation and approval workflows' },
        { id: 'pr-excellence', title: 'PR Campaign Excellence Criteria and Approval Workflows', description: 'PR quality standards and campaign approval processes' },
        { id: 'seo-validation', title: 'SEO Optimization Quality Control and Validation', description: 'Technical and content SEO quality assurance' },
        { id: 'brand-consistency', title: 'Brand Consistency and Messaging Alignment Verification', description: 'Brand guidelines adherence and message alignment' },
        { id: 'performance-standards', title: 'Performance Standard Establishment and Monitoring', description: 'Quality metrics and continuous monitoring systems' }
      ]
    },
    {
      id: 'team-coordination',
      title: 'Team Coordination & Management',
      icon: Users,
      color: 'bg-blue-600',
      description: 'Cross-functional collaboration and resource optimization',
      items: [
        { id: 'collaboration-protocols', title: 'Cross-functional Team Collaboration Protocols', description: 'Team communication and collaboration frameworks' },
        { id: 'responsibility-matrix', title: 'Role Clarity and Responsibility Matrix Definition', description: 'Clear role definitions and accountability structures' },
        { id: 'communication-standards', title: 'Communication Standards and Escalation Procedures', description: 'Structured communication and escalation processes' },
        { id: 'resource-coordination', title: 'Resource Coordination and Capacity Management', description: 'Optimal resource allocation and capacity planning' },
        { id: 'deadline-management', title: 'Deadline Management and Project Delivery Optimization', description: 'Project timeline and delivery excellence' }
      ]
    },
    {
      id: 'client-success',
      title: 'Client Success Optimization',
      icon: Heart,
      color: 'bg-purple-600',
      description: 'Exceptional client experience and relationship management',
      items: [
        { id: 'client-communication', title: 'Client Communication and Reporting Excellence', description: 'Proactive communication and comprehensive reporting' },
        { id: 'expectation-management', title: 'Expectation Management and Delivery Standards', description: 'Clear expectations and consistent delivery excellence' },
        { id: 'feedback-integration', title: 'Feedback Integration and Relationship Management', description: 'Client feedback loops and relationship strengthening' },
        { id: 'value-demonstration', title: 'Value Demonstration and ROI Communication', description: 'Clear value articulation and ROI reporting' },
        { id: 'satisfaction-measurement', title: 'Client Satisfaction Measurement and Improvement', description: 'Satisfaction tracking and continuous improvement' }
      ]
    },
    {
      id: 'operational-excellence',
      title: 'Operational Excellence',
      icon: Settings,
      color: 'bg-orange-600',
      description: 'Process optimization and continuous improvement',
      items: [
        { id: 'process-standardization', title: 'Process Standardization and Documentation', description: 'Standardized processes and comprehensive documentation' },
        { id: 'efficiency-optimization', title: 'Efficiency Optimization and Waste Elimination', description: 'Process efficiency and resource optimization' },
        { id: 'risk-management', title: 'Risk Management and Mitigation Strategies', description: 'Proactive risk identification and mitigation' },
        { id: 'compliance-practices', title: 'Compliance and Best Practice Adherence', description: 'Industry standards and regulatory compliance' },
        { id: 'training-development', title: 'Continuous Training and Skill Development', description: 'Team capability building and knowledge enhancement' }
      ]
    }
  ];

  const handleItemToggle = (itemId: string) => {
    const newCompleted = new Set(completedItems);
    if (newCompleted.has(itemId)) {
      newCompleted.delete(itemId);
    } else {
      newCompleted.add(itemId);
    }
    setCompletedItems(newCompleted);
  };

  const handleScoreChange = (categoryId: string, score: number) => {
    setScores(prev => ({ ...prev, [categoryId]: score }));
  };

  const handleNotesChange = (categoryId: string, value: string) => {
    setNotes(prev => ({ ...prev, [categoryId]: value }));
  };

  const calculateOverallProgress = () => {
    const totalItems = excellenceCategories.reduce((acc, cat) => acc + cat.items.length, 0);
    return Math.round((completedItems.size / totalItems) * 100);
  };

  const calculateCategoryProgress = (category: any) => {
    const categoryItems = category.items.filter((item: any) => completedItems.has(item.id));
    return Math.round((categoryItems.length / category.items.length) * 100);
  };

  const generateActionItems = () => {
    const incompleteItems = excellenceCategories.flatMap(category =>
      category.items.filter(item => !completedItems.has(item.id))
    );
    return incompleteItems.slice(0, 3);
  };

  return (
    <Layout>
      <div className="p-6">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigate('/automate')}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Strategy Center
            </Button>
            <SidebarTrigger />
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                  E
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Execute Excellence - Step 8 of 8</h1>
                  <p className="text-gray-600">Quality assurance across all marketing outputs</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="text-green-600 border-green-200">
              AUTOMATE Final Step
            </Badge>
            <Badge className="bg-green-600 text-white">
              <Crown className="h-3 w-3 mr-1" />
              Complete
            </Badge>
          </div>
        </div>

        {/* Progress Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card className="lg:col-span-1 bg-gradient-to-br from-green-50 to-emerald-100 border-green-200">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <Award className="h-5 w-5 text-green-600" />
                Excellence Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">{calculateOverallProgress()}%</div>
                <Progress value={calculateOverallProgress()} className="mb-3" />
                <p className="text-sm text-gray-600">Overall completion</p>
                <div className="mt-4 flex justify-center space-x-4 text-sm">
                  <span className="text-green-600">{completedItems.size} completed</span>
                  <span className="text-gray-500">{excellenceCategories.reduce((acc, cat) => acc + cat.items.length, 0)} total</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="lg:col-span-2 bg-green-50 border-green-200">
            <CardHeader>
              <CardTitle className="text-lg text-green-900">Excellence Focus Areas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {excellenceCategories.map((category) => (
                  <div key={category.id} className="text-center">
                    <div className={`w-8 h-8 ${category.color} rounded-lg flex items-center justify-center text-white mx-auto mb-2`}>
                      <category.icon className="h-4 w-4" />
                    </div>
                    <div className="text-lg font-bold text-green-600">{calculateCategoryProgress(category)}%</div>
                    <p className="text-xs text-green-800">{category.title}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Excellence Categories */}
        <div className="space-y-6 mb-8">
          {excellenceCategories.map((category) => (
            <Card key={category.id} className="border-l-4 border-l-green-600">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 ${category.color} rounded-lg flex items-center justify-center text-white`}>
                      <category.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{category.title}</CardTitle>
                      <CardDescription>{category.description}</CardDescription>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-green-600">
                    {calculateCategoryProgress(category)}% Complete
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Checklist Items */}
                  <div className="space-y-3">
                    {category.items.map((item) => (
                      <div key={item.id} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                        <Checkbox
                          id={item.id}
                          checked={completedItems.has(item.id)}
                          onCheckedChange={() => handleItemToggle(item.id)}
                          className="mt-1"
                        />
                        <div className="flex-1">
                          <label htmlFor={item.id} className="font-medium text-gray-900 cursor-pointer">
                            {item.title}
                          </label>
                          <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Scoring and Notes */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-4 border-t">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Excellence Level (1-10)
                      </label>
                      <div className="flex space-x-2">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((score) => (
                          <button
                            key={score}
                            onClick={() => handleScoreChange(category.id, score)}
                            className={`w-8 h-8 rounded ${
                              scores[category.id] === score
                                ? 'bg-green-600 text-white'
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            } text-sm font-medium transition-colors`}
                          >
                            {score}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Excellence Standards Notes
                      </label>
                      <textarea
                        value={notes[category.id] || ''}
                        onChange={(e) => handleNotesChange(category.id, e.target.value)}
                        placeholder="Document your excellence standards and quality criteria..."
                        className="w-full h-20 px-3 py-2 border border-gray-300 rounded-md text-sm resize-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* File Upload */}
                  <div className="pt-2">
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <Upload className="h-4 w-4" />
                      Upload Quality Frameworks & Process Documentation
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Execution Outputs and Completion */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Target className="h-5 w-5 text-green-600" />
                Priority Action Items
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {generateActionItems().map((item, index) => (
                  <div key={item.id} className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg border border-green-200">
                    <div className="w-6 h-6 bg-green-600 rounded text-white text-xs flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{item.title}</p>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
                {generateActionItems().length === 0 && (
                  <div className="text-center py-6 text-gray-500">
                    <Star className="h-8 w-8 mx-auto mb-2 opacity-50" />
                    <p>All excellence areas completed! AUTOMATE methodology fully implemented.</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <FileText className="h-5 w-5 text-green-600" />
                Excellence Outputs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm font-medium text-gray-700">Quality Assurance Checklist</span>
                  <Button size="sm" variant="outline">Generate</Button>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm font-medium text-gray-700">Team Coordination Framework</span>
                  <Button size="sm" variant="outline">Generate</Button>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm font-medium text-gray-700">Client Success Optimization Plan</span>
                  <Button size="sm" variant="outline">Generate</Button>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm font-medium text-gray-700">Operational Excellence Roadmap</span>
                  <Button size="sm" variant="outline">Generate</Button>
                </div>
                <div className="pt-2 border-t">
                  <div className="flex items-center justify-center p-4 bg-green-50 rounded-lg border border-green-200">
                    <Crown className="h-5 w-5 text-green-600 mr-2" />
                    <span className="text-sm font-medium text-green-800">AUTOMATE Methodology Complete!</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default ExecuteExcellence;


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
  Lightbulb,
  TrendingUp,
  RefreshCw,
  Shield,
  Upload,
  FileText,
  Target,
  BarChart3,
  Settings,
  Brain,
  Zap,
  Globe,
  Lock
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TransformEvolve = () => {
  const navigate = useNavigate();

  // State for tracking completion and scores
  const [completedItems, setCompletedItems] = useState<Set<string>>(new Set());
  const [scores, setScores] = useState<Record<string, number>>({});
  const [notes, setNotes] = useState<Record<string, string>>({});

  const transformationCategories = [
    {
      id: 'continuous-improvement',
      title: 'Continuous Improvement Framework',
      icon: RefreshCw,
      color: 'bg-blue-600',
      description: 'Performance review cycles and process optimization',
      items: [
        { id: 'performance-review', title: 'Performance Review and Optimization Cycles', description: 'Regular assessment and refinement of all marketing activities' },
        { id: 'strategy-refinement', title: 'Strategy Refinement Based on Data Insights', description: 'Data-driven strategy adjustments and improvements' },
        { id: 'process-improvement', title: 'Process Improvement and Efficiency Enhancement', description: 'Workflow optimization and operational excellence' },
        { id: 'skill-development', title: 'Team Skill Development and Capability Building', description: 'Continuous learning and professional development' },
        { id: 'quality-enhancement', title: 'Quality Enhancement and Standard Elevation', description: 'Standards improvement and excellence pursuit' }
      ]
    },
    {
      id: 'innovation-adoption',
      title: 'Innovation & Trend Adoption',
      icon: Lightbulb,
      color: 'bg-purple-600',
      description: 'Emerging technology and trend integration',
      items: [
        { id: 'technology-evaluation', title: 'Emerging Technology Evaluation and Integration', description: 'New tech assessment and strategic implementation' },
        { id: 'trend-analysis', title: 'Industry Trend Analysis and Strategic Adaptation', description: 'Market trend monitoring and response strategies' },
        { id: 'competitive-intelligence', title: 'Competitive Intelligence and Market Evolution Response', description: 'Competitor monitoring and market adaptation' },
        { id: 'platform-exploration', title: 'New Platform and Channel Exploration', description: 'Emerging channel evaluation and testing' },
        { id: 'technique-implementation', title: 'Cutting-edge Marketing Technique Implementation', description: 'Advanced methodology adoption and testing' }
      ]
    },
    {
      id: 'strategic-evolution',
      title: 'Strategic Evolution Planning',
      icon: TrendingUp,
      color: 'bg-green-600',
      description: 'Long-term vision and strategic adaptation',
      items: [
        { id: 'vision-alignment', title: 'Long-term Vision Alignment and Strategy Adaptation', description: 'Strategic direction alignment and evolution' },
        { id: 'positioning-evolution', title: 'Market Positioning Evolution and Brand Development', description: 'Brand positioning refinement and growth' },
        { id: 'audience-expansion', title: 'Audience Expansion and Demographic Shifts Response', description: 'Market expansion and demographic adaptation' },
        { id: 'business-model-adaptation', title: 'Business Model Adaptation and Growth Strategy Evolution', description: 'Model refinement and growth strategy development' },
        { id: 'capability-planning', title: 'Organizational Capability and Resource Planning', description: 'Resource optimization and capability development' }
      ]
    },
    {
      id: 'future-proofing',
      title: 'Future-Proofing Strategies',
      icon: Shield,
      color: 'bg-orange-600',
      description: 'Resilience building and disruption preparation',
      items: [
        { id: 'disruption-preparation', title: 'Technology Disruption Preparation and Adaptation', description: 'Disruption readiness and adaptation strategies' },
        { id: 'regulatory-compliance', title: 'Regulatory Change Compliance and Strategy Adjustment', description: 'Compliance monitoring and strategy adaptation' },
        { id: 'volatility-response', title: 'Market Volatility Response and Resilience Building', description: 'Market stability and resilience strategies' },
        { id: 'threat-mitigation', title: 'Competitive Threat Mitigation and Advantage Preservation', description: 'Competitive defense and advantage protection' },
        { id: 'crisis-preparedness', title: 'Crisis Preparedness and Business Continuity Planning', description: 'Crisis planning and continuity strategies' }
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
    const totalItems = transformationCategories.reduce((acc, cat) => acc + cat.items.length, 0);
    return Math.round((completedItems.size / totalItems) * 100);
  };

  const calculateCategoryProgress = (category: any) => {
    const categoryItems = category.items.filter((item: any) => completedItems.has(item.id));
    return Math.round((categoryItems.length / category.items.length) * 100);
  };

  const generateActionItems = () => {
    const incompleteItems = transformationCategories.flatMap(category =>
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
                <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                  T
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Transform & Evolve - Step 7 of 8</h1>
                  <p className="text-gray-600">Continuous improvement across all marketing functions</p>
                </div>
              </div>
            </div>
          </div>
          <Badge variant="outline" className="text-purple-600 border-purple-200">
            AUTOMATE Step 7
          </Badge>
        </div>

        {/* Progress Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card className="lg:col-span-1 bg-gradient-to-br from-purple-50 to-indigo-100 border-purple-200">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <Brain className="h-5 w-5 text-purple-600" />
                Transformation Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">{calculateOverallProgress()}%</div>
                <Progress value={calculateOverallProgress()} className="mb-3" />
                <p className="text-sm text-gray-600">Overall completion</p>
                <div className="mt-4 flex justify-center space-x-4 text-sm">
                  <span className="text-green-600">{completedItems.size} completed</span>
                  <span className="text-gray-500">{transformationCategories.reduce((acc, cat) => acc + cat.items.length, 0)} total</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="lg:col-span-2 bg-purple-50 border-purple-200">
            <CardHeader>
              <CardTitle className="text-lg text-purple-900">Transformation Focus Areas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {transformationCategories.map((category) => (
                  <div key={category.id} className="text-center">
                    <div className={`w-8 h-8 ${category.color} rounded-lg flex items-center justify-center text-white mx-auto mb-2`}>
                      <category.icon className="h-4 w-4" />
                    </div>
                    <div className="text-lg font-bold text-purple-600">{calculateCategoryProgress(category)}%</div>
                    <p className="text-xs text-purple-800">{category.title}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Transformation Categories */}
        <div className="space-y-6 mb-8">
          {transformationCategories.map((category) => (
            <Card key={category.id} className="border-l-4 border-l-purple-600">
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
                  <Badge variant="outline" className="text-purple-600">
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
                        Implementation Readiness (1-10)
                      </label>
                      <div className="flex space-x-2">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((score) => (
                          <button
                            key={score}
                            onClick={() => handleScoreChange(category.id, score)}
                            className={`w-8 h-8 rounded ${
                              scores[category.id] === score
                                ? 'bg-purple-600 text-white'
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
                        Transformation Strategy Notes
                      </label>
                      <textarea
                        value={notes[category.id] || ''}
                        onChange={(e) => handleNotesChange(category.id, e.target.value)}
                        placeholder="Document your transformation approach and key considerations..."
                        className="w-full h-20 px-3 py-2 border border-gray-300 rounded-md text-sm resize-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* File Upload */}
                  <div className="pt-2">
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <Upload className="h-4 w-4" />
                      Upload Evolution Plans & Documentation
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Transformation Outputs and Next Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Target className="h-5 w-5 text-purple-600" />
                Priority Action Items
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {generateActionItems().map((item, index) => (
                  <div key={item.id} className="flex items-start space-x-3 p-3 bg-purple-50 rounded-lg border border-purple-200">
                    <div className="w-6 h-6 bg-purple-600 rounded text-white text-xs flex items-center justify-center font-bold">
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
                    <Brain className="h-8 w-8 mx-auto mb-2 opacity-50" />
                    <p>All transformation areas completed! Ready for execution excellence.</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <FileText className="h-5 w-5 text-purple-600" />
                Transformation Outputs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm font-medium text-gray-700">Innovation Adoption Roadmap</span>
                  <Button size="sm" variant="outline">Generate</Button>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm font-medium text-gray-700">Continuous Improvement Schedule</span>
                  <Button size="sm" variant="outline">Generate</Button>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm font-medium text-gray-700">Strategic Evolution Timeline</span>
                  <Button size="sm" variant="outline">Generate</Button>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm font-medium text-gray-700">Future-Proofing Action Plan</span>
                  <Button size="sm" variant="outline">Generate</Button>
                </div>
                <div className="pt-2 border-t">
                  <p className="text-xs text-gray-500">*Outputs generated based on your transformation strategy</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default TransformEvolve;

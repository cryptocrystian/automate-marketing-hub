
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { 
  ArrowLeft, 
  CheckCircle,
  Target, 
  Upload,
  ChevronDown,
  ChevronRight,
  TrendingUp,
  BarChart3,
  Settings,
  FileText,
  Zap,
  AlertTriangle,
  Goal,
  MessageSquare,
  DollarSign
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

interface StrategyItem {
  id: string;
  question: string;
  completed: boolean;
  notes: string;
  score: number;
}

interface StrategySubCategory {
  id: string;
  title: string;
  description: string;
  items: StrategyItem[];
}

interface StrategyCategory {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
  subCategories: StrategySubCategory[];
  isExpanded: boolean;
}

const TargetStrategy = () => {
  const navigate = useNavigate();
  
  const [strategyCategories, setStrategyCategories] = useState<StrategyCategory[]>([
    {
      id: 'objectives',
      title: 'Business Objectives Alignment',
      description: 'Align marketing strategy with core business goals and revenue targets',
      icon: Goal,
      color: 'bg-blue-600',
      isExpanded: false,
      subCategories: [
        {
          id: 'business-goals',
          title: 'Primary Business Goals & Revenue Targets',
          description: 'Define core business objectives and revenue expectations',
          items: [
            {
              id: 'goal-1',
              question: 'Define primary business revenue targets for the next 12 months',
              completed: false,
              notes: '',
              score: 0
            },
            {
              id: 'goal-2',
              question: 'Identify key business growth objectives and expansion plans',
              completed: false,
              notes: '',
              score: 0
            },
            {
              id: 'goal-3',
              question: 'Establish market share goals and competitive positioning targets',
              completed: false,
              notes: '',
              score: 0
            },
            {
              id: 'goal-4',
              question: 'Set customer acquisition and retention targets',
              completed: false,
              notes: '',
              score: 0
            },
            {
              id: 'goal-5',
              question: 'Define product/service launch or enhancement objectives',
              completed: false,
              notes: '',
              score: 0
            }
          ]
        },
        {
          id: 'marketing-role',
          title: 'Marketing\'s Role in Business Achievement',
          description: 'Clarify how marketing contributes to business success',
          items: [
            {
              id: 'role-1',
              question: 'Define marketing\'s contribution to revenue generation',
              completed: false,
              notes: '',
              score: 0
            },
            {
              id: 'role-2',
              question: 'Establish lead generation and qualification targets',
              completed: false,
              notes: '',
              score: 0
            },
            {
              id: 'role-3',
              question: 'Set brand awareness and recognition objectives',
              completed: false,
              notes: '',
              score: 0
            },
            {
              id: 'role-4',
              question: 'Define customer lifetime value improvement goals',
              completed: false,
              notes: '',
              score: 0
            }
          ]
        },
        {
          id: 'measurement',
          title: 'Success Metrics & Measurement Framework',
          description: 'Establish comprehensive measurement and success criteria',
          items: [
            {
              id: 'metric-1',
              question: 'Define primary success metrics for each business objective',
              completed: false,
              notes: '',
              score: 0
            },
            {
              id: 'metric-2',
              question: 'Establish baseline measurements and current performance',
              completed: false,
              notes: '',
              score: 0
            },
            {
              id: 'metric-3',
              question: 'Set realistic but ambitious improvement targets',
              completed: false,
              notes: '',
              score: 0
            },
            {
              id: 'metric-4',
              question: 'Create measurement cadence and reporting schedule',
              completed: false,
              notes: '',
              score: 0
            }
          ]
        }
      ]
    },
    {
      id: 'campaigns',
      title: 'Integrated Campaign Strategy',
      description: 'Develop comprehensive cross-pillar campaign strategies and integration plans',
      icon: Zap,
      color: 'bg-green-600',
      isExpanded: false,
      subCategories: [
        {
          id: 'content-pillars',
          title: 'Content Pillar Strategy & Themes',
          description: 'Define strategic content themes and pillar framework',
          items: [
            {
              id: 'pillar-1',
              question: 'Identify 3-5 core content pillars aligned with business objectives',
              completed: false,
              notes: '',
              score: 0
            },
            {
              id: 'pillar-2',
              question: 'Define content themes and messaging for each pillar',
              completed: false,
              notes: '',
              score: 0
            },
            {
              id: 'pillar-3',
              question: 'Create content calendar framework with pillar rotation',
              completed: false,
              notes: '',
              score: 0
            },
            {
              id: 'pillar-4',
              question: 'Establish thought leadership topics and expertise positioning',
              completed: false,
              notes: '',
              score: 0
            }
          ]
        },
        {
          id: 'pr-strategy',
          title: 'PR Campaign Objectives & Media Targeting',
          description: 'Strategic public relations and media outreach planning',
          items: [
            {
              id: 'pr-1',
              question: 'Define PR objectives and desired media outcomes',
              completed: false,
              notes: '',
              score: 0
            },
            {
              id: 'pr-2',
              question: 'Identify target media outlets and journalist relationships',
              completed: false,
              notes: '',
              score: 0
            },
            {
              id: 'pr-3',
              question: 'Develop newsworthy story angles and announcement strategy',
              completed: false,
              notes: '',
              score: 0
            }
          ]
        },
        {
          id: 'seo-goals',
          title: 'SEO Goals & Keyword Targeting Strategy',
          description: 'Strategic search optimization and keyword planning',
          items: [
            {
              id: 'seo-1',
              question: 'Define primary keyword targets and search visibility goals',
              completed: false,
              notes: '',
              score: 0
            },
            {
              id: 'seo-2',
              question: 'Establish organic traffic growth targets and timeline',
              completed: false,
              notes: '',
              score: 0
            },
            {
              id: 'seo-3',
              question: 'Plan content strategy for target keyword optimization',
              completed: false,
              notes: '',
              score: 0
            }
          ]
        }
      ]
    },
    {
      id: 'kpis',
      title: 'KPI Definition & Measurement',
      description: 'Establish comprehensive KPI framework and measurement strategy',
      icon: BarChart3,
      color: 'bg-indigo-600',
      isExpanded: false,
      subCategories: [
        {
          id: 'primary-kpis',
          title: 'Primary KPIs for Each Marketing Pillar',
          description: 'Define key performance indicators for all marketing activities',
          items: [
            {
              id: 'kpi-1',
              question: 'Establish content marketing KPIs (engagement, reach, conversions)',
              completed: false,
              notes: '',
              score: 0
            },
            {
              id: 'kpi-2',
              question: 'Define PR and media relations success metrics',
              completed: false,
              notes: '',
              score: 0
            },
            {
              id: 'kpi-3',
              question: 'Set SEO performance indicators and tracking metrics',
              completed: false,
              notes: '',
              score: 0
            },
            {
              id: 'kpi-4',
              question: 'Establish social media and community engagement KPIs',
              completed: false,
              notes: '',
              score: 0
            }
          ]
        },
        {
          id: 'indicators',
          title: 'Leading vs Lagging Indicator Identification',
          description: 'Classify metrics for proactive performance management',
          items: [
            {
              id: 'ind-1',
              question: 'Identify leading indicators for early performance prediction',
              completed: false,
              notes: '',
              score: 0
            },
            {
              id: 'ind-2',
              question: 'Define lagging indicators for results measurement',
              completed: false,
              notes: '',
              score: 0
            },
            {
              id: 'ind-3',
              question: 'Create balanced scorecard with both indicator types',
              completed: false,
              notes: '',
              score: 0
            }
          ]
        },
        {
          id: 'benchmarks',
          title: 'Benchmark Establishment & Target Setting',
          description: 'Set realistic targets based on industry benchmarks',
          items: [
            {
              id: 'bench-1',
              question: 'Research industry benchmarks for each KPI category',
              completed: false,
              notes: '',
              score: 0
            },
            {
              id: 'bench-2',
              question: 'Set realistic but ambitious targets for each KPI',
              completed: false,
              notes: '',
              score: 0
            },
            {
              id: 'bench-3',
              question: 'Establish performance thresholds and success criteria',
              completed: false,
              notes: '',
              score: 0
            }
          ]
        }
      ]
    },
    {
      id: 'positioning',
      title: 'Strategic Positioning & Messaging',
      description: 'Define brand positioning, messaging framework, and competitive strategy',
      icon: MessageSquare,
      color: 'bg-purple-600',
      isExpanded: false,
      subCategories: [
        {
          id: 'brand-position',
          title: 'Brand Positioning & Unique Value Proposition',
          description: 'Establish clear brand positioning in the marketplace',
          items: [
            {
              id: 'pos-1',
              question: 'Define unique value proposition and competitive advantages',
              completed: false,
              notes: '',
              score: 0
            },
            {
              id: 'pos-2',
              question: 'Establish brand personality and voice characteristics',
              completed: false,
              notes: '',
              score: 0
            },
            {
              id: 'pos-3',
              question: 'Create positioning statement and brand promise',
              completed: false,
              notes: '',
              score: 0
            },
            {
              id: 'pos-4',
              question: 'Define target market positioning and segment focus',
              completed: false,
              notes: '',
              score: 0
            }
          ]
        },
        {
          id: 'messaging',
          title: 'Core Messaging Framework & Key Narratives',
          description: 'Develop comprehensive messaging architecture',
          items: [
            {
              id: 'msg-1',
              question: 'Create core messaging hierarchy and key messages',
              completed: false,
              notes: '',
              score: 0
            },
            {
              id: 'msg-2',
              question: 'Develop proof points and supporting evidence',
              completed: false,
              notes: '',
              score: 0
            },
            {
              id: 'msg-3',
              question: 'Establish narrative themes and storytelling framework',
              completed: false,
              notes: '',
              score: 0
            }
          ]
        },
        {
          id: 'differentiation',
          title: 'Competitive Differentiation Strategy',
          description: 'Strategic approach to competitive positioning',
          items: [
            {
              id: 'diff-1',
              question: 'Analyze competitive positioning and identify gaps',
              completed: false,
              notes: '',
              score: 0
            },
            {
              id: 'diff-2',
              question: 'Define differentiation strategy and unique angles',
              completed: false,
              notes: '',
              score: 0
            },
            {
              id: 'diff-3',
              question: 'Create competitive response and counter-positioning plan',
              completed: false,
              notes: '',
              score: 0
            }
          ]
        }
      ]
    }
  ]);

  const toggleCategory = (categoryId: string) => {
    setStrategyCategories(prev => 
      prev.map(cat => 
        cat.id === categoryId 
          ? { ...cat, isExpanded: !cat.isExpanded }
          : cat
      )
    );
  };

  const updateItem = (categoryId: string, subCategoryId: string, itemId: string, updates: Partial<StrategyItem>) => {
    setStrategyCategories(prev =>
      prev.map(cat =>
        cat.id === categoryId
          ? {
              ...cat,
              subCategories: cat.subCategories.map(subCat =>
                subCat.id === subCategoryId
                  ? {
                      ...subCat,
                      items: subCat.items.map(item =>
                        item.id === itemId ? { ...item, ...updates } : item
                      )
                    }
                  : subCat
              )
            }
          : cat
      )
    );
  };

  const calculateCategoryProgress = (category: StrategyCategory) => {
    const totalItems = category.subCategories.reduce((acc, subCat) => acc + subCat.items.length, 0);
    const completedItems = category.subCategories.reduce(
      (acc, subCat) => acc + subCat.items.filter(item => item.completed).length,
      0
    );
    return totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0;
  };

  const calculateSubCategoryProgress = (subCategory: StrategySubCategory) => {
    const completedItems = subCategory.items.filter(item => item.completed).length;
    return Math.round((completedItems / subCategory.items.length) * 100);
  };

  const calculateOverallProgress = () => {
    const allItems = strategyCategories.reduce(
      (acc, cat) => acc + cat.subCategories.reduce((subAcc, subCat) => subAcc + subCat.items.length, 0),
      0
    );
    const completedItems = strategyCategories.reduce(
      (acc, cat) => acc + cat.subCategories.reduce(
        (subAcc, subCat) => subAcc + subCat.items.filter(item => item.completed).length,
        0
      ),
      0
    );
    return allItems > 0 ? Math.round((completedItems / allItems) * 100) : 0;
  };

  const calculateCategoryScore = (category: StrategyCategory) => {
    const allScores = category.subCategories.reduce(
      (acc, subCat) => [...acc, ...subCat.items.filter(item => item.score > 0).map(item => item.score)],
      [] as number[]
    );
    if (allScores.length === 0) return 0;
    return Math.round(allScores.reduce((acc, score) => acc + score, 0) / allScores.length);
  };

  const generateActionItems = (category: StrategyCategory) => {
    const lowScoreItems = category.subCategories.reduce(
      (acc, subCat) => [...acc, ...subCat.items.filter(item => item.score > 0 && item.score <= 6)],
      [] as StrategyItem[]
    );
    return lowScoreItems.slice(0, 3);
  };

  const overallProgress = calculateOverallProgress();

  return (
    <Layout>
      <div className="p-6">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <SidebarTrigger />
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigate('/automate')}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Strategy Center
            </Button>
          </div>
          <Badge variant="outline" className="text-blue-600 border-blue-200">
            Step 3 of 8
          </Badge>
        </div>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              T
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Target & Strategy</h1>
              <p className="text-gray-600">Strategic goal setting and KPI definition across all pillars</p>
            </div>
          </div>
          
          {/* Overall Progress */}
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-blue-900">Strategic Planning Progress</h3>
                <span className="text-2xl font-bold text-blue-600">{overallProgress}%</span>
              </div>
              <Progress value={overallProgress} className="mb-2" />
              <p className="text-sm text-blue-700">
                Complete all strategic planning areas to move to the next step
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Strategy Categories */}
        <div className="space-y-6">
          {strategyCategories.map((category) => {
            const categoryProgress = calculateCategoryProgress(category);
            const categoryScore = calculateCategoryScore(category);
            const actionItems = generateActionItems(category);
            const IconComponent = category.icon;

            return (
              <Card key={category.id} className="overflow-hidden">
                <Collapsible 
                  open={category.isExpanded}
                  onOpenChange={() => toggleCategory(category.id)}
                >
                  <CollapsibleTrigger asChild>
                    <CardHeader className="cursor-pointer hover:bg-gray-50 transition-colors">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className={`w-10 h-10 ${category.color} rounded-lg flex items-center justify-center text-white`}>
                            <IconComponent className="h-5 w-5" />
                          </div>
                          <div>
                            <CardTitle className="text-lg">{category.title}</CardTitle>
                            <CardDescription>{category.description}</CardDescription>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="text-right">
                            <div className="text-sm text-gray-500">Progress</div>
                            <div className="font-semibold">{categoryProgress}%</div>
                          </div>
                          {categoryScore > 0 && (
                            <div className="text-right">
                              <div className="text-sm text-gray-500">Score</div>
                              <div className="font-semibold">{categoryScore}/10</div>
                            </div>
                          )}
                          {category.isExpanded ? (
                            <ChevronDown className="h-5 w-5 text-gray-400" />
                          ) : (
                            <ChevronRight className="h-5 w-5 text-gray-400" />
                          )}
                        </div>
                      </div>
                    </CardHeader>
                  </CollapsibleTrigger>
                  
                  <CollapsibleContent>
                    <CardContent className="pt-0">
                      <Progress value={categoryProgress} className="mb-6" />
                      
                      {/* Sub-categories */}
                      <div className="space-y-8">
                        {category.subCategories.map((subCategory) => {
                          const subProgress = calculateSubCategoryProgress(subCategory);
                          
                          return (
                            <div key={subCategory.id} className="border-l-4 border-l-blue-200 pl-6">
                              <div className="mb-4">
                                <h4 className="text-lg font-semibold text-gray-900 mb-2">{subCategory.title}</h4>
                                <p className="text-sm text-gray-600 mb-3">{subCategory.description}</p>
                                <div className="flex items-center gap-4 mb-4">
                                  <div className="flex-1">
                                    <Progress value={subProgress} className="h-2" />
                                  </div>
                                  <span className="text-sm font-medium text-gray-600">{subProgress}%</span>
                                </div>
                              </div>
                              
                              <div className="space-y-4">
                                {subCategory.items.map((item) => (
                                  <div key={item.id} className="border rounded-lg p-4 bg-white shadow-sm">
                                    <div className="flex items-start space-x-3 mb-4">
                                      <Checkbox
                                        checked={item.completed}
                                        onCheckedChange={(checked) =>
                                          updateItem(category.id, subCategory.id, item.id, { completed: !!checked })
                                        }
                                        className="mt-1"
                                      />
                                      <div className="flex-1">
                                        <p className="font-medium text-gray-900 mb-3">{item.question}</p>
                                        
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                          <div>
                                            <label className="text-sm font-medium text-gray-700 mb-2 block">
                                              Completeness Score (1-10)
                                            </label>
                                            <Input
                                              type="number"
                                              min="1"
                                              max="10"
                                              value={item.score || ''}
                                              onChange={(e) =>
                                                updateItem(category.id, subCategory.id, item.id, {
                                                  score: parseInt(e.target.value) || 0
                                                })
                                              }
                                              placeholder="Rate 1-10"
                                              className="w-full"
                                            />
                                          </div>
                                          
                                          <div>
                                            <label className="text-sm font-medium text-gray-700 mb-2 block">
                                              Upload Strategy Documents
                                            </label>
                                            <Button variant="outline" size="sm" className="w-full">
                                              <Upload className="h-4 w-4 mr-2" />
                                              Upload Files
                                            </Button>
                                          </div>
                                        </div>
                                        
                                        <div className="mt-4">
                                          <label className="text-sm font-medium text-gray-700 mb-2 block">
                                            Strategic Notes & Details
                                          </label>
                                          <Textarea
                                            value={item.notes}
                                            onChange={(e) =>
                                              updateItem(category.id, subCategory.id, item.id, { notes: e.target.value })
                                            }
                                            placeholder="Add strategic details, targets, timelines, and specific plans..."
                                            className="min-h-[80px]"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {/* Action Items for this category */}
                      {category.isExpanded && actionItems.length > 0 && (
                        <div className="mt-8 p-4 bg-red-50 border border-red-200 rounded-lg">
                          <h5 className="font-semibold text-red-900 mb-3 flex items-center gap-2">
                            <AlertTriangle className="h-4 w-4" />
                            Strategic Gaps for {category.title}
                          </h5>
                          <div className="space-y-2">
                            {actionItems.map((item) => (
                              <div key={item.id} className="text-sm text-red-800">
                                • {item.question} (Score: {item.score}/10)
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </CollapsibleContent>
                </Collapsible>
              </Card>
            );
          })}
        </div>

        {/* Strategic Summary Section */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-blue-600" />
              Strategic Summary & Next Steps
            </CardTitle>
            <CardDescription>
              Based on your strategic planning, here are the key priorities and action items
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">High Priority Strategic Areas</h4>
                <div className="space-y-2">
                  {strategyCategories.map(category => {
                    const criticalItems = generateActionItems(category).filter(item => item.score > 0 && item.score <= 4);
                    return criticalItems.slice(0, 2).map(item => (
                      <div key={item.id} className="p-3 bg-red-50 border border-red-200 rounded-lg">
                        <div className="flex items-center justify-between mb-1">
                          <Badge variant="destructive" className="text-xs">Critical</Badge>
                          <span className="text-xs text-red-700">Score: {item.score}/10</span>
                        </div>
                        <p className="text-sm text-red-900 font-medium">{item.question}</p>
                      </div>
                    ));
                  })}
                </div>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">Medium Priority Areas</h4>
                <div className="space-y-2">
                  {strategyCategories.map(category => {
                    const mediumItems = generateActionItems(category).filter(item => item.score > 4 && item.score <= 6);
                    return mediumItems.slice(0, 2).map(item => (
                      <div key={item.id} className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                        <div className="flex items-center justify-between mb-1">
                          <Badge variant="secondary" className="text-xs bg-blue-100 text-blue-800">Important</Badge>
                          <span className="text-xs text-blue-700">Score: {item.score}/10</span>
                        </div>
                        <p className="text-sm text-blue-900 font-medium">{item.question}</p>
                      </div>
                    ));
                  })}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Bottom Actions */}
        <div className="flex justify-between items-center mt-8 pt-6 border-t">
          <Button variant="outline" onClick={() => navigate('/automate')}>
            Save Strategic Plan
          </Button>
          
          <div className="flex gap-3">
            <Button variant="outline">
              <FileText className="h-4 w-4 mr-2" />
              Export Strategy Document
            </Button>
            <Button 
              disabled={overallProgress < 100}
              className="bg-blue-600 hover:bg-blue-700"
            >
              Continue to Next Step
              <ArrowLeft className="h-4 w-4 ml-2 rotate-180" />
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TargetStrategy;

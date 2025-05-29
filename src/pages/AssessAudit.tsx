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
  BarChart3, 
  Upload,
  ChevronDown,
  ChevronRight,
  TrendingUp,
  Users,
  Search,
  Settings,
  FileText,
  Target,
  Zap,
  AlertTriangle
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

interface AuditItem {
  id: string;
  question: string;
  completed: boolean;
  notes: string;
  score: number;
}

interface AuditSubCategory {
  id: string;
  title: string;
  description: string;
  items: AuditItem[];
}

interface AuditCategory {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
  subCategories: AuditSubCategory[];
  isExpanded: boolean;
}

const AssessAudit = () => {
  const navigate = useNavigate();
  
  const [auditCategories, setAuditCategories] = useState<AuditCategory[]>([
    {
      id: 'content',
      title: 'Content Marketing Audit',
      description: 'Comprehensive evaluation of current content performance, strategy, quality, and operations',
      icon: BarChart3,
      color: 'bg-blue-600',
      isExpanded: false,
      subCategories: [
        {
          id: 'performance',
          title: 'Current Content Performance Analysis',
          description: 'Analyze existing content performance metrics and ROI',
          items: [
            {
              id: 'perf-1',
              question: 'Assess content volume and publishing frequency across all channels',
              completed: false,
              notes: '',
              score: 0
            },
            {
              id: 'perf-2',
              question: 'Identify and analyze top-performing content pieces by engagement metrics',
              completed: false,
              notes: '',
              score: 0
            },
            {
              id: 'perf-3',
              question: 'Review content engagement metrics (views, shares, comments, time on page)',
              completed: false,
              notes: '',
              score: 0
            },
            {
              id: 'perf-4',
              question: 'Track content conversion rates and calculate content ROI',
              completed: false,
              notes: '',
              score: 0
            },
            {
              id: 'perf-5',
              question: 'Evaluate performance by content format (blog, video, social, email, infographics)',
              completed: false,
              notes: '',
              score: 0
            }
          ]
        },
        {
          id: 'strategy',
          title: 'Content Strategy Evaluation',
          description: 'Review strategic alignment and planning processes',
          items: [
            {
              id: 'strat-1',
              question: 'Evaluate content goals alignment with overall business objectives',
              completed: false,
              notes: '',
              score: 0
            },
            {
              id: 'strat-2',
              question: 'Review target audience definitions and persona documentation',
              completed: false,
              notes: '',
              score: 0
            },
            {
              id: 'strat-3',
              question: 'Assess content pillars and topic strategy effectiveness',
              completed: false,
              notes: '',
              score: 0
            },
            {
              id: 'strat-4',
              question: 'Evaluate editorial calendar and content planning processes',
              completed: false,
              notes: '',
              score: 0
            },
            {
              id: 'strat-5',
              question: 'Analyze content distribution strategy across all channels',
              completed: false,
              notes: '',
              score: 0
            }
          ]
        },
        {
          id: 'quality',
          title: 'Content Quality Assessment',
          description: 'Evaluate content quality, consistency, and user experience',
          items: [
            {
              id: 'qual-1',
              question: 'Review brand voice and messaging consistency across all content',
              completed: false,
              notes: '',
              score: 0
            },
            {
              id: 'qual-2',
              question: 'Assess content optimization for SEO and user engagement',
              completed: false,
              notes: '',
              score: 0
            },
            {
              id: 'qual-3',
              question: 'Evaluate visual content quality and design consistency',
              completed: false,
              notes: '',
              score: 0
            },
            {
              id: 'qual-4',
              question: 'Audit content accessibility and user experience factors',
              completed: false,
              notes: '',
              score: 0
            },
            {
              id: 'qual-5',
              question: 'Review content accuracy, fact-checking, and quality control processes',
              completed: false,
              notes: '',
              score: 0
            }
          ]
        },
        {
          id: 'operations',
          title: 'Content Operations Review',
          description: 'Analyze workflows, tools, and operational efficiency',
          items: [
            {
              id: 'ops-1',
              question: 'Document content creation workflows and approval processes',
              completed: false,
              notes: '',
              score: 0
            },
            {
              id: 'ops-2',
              question: 'Assess team roles, responsibilities, and resource allocation',
              completed: false,
              notes: '',
              score: 0
            },
            {
              id: 'ops-3',
              question: 'Evaluate content management systems and production tools',
              completed: false,
              notes: '',
              score: 0
            },
            {
              id: 'ops-4',
              question: 'Review content promotion and amplification strategies',
              completed: false,
              notes: '',
              score: 0
            },
            {
              id: 'ops-5',
              question: 'Analyze content repurposing and lifecycle management processes',
              completed: false,
              notes: '',
              score: 0
            }
          ]
        }
      ]
    },
    {
      id: 'pr',
      title: 'PR & Media Relations Audit',
      description: 'Review current media coverage, relationships, and reputation management',
      icon: Users,
      color: 'bg-green-600',
      isExpanded: false,
      subCategories: [
        {
          id: 'pr-basic',
          title: 'Basic PR Assessment',
          description: 'Fundamental PR evaluation',
          items: [
            {
              id: 'pr-1',
              question: 'Inventory current media relationships and contact database',
              completed: false,
              notes: '',
              score: 0
            },
            {
              id: 'pr-2',
              question: 'Analyze recent media coverage and sentiment',
              completed: false,
              notes: '',
              score: 0
            },
            {
              id: 'pr-3',
              question: 'Review crisis communication preparedness',
              completed: false,
              notes: '',
              score: 0
            }
          ]
        }
      ]
    },
    {
      id: 'seo',
      title: 'SEO Performance Audit',
      description: 'Comprehensive analysis of search rankings, traffic, and technical SEO',
      icon: Search,
      color: 'bg-indigo-600',
      isExpanded: false,
      subCategories: [
        {
          id: 'seo-basic',
          title: 'Basic SEO Assessment',
          description: 'Fundamental SEO evaluation',
          items: [
            {
              id: 'seo-1',
              question: 'Conduct technical SEO audit (site speed, mobile, crawlability)',
              completed: false,
              notes: '',
              score: 0
            },
            {
              id: 'seo-2',
              question: 'Analyze current keyword rankings and search visibility',
              completed: false,
              notes: '',
              score: 0
            }
          ]
        }
      ]
    },
    {
      id: 'competitor',
      title: 'Competitor Analysis',
      description: 'Strategic analysis of competitive positioning and market opportunities',
      icon: TrendingUp,
      color: 'bg-purple-600',
      isExpanded: false,
      subCategories: [
        {
          id: 'comp-basic',
          title: 'Basic Competitor Assessment',
          description: 'Fundamental competitor evaluation',
          items: [
            {
              id: 'comp-1',
              question: 'Identify and profile top 5 direct competitors',
              completed: false,
              notes: '',
              score: 0
            }
          ]
        }
      ]
    },
    {
      id: 'martech',
      title: 'Marketing Technology Stack Audit',
      description: 'Evaluation of current tools, integrations, and operational efficiency',
      icon: Settings,
      color: 'bg-gray-600',
      isExpanded: false,
      subCategories: [
        {
          id: 'tech-basic',
          title: 'Basic MarTech Assessment',
          description: 'Fundamental technology evaluation',
          items: [
            {
              id: 'tech-1',
              question: 'Inventory all marketing tools and platforms currently in use',
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
    setAuditCategories(prev => 
      prev.map(cat => 
        cat.id === categoryId 
          ? { ...cat, isExpanded: !cat.isExpanded }
          : cat
      )
    );
  };

  const updateItem = (categoryId: string, subCategoryId: string, itemId: string, updates: Partial<AuditItem>) => {
    setAuditCategories(prev =>
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

  const calculateCategoryProgress = (category: AuditCategory) => {
    const totalItems = category.subCategories.reduce((acc, subCat) => acc + subCat.items.length, 0);
    const completedItems = category.subCategories.reduce(
      (acc, subCat) => acc + subCat.items.filter(item => item.completed).length,
      0
    );
    return totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0;
  };

  const calculateSubCategoryProgress = (subCategory: AuditSubCategory) => {
    const completedItems = subCategory.items.filter(item => item.completed).length;
    return Math.round((completedItems / subCategory.items.length) * 100);
  };

  const calculateOverallProgress = () => {
    const allItems = auditCategories.reduce(
      (acc, cat) => acc + cat.subCategories.reduce((subAcc, subCat) => subAcc + subCat.items.length, 0),
      0
    );
    const completedItems = auditCategories.reduce(
      (acc, cat) => acc + cat.subCategories.reduce(
        (subAcc, subCat) => subAcc + subCat.items.filter(item => item.completed).length,
        0
      ),
      0
    );
    return allItems > 0 ? Math.round((completedItems / allItems) * 100) : 0;
  };

  const calculateCategoryScore = (category: AuditCategory) => {
    const allScores = category.subCategories.reduce(
      (acc, subCat) => [...acc, ...subCat.items.filter(item => item.score > 0).map(item => item.score)],
      [] as number[]
    );
    if (allScores.length === 0) return 0;
    return Math.round(allScores.reduce((acc, score) => acc + score, 0) / allScores.length);
  };

  const generateActionItems = (category: AuditCategory) => {
    const lowScoreItems = category.subCategories.reduce(
      (acc, subCat) => [...acc, ...subCat.items.filter(item => item.score > 0 && item.score <= 6)],
      [] as AuditItem[]
    );
    return lowScoreItems.slice(0, 3); // Top 3 priority items
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
            Step 1 of 8
          </Badge>
        </div>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              A
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Assess & Audit</h1>
              <p className="text-gray-600">Comprehensive marketing audit across all channels and pillars</p>
            </div>
          </div>
          
          {/* Overall Progress */}
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-blue-900">Overall Audit Progress</h3>
                <span className="text-2xl font-bold text-blue-600">{overallProgress}%</span>
              </div>
              <Progress value={overallProgress} className="mb-2" />
              <p className="text-sm text-blue-700">
                Complete all audit categories to move to the next step
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Audit Categories */}
        <div className="space-y-6">
          {auditCategories.map((category) => {
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
                                              Score (1-10)
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
                                              Upload Supporting Files
                                            </label>
                                            <Button variant="outline" size="sm" className="w-full">
                                              <Upload className="h-4 w-4 mr-2" />
                                              Upload Files
                                            </Button>
                                          </div>
                                        </div>
                                        
                                        <div className="mt-4">
                                          <label className="text-sm font-medium text-gray-700 mb-2 block">
                                            Notes & Findings
                                          </label>
                                          <Textarea
                                            value={item.notes}
                                            onChange={(e) =>
                                              updateItem(category.id, subCategory.id, item.id, { notes: e.target.value })
                                            }
                                            placeholder="Add your findings, observations, and recommendations..."
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
                            Priority Action Items for {category.title}
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

        {/* Overall Action Items Section */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-blue-600" />
              Generated Action Items & Recommendations
            </CardTitle>
            <CardDescription>
              Based on your audit findings, here are the priority action items across all categories
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">High Priority</h4>
                <div className="space-y-2">
                  {auditCategories.map(category => {
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
                <h4 className="font-semibold text-gray-900">Medium Priority</h4>
                <div className="space-y-2">
                  {auditCategories.map(category => {
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
            Save Progress
          </Button>
          
          <div className="flex gap-3">
            <Button variant="outline">
              <FileText className="h-4 w-4 mr-2" />
              Export Audit Report
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

export default AssessAudit;

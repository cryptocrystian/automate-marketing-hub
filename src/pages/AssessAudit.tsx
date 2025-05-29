
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
  Settings
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

interface AuditCategory {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
  items: AuditItem[];
  isExpanded: boolean;
}

const AssessAudit = () => {
  const navigate = useNavigate();
  
  const [auditCategories, setAuditCategories] = useState<AuditCategory[]>([
    {
      id: 'content',
      title: 'Content Marketing Audit',
      description: 'Evaluate current content performance, identify gaps, and discover opportunities',
      icon: BarChart3,
      color: 'bg-blue-600',
      isExpanded: false,
      items: [
        {
          id: 'content-1',
          question: 'Document all existing content assets and their performance metrics',
          completed: false,
          notes: '',
          score: 0
        },
        {
          id: 'content-2',
          question: 'Analyze content gaps across the customer journey',
          completed: false,
          notes: '',
          score: 0
        },
        {
          id: 'content-3',
          question: 'Evaluate content quality and relevance to target audience',
          completed: false,
          notes: '',
          score: 0
        },
        {
          id: 'content-4',
          question: 'Review content distribution channels and effectiveness',
          completed: false,
          notes: '',
          score: 0
        },
        {
          id: 'content-5',
          question: 'Assess content ROI and conversion performance',
          completed: false,
          notes: '',
          score: 0
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
        },
        {
          id: 'pr-4',
          question: 'Evaluate thought leadership positioning and opportunities',
          completed: false,
          notes: '',
          score: 0
        },
        {
          id: 'pr-5',
          question: 'Assess PR measurement and ROI tracking capabilities',
          completed: false,
          notes: '',
          score: 0
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
        },
        {
          id: 'seo-3',
          question: 'Review on-page optimization across key landing pages',
          completed: false,
          notes: '',
          score: 0
        },
        {
          id: 'seo-4',
          question: 'Evaluate backlink profile and domain authority',
          completed: false,
          notes: '',
          score: 0
        },
        {
          id: 'seo-5',
          question: 'Assess local SEO performance (if applicable)',
          completed: false,
          notes: '',
          score: 0
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
      items: [
        {
          id: 'competitor-1',
          question: 'Identify and profile top 5 direct competitors',
          completed: false,
          notes: '',
          score: 0
        },
        {
          id: 'competitor-2',
          question: 'Analyze competitor content strategies and topics',
          completed: false,
          notes: '',
          score: 0
        },
        {
          id: 'competitor-3',
          question: 'Review competitor SEO and keyword strategies',
          completed: false,
          notes: '',
          score: 0
        },
        {
          id: 'competitor-4',
          question: 'Evaluate competitor social media presence and engagement',
          completed: false,
          notes: '',
          score: 0
        },
        {
          id: 'competitor-5',
          question: 'Assess competitive pricing and positioning strategies',
          completed: false,
          notes: '',
          score: 0
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
      items: [
        {
          id: 'martech-1',
          question: 'Inventory all marketing tools and platforms currently in use',
          completed: false,
          notes: '',
          score: 0
        },
        {
          id: 'martech-2',
          question: 'Evaluate tool integrations and data flow efficiency',
          completed: false,
          notes: '',
          score: 0
        },
        {
          id: 'martech-3',
          question: 'Assess user adoption and training needs across team',
          completed: false,
          notes: '',
          score: 0
        },
        {
          id: 'martech-4',
          question: 'Review tool ROI and cost optimization opportunities',
          completed: false,
          notes: '',
          score: 0
        },
        {
          id: 'martech-5',
          question: 'Identify gaps in current technology stack',
          completed: false,
          notes: '',
          score: 0
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

  const updateItem = (categoryId: string, itemId: string, updates: Partial<AuditItem>) => {
    setAuditCategories(prev =>
      prev.map(cat =>
        cat.id === categoryId
          ? {
              ...cat,
              items: cat.items.map(item =>
                item.id === itemId ? { ...item, ...updates } : item
              )
            }
          : cat
      )
    );
  };

  const calculateCategoryProgress = (category: AuditCategory) => {
    const completedItems = category.items.filter(item => item.completed).length;
    return Math.round((completedItems / category.items.length) * 100);
  };

  const calculateOverallProgress = () => {
    const totalItems = auditCategories.reduce((acc, cat) => acc + cat.items.length, 0);
    const completedItems = auditCategories.reduce(
      (acc, cat) => acc + cat.items.filter(item => item.completed).length,
      0
    );
    return Math.round((completedItems / totalItems) * 100);
  };

  const calculateCategoryScore = (category: AuditCategory) => {
    const scores = category.items.filter(item => item.score > 0).map(item => item.score);
    if (scores.length === 0) return 0;
    return Math.round(scores.reduce((acc, score) => acc + score, 0) / scores.length);
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
                      
                      <div className="space-y-6">
                        {category.items.map((item) => (
                          <div key={item.id} className="border rounded-lg p-4 bg-gray-50">
                            <div className="flex items-start space-x-3 mb-4">
                              <Checkbox
                                checked={item.completed}
                                onCheckedChange={(checked) =>
                                  updateItem(category.id, item.id, { completed: !!checked })
                                }
                                className="mt-1"
                              />
                              <div className="flex-1">
                                <p className="font-medium text-gray-900 mb-2">{item.question}</p>
                                
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
                                        updateItem(category.id, item.id, {
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
                                      updateItem(category.id, item.id, { notes: e.target.value })
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
                    </CardContent>
                  </CollapsibleContent>
                </Collapsible>
              </Card>
            );
          })}
        </div>

        {/* Action Items Section */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              Generated Action Items
            </CardTitle>
            <CardDescription>
              Based on your audit findings, here are the priority action items
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-red-900">High Priority</span>
                  <Badge variant="destructive">Critical</Badge>
                </div>
                <p className="text-sm text-red-800 mt-1">
                  Complete audit items to generate specific action items
                </p>
              </div>
              
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-blue-900">Medium Priority</span>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">Important</Badge>
                </div>
                <p className="text-sm text-blue-800 mt-1">
                  Action items will appear as you complete audit categories
                </p>
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
              Export Audit Report
            </Button>
            <Button 
              disabled={overallProgress < 100}
              className="bg-blue-600 hover:bg-blue-700"
            >
              Continue to Next Step
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AssessAudit;


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
  Users,
  Target, 
  Upload,
  ChevronDown,
  ChevronRight,
  UserCheck,
  MapPin,
  TrendingUp,
  FileText,
  AlertTriangle,
  Brain,
  Route
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

interface AudienceItem {
  id: string;
  question: string;
  completed: boolean;
  notes: string;
  score: number;
}

interface AudienceSubCategory {
  id: string;
  title: string;
  description: string;
  items: AudienceItem[];
}

interface AudienceCategory {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
  subCategories: AudienceSubCategory[];
  isExpanded: boolean;
}

const UnderstandAudience = () => {
  const navigate = useNavigate();
  
  const [audienceCategories, setAudienceCategories] = useState<AudienceCategory[]>([
    {
      id: 'identification',
      title: 'Target Audience Identification',
      description: 'Define primary and secondary audience segments with detailed characteristics',
      icon: Target,
      color: 'bg-blue-600',
      isExpanded: false,
      subCategories: [
        {
          id: 'primary-audience',
          title: 'Primary Audience Definition',
          description: 'Identify and characterize your core target audience',
          items: [
            {
              id: 'primary-1',
              question: 'Define primary audience demographics (age, location, income, education)',
              completed: false,
              notes: '',
              score: 0
            },
            {
              id: 'primary-2',
              question: 'Identify primary audience psychographics (values, interests, lifestyle)',
              completed: false,
              notes: '',
              score: 0
            },
            {
              id: 'primary-3',
              question: 'Assess primary audience size and market potential',
              completed: false,
              notes: '',
              score: 0
            },
            {
              id: 'primary-4',
              question: 'Document primary audience professional characteristics and roles',
              completed: false,
              notes: '',
              score: 0
            }
          ]
        },
        {
          id: 'secondary-audience',
          title: 'Secondary Audience Segments',
          description: 'Map additional audience segments and their characteristics',
          items: [
            {
              id: 'secondary-1',
              question: 'Identify 2-3 secondary audience segments and their unique characteristics',
              completed: false,
              notes: '',
              score: 0
            },
            {
              id: 'secondary-2',
              question: 'Analyze audience overlap and cross-segment opportunities',
              completed: false,
              notes: '',
              score: 0
            },
            {
              id: 'secondary-3',
              question: 'Evaluate secondary audience influence on primary audience decisions',
              completed: false,
              notes: '',
              score: 0
            }
          ]
        }
      ]
    },
    {
      id: 'personas',
      title: 'Persona Development',
      description: 'Create detailed buyer personas with pain points, motivations, and preferences',
      icon: UserCheck,
      color: 'bg-green-600',
      isExpanded: false,
      subCategories: [
        {
          id: 'persona-creation',
          title: 'Detailed Buyer Persona Creation',
          description: 'Develop 3-5 comprehensive buyer personas',
          items: [
            {
              id: 'persona-1',
              question: 'Create Persona 1: Primary decision-maker with complete profile',
              completed: false,
              notes: '',
              score: 0
            },
            {
              id: 'persona-2',
              question: 'Create Persona 2: Secondary influencer with detailed characteristics',
              completed: false,
              notes: '',
              score: 0
            },
            {
              id: 'persona-3',
              question: 'Create Persona 3: End user/beneficiary persona development',
              completed: false,
              notes: '',
              score: 0
            },
            {
              id: 'persona-4',
              question: 'Develop additional personas for niche segments (if applicable)',
              completed: false,
              notes: '',
              score: 0
            }
          ]
        },
        {
          id: 'pain-motivations',
          title: 'Pain Points & Motivations Mapping',
          description: 'Deep dive into audience challenges and driving factors',
          items: [
            {
              id: 'pain-1',
              question: 'Document primary pain points and challenges for each persona',
              completed: false,
              notes: '',
              score: 0
            },
            {
              id: 'pain-2',
              question: 'Identify core motivations and goals driving each persona',
              completed: false,
              notes: '',
              score: 0
            },
            {
              id: 'pain-3',
              question: 'Map emotional triggers and decision-making drivers',
              completed: false,
              notes: '',
              score: 0
            },
            {
              id: 'pain-4',
              question: 'Analyze how pain points vary across different personas',
              completed: false,
              notes: '',
              score: 0
            }
          ]
        },
        {
          id: 'preferences',
          title: 'Content & Communication Preferences',
          description: 'Understanding how each persona prefers to consume and engage with content',
          items: [
            {
              id: 'pref-1',
              question: 'Identify preferred content formats for each persona (video, blog, infographic)',
              completed: false,
              notes: '',
              score: 0
            },
            {
              id: 'pref-2',
              question: 'Document communication style preferences (formal, casual, technical)',
              completed: false,
              notes: '',
              score: 0
            },
            {
              id: 'pref-3',
              question: 'Map preferred channels and platforms for each persona',
              completed: false,
              notes: '',
              score: 0
            },
            {
              id: 'pref-4',
              question: 'Analyze optimal timing and frequency for engagement',
              completed: false,
              notes: '',
              score: 0
            }
          ]
        }
      ]
    },
    {
      id: 'journey',
      title: 'Customer Journey Mapping',
      description: 'Map the complete customer journey from awareness to advocacy',
      icon: Route,
      color: 'bg-purple-600',
      isExpanded: false,
      subCategories: [
        {
          id: 'awareness-stage',
          title: 'Awareness Stage Mapping',
          description: 'Identify how prospects first discover your brand',
          items: [
            {
              id: 'aware-1',
              question: 'Map all awareness stage touchpoints and discovery channels',
              completed: false,
              notes: '',
              score: 0
            },
            {
              id: 'aware-2',
              question: 'Identify content types that drive initial brand awareness',
              completed: false,
              notes: '',
              score: 0
            },
            {
              id: 'aware-3',
              question: 'Analyze competitor presence in awareness stage channels',
              completed: false,
              notes: '',
              score: 0
            }
          ]
        },
        {
          id: 'consideration-stage',
          title: 'Consideration Stage Analysis',
          description: 'Understanding evaluation process and content needs',
          items: [
            {
              id: 'consider-1',
              question: 'Document consideration stage content preferences and needs',
              completed: false,
              notes: '',
              score: 0
            },
            {
              id: 'consider-2',
              question: 'Map evaluation criteria and comparison factors',
              completed: false,
              notes: '',
              score: 0
            },
            {
              id: 'consider-3',
              question: 'Identify key influencers and information sources in consideration',
              completed: false,
              notes: '',
              score: 0
            }
          ]
        },
        {
          id: 'decision-stage',
          title: 'Decision Stage Optimization',
          description: 'Analyze conversion triggers and decision factors',
          items: [
            {
              id: 'decision-1',
              question: 'Identify key conversion triggers and decision catalysts',
              completed: false,
              notes: '',
              score: 0
            },
            {
              id: 'decision-2',
              question: 'Map final decision-making process and key stakeholders',
              completed: false,
              notes: '',
              score: 0
            },
            {
              id: 'decision-3',
              question: 'Analyze objection handling and trust-building requirements',
              completed: false,
              notes: '',
              score: 0
            }
          ]
        },
        {
          id: 'post-purchase',
          title: 'Post-Purchase & Retention',
          description: 'Mapping ongoing engagement and advocacy opportunities',
          items: [
            {
              id: 'post-1',
              question: 'Design post-purchase onboarding and engagement strategy',
              completed: false,
              notes: '',
              score: 0
            },
            {
              id: 'post-2',
              question: 'Identify retention touchpoints and value delivery moments',
              completed: false,
              notes: '',
              score: 0
            },
            {
              id: 'post-3',
              question: 'Map advocacy and referral generation opportunities',
              completed: false,
              notes: '',
              score: 0
            }
          ]
        }
      ]
    },
    {
      id: 'behavioral',
      title: 'Behavioral Analysis',
      description: 'Analyze current audience engagement patterns and optimize interactions',
      icon: Brain,
      color: 'bg-indigo-600',
      isExpanded: false,
      subCategories: [
        {
          id: 'engagement-patterns',
          title: 'Current Engagement Pattern Analysis',
          description: 'Understanding how audiences currently interact with your brand',
          items: [
            {
              id: 'engage-1',
              question: 'Analyze current audience engagement rates across all channels',
              completed: false,
              notes: '',
              score: 0
            },
            {
              id: 'engage-2',
              question: 'Identify peak engagement times and optimal posting schedules',
              completed: false,
              notes: '',
              score: 0
            },
            {
              id: 'engage-3',
              question: 'Map content performance by audience segment and persona',
              completed: false,
              notes: '',
              score: 0
            }
          ]
        },
        {
          id: 'channel-preferences',
          title: 'Channel Preference Mapping',
          description: 'Understanding where different audience segments spend their time',
          items: [
            {
              id: 'channel-1',
              question: 'Map channel usage patterns for each audience segment',
              completed: false,
              notes: '',
              score: 0
            },
            {
              id: 'channel-2',
              question: 'Analyze cross-channel behavior and journey flows',
              completed: false,
              notes: '',
              score: 0
            },
            {
              id: 'channel-3',
              question: 'Identify emerging channels and early adoption opportunities',
              completed: false,
              notes: '',
              score: 0
            }
          ]
        },
        {
          id: 'feedback-sentiment',
          title: 'Audience Feedback & Sentiment Analysis',
          description: 'Gathering and analyzing audience feedback and sentiment',
          items: [
            {
              id: 'feedback-1',
              question: 'Collect and analyze audience feedback across all touchpoints',
              completed: false,
              notes: '',
              score: 0
            },
            {
              id: 'feedback-2',
              question: 'Conduct sentiment analysis of brand mentions and interactions',
              completed: false,
              notes: '',
              score: 0
            },
            {
              id: 'feedback-3',
              question: 'Identify common themes in audience feedback and requests',
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
    setAudienceCategories(prev => 
      prev.map(cat => 
        cat.id === categoryId 
          ? { ...cat, isExpanded: !cat.isExpanded }
          : cat
      )
    );
  };

  const updateItem = (categoryId: string, subCategoryId: string, itemId: string, updates: Partial<AudienceItem>) => {
    setAudienceCategories(prev =>
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

  const calculateCategoryProgress = (category: AudienceCategory) => {
    const totalItems = category.subCategories.reduce((acc, subCat) => acc + subCat.items.length, 0);
    const completedItems = category.subCategories.reduce(
      (acc, subCat) => acc + subCat.items.filter(item => item.completed).length,
      0
    );
    return totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0;
  };

  const calculateSubCategoryProgress = (subCategory: AudienceSubCategory) => {
    const completedItems = subCategory.items.filter(item => item.completed).length;
    return Math.round((completedItems / subCategory.items.length) * 100);
  };

  const calculateOverallProgress = () => {
    const allItems = audienceCategories.reduce(
      (acc, cat) => acc + cat.subCategories.reduce((subAcc, subCat) => subAcc + subCat.items.length, 0),
      0
    );
    const completedItems = audienceCategories.reduce(
      (acc, cat) => acc + cat.subCategories.reduce(
        (subAcc, subCat) => subAcc + subCat.items.filter(item => item.completed).length,
        0
      ),
      0
    );
    return allItems > 0 ? Math.round((completedItems / allItems) * 100) : 0;
  };

  const calculateCategoryScore = (category: AudienceCategory) => {
    const allScores = category.subCategories.reduce(
      (acc, subCat) => [...acc, ...subCat.items.filter(item => item.score > 0).map(item => item.score)],
      [] as number[]
    );
    if (allScores.length === 0) return 0;
    return Math.round(allScores.reduce((acc, score) => acc + score, 0) / allScores.length);
  };

  const generateInsightItems = (category: AudienceCategory) => {
    const lowScoreItems = category.subCategories.reduce(
      (acc, subCat) => [...acc, ...subCat.items.filter(item => item.score > 0 && item.score <= 6)],
      [] as AudienceItem[]
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
            Step 2 of 8
          </Badge>
        </div>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              U
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Understand Your Audience</h1>
              <p className="text-gray-600">Deep persona development and journey mapping</p>
            </div>
          </div>
          
          {/* Overall Progress */}
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-blue-900">Audience Research Progress</h3>
                <span className="text-2xl font-bold text-blue-600">{overallProgress}%</span>
              </div>
              <Progress value={overallProgress} className="mb-2" />
              <p className="text-sm text-blue-700">
                Complete all audience research categories to move to the next step
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Audience Research Categories */}
        <div className="space-y-6">
          {audienceCategories.map((category) => {
            const categoryProgress = calculateCategoryProgress(category);
            const categoryScore = calculateCategoryScore(category);
            const insightItems = generateInsightItems(category);
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
                                              Understanding Depth Score (1-10)
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
                                              Upload Research Files
                                            </label>
                                            <Button variant="outline" size="sm" className="w-full">
                                              <Upload className="h-4 w-4 mr-2" />
                                              Upload Files
                                            </Button>
                                          </div>
                                        </div>
                                        
                                        <div className="mt-4">
                                          <label className="text-sm font-medium text-gray-700 mb-2 block">
                                            Research Notes & Insights
                                          </label>
                                          <Textarea
                                            value={item.notes}
                                            onChange={(e) =>
                                              updateItem(category.id, subCategory.id, item.id, { notes: e.target.value })
                                            }
                                            placeholder="Add your research findings, insights, and persona details..."
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

                      {/* Research Gaps for this category */}
                      {category.isExpanded && insightItems.length > 0 && (
                        <div className="mt-8 p-4 bg-red-50 border border-red-200 rounded-lg">
                          <h5 className="font-semibold text-red-900 mb-3 flex items-center gap-2">
                            <AlertTriangle className="h-4 w-4" />
                            Research Gaps - {category.title}
                          </h5>
                          <div className="space-y-2">
                            {insightItems.map((item) => (
                              <div key={item.id} className="text-sm text-red-800">
                                • {item.question} (Understanding Score: {item.score}/10)
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

        {/* Generated Audience Insights Section */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-blue-600" />
              Audience Research Summary & Key Insights
            </CardTitle>
            <CardDescription>
              Based on your research findings, here are the priority areas that need attention
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">High Priority Research Gaps</h4>
                <div className="space-y-2">
                  {audienceCategories.map(category => {
                    const criticalItems = generateInsightItems(category).filter(item => item.score > 0 && item.score <= 4);
                    return criticalItems.slice(0, 2).map(item => (
                      <div key={item.id} className="p-3 bg-red-50 border border-red-200 rounded-lg">
                        <div className="flex items-center justify-between mb-1">
                          <Badge variant="destructive" className="text-xs">Critical Gap</Badge>
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
                  {audienceCategories.map(category => {
                    const mediumItems = generateInsightItems(category).filter(item => item.score > 4 && item.score <= 6);
                    return mediumItems.slice(0, 2).map(item => (
                      <div key={item.id} className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                        <div className="flex items-center justify-between mb-1">
                          <Badge variant="secondary" className="text-xs bg-blue-100 text-blue-800">Needs Attention</Badge>
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
              Export Persona Templates
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

export default UnderstandAudience;

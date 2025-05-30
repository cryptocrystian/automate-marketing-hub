
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  MapPin, 
  Mail, 
  Phone, 
  Clock, 
  Brain, 
  Star, 
  TrendingUp, 
  Users, 
  FileText, 
  MessageSquare, 
  Edit3, 
  Plus, 
  ExternalLink, 
  Calendar, 
  Target, 
  Bookmark, 
  Share, 
  Download, 
  Bell, 
  Tag,
  Eye,
  ThumbsUp,
  Activity
} from 'lucide-react';

interface ContactProfileProps {
  contactId: string;
  onClose: () => void;
}

const ContactProfile: React.FC<ContactProfileProps> = ({ contactId, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');

  // Mock contact data - in real app this would come from props or API
  const contact = {
    id: 1,
    name: 'Sarah Mitchell',
    title: 'Senior Technology Reporter',
    outlet: 'TechCrunch',
    tier: 'A-List',
    relationshipScore: 9.2,
    verified: true,
    location: 'San Francisco, CA',
    email: 'sarah.mitchell@techcrunch.com',
    phone: '+1 (555) 123-4567',
    twitter: '@SarahMTech',
    linkedin: 'sarahmitchell',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face',
    bestContactTime: 'Tuesday-Thursday 9-11 AM PST',
    preferredMethod: 'Email',
    metrics: {
      responseRate: 85,
      responseRateTrend: '+5%',
      totalInteractions: 12,
      interactionsTrend: '+3',
      recentArticles: 8,
      socialReach: '45K'
    },
    beats: ['AI & Machine Learning', 'SaaS', 'Enterprise Tech', 'Startups', 'Venture Capital'],
    aiInsights: {
      pitchStyle: 'Prefers data-driven pitches with technical depth and real-world applications',
      contentFocus: 'Covers emerging technologies with business impact, particularly AI/ML innovations',
      timing: 'Most active Tuesday-Thursday mornings, responds fastest to Tuesday pitches',
      interests: 'Currently focusing on enterprise AI adoption and startup funding trends'
    },
    interactions: [
      {
        date: '2024-01-15',
        type: 'Email',
        subject: 'AI Platform Launch - Exclusive Interview Opportunity',
        outcome: 'Positive Response',
        notes: 'Interested in technical demo, scheduled for next week'
      },
      {
        date: '2024-01-10',
        type: 'Article Mention',
        subject: 'Featured our CEO in AI leadership piece',
        outcome: 'Coverage Published',
        notes: 'Great coverage, mentioned our innovation approach'
      },
      {
        date: '2024-01-05',
        type: 'Phone Call',
        subject: 'Background briefing on market trends',
        outcome: 'Relationship Building',
        notes: 'Valuable insights shared, building trust'
      }
    ],
    recentArticles: [
      {
        title: 'Enterprise AI Adoption Reaches Tipping Point as ROI Becomes Clear',
        date: '2024-01-12',
        url: '#',
        engagement: '2.3K shares'
      },
      {
        title: 'Startup Funding Shifts Focus to Sustainable AI Solutions',
        date: '2024-01-08',
        url: '#',
        engagement: '1.8K shares'
      },
      {
        title: 'The New Wave of SaaS: AI-First Companies Leading Growth',
        date: '2024-01-03',
        url: '#',
        engagement: '3.1K shares'
      }
    ]
  };

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'A-List': return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'Core': return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'Prospect': return 'bg-gray-100 text-gray-800 border-gray-300';
      default: return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 9) return 'bg-green-100 text-green-800';
    if (score >= 7) return 'bg-blue-100 text-blue-800';
    if (score >= 5) return 'bg-orange-100 text-orange-800';
    return 'bg-red-100 text-red-800';
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header Section */}
        <div className="border-b bg-gray-50 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <img
                  src={contact.avatar}
                  alt={contact.name}
                  className="w-20 h-20 rounded-full object-cover"
                />
                {contact.verified && (
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                    <Star className="w-3 h-3 text-white fill-current" />
                  </div>
                )}
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{contact.name}</h1>
                <p className="text-lg text-gray-600">{contact.title}</p>
                <p className="text-lg font-medium text-gray-800">{contact.outlet}</p>
                <div className="flex items-center space-x-2 mt-2">
                  <MapPin className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-600">{contact.location}</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Badge className={getTierColor(contact.tier)}>
                {contact.tier}
              </Badge>
              <div className={`px-3 py-2 rounded-lg text-lg font-semibold ${getScoreColor(contact.relationshipScore)}`}>
                {contact.relationshipScore}/10
              </div>
              <Button onClick={onClose} variant="outline">
                Close
              </Button>
            </div>
          </div>

          {/* Primary Actions */}
          <div className="flex items-center space-x-3">
            <Button className="bg-blue-600 hover:bg-blue-700">
              <MessageSquare className="w-4 h-4 mr-2" />
              Send Message
            </Button>
            <Button variant="outline">
              <Edit3 className="w-4 h-4 mr-2" />
              Edit Contact
            </Button>
            <Button variant="outline">
              <Plus className="w-4 h-4 mr-2" />
              Add to Campaign
            </Button>
          </div>
        </div>

        {/* Key Metrics Dashboard */}
        <div className="p-6 border-b">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center">
                  Response Rate
                  <TrendingUp className="w-4 h-4 ml-2 text-green-600" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{contact.metrics.responseRate}%</div>
                <p className="text-xs text-green-600">{contact.metrics.responseRateTrend} this month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center">
                  Total Interactions
                  <Activity className="w-4 h-4 ml-2 text-blue-600" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{contact.metrics.totalInteractions}</div>
                <p className="text-xs text-blue-600">+{contact.metrics.interactionsTrend} this month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center">
                  Recent Articles
                  <FileText className="w-4 h-4 ml-2 text-purple-600" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{contact.metrics.recentArticles}</div>
                <p className="text-xs text-purple-600">this month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center">
                  Social Reach
                  <Users className="w-4 h-4 ml-2 text-orange-600" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{contact.metrics.socialReach}</div>
                <p className="text-xs text-orange-600">followers</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Main Content Tabs */}
        <div className="p-6">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="interactions">Interactions</TabsTrigger>
              <TabsTrigger value="articles">Articles</TabsTrigger>
              <TabsTrigger value="management">Management</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Contact Information */}
                <Card>
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Mail className="w-4 h-4 text-gray-500" />
                      <a href={`mailto:${contact.email}`} className="text-blue-600 hover:underline">
                        {contact.email}
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-4 h-4 text-gray-500" />
                      <a href={`tel:${contact.phone}`} className="text-blue-600 hover:underline">
                        {contact.phone}
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <ExternalLink className="w-4 h-4 text-gray-500" />
                      <a href="#" className="text-blue-600 hover:underline">
                        {contact.twitter}
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <ExternalLink className="w-4 h-4 text-gray-500" />
                      <a href="#" className="text-blue-600 hover:underline">
                        LinkedIn: {contact.linkedin}
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-700">{contact.bestContactTime}</span>
                    </div>
                    <div className="pt-2">
                      <span className="text-sm font-medium text-gray-700">Preferred Method:</span>
                      <span className="ml-2 text-gray-600">{contact.preferredMethod}</span>
                    </div>
                  </CardContent>
                </Card>

                {/* AI Insights */}
                <Card className="lg:col-span-2">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Brain className="w-5 h-5 text-purple-600 mr-2" />
                      AI Insights & Intelligence
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 space-y-3">
                      <div>
                        <span className="font-medium text-purple-900">Pitch Style:</span>
                        <p className="text-purple-800 mt-1">{contact.aiInsights.pitchStyle}</p>
                      </div>
                      <div>
                        <span className="font-medium text-purple-900">Content Focus:</span>
                        <p className="text-purple-800 mt-1">{contact.aiInsights.contentFocus}</p>
                      </div>
                      <div>
                        <span className="font-medium text-purple-900">Optimal Timing:</span>
                        <p className="text-purple-800 mt-1">{contact.aiInsights.timing}</p>
                      </div>
                      <div>
                        <span className="font-medium text-purple-900">Current Interests:</span>
                        <p className="text-purple-800 mt-1">{contact.aiInsights.interests}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Beat Coverage */}
              <Card>
                <CardHeader>
                  <CardTitle>Beat & Coverage Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {contact.beats.map((beat, index) => (
                      <Badge key={index} variant="secondary">
                        {beat}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="interactions" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Interaction History</CardTitle>
                  <CardDescription>Complete timeline of all communications and engagements</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {contact.interactions.map((interaction, index) => (
                      <div key={index} className="border-l-2 border-blue-200 pl-4 pb-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <MessageSquare className="w-4 h-4 text-blue-600" />
                            <span className="font-medium">{interaction.type}</span>
                            <Badge variant="secondary">{interaction.outcome}</Badge>
                          </div>
                          <span className="text-sm text-gray-500">{interaction.date}</span>
                        </div>
                        <h4 className="font-medium mt-1">{interaction.subject}</h4>
                        <p className="text-gray-600 text-sm mt-1">{interaction.notes}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="articles" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Articles & Coverage</CardTitle>
                  <CardDescription>Latest published work and coverage topics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {contact.recentArticles.map((article, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-900">{article.title}</h4>
                            <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                              <span>{article.date}</span>
                              <div className="flex items-center space-x-1">
                                <ThumbsUp className="w-3 h-3" />
                                <span>{article.engagement}</span>
                              </div>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            <ExternalLink className="w-3 h-3 mr-1" />
                            View
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="management" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Relationship Management</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button className="w-full" variant="outline">
                      <Bell className="w-4 h-4 mr-2" />
                      Set Follow-up Reminder
                    </Button>
                    <Button className="w-full" variant="outline">
                      <Tag className="w-4 h-4 mr-2" />
                      Add Custom Tags
                    </Button>
                    <Button className="w-full" variant="outline">
                      <Edit3 className="w-4 h-4 mr-2" />
                      Add Personal Notes
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button className="w-full">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Compose Pitch Email
                    </Button>
                    <Button className="w-full" variant="outline">
                      <Calendar className="w-4 h-4 mr-2" />
                      Schedule Follow-up
                    </Button>
                    <Button className="w-full" variant="outline">
                      <Target className="w-4 h-4 mr-2" />
                      Add to Media List
                    </Button>
                    <Button className="w-full" variant="outline">
                      <Share className="w-4 h-4 mr-2" />
                      Share Profile
                    </Button>
                    <Button className="w-full" variant="outline">
                      <Download className="w-4 h-4 mr-2" />
                      Export Details
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ContactProfile;

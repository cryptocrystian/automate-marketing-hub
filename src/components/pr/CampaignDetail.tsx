
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  ArrowLeft, 
  Target, 
  Users, 
  FileText, 
  Calendar, 
  TrendingUp,
  Mail,
  Phone,
  Edit,
  Send,
  Eye,
  Clock,
  CheckCircle,
  AlertCircle,
  Brain,
  Award,
  DollarSign,
  BarChart3
} from 'lucide-react';

interface CampaignDetailProps {
  campaignId: string;
  onBack: () => void;
}

const CampaignDetail: React.FC<CampaignDetailProps> = ({ campaignId, onBack }) => {
  const [activeTab, setActiveTab] = useState('overview');

  // Mock campaign data - in real app this would be fetched based on campaignId
  const campaign = {
    id: campaignId,
    name: 'Q1 Product Launch Campaign',
    status: 'active',
    startDate: '2024-01-15',
    endDate: '2024-02-15',
    progress: 78,
    reach: '2.3M',
    pickupRate: 67,
    emv: '$125K',
    objectives: 'Launch new AI-powered platform to technology media and generate awareness among enterprise decision makers.',
    targetAudience: 'Technology journalists, enterprise IT decision makers, venture capital partners',
    messagePositioning: 'Revolutionary AI platform that transforms enterprise productivity'
  };

  const mediaList = [
    { 
      id: '1', 
      name: 'Sarah Mitchell', 
      outlet: 'TechCrunch', 
      status: 'contacted', 
      lastContact: '2024-01-18',
      response: 'pending',
      tier: 'A-List'
    },
    { 
      id: '2', 
      name: 'Marcus Rodriguez', 
      outlet: 'Forbes', 
      status: 'responded', 
      lastContact: '2024-01-16',
      response: 'interested',
      tier: 'Core'
    },
    { 
      id: '3', 
      name: 'Emily Chen', 
      outlet: 'Marketing Land', 
      status: 'scheduled', 
      lastContact: '2024-01-19',
      response: 'interview',
      tier: 'Core'
    }
  ];

  const contentAssets = [
    { id: '1', title: 'Product Launch Press Release', type: 'Press Release', status: 'published' },
    { id: '2', title: 'Executive Interview Guide', type: 'Interview Prep', status: 'ready' },
    { id: '3', title: 'Product Demo Video', type: 'Video', status: 'ready' },
    { id: '4', title: 'Technical Fact Sheet', type: 'Document', status: 'ready' }
  ];

  const timeline = [
    { date: '2024-01-15', event: 'Campaign Launch', status: 'completed', description: 'Initial press release distributed to target media list' },
    { date: '2024-01-16', event: 'First Media Response', status: 'completed', description: 'Forbes expressed interest in executive interview' },
    { date: '2024-01-18', event: 'Follow-up Outreach', status: 'completed', description: 'Second wave of outreach to tier 1 outlets' },
    { date: '2024-01-20', event: 'Interview Scheduled', status: 'upcoming', description: 'CEO interview with Marketing Land confirmed' },
    { date: '2024-01-25', event: 'Coverage Review', status: 'upcoming', description: 'Analyze initial coverage and plan next phase' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'contacted': return 'bg-blue-100 text-blue-800';
      case 'responded': return 'bg-green-100 text-green-800';
      case 'scheduled': return 'bg-purple-100 text-purple-800';
      case 'declined': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getResponseColor = (response: string) => {
    switch (response) {
      case 'interested': return 'text-green-600';
      case 'interview': return 'text-purple-600';
      case 'pending': return 'text-orange-600';
      case 'declined': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button variant="outline" onClick={onBack}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Campaigns
          </Button>
          <div>
            <h2 className="text-2xl font-bold">{campaign.name}</h2>
            <p className="text-muted-foreground">{campaign.startDate} - {campaign.endDate}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Badge className="bg-green-600 text-white">{campaign.status}</Badge>
          <Button variant="outline">
            <Edit className="w-4 h-4 mr-2" />
            Edit Campaign
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Progress</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{campaign.progress}%</div>
            <Progress value={campaign.progress} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Reach</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{campaign.reach}</div>
            <p className="text-xs text-muted-foreground">Potential audience</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pickup Rate</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{campaign.pickupRate}%</div>
            <p className="text-xs text-muted-foreground">Media coverage rate</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">EMV</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{campaign.emv}</div>
            <p className="text-xs text-muted-foreground">Earned media value</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Media Contacts</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mediaList.length}</div>
            <p className="text-xs text-muted-foreground">Active outreach</p>
          </CardContent>
        </Card>
      </div>

      {/* Campaign Details Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="media">Media List</TabsTrigger>
          <TabsTrigger value="content">Content Assets</TabsTrigger>
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Campaign Information */}
            <Card>
              <CardHeader>
                <CardTitle>Campaign Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="text-sm font-medium">Objectives</Label>
                  <p className="text-sm text-muted-foreground mt-1">{campaign.objectives}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium">Target Audience</Label>
                  <p className="text-sm text-muted-foreground mt-1">{campaign.targetAudience}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium">Message Positioning</Label>
                  <p className="text-sm text-muted-foreground mt-1">{campaign.messagePositioning}</p>
                </div>
              </CardContent>
            </Card>

            {/* AI Insights */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Brain className="w-5 h-5 mr-2 text-purple-600" />
                  AI Campaign Insights
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <h4 className="font-medium text-purple-900 mb-2">Performance Optimization</h4>
                  <ul className="text-sm text-purple-800 space-y-1">
                    <li>• Best response rates on Tuesday mornings</li>
                    <li>• Tech journalists show 85% higher engagement</li>
                    <li>• Consider follow-up timing optimization</li>
                  </ul>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-medium text-blue-900 mb-2">Content Recommendations</h4>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Add technical deep-dive content</li>
                    <li>• Include customer success stories</li>
                    <li>• Prepare competitive analysis</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Team Assignments */}
          <Card>
            <CardHeader>
              <CardTitle>Team Assignments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <Users className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-medium">Sarah Johnson</div>
                      <div className="text-sm text-muted-foreground">Campaign Manager</div>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Overall campaign coordination and media outreach
                  </div>
                </div>
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <FileText className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <div className="font-medium">Mike Chen</div>
                      <div className="text-sm text-muted-foreground">Content Lead</div>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Content creation and asset management
                  </div>
                </div>
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <BarChart3 className="w-4 h-4 text-purple-600" />
                    </div>
                    <div>
                      <div className="font-medium">Lisa Park</div>
                      <div className="text-sm text-muted-foreground">Analytics Lead</div>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Performance tracking and reporting
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="media" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Media List & Outreach Status</CardTitle>
              <CardDescription>Track individual journalist relationships and outreach progress</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mediaList.map((contact) => (
                  <div key={contact.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                        <Users className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-medium">{contact.name}</div>
                        <div className="text-sm text-muted-foreground">{contact.outlet}</div>
                        <div className="text-xs text-muted-foreground">Last contact: {contact.lastContact}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Badge variant="outline">{contact.tier}</Badge>
                      <Badge className={getStatusColor(contact.status)}>
                        {contact.status}
                      </Badge>
                      <span className={`text-sm font-medium ${getResponseColor(contact.response)}`}>
                        {contact.response}
                      </span>
                      <div className="flex space-x-1">
                        <Button size="sm" variant="outline">
                          <Mail className="w-3 h-3" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Phone className="w-3 h-3" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Eye className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex justify-between items-center">
                <div className="text-sm text-muted-foreground">
                  {mediaList.length} contacts • {mediaList.filter(c => c.status === 'responded').length} responses
                </div>
                <Button>
                  <Send className="w-4 h-4 mr-2" />
                  Bulk Follow-up
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="content" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Campaign Content Assets</CardTitle>
              <CardDescription>Manage all content pieces linked to this campaign</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {contentAssets.map((asset) => (
                  <div key={asset.id} className="p-4 border rounded-lg">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <FileText className="w-5 h-5 text-blue-600" />
                        <div>
                          <div className="font-medium">{asset.title}</div>
                          <div className="text-sm text-muted-foreground">{asset.type}</div>
                        </div>
                      </div>
                      <Badge className={asset.status === 'published' ? 'bg-green-600 text-white' : 'bg-blue-600 text-white'}>
                        {asset.status}
                      </Badge>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        <Eye className="w-3 h-3 mr-1" />
                        View
                      </Button>
                      <Button size="sm" variant="outline">
                        <Edit className="w-3 h-3 mr-1" />
                        Edit
                      </Button>
                      <Button size="sm" variant="outline">
                        <Send className="w-3 h-3 mr-1" />
                        Share
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="timeline" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Campaign Timeline</CardTitle>
              <CardDescription>Track milestones and key campaign events</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {timeline.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className={`mt-1 w-3 h-3 rounded-full ${
                      item.status === 'completed' ? 'bg-green-500' : 
                      item.status === 'upcoming' ? 'bg-blue-500' : 'bg-gray-300'
                    }`} />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div className="font-medium">{item.event}</div>
                        <div className="text-sm text-muted-foreground">{item.date}</div>
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">{item.description}</div>
                      {item.status === 'upcoming' && (
                        <Badge className="mt-2 bg-orange-100 text-orange-800">Upcoming</Badge>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Media Coverage</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Total Mentions</span>
                    <span className="font-semibold">23</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Tier 1 Outlets</span>
                    <span className="font-semibold">8</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Online Articles</span>
                    <span className="font-semibold">18</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Broadcast Mentions</span>
                    <span className="font-semibold">5</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Engagement Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Response Rate</span>
                    <span className="font-semibold text-green-600">67%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Open Rate</span>
                    <span className="font-semibold">84%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Click-through Rate</span>
                    <span className="font-semibold">12%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Follow-up Rate</span>
                    <span className="font-semibold">45%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>ROI Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Earned Media Value</span>
                    <span className="font-semibold">{campaign.emv}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Cost Per Mention</span>
                    <span className="font-semibold">$487</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Campaign ROI</span>
                    <span className="font-semibold text-green-600">3.2x</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Sentiment Score</span>
                    <span className="font-semibold text-green-600">8.4/10</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CampaignDetail;

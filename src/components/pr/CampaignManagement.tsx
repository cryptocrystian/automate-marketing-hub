
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CampaignWizard from './CampaignWizard';
import CampaignDetail from './CampaignDetail';
import { 
  Target, 
  Plus, 
  TrendingUp, 
  Users, 
  Calendar, 
  DollarSign,
  Eye,
  Edit,
  Send,
  Copy,
  BarChart3,
  Zap,
  Brain,
  Activity,
  Clock,
  CheckCircle,
  AlertCircle,
  Award,
  Radio,
  Bot,
  FileText,
  Mail
} from 'lucide-react';

interface Campaign {
  id: string;
  name: string;
  status: 'planning' | 'active' | 'monitoring' | 'completed' | 'paused';
  startDate: string;
  endDate: string;
  progress: number;
  reach: string;
  pickupRate: number;
  emv: string;
  mediaContacts: number;
  contentAssets: number;
  automateStep: number;
  integration: 'connected' | 'partial' | 'none';
}

const CampaignManagement = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedCampaign, setSelectedCampaign] = useState<string | null>(null);
  const [showWizard, setShowWizard] = useState(false);

  // Mock campaign data
  const campaigns: Campaign[] = [
    {
      id: '1',
      name: 'Q1 Product Launch Campaign',
      status: 'active',
      startDate: '2024-01-15',
      endDate: '2024-02-15',
      progress: 78,
      reach: '2.3M',
      pickupRate: 67,
      emv: '$125K',
      mediaContacts: 45,
      contentAssets: 12,
      automateStep: 6,
      integration: 'connected'
    },
    {
      id: '2',
      name: 'Thought Leadership Series',
      status: 'active',
      startDate: '2024-01-10',
      endDate: '2024-03-10',
      progress: 92,
      reach: '890K',
      pickupRate: 84,
      emv: '$87K',
      mediaContacts: 28,
      contentAssets: 8,
      automateStep: 7,
      integration: 'connected'
    },
    {
      id: '3',
      name: 'Industry Awards Campaign',
      status: 'planning',
      startDate: '2024-02-01',
      endDate: '2024-04-01',
      progress: 35,
      reach: '1.1M',
      pickupRate: 0,
      emv: '$0',
      mediaContacts: 34,
      contentAssets: 6,
      automateStep: 3,
      integration: 'partial'
    }
  ];

  // Performance metrics
  const metrics = [
    { label: 'Total Campaigns', value: '8', icon: Target, color: 'text-blue-600' },
    { label: 'Active Campaigns', value: '3', icon: Activity, color: 'text-green-600' },
    { label: 'Total Reach', value: '4.2M', icon: TrendingUp, color: 'text-purple-600' },
    { label: 'Avg. Pickup Rate', value: '73%', icon: Award, color: 'text-orange-600' },
    { label: 'Total EMV', value: '$312K', icon: DollarSign, color: 'text-green-600' }
  ];

  const getStatusColor = (status: Campaign['status']) => {
    switch (status) {
      case 'active': return 'bg-green-600 text-white';
      case 'planning': return 'bg-blue-600 text-white';
      case 'monitoring': return 'bg-orange-600 text-white';
      case 'completed': return 'bg-gray-600 text-white';
      case 'paused': return 'bg-red-600 text-white';
      default: return 'bg-gray-600 text-white';
    }
  };

  const getIntegrationColor = (integration: Campaign['integration']) => {
    switch (integration) {
      case 'connected': return 'bg-green-100 text-green-800';
      case 'partial': return 'bg-orange-100 text-orange-800';
      case 'none': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleViewCampaign = (campaignId: string) => {
    setSelectedCampaign(campaignId);
    setActiveTab('detail');
  };

  const handleCreateCampaign = () => {
    setShowWizard(true);
  };

  return (
    <>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <Target className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold">Campaign Management</h2>
              <Badge className="bg-purple-100 text-purple-800 border-purple-300">
                <Brain className="w-3 h-3 mr-1" />
                AI-Optimized
              </Badge>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Cross-Pillar Campaign Orchestration</h3>
            <p className="text-muted-foreground">Integrated PR campaigns with Content Calendar and AUTOMATE methodology</p>
          </div>
          <Button onClick={handleCreateCampaign} className="bg-blue-600 hover:bg-blue-700">
            <Plus className="w-4 h-4 mr-2" />
            New Campaign
          </Button>
        </div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {metrics.map((metric, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{metric.label}</CardTitle>
                <metric.icon className={`h-4 w-4 ${metric.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{metric.value}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Campaign Management Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="kanban">Kanban Board</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="detail" disabled={!selectedCampaign}>Campaign Detail</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Campaign Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {campaigns.map((campaign) => (
                <Card key={campaign.id} className="hover:border-blue-300 hover:shadow-md transition-all duration-200">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-gray-900">{campaign.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {campaign.startDate} - {campaign.endDate}
                        </p>
                      </div>
                      <Badge className={getStatusColor(campaign.status)}>
                        {campaign.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    {/* Progress Bar */}
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Progress</span>
                        <span>{campaign.progress}%</span>
                      </div>
                      <Progress value={campaign.progress} className="h-2" />
                    </div>

                    {/* Key Metrics */}
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="text-center p-2 bg-gray-50 rounded">
                        <div className="font-semibold text-gray-900">{campaign.reach}</div>
                        <div className="text-muted-foreground">Reach</div>
                      </div>
                      <div className="text-center p-2 bg-gray-50 rounded">
                        <div className="font-semibold text-gray-900">{campaign.pickupRate}%</div>
                        <div className="text-muted-foreground">Pickup Rate</div>
                      </div>
                      <div className="text-center p-2 bg-gray-50 rounded">
                        <div className="font-semibold text-gray-900">{campaign.emv}</div>
                        <div className="text-muted-foreground">EMV</div>
                      </div>
                      <div className="text-center p-2 bg-gray-50 rounded">
                        <div className="font-semibold text-gray-900">{campaign.mediaContacts}</div>
                        <div className="text-muted-foreground">Contacts</div>
                      </div>
                    </div>

                    {/* Integration Status */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Content Integration</span>
                        <Badge className={getIntegrationColor(campaign.integration)}>
                          {campaign.integration}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">AUTOMATE Progress</span>
                        <span className="text-sm text-muted-foreground">Step {campaign.automateStep}/8</span>
                      </div>
                    </div>

                    {/* AI Insights */}
                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
                      <div className="flex items-center mb-2">
                        <Brain className="w-4 h-4 text-purple-600 mr-2" />
                        <span className="text-sm font-medium text-purple-900">AI Recommendations</span>
                      </div>
                      <div className="text-xs text-purple-800">
                        Optimal send time: Tuesday 10 AM. Consider targeting tech journalists for better pickup rates.
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-2 gap-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleViewCampaign(campaign.id)}
                      >
                        <Eye className="w-3 h-3 mr-1" />
                        View
                      </Button>
                      <Button variant="outline" size="sm">
                        <Edit className="w-3 h-3 mr-1" />
                        Edit
                      </Button>
                      <Button variant="outline" size="sm">
                        <Send className="w-3 h-3 mr-1" />
                        Send Update
                      </Button>
                      <Button variant="outline" size="sm">
                        <Copy className="w-3 h-3 mr-1" />
                        Clone
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Cross-Pillar Integration Panel */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="w-5 h-5 mr-2" />
                  Cross-Pillar Integration Dashboard
                </CardTitle>
                <CardDescription>Real-time connections with Content Calendar and AUTOMATE methodology</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="flex items-center space-x-3 p-3 border rounded-lg">
                    <FileText className="w-5 h-5 text-blue-500" />
                    <div>
                      <div className="font-medium text-sm">Content Amplification</div>
                      <div className="text-xs text-muted-foreground">23 pieces active</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 border rounded-lg">
                    <TrendingUp className="w-5 h-5 text-green-500" />
                    <div>
                      <div className="font-medium text-sm">SEO Backlinks</div>
                      <div className="text-xs text-muted-foreground">+145 this month</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 border rounded-lg">
                    <Radio className="w-5 h-5 text-purple-500" />
                    <div>
                      <div className="font-medium text-sm">Social Amplification</div>
                      <div className="text-xs text-muted-foreground">2.3M impressions</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 border rounded-lg">
                    <Bot className="w-5 h-5 text-orange-500" />
                    <div>
                      <div className="font-medium text-sm">AI Platform Index</div>
                      <div className="text-xs text-muted-foreground">92% success rate</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="kanban" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Planning Column */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900">Planning</h3>
                  <Badge variant="secondary">1</Badge>
                </div>
                <div className="space-y-3">
                  {campaigns.filter(c => c.status === 'planning').map((campaign) => (
                    <Card key={campaign.id} className="cursor-pointer hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <h4 className="font-medium mb-2">{campaign.name}</h4>
                        <div className="text-sm text-muted-foreground space-y-1">
                          <div>Progress: {campaign.progress}%</div>
                          <div>Media: {campaign.mediaContacts} contacts</div>
                          <div>Assets: {campaign.contentAssets} pieces</div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Active Column */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900">Active</h3>
                  <Badge variant="secondary">2</Badge>
                </div>
                <div className="space-y-3">
                  {campaigns.filter(c => c.status === 'active').map((campaign) => (
                    <Card key={campaign.id} className="cursor-pointer hover:shadow-md transition-shadow border-green-200">
                      <CardContent className="p-4">
                        <h4 className="font-medium mb-2">{campaign.name}</h4>
                        <div className="text-sm text-muted-foreground space-y-1">
                          <div>Reach: {campaign.reach}</div>
                          <div>Pickup: {campaign.pickupRate}%</div>
                          <div>EMV: {campaign.emv}</div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Monitoring Column */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900">Monitoring</h3>
                  <Badge variant="secondary">0</Badge>
                </div>
                <div className="text-center text-muted-foreground text-sm py-8">
                  No campaigns in monitoring
                </div>
              </div>

              {/* Completed Column */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900">Completed</h3>
                  <Badge variant="secondary">0</Badge>
                </div>
                <div className="text-center text-muted-foreground text-sm py-8">
                  No completed campaigns
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            {/* Analytics Dashboard */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Media Coverage Tracking</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Total Mentions</span>
                      <span className="font-semibold">247</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Tier 1 Outlets</span>
                      <span className="font-semibold">23</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Sentiment Score</span>
                      <span className="font-semibold text-green-600">8.7/10</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Distribution Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Press Releases</span>
                      <span className="font-semibold">12 sent</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">AI Platform Index</span>
                      <span className="font-semibold text-blue-600">92%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Podcast Mentions</span>
                      <span className="font-semibold">15</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">ROI Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Total EMV</span>
                      <span className="font-semibold">$312K</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Campaign ROI</span>
                      <span className="font-semibold text-green-600">4.2x</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Cross-Pillar Impact</span>
                      <span className="font-semibold text-purple-600">+45%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Timeline View */}
            <Card>
              <CardHeader>
                <CardTitle>Campaign Timeline</CardTitle>
                <CardDescription>Visual timeline of all campaign milestones and activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-3 border-l-4 border-blue-500 bg-blue-50">
                    <Clock className="w-4 h-4 text-blue-600" />
                    <div>
                      <div className="font-medium">Q1 Product Launch Campaign Started</div>
                      <div className="text-sm text-muted-foreground">January 15, 2024</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-3 border-l-4 border-green-500 bg-green-50">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <div>
                      <div className="font-medium">First Media Pickup Achieved</div>
                      <div className="text-sm text-muted-foreground">January 18, 2024</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-3 border-l-4 border-orange-500 bg-orange-50">
                    <AlertCircle className="w-4 h-4 text-orange-600" />
                    <div>
                      <div className="font-medium">Follow-up Required: Tech Journalists</div>
                      <div className="text-sm text-muted-foreground">Today</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="detail">
            {selectedCampaign && (
              <CampaignDetail 
                campaignId={selectedCampaign} 
                onBack={() => setActiveTab('overview')}
              />
            )}
          </TabsContent>
        </Tabs>

        {/* Quick Actions Panel */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Campaign Actions</CardTitle>
            <CardDescription>Streamline your campaign management workflow</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
                <Mail className="w-5 h-5" />
                <span className="text-xs">Send Update</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
                <BarChart3 className="w-5 h-5" />
                <span className="text-xs">Generate Report</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
                <FileText className="w-5 h-5" />
                <span className="text-xs">Export Coverage</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
                <Plus className="w-5 h-5" />
                <span className="text-xs">Add Assets</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
                <Calendar className="w-5 h-5" />
                <span className="text-xs">Schedule Follow-up</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
                <Copy className="w-5 h-5" />
                <span className="text-xs">Clone Campaign</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Campaign Wizard Modal */}
      {showWizard && (
        <CampaignWizard onClose={() => setShowWizard(false)} />
      )}
    </>
  );
};

export default CampaignManagement;


import React, { useState } from 'react';
import Layout from '@/components/Layout';
import MediaDatabase from '@/components/pr/MediaDatabase';
import CampaignManagement from '@/components/pr/CampaignManagement';
import PressReleaseBuilder from '@/components/pr/PressReleaseBuilder';
import MediaMonitoring from '@/components/pr/MediaMonitoring';
import DistributionHub from '@/components/pr/DistributionHub';
import AnalyticsReporting from '@/components/pr/AnalyticsReporting';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Users, 
  FileText, 
  TrendingUp, 
  Megaphone, 
  Zap, 
  Plus, 
  ExternalLink,
  Star,
  Calendar,
  Target,
  Activity,
  Download,
  Send,
  UserPlus,
  Clock,
  BarChart3,
  CheckCircle,
  AlertCircle,
  Bot,
  Radio,
  Eye,
  Heart
} from 'lucide-react';

const PRMedia = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data for demonstration
  const metrics = {
    mediaCoverage: { value: 147, change: '+23%', period: 'this month' },
    activeCampaigns: { value: 8, completion: 75, change: '+2' },
    mediaRelationships: { value: 342, responseRate: 68, score: 8.4 },
    pressReleases: { value: 12, pickupRate: 84, earnedValue: '$125K' },
    aiIndexing: { citations: 28, podcasts: 15, success: 92 }
  };

  const campaigns = [
    { id: 1, name: 'Q4 Product Launch', status: 'active', progress: 78, reach: '2.3M', mentions: 45 },
    { id: 2, name: 'Thought Leadership Series', status: 'active', progress: 92, reach: '890K', mentions: 23 },
    { id: 3, name: 'Industry Awards Campaign', status: 'planning', progress: 35, reach: '1.1M', mentions: 8 }
  ];

  const mediaContacts = [
    { name: 'Sarah Mitchell', outlet: 'TechCrunch', relationship: 'strong', lastContact: '2 days ago', score: 9.2 },
    { name: 'James Wilson', outlet: 'Forbes', relationship: 'growing', lastContact: '1 week ago', score: 7.8 },
    { name: 'Maria Rodriguez', outlet: 'VentureBeat', relationship: 'strong', lastContact: '3 days ago', score: 8.9 }
  ];

  const pressReleases = [
    { title: 'New AI-Powered Platform Launch', date: '2024-01-15', pickup: 23, aiCitations: 8, podcastMentions: 3 },
    { title: 'Q4 Growth Milestone Achievement', date: '2024-01-10', pickup: 18, aiCitations: 5, podcastMentions: 2 },
    { title: 'Strategic Partnership Announcement', date: '2024-01-05', pickup: 31, aiCitations: 12, podcastMentions: 7 }
  ];

  return (
    <Layout>
      <div className="bg-white min-h-screen">
        <div className="space-y-6 p-6">
          {/* Header - PRAVADO Executive Style */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-authority">PR & Media Hub</h1>
                <p className="text-gray-600">Integrated public relations and media management</p>
              </div>
              <div className="flex items-center space-x-2">
                <Badge className="bg-white border-authority text-authority hover:bg-authority hover:text-white">
                  <Bot className="w-3 h-3 mr-1" />
                  AI-Powered
                </Badge>
                <Badge className="bg-white border-disruptor text-disruptor hover:bg-disruptor hover:text-white">
                  <Radio className="w-3 h-3 mr-1" />
                  Podcast Ready
                </Badge>
              </div>
            </div>
          </div>

          {/* Sub-navigation - White Background */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-9 bg-white border border-gray-200">
              <TabsTrigger value="overview" className="data-[state=active]:bg-authority data-[state=active]:text-white">Overview</TabsTrigger>
              <TabsTrigger value="campaigns" className="data-[state=active]:bg-disruptor data-[state=active]:text-white">Campaigns</TabsTrigger>
              <TabsTrigger value="media-database" className="data-[state=active]:bg-executive data-[state=active]:text-white">Media Database</TabsTrigger>
              <TabsTrigger value="press-releases" className="data-[state=active]:bg-visionary data-[state=active]:text-white">Press Releases</TabsTrigger>
              <TabsTrigger value="press-builder" className="data-[state=active]:bg-authority data-[state=active]:text-white">Press Builder</TabsTrigger>
              <TabsTrigger value="monitoring" className="data-[state=active]:bg-disruptor data-[state=active]:text-white">Media Monitoring</TabsTrigger>
              <TabsTrigger value="distribution" className="data-[state=active]:bg-executive data-[state=active]:text-white">Distribution</TabsTrigger>
              <TabsTrigger value="analytics" className="data-[state=active]:bg-visionary data-[state=active]:text-white">Analytics</TabsTrigger>
              <TabsTrigger value="reports" className="data-[state=active]:bg-authority data-[state=active]:text-white">Reports</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              {/* Key Performance Metrics - All White Backgrounds with PRAVADO Borders */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                <Card className="bg-white border-l-4 border-l-authority shadow-sm">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-gray-700">Media Coverage</CardTitle>
                    <Eye className="h-4 w-4 text-gray-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-gray-800">{metrics.mediaCoverage.value}</div>
                    <p className="text-xs text-gray-600">
                      <span className="text-green-600">{metrics.mediaCoverage.change}</span> {metrics.mediaCoverage.period}
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white border-l-4 border-l-disruptor shadow-sm">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-gray-700">Active Campaigns</CardTitle>
                    <Target className="h-4 w-4 text-gray-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-gray-800">{metrics.activeCampaigns.value}</div>
                    <div className="flex items-center space-x-2 mt-1">
                      <Progress value={metrics.activeCampaigns.completion} className="flex-1 h-2" />
                      <span className="text-xs text-gray-600">{metrics.activeCampaigns.completion}%</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white border-l-4 border-l-executive shadow-sm">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-gray-700">Media Relations</CardTitle>
                    <Users className="h-4 w-4 text-gray-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-gray-800">{metrics.mediaRelationships.value}</div>
                    <p className="text-xs text-gray-600">
                      {metrics.mediaRelationships.responseRate}% response rate • Score: {metrics.mediaRelationships.score}/10
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white border-l-4 border-l-visionary shadow-sm">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-gray-700">Press Releases</CardTitle>
                    <FileText className="h-4 w-4 text-gray-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-gray-800">{metrics.pressReleases.value}</div>
                    <p className="text-xs text-gray-600">
                      {metrics.pressReleases.pickupRate}% pickup • {metrics.pressReleases.earnedValue} earned
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white border-l-4 border-l-authority shadow-sm">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-gray-700">AI Indexing</CardTitle>
                    <Bot className="h-4 w-4 text-gray-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-gray-800">{metrics.aiIndexing.citations}</div>
                    <p className="text-xs text-gray-600">
                      {metrics.aiIndexing.podcasts} podcast mentions • {metrics.aiIndexing.success}% success
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Main Content Grid - All White Backgrounds with PRAVADO Accents */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Campaign Management */}
                <Card className="bg-white border-l-4 border-l-authority shadow-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center text-authority">
                      <Target className="w-5 h-5 mr-2" />
                      Campaign Management
                    </CardTitle>
                    <CardDescription className="text-gray-600">Active campaigns and performance</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {campaigns.map((campaign) => (
                      <div key={campaign.id} className="bg-white border border-gray-200 rounded-lg p-3 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-sm text-gray-800">{campaign.name}</span>
                          <Badge className={campaign.status === 'active' ? 'bg-authority text-white' : 'bg-gray-200 text-gray-800'}>
                            {campaign.status}
                          </Badge>
                        </div>
                        <Progress value={campaign.progress} className="h-2" />
                        <div className="flex justify-between text-xs text-gray-600">
                          <span>Reach: {campaign.reach}</span>
                          <span>{campaign.mentions} mentions</span>
                        </div>
                      </div>
                    ))}
                    <Button className="w-full bg-authority hover:bg-authority/90 text-white" size="sm">
                      <Plus className="w-4 h-4 mr-2" />
                      Create New Campaign
                    </Button>
                  </CardContent>
                </Card>

                {/* Media Relationship Center */}
                <Card className="bg-white border-l-4 border-l-disruptor shadow-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center text-disruptor">
                      <Heart className="w-5 h-5 mr-2" />
                      Media Relationships
                    </CardTitle>
                    <CardDescription className="text-gray-600">Top journalist relationships</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {mediaContacts.map((contact, index) => (
                      <div key={index} className="flex items-center space-x-3 p-2 bg-white border border-gray-200 rounded-lg">
                        <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                          <Users className="w-4 h-4 text-gray-600" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="font-medium text-sm text-gray-800">{contact.name}</span>
                            <div className="flex items-center space-x-1">
                              <Star className="w-3 h-3 text-disruptor fill-current" />
                              <span className="text-xs text-gray-600">{contact.score}</span>
                            </div>
                          </div>
                          <div className="text-xs text-gray-600">
                            {contact.outlet} • {contact.lastContact}
                          </div>
                          <Badge variant="outline" className="border-gray-300 text-gray-700">
                            {contact.relationship}
                          </Badge>
                        </div>
                      </div>
                    ))}
                    <Button className="w-full bg-white border border-disruptor text-disruptor hover:bg-disruptor hover:text-white" size="sm">
                      <UserPlus className="w-4 h-4 mr-2" />
                      Add Media Contact
                    </Button>
                  </CardContent>
                </Card>

                {/* Press Release Hub */}
                <Card className="bg-white border-l-4 border-l-executive shadow-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center text-executive">
                      <Megaphone className="w-5 h-5 mr-2" />
                      Press Release Hub
                    </CardTitle>
                    <CardDescription className="text-gray-600">Recent releases and AI performance</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {pressReleases.map((release, index) => (
                      <div key={index} className="bg-white border border-gray-200 rounded-lg p-3 space-y-2">
                        <h4 className="font-medium text-sm text-gray-800">{release.title}</h4>
                        <div className="text-xs text-gray-600">{release.date}</div>
                        <div className="grid grid-cols-3 gap-2 text-xs">
                          <div className="text-center">
                            <div className="font-medium text-gray-800">{release.pickup}</div>
                            <div className="text-gray-600">Pickup</div>
                          </div>
                          <div className="text-center">
                            <div className="font-medium flex items-center justify-center text-gray-800">
                              <Bot className="w-3 h-3 mr-1" />
                              {release.aiCitations}
                            </div>
                            <div className="text-gray-600">AI Citations</div>
                          </div>
                          <div className="text-center">
                            <div className="font-medium flex items-center justify-center text-gray-800">
                              <Radio className="w-3 h-3 mr-1" />
                              {release.podcastMentions}
                            </div>
                            <div className="text-gray-600">Podcasts</div>
                          </div>
                        </div>
                      </div>
                    ))}
                    <Button className="w-full bg-white border border-executive text-executive hover:bg-executive hover:text-white" size="sm">
                      <Send className="w-4 h-4 mr-2" />
                      Distribute Press Release
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Actions Panel - White Background */}
              <Card className="bg-white shadow-sm">
                <CardHeader>
                  <CardTitle className="text-gray-800">Quick Actions</CardTitle>
                  <CardDescription className="text-gray-600">Streamline your PR workflow with one-click actions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                    <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2 border-authority text-authority hover:bg-authority hover:text-white">
                      <Plus className="w-5 h-5" />
                      <span className="text-xs">New Campaign</span>
                    </Button>
                    <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2 border-disruptor text-disruptor hover:bg-disruptor hover:text-white">
                      <Send className="w-5 h-5" />
                      <span className="text-xs">Send Release</span>
                    </Button>
                    <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2 border-executive text-executive hover:bg-executive hover:text-white">
                      <UserPlus className="w-5 h-5" />
                      <span className="text-xs">Add Contact</span>
                    </Button>
                    <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2 border-visionary text-visionary hover:bg-visionary hover:text-white">
                      <Calendar className="w-5 h-5" />
                      <span className="text-xs">Schedule Outreach</span>
                    </Button>
                    <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2 border-authority text-authority hover:bg-authority hover:text-white">
                      <Bot className="w-5 h-5" />
                      <span className="text-xs">AI Content</span>
                    </Button>
                    <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2 border-disruptor text-disruptor hover:bg-disruptor hover:text-white">
                      <Download className="w-5 h-5" />
                      <span className="text-xs">Export Report</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Integration Indicators - White Background */}
              <Card className="bg-white shadow-sm">
                <CardHeader>
                  <CardTitle className="text-gray-800">Platform Integration Status</CardTitle>
                  <CardDescription className="text-gray-600">Cross-pillar connections and AUTOMATE methodology progress</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="flex items-center space-x-3 p-3 bg-white border border-gray-200 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <div>
                        <div className="font-medium text-sm text-gray-800">Content Pillar</div>
                        <div className="text-xs text-gray-600">23 pieces amplified</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-white border border-gray-200 rounded-lg">
                      <Activity className="w-5 h-5 text-authority" />
                      <div>
                        <div className="font-medium text-sm text-gray-800">AUTOMATE Progress</div>
                        <div className="text-xs text-gray-600">Step 6 of 8 active</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-white border border-gray-200 rounded-lg">
                      <TrendingUp className="w-5 h-5 text-visionary" />
                      <div>
                        <div className="font-medium text-sm text-gray-800">Cross-Pillar ROI</div>
                        <div className="text-xs text-gray-600">+45% improvement</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-white border border-gray-200 rounded-lg">
                      <AlertCircle className="w-5 h-5 text-disruptor" />
                      <div>
                        <div className="font-medium text-sm text-gray-800">Opportunities</div>
                        <div className="text-xs text-gray-600">3 campaigns pending</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="campaigns">
              <CampaignManagement />
            </TabsContent>

            <TabsContent value="media-database">
              <MediaDatabase />
            </TabsContent>

            <TabsContent value="press-releases">
              <Card className="bg-white shadow-sm">
                <CardHeader>
                  <CardTitle className="text-gray-800">Press Releases</CardTitle>
                  <CardDescription className="text-gray-600">Press release creation and distribution</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Press release management interface coming soon...</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="press-builder">
              <PressReleaseBuilder />
            </TabsContent>

            <TabsContent value="monitoring">
              <MediaMonitoring />
            </TabsContent>

            <TabsContent value="distribution">
              <DistributionHub />
            </TabsContent>

            <TabsContent value="analytics">
              <AnalyticsReporting />
            </TabsContent>

            <TabsContent value="reports">
              <Card className="bg-white shadow-sm">
                <CardHeader>
                  <CardTitle className="text-gray-800">Custom Reports</CardTitle>
                  <CardDescription className="text-gray-600">Advanced reporting and data export</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Custom reporting interface coming soon...</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default PRMedia;

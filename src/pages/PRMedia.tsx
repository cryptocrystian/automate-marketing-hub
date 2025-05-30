import React, { useState } from 'react';
import Layout from '@/components/Layout';
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
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">PR & Media Hub</h1>
              <p className="text-muted-foreground">Integrated public relations and media management</p>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                <Bot className="w-3 h-3 mr-1" />
                AI-Powered
              </Badge>
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                <Radio className="w-3 h-3 mr-1" />
                Podcast Ready
              </Badge>
            </div>
          </div>
        </div>

        {/* Sub-navigation */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
            <TabsTrigger value="media-database">Media Database</TabsTrigger>
            <TabsTrigger value="press-releases">Press Releases</TabsTrigger>
            <TabsTrigger value="distribution">Distribution</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Key Performance Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Media Coverage</CardTitle>
                  <Eye className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{metrics.mediaCoverage.value}</div>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-green-600">{metrics.mediaCoverage.change}</span> {metrics.mediaCoverage.period}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Campaigns</CardTitle>
                  <Target className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{metrics.activeCampaigns.value}</div>
                  <div className="flex items-center space-x-2 mt-1">
                    <Progress value={metrics.activeCampaigns.completion} className="flex-1 h-2" />
                    <span className="text-xs text-muted-foreground">{metrics.activeCampaigns.completion}%</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Media Relations</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{metrics.mediaRelationships.value}</div>
                  <p className="text-xs text-muted-foreground">
                    {metrics.mediaRelationships.responseRate}% response rate • Score: {metrics.mediaRelationships.score}/10
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Press Releases</CardTitle>
                  <FileText className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{metrics.pressReleases.value}</div>
                  <p className="text-xs text-muted-foreground">
                    {metrics.pressReleases.pickupRate}% pickup • {metrics.pressReleases.earnedValue} earned
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">AI Indexing</CardTitle>
                  <Bot className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{metrics.aiIndexing.citations}</div>
                  <p className="text-xs text-muted-foreground">
                    {metrics.aiIndexing.podcasts} podcast mentions • {metrics.aiIndexing.success}% success
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Campaign Management */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Target className="w-5 h-5 mr-2" />
                    Campaign Management
                  </CardTitle>
                  <CardDescription>Active campaigns and performance</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {campaigns.map((campaign) => (
                    <div key={campaign.id} className="border rounded-lg p-3 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-sm">{campaign.name}</span>
                        <Badge variant={campaign.status === 'active' ? 'default' : 'secondary'}>
                          {campaign.status}
                        </Badge>
                      </div>
                      <Progress value={campaign.progress} className="h-2" />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>Reach: {campaign.reach}</span>
                        <span>{campaign.mentions} mentions</span>
                      </div>
                    </div>
                  ))}
                  <Button className="w-full" size="sm">
                    <Plus className="w-4 h-4 mr-2" />
                    Create New Campaign
                  </Button>
                </CardContent>
              </Card>

              {/* Media Relationship Center */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Heart className="w-5 h-5 mr-2" />
                    Media Relationships
                  </CardTitle>
                  <CardDescription>Top journalist relationships</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {mediaContacts.map((contact, index) => (
                    <div key={index} className="flex items-center space-x-3 p-2 border rounded-lg">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <Users className="w-4 h-4 text-blue-600" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-sm">{contact.name}</span>
                          <div className="flex items-center space-x-1">
                            <Star className="w-3 h-3 text-yellow-500 fill-current" />
                            <span className="text-xs text-muted-foreground">{contact.score}</span>
                          </div>
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {contact.outlet} • {contact.lastContact}
                        </div>
                        <Badge variant="outline">
                          {contact.relationship}
                        </Badge>
                      </div>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full" size="sm">
                    <UserPlus className="w-4 h-4 mr-2" />
                    Add Media Contact
                  </Button>
                </CardContent>
              </Card>

              {/* Press Release Hub */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Megaphone className="w-5 h-5 mr-2" />
                    Press Release Hub
                  </CardTitle>
                  <CardDescription>Recent releases and AI performance</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {pressReleases.map((release, index) => (
                    <div key={index} className="border rounded-lg p-3 space-y-2">
                      <h4 className="font-medium text-sm">{release.title}</h4>
                      <div className="text-xs text-muted-foreground">{release.date}</div>
                      <div className="grid grid-cols-3 gap-2 text-xs">
                        <div className="text-center">
                          <div className="font-medium">{release.pickup}</div>
                          <div className="text-muted-foreground">Pickup</div>
                        </div>
                        <div className="text-center">
                          <div className="font-medium flex items-center justify-center">
                            <Bot className="w-3 h-3 mr-1" />
                            {release.aiCitations}
                          </div>
                          <div className="text-muted-foreground">AI Citations</div>
                        </div>
                        <div className="text-center">
                          <div className="font-medium flex items-center justify-center">
                            <Radio className="w-3 h-3 mr-1" />
                            {release.podcastMentions}
                          </div>
                          <div className="text-muted-foreground">Podcasts</div>
                        </div>
                      </div>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full" size="sm">
                    <Send className="w-4 h-4 mr-2" />
                    Distribute Press Release
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions Panel */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Streamline your PR workflow with one-click actions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                  <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
                    <Plus className="w-5 h-5" />
                    <span className="text-xs">New Campaign</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
                    <Send className="w-5 h-5" />
                    <span className="text-xs">Send Release</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
                    <UserPlus className="w-5 h-5" />
                    <span className="text-xs">Add Contact</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
                    <Calendar className="w-5 h-5" />
                    <span className="text-xs">Schedule Outreach</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
                    <Bot className="w-5 h-5" />
                    <span className="text-xs">AI Content</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
                    <Download className="w-5 h-5" />
                    <span className="text-xs">Export Report</span>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Integration Indicators */}
            <Card>
              <CardHeader>
                <CardTitle>Platform Integration Status</CardTitle>
                <CardDescription>Cross-pillar connections and AUTOMATE methodology progress</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="flex items-center space-x-3 p-3 border rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <div>
                      <div className="font-medium text-sm">Content Pillar</div>
                      <div className="text-xs text-muted-foreground">23 pieces amplified</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 border rounded-lg">
                    <Activity className="w-5 h-5 text-blue-500" />
                    <div>
                      <div className="font-medium text-sm">AUTOMATE Progress</div>
                      <div className="text-xs text-muted-foreground">Step 6 of 8 active</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 border rounded-lg">
                    <TrendingUp className="w-5 h-5 text-purple-500" />
                    <div>
                      <div className="font-medium text-sm">Cross-Pillar ROI</div>
                      <div className="text-xs text-muted-foreground">+45% improvement</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 border rounded-lg">
                    <AlertCircle className="w-5 h-5 text-orange-500" />
                    <div>
                      <div className="font-medium text-sm">Opportunities</div>
                      <div className="text-xs text-muted-foreground">3 campaigns pending</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Other tab contents would be implemented here */}
          <TabsContent value="campaigns">
            <Card>
              <CardHeader>
                <CardTitle>Campaign Management</CardTitle>
                <CardDescription>Detailed campaign overview and management</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Campaign management interface coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="media-database">
            <Card>
              <CardHeader>
                <CardTitle>Media Database</CardTitle>
                <CardDescription>Comprehensive media contact management</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Media database interface coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="press-releases">
            <Card>
              <CardHeader>
                <CardTitle>Press Releases</CardTitle>
                <CardDescription>Press release creation and distribution</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Press release management interface coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="distribution">
            <Card>
              <CardHeader>
                <CardTitle>Distribution Network</CardTitle>
                <CardDescription>Multi-channel distribution management</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Distribution network interface coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <Card>
              <CardHeader>
                <CardTitle>PR Analytics</CardTitle>
                <CardDescription>Comprehensive PR performance analytics</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">PR analytics interface coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default PRMedia;


import React from 'react';
import { useDashboardData } from '@/hooks/useDashboardData';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  TrendingUp, 
  FileText, 
  Search, 
  Users, 
  Calendar,
  Megaphone,
  BarChart3,
  Bot,
  Mic,
  Target,
  Brain,
  Zap,
  Star,
  ArrowUpRight,
  Play,
  Eye
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const Dashboard = () => {
  const { 
    metrics, 
    isLoading
  } = useDashboardData();

  // Mock data for UI components that aren't yet connected to real data
  const recentActivity = [
    { icon: TrendingUp, title: "Campaign launched successfully", time: "2 hours ago" },
    { icon: FileText, title: "New content piece published", time: "4 hours ago" },
    { icon: Bot, title: "AI citation detected", time: "6 hours ago" },
    { icon: Megaphone, title: "Press release distributed", time: "1 day ago" }
  ];

  const performanceData = [
    { date: 'Jan 1', value: 65 },
    { date: 'Jan 8', value: 78 },
    { date: 'Jan 15', value: 82 },
    { date: 'Jan 22', value: 89 },
    { date: 'Jan 29', value: 95 }
  ];

  const upcomingEvents = [
    { title: "Q1 Campaign Review", date: "Tomorrow, 2:00 PM", priority: "high" },
    { title: "Content Calendar Planning", date: "Friday, 10:00 AM", priority: "medium" },
    { title: "SEO Audit Report", date: "Next Monday", priority: "low" }
  ];

  const aiInsights = [
    { title: "Content Performance Spike", description: "Your recent blog posts are performing 34% better than average", confidence: 92 },
    { title: "SEO Opportunity", description: "3 new keyword opportunities identified in your niche", confidence: 87 },
    { title: "Media Mention Alert", description: "Brand mentions increased 28% this week", confidence: 95 }
  ];

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="animate-pulse">
          <div className="h-32 bg-gray-200 rounded-xl mb-6"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="h-32 bg-gray-200 rounded-lg"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="bg-pravado-gradient rounded-xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-2">Welcome back, Christian Dibrell!</h1>
            <p className="text-xl text-blue-100 mb-4">Your PRAVADO marketing ecosystem is performing excellently</p>
            <div className="flex items-center space-x-4">
              <Badge className="bg-white/20 text-white hover:bg-white/30">
                <Zap className="w-4 h-4 mr-1" />
                AI-Powered
              </Badge>
              <Badge className="bg-white/20 text-white hover:bg-white/30">
                <Star className="w-4 h-4 mr-1" />
                Premium Account
              </Badge>
            </div>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold">94.7%</div>
            <div className="text-blue-100">System Performance</div>
          </div>
        </div>
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Active Campaigns */}
        <Card className="bg-white border-l-4 border-l-authority hover:shadow-lg transition-all">
          <CardHeader className="pb-2">
            <CardTitle className="text-executive flex items-center gap-2 text-sm font-medium">
              <TrendingUp className="w-4 h-4 text-authority" />
              Active Campaigns
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">{metrics?.activeCampaigns || 0}</div>
            <div className="text-xs text-gray-600 flex items-center gap-1">
              <ArrowUpRight className="w-3 h-3 text-green-500" />
              +12% from last month
            </div>
          </CardContent>
        </Card>

        {/* Content Pieces */}
        <Card className="bg-white border-l-4 border-l-disruptor hover:shadow-lg transition-all">
          <CardHeader className="pb-2">
            <CardTitle className="text-executive flex items-center gap-2 text-sm font-medium">
              <FileText className="w-4 h-4 text-disruptor" />
              Content Pieces
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">{metrics?.contentPieces || 0}</div>
            <div className="text-xs text-gray-600 flex items-center gap-1">
              <ArrowUpRight className="w-3 h-3 text-green-500" />
              +8% this week
            </div>
          </CardContent>
        </Card>

        {/* SEO Keywords - FIXED: Executive Deep border */}
        <Card className="bg-white border-l-4 border-l-executive hover:shadow-lg transition-all">
          <CardHeader className="pb-2">
            <CardTitle className="text-executive flex items-center gap-2 text-sm font-medium">
              <Search className="w-4 h-4 text-executive" />
              SEO Keywords
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">{metrics?.seoKeywords || 0}</div>
            <div className="text-xs text-gray-600 flex items-center gap-1">
              <ArrowUpRight className="w-3 h-3 text-green-500" />
              Ranking improved
            </div>
          </CardContent>
        </Card>

        {/* Team Members */}
        <Card className="bg-white border-l-4 border-l-visionary hover:shadow-lg transition-all">
          <CardHeader className="pb-2">
            <CardTitle className="text-executive flex items-center gap-2 text-sm font-medium">
              <Users className="w-4 h-4 text-visionary" />
              Team Members
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">{metrics?.teamMembers || 1}</div>
            <div className="text-xs text-gray-600">Active contributors</div>
          </CardContent>
        </Card>

        {/* AI Citations - FIXED: Authority Crimson border */}
        <Card className="bg-white border-l-4 border-l-authority hover:shadow-lg transition-all">
          <CardHeader className="pb-2">
            <CardTitle className="text-executive flex items-center gap-2 text-sm font-medium">
              <Bot className="w-4 h-4 text-authority" />
              AI Citations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">{metrics?.aiCitations || 0}</div>
            <div className="text-xs text-gray-600 flex items-center gap-1">
              <ArrowUpRight className="w-3 h-3 text-green-500" />
              +15% mentions
            </div>
          </CardContent>
        </Card>

        {/* Podcast Syndications - FIXED: Disruptor Orange border */}
        <Card className="bg-white border-l-4 border-l-disruptor hover:shadow-lg transition-all">
          <CardHeader className="pb-2">
            <CardTitle className="text-executive flex items-center gap-2 text-sm font-medium">
              <Mic className="w-4 h-4 text-disruptor" />
              Podcast Syndications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">{metrics?.podcastSyndications || 0}</div>
            <div className="text-xs text-gray-600">Episodes distributed</div>
          </CardContent>
        </Card>

        {/* Press Releases - FIXED: Executive Deep border */}
        <Card className="bg-white border-l-4 border-l-executive hover:shadow-lg transition-all">
          <CardHeader className="pb-2">
            <CardTitle className="text-executive flex items-center gap-2 text-sm font-medium">
              <Megaphone className="w-4 h-4 text-executive" />
              Press Releases
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">{metrics?.pressReleases || 0}</div>
            <div className="text-xs text-gray-600">Published this month</div>
          </CardContent>
        </Card>

        {/* Engagement Rate - FIXED: Visionary Purple border */}
        <Card className="bg-white border-l-4 border-l-visionary hover:shadow-lg transition-all">
          <CardHeader className="pb-2">
            <CardTitle className="text-executive flex items-center gap-2 text-sm font-medium">
              <BarChart3 className="w-4 h-4 text-visionary" />
              Engagement Rate
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">{metrics?.engagementRate || 0}%</div>
            <div className="text-xs text-gray-600 flex items-center gap-1">
              <ArrowUpRight className="w-3 h-3 text-green-500" />
              Above industry avg
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Performance Charts and AI Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Performance Chart - FIXED: Disruptor Orange border */}
        <Card className="bg-white border-l-4 border-l-disruptor">
          <CardHeader>
            <CardTitle className="text-executive">Performance Trends</CardTitle>
            <CardDescription>Last 30 days overview</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                <XAxis dataKey="date" stroke="#64748B" />
                <YAxis stroke="#64748B" />
                <Tooltip />
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#c3073f" 
                  fill="#c3073f" 
                  fillOpacity={0.1}
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* AI Insights - FIXED: Visionary Purple border */}
        <Card className="bg-white border-l-4 border-l-visionary">
          <CardHeader>
            <CardTitle className="text-executive flex items-center gap-2">
              <Brain className="w-5 h-5 text-visionary" />
              AI Insights
            </CardTitle>
            <CardDescription>Powered by PRAVADO Intelligence</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {aiInsights.map((insight, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50">
                  <div className="w-2 h-2 rounded-full bg-authority mt-2"></div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{insight.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{insight.description}</p>
                    <Badge variant="secondary" className="mt-2 text-xs">
                      {insight.confidence}% confidence
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity and Upcoming Events */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <Card className="bg-white">
          <CardHeader>
            <CardTitle className="text-executive">Recent Activity</CardTitle>
            <CardDescription>Latest updates across your campaigns</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50">
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                    <activity.icon className="w-4 h-4 text-gray-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Events */}
        <Card className="bg-white">
          <CardHeader>
            <CardTitle className="text-executive flex items-center gap-2">
              <Calendar className="w-5 h-5 text-disruptor" />
              Upcoming Events
            </CardTitle>
            <CardDescription>Scheduled campaigns and deadlines</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg border border-gray-100">
                  <div>
                    <p className="font-medium text-gray-900">{event.title}</p>
                    <p className="text-sm text-gray-600">{event.date}</p>
                  </div>
                  <Badge 
                    variant="outline" 
                    className={`
                      ${event.priority === 'high' ? 'border-red-200 text-red-700' : ''}
                      ${event.priority === 'medium' ? 'border-blue-200 text-blue-700' : ''}
                      ${event.priority === 'low' ? 'border-green-200 text-green-700' : ''}
                    `}
                  >
                    {event.priority}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="bg-white">
        <CardHeader>
          <CardTitle className="text-executive">Quick Actions</CardTitle>
          <CardDescription>Jump into your most used features</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-20 flex-col space-y-2 border-authority text-authority hover:bg-authority hover:text-white">
              <Target className="w-6 h-6" />
              <span className="text-sm">New Campaign</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2 border-disruptor text-disruptor hover:bg-disruptor hover:text-white">
              <FileText className="w-6 h-6" />
              <span className="text-sm">Create Content</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2 border-executive text-executive hover:bg-executive hover:text-white">
              <BarChart3 className="w-6 h-6" />
              <span className="text-sm">View Analytics</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2 border-visionary text-visionary hover:bg-visionary hover:text-white">
              <Eye className="w-6 h-6" />
              <span className="text-sm">Monitor AI</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;

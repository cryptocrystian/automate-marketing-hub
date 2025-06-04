
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
    quickStats, 
    isLoading,
    recentActivity,
    performanceData,
    upcomingEvents,
    aiInsights
  } = useDashboardData();

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
            <div className="text-2xl font-bold text-gray-900">{quickStats.activeCampaigns}</div>
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
            <div className="text-2xl font-bold text-gray-900">{quickStats.contentPieces}</div>
            <div className="text-xs text-gray-600 flex items-center gap-1">
              <ArrowUpRight className="w-3 h-3 text-green-500" />
              +8% this week
            </div>
          </CardContent>
        </Card>

        {/* SEO Keywords */}
        <Card className="bg-white border-l-4 border-l-executive hover:shadow-lg transition-all">
          <CardHeader className="pb-2">
            <CardTitle className="text-executive flex items-center gap-2 text-sm font-medium">
              <Search className="w-4 h-4 text-executive" />
              SEO Keywords
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">{quickStats.seoKeywords}</div>
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
            <div className="text-2xl font-bold text-gray-900">{quickStats.teamMembers}</div>
            <div className="text-xs text-gray-600">Active contributors</div>
          </CardContent>
        </Card>

        {/* AI Citations */}
        <Card className="bg-white border-l-4 border-l-authority hover:shadow-lg transition-all">
          <CardHeader className="pb-2">
            <CardTitle className="text-executive flex items-center gap-2 text-sm font-medium">
              <Bot className="w-4 h-4 text-authority" />
              AI Citations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">{quickStats.aiCitations}</div>
            <div className="text-xs text-gray-600 flex items-center gap-1">
              <ArrowUpRight className="w-3 h-3 text-green-500" />
              +15% mentions
            </div>
          </CardContent>
        </Card>

        {/* Podcast Syndications */}
        <Card className="bg-white border-l-4 border-l-disruptor hover:shadow-lg transition-all">
          <CardHeader className="pb-2">
            <CardTitle className="text-executive flex items-center gap-2 text-sm font-medium">
              <Mic className="w-4 h-4 text-disruptor" />
              Podcast Syndications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">{quickStats.podcastSyndications}</div>
            <div className="text-xs text-gray-600">Episodes distributed</div>
          </CardContent>
        </Card>

        {/* Press Releases */}
        <Card className="bg-white border-l-4 border-l-executive hover:shadow-lg transition-all">
          <CardHeader className="pb-2">
            <CardTitle className="text-executive flex items-center gap-2 text-sm font-medium">
              <Megaphone className="w-4 h-4 text-executive" />
              Press Releases
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">{quickStats.pressReleases}</div>
            <div className="text-xs text-gray-600">Published this month</div>
          </CardContent>
        </Card>

        {/* Engagement Rate */}
        <Card className="bg-white border-l-4 border-l-visionary hover:shadow-lg transition-all">
          <CardHeader className="pb-2">
            <CardTitle className="text-executive flex items-center gap-2 text-sm font-medium">
              <BarChart3 className="w-4 h-4 text-visionary" />
              Engagement Rate
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">{quickStats.engagementRate}%</div>
            <div className="text-xs text-gray-600 flex items-center gap-1">
              <ArrowUpRight className="w-3 h-3 text-green-500" />
              Above industry avg
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Performance Charts and AI Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Performance Chart */}
        <Card className="bg-white">
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

        {/* AI Insights */}
        <Card className="bg-white">
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
                      ${event.priority === 'medium' ? 'border-yellow-200 text-yellow-700' : ''}
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

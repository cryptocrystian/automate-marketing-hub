
import { useAuth } from '@/context/AuthContext';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { TrendingUp, TrendingDown, Users, Mail, Calendar, Target } from 'lucide-react';

const Dashboard = () => {
  const { user } = useAuth();

  const clientMetrics = [
    {
      title: "Active Campaigns",
      value: "12",
      change: "+2 from last month",
      trend: "up",
      icon: Target,
      color: "text-success"
    },
    {
      title: "Email Opens",
      value: "2,847",
      change: "+12% from last week",
      trend: "up",
      icon: Mail,
      color: "text-success"
    },
    {
      title: "Content Published",
      value: "18",
      change: "This month",
      trend: "neutral",
      icon: Calendar,
      color: "text-primary"
    },
    {
      title: "Lead Generation",
      value: "156",
      change: "+8% from last month",
      trend: "up",
      icon: Users,
      color: "text-success"
    }
  ];

  const adminMetrics = [
    {
      title: "Total Clients",
      value: "24",
      change: "+3 new this month",
      trend: "up",
      icon: Users,
      color: "text-success"
    },
    {
      title: "Active Campaigns",
      value: "89",
      change: "+15% growth",
      trend: "up",
      icon: Target,
      color: "text-success"
    },
    {
      title: "System Health",
      value: "99.8%",
      change: "Uptime this month",
      trend: "up",
      icon: TrendingUp,
      color: "text-success"
    },
    {
      title: "Revenue",
      value: "$47,200",
      change: "+23% from last month",
      trend: "up",
      icon: TrendingUp,
      color: "text-success"
    }
  ];

  const metrics = user?.role === 'admin' ? adminMetrics : clientMetrics;

  const recentActivity = [
    {
      action: "Campaign launched",
      target: "Holiday Email Series",
      time: "2 hours ago",
      status: "success"
    },
    {
      action: "Content published",
      target: "Social Media Posts",
      time: "5 hours ago",
      status: "success"
    },
    {
      action: "Analytics updated",
      target: "Monthly Report",
      time: "1 day ago",
      status: "neutral"
    },
    {
      action: "Client onboarded",
      target: "TechStart Solutions",
      time: "2 days ago",
      status: "success"
    }
  ];

  return (
    <Layout>
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <SidebarTrigger />
            <div>
              <h1 className="text-2xl font-bold text-slate-800">
                Welcome back, {user?.name}
              </h1>
              <p className="text-slate-600">
                {user?.role === 'admin' ? 'System Overview' : 'Your Marketing Dashboard'}
              </p>
            </div>
          </div>
          <Badge variant="outline" className="text-primary border-primary">
            {user?.role === 'admin' ? 'Admin' : 'Client'}
          </Badge>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <Card key={index} className="border border-slate-200">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-slate-700">
                  {metric.title}
                </CardTitle>
                <metric.icon className={`h-4 w-4 ${metric.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-slate-800">{metric.value}</div>
                <p className="text-xs text-slate-500 flex items-center mt-1">
                  {metric.trend === 'up' && <TrendingUp className="h-3 w-3 mr-1 text-success" />}
                  {metric.trend === 'down' && <TrendingDown className="h-3 w-3 mr-1 text-danger" />}
                  {metric.change}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Activity */}
          <Card className="border border-slate-200">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-slate-800">Recent Activity</CardTitle>
              <CardDescription className="text-slate-600">
                Latest updates from your marketing operations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <div>
                      <p className="text-sm font-medium text-slate-800">{activity.action}</p>
                      <p className="text-xs text-slate-600">{activity.target}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-slate-500">{activity.time}</p>
                      <Badge 
                        variant={activity.status === 'success' ? 'default' : 'secondary'}
                        className={activity.status === 'success' ? 'bg-success text-white' : ''}
                      >
                        {activity.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="border border-slate-200">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-slate-800">Quick Actions</CardTitle>
              <CardDescription className="text-slate-600">
                Common tasks and shortcuts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                <Button className="bg-primary hover:bg-primary-800 text-white h-20 flex flex-col items-center justify-center">
                  <Target className="h-5 w-5 mb-1" />
                  <span className="text-sm">New Campaign</span>
                </Button>
                <Button variant="outline" className="h-20 flex flex-col items-center justify-center border-slate-200">
                  <Calendar className="h-5 w-5 mb-1" />
                  <span className="text-sm">Schedule Content</span>
                </Button>
                <Button variant="outline" className="h-20 flex flex-col items-center justify-center border-slate-200">
                  <Mail className="h-5 w-5 mb-1" />
                  <span className="text-sm">Email Builder</span>
                </Button>
                <Button variant="outline" className="h-20 flex flex-col items-center justify-center border-slate-200">
                  <TrendingUp className="h-5 w-5 mb-1" />
                  <span className="text-sm">View Analytics</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;

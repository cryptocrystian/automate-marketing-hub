
import Layout from '@/components/Layout';
import { useAuth } from '@/context/AuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  BarChart3, 
  Target, 
  TrendingUp, 
  Users,
  Calendar,
  FileText,
  Megaphone,
  Settings,
  ChevronRight,
  Activity
} from 'lucide-react';

const Dashboard = () => {
  const { userProfile, tenant } = useAuth();

  const automateSteps = [
    { code: 'A', name: 'Assess & Audit', progress: 75, status: 'completed' },
    { code: 'U', name: 'Understand Audience', progress: 60, status: 'in_progress' },
    { code: 'T', name: 'Target Strategy', progress: 30, status: 'in_progress' },
    { code: 'O', name: 'Optimize Systems', progress: 0, status: 'not_started' },
    { code: 'M', name: 'Measure & Monitor', progress: 0, status: 'not_started' },
    { code: 'A', name: 'Accelerate Growth', progress: 0, status: 'not_started' },
    { code: 'T', name: 'Transform & Evolve', progress: 0, status: 'not_started' },
    { code: 'E', name: 'Execute Excellence', progress: 0, status: 'not_started' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500';
      case 'in_progress': return 'bg-blue-500';
      default: return 'bg-gray-300';
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed': return <Badge className="bg-green-100 text-green-800">Completed</Badge>;
      case 'in_progress': return <Badge className="bg-blue-100 text-blue-800">In Progress</Badge>;
      default: return <Badge variant="secondary">Not Started</Badge>;
    }
  };

  return (
    <Layout>
      <div className="space-y-6">
        {/* Welcome Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 text-white">
          <h1 className="text-3xl font-bold mb-2">
            Welcome back, {userProfile?.full_name || 'User'}!
          </h1>
          <p className="text-blue-100 mb-4">
            {tenant?.name} • {userProfile?.role?.replace('_', ' ').toUpperCase()}
          </p>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Activity className="w-5 h-5 mr-2" />
              <span className="text-sm">Platform Status: Active</span>
            </div>
            <div className="flex items-center">
              <Target className="w-5 h-5 mr-2" />
              <span className="text-sm">AUTOMATE Progress: 41%</span>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Campaigns</CardTitle>
              <Megaphone className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">+2 from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Content Pieces</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">47</div>
              <p className="text-xs text-muted-foreground">+8 this week</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Engagement Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4.2%</div>
              <p className="text-xs text-muted-foreground">+0.8% from last week</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Team Members</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">6</div>
              <p className="text-xs text-muted-foreground">Across all roles</p>
            </CardContent>
          </Card>
        </div>

        {/* AUTOMATE Framework Progress */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="w-5 h-5 mr-2" />
                AUTOMATE Framework Progress
              </CardTitle>
              <CardDescription>
                Track your progress through the 8-step AUTOMATE methodology
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {automateSteps.map((step, index) => (
                  <div key={index} className="flex items-center space-x-4 p-3 rounded-lg border">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${getStatusColor(step.status)}`}>
                      {step.code}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-medium">{step.name}</h4>
                        {getStatusBadge(step.status)}
                      </div>
                      <Progress value={step.progress} className="h-2" />
                      <p className="text-xs text-muted-foreground mt-1">{step.progress}% complete</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Content Calendar</CardTitle>
              <CardDescription>Plan and schedule your content</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">
                <Calendar className="w-4 h-4 mr-2" />
                View Calendar
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Analytics Dashboard</CardTitle>
              <CardDescription>Monitor performance metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">
                <BarChart3 className="w-4 h-4 mr-2" />
                View Analytics
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Team Settings</CardTitle>
              <CardDescription>Manage your workspace</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">
                <Settings className="w-4 h-4 mr-2" />
                Manage Team
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;

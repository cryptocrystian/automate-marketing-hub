
import Layout from '@/components/Layout';
import { useAuth } from '@/context/AuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { useDashboardData } from '@/hooks/useDashboardData';
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
  Activity,
  RefreshCw
} from 'lucide-react';

const Dashboard = () => {
  const { userProfile, tenant } = useAuth();
  const { 
    isLoading, 
    metrics, 
    automateSteps, 
    updateStepProgress, 
    calculateOverallProgress,
    refreshData 
  } = useDashboardData();

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

  const handleStepClick = async (stepIndex: number) => {
    const currentStep = automateSteps[stepIndex];
    if (!currentStep) return;

    // Simple progress increment for demo - in production this would be more sophisticated
    const newProgress = currentStep.completion_percentage >= 100 ? 0 : 
                       currentStep.completion_percentage + 25;
    
    await updateStepProgress(stepIndex, Math.min(newProgress, 100));
  };

  if (isLoading) {
    return (
      <Layout>
        <div className="space-y-6">
          {/* Loading Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 text-white">
            <Skeleton className="h-8 w-64 mb-2 bg-white/20" />
            <Skeleton className="h-4 w-48 mb-4 bg-white/20" />
            <div className="flex items-center space-x-4">
              <Skeleton className="h-4 w-32 bg-white/20" />
              <Skeleton className="h-4 w-40 bg-white/20" />
            </div>
          </div>

          {/* Loading Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-4 w-4" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-8 w-16 mb-1" />
                  <Skeleton className="h-3 w-20" />
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Loading AUTOMATE Framework */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <Skeleton className="h-6 w-48" />
              <Skeleton className="h-4 w-64" />
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-center space-x-4 p-3 rounded-lg border">
                    <Skeleton className="w-10 h-10 rounded-full" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <Skeleton className="h-4 w-32" />
                        <Skeleton className="h-5 w-20" />
                      </div>
                      <Skeleton className="h-2 w-full mb-1" />
                      <Skeleton className="h-3 w-24" />
                    </div>
                    <Skeleton className="w-8 h-8" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </Layout>
    );
  }

  const overallProgress = calculateOverallProgress();

  return (
    <Layout>
      <div className="space-y-6">
        {/* Welcome Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">
                Welcome back, {userProfile?.full_name || 'User'}!
              </h1>
              <p className="text-blue-100 mb-4">
                {tenant?.name || 'Personal Workspace'} • {userProfile?.role?.replace('_', ' ').toUpperCase() || 'USER'}
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <Activity className="w-5 h-5 mr-2" />
                  <span className="text-sm">Platform Status: Active</span>
                </div>
                <div className="flex items-center">
                  <Target className="w-5 h-5 mr-2" />
                  <span className="text-sm">AUTOMATE Progress: {overallProgress}%</span>
                </div>
              </div>
            </div>
            <Button 
              variant="outline" 
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              onClick={refreshData}
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Refresh
            </Button>
          </div>
        </div>

        {/* Live Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Campaigns</CardTitle>
              <Megaphone className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metrics.activeCampaigns}</div>
              <p className="text-xs text-muted-foreground">Live from PR campaigns</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Content Pieces</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metrics.contentPieces}</div>
              <p className="text-xs text-muted-foreground">Total content created</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Engagement Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metrics.engagementRate}%</div>
              <p className="text-xs text-muted-foreground">Average across content</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Team Members</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metrics.teamMembers}</div>
              <p className="text-xs text-muted-foreground">In your workspace</p>
            </CardContent>
          </Card>
        </div>

        {/* Live AUTOMATE Framework Progress */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="w-5 h-5 mr-2" />
                AUTOMATE Framework Progress
                <Badge className="ml-2 bg-green-100 text-green-800">Live Data</Badge>
              </CardTitle>
              <CardDescription>
                Track your progress through the 8-step AUTOMATE methodology • {overallProgress}% complete
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {automateSteps.map((step, index) => (
                  <div 
                    key={index} 
                    className="flex items-center space-x-4 p-3 rounded-lg border hover:bg-slate-50 cursor-pointer transition-colors"
                    onClick={() => handleStepClick(index)}
                  >
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${getStatusColor(step.status)}`}>
                      {step.step_code}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-medium">{step.name}</h4>
                        {getStatusBadge(step.status)}
                      </div>
                      <Progress value={step.completion_percentage} className="h-2 mb-1" />
                      <p className="text-xs text-muted-foreground">
                        {step.completion_percentage}% complete • {step.description}
                      </p>
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

        {/* Real-Time Status */}
        <Card className="border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="text-green-800 flex items-center">
              <Activity className="w-5 h-5 mr-2" />
              Live Dashboard Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="text-center">
                <div className="text-green-600 font-bold">✓ Connected</div>
                <div className="text-green-700">Database</div>
              </div>
              <div className="text-center">
                <div className="text-green-600 font-bold">✓ Active</div>
                <div className="text-green-700">Real-time Updates</div>
              </div>
              <div className="text-center">
                <div className="text-green-600 font-bold">✓ Synced</div>
                <div className="text-green-700">AUTOMATE Progress</div>
              </div>
              <div className="text-center">
                <div className="text-green-600 font-bold">✓ Live</div>
                <div className="text-green-700">Performance Metrics</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Dashboard;

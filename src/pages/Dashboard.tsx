
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
  RefreshCw,
  Zap,
  Building,
  Crown,
  Search,
  Brain,
  Mic,
  FileImage
} from 'lucide-react';

const Dashboard = () => {
  const { userProfile, tenant } = useAuth();
  const { 
    isLoading, 
    metrics, 
    automateSteps, 
    updateStepProgress, 
    calculateOverallProgress,
    getCurrentStep,
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

    const newProgress = currentStep.completion_percentage >= 100 ? 0 : 
                       Math.min(currentStep.completion_percentage + 25, 100);
    
    await updateStepProgress(stepIndex, newProgress);
  };

  if (isLoading) {
    return (
      <Layout>
        <div className="space-y-6">
          {/* Loading Header */}
          <div className="bg-pravado-gradient rounded-xl p-8 text-white">
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
              <Card key={i} className="bg-white">
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

          <Card className="lg:col-span-2 bg-white">
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
  const currentStep = getCurrentStep();

  return (
    <Layout>
      <div className="space-y-6">
        {/* Professional PRAVADO Header */}
        <div className="bg-pravado-gradient rounded-xl p-8 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2">
                Welcome back, {userProfile?.full_name || 'User'}!
              </h1>
              <div className="flex items-center space-x-4 text-blue-100 mb-4">
                <div className="flex items-center">
                  <Building className="w-5 h-5 mr-2" />
                  <span>{tenant?.name || 'Your Workspace'}</span>
                </div>
                <div className="flex items-center">
                  {userProfile?.role === 'workspace_admin' || userProfile?.role === 'client_admin' ? (
                    <Crown className="w-5 h-5 mr-2" />
                  ) : (
                    <Users className="w-5 h-5 mr-2" />
                  )}
                  <span className="capitalize">
                    {userProfile?.role?.replace('_', ' ') || 'Member'}
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <Activity className="w-5 h-5 mr-2" />
                  <span className="text-sm">Platform Status: Live & Connected</span>
                </div>
                <div className="flex items-center">
                  <Target className="w-5 h-5 mr-2" />
                  <span className="text-sm">AUTOMATE Progress: {overallProgress}%</span>
                </div>
              </div>
            </div>
            <div className="flex space-x-2">
              <Badge className="bg-green-100 text-green-800 border-green-200">
                <Zap className="w-3 h-3 mr-1" />
                Live Data
              </Badge>
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
        </div>

        {/* Professional White Dashboard Cards with Colored Borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-white border-l-4 border-l-authority hover:shadow-lg transition-all">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-executive">Active Campaigns</CardTitle>
              <Megaphone className="h-4 w-4 text-authority" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gray-900">{metrics.activeCampaigns}</div>
              <p className="text-sm text-gray-600">PR campaigns running</p>
            </CardContent>
          </Card>

          <Card className="bg-white border-l-4 border-l-disruptor hover:shadow-lg transition-all">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-executive">Content Pieces</CardTitle>
              <FileText className="h-4 w-4 text-disruptor" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gray-900">{metrics.contentPieces}</div>
              <p className="text-sm text-gray-600">Total content created</p>
            </CardContent>
          </Card>

          <Card className="bg-white border-l-4 border-l-executive hover:shadow-lg transition-all">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-executive">SEO Keywords</CardTitle>
              <Search className="h-4 w-4 text-executive" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gray-900">{metrics.seoKeywords}</div>
              <p className="text-sm text-gray-600">Keywords tracked</p>
            </CardContent>
          </Card>

          <Card className="bg-white border-l-4 border-l-visionary hover:shadow-lg transition-all">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-executive">Team Members</CardTitle>
              <Users className="h-4 w-4 text-visionary" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gray-900">{metrics.teamMembers}</div>
              <p className="text-sm text-gray-600">In your workspace</p>
            </CardContent>
          </Card>

          <Card className="bg-white border-l-4 border-l-authority hover:shadow-lg transition-all">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-executive">AI Citations</CardTitle>
              <Brain className="h-4 w-4 text-authority" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gray-900">{metrics.aiCitations}</div>
              <p className="text-sm text-gray-600">Platform mentions</p>
            </CardContent>
          </Card>

          <Card className="bg-white border-l-4 border-l-disruptor hover:shadow-lg transition-all">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-executive">Podcast Syndications</CardTitle>
              <Mic className="h-4 w-4 text-disruptor" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gray-900">{metrics.podcastSyndications}</div>
              <p className="text-sm text-gray-600">Episodes syndicated</p>
            </CardContent>
          </Card>

          <Card className="bg-white border-l-4 border-l-executive hover:shadow-lg transition-all">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-executive">Press Releases</CardTitle>
              <FileImage className="h-4 w-4 text-executive" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gray-900">{metrics.pressReleases}</div>
              <p className="text-sm text-gray-600">Media distributed</p>
            </CardContent>
          </Card>

          <Card className="bg-white border-l-4 border-l-visionary hover:shadow-lg transition-all">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-executive">Engagement Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-visionary" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gray-900">{metrics.engagementRate}%</div>
              <p className="text-sm text-gray-600">Average across content</p>
            </CardContent>
          </Card>
        </div>

        {/* AUTOMATE Framework Progress */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="lg:col-span-2 bg-white border-2 border-executive">
            <CardHeader>
              <CardTitle className="flex items-center text-executive">
                <Target className="w-5 h-5 mr-2" />
                AUTOMATE Framework Progress
                <Badge className="ml-2 bg-green-100 text-green-800">Real-Time Data</Badge>
              </CardTitle>
              <CardDescription className="text-gray-600">
                Your progress through the 8-step AUTOMATE methodology • {overallProgress}% complete
                {currentStep < automateSteps.length && (
                  <span className="ml-2">• Currently on step {currentStep + 1}</span>
                )}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {automateSteps.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-600">Loading AUTOMATE framework...</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {automateSteps.map((step, index) => (
                    <div 
                      key={index} 
                      className={`flex items-center space-x-4 p-4 rounded-lg border hover:bg-gray-50 cursor-pointer transition-colors ${
                        index === currentStep ? 'border-executive bg-executive/5' : 'border-gray-200'
                      }`}
                      onClick={() => handleStepClick(index)}
                    >
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${getStatusColor(step.status)}`}>
                        {step.step_code}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-medium flex items-center text-executive">
                            {step.name}
                            {index === currentStep && (
                              <Badge variant="outline" className="ml-2 text-xs border-executive text-executive">Current</Badge>
                            )}
                          </h4>
                          {getStatusBadge(step.status)}
                        </div>
                        <Progress value={step.completion_percentage} className="h-2 mb-1" />
                        <p className="text-xs text-gray-600">
                          {step.completion_percentage}% complete • {step.description}
                        </p>
                      </div>
                      <Button variant="ghost" size="sm" className="text-executive hover:bg-executive/10">
                        <ChevronRight className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-white border-l-4 border-l-disruptor hover:shadow-lg transition-all">
            <CardHeader>
              <CardTitle className="text-lg text-executive">Content Calendar</CardTitle>
              <CardDescription className="text-gray-600">Plan and schedule your content</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-authority text-white hover:bg-authority/90">
                <Calendar className="w-4 h-4 mr-2" />
                View Calendar
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white border-l-4 border-l-executive hover:shadow-lg transition-all">
            <CardHeader>
              <CardTitle className="text-lg text-executive">Analytics Dashboard</CardTitle>
              <CardDescription className="text-gray-600">Monitor performance metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-executive text-white hover:bg-executive/90">
                <BarChart3 className="w-4 h-4 mr-2" />
                View Analytics
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white border-l-4 border-l-visionary hover:shadow-lg transition-all">
            <CardHeader>
              <CardTitle className="text-lg text-executive">Team Settings</CardTitle>
              <CardDescription className="text-gray-600">Manage your workspace</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-visionary text-white hover:bg-visionary/90">
                <Settings className="w-4 h-4 mr-2" />
                Manage Team
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Revolutionary AI Features Status */}
        <Card className="bg-white border-2 border-visionary">
          <CardHeader>
            <CardTitle className="text-executive flex items-center">
              <Brain className="w-5 h-5 mr-2" />
              PRAVADO AI Capabilities - Live Status
            </CardTitle>
            <CardDescription className="text-gray-600">
              Industry-first AI integrations showing real-time performance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="text-center">
                <div className="text-executive font-bold">✓ {metrics.aiCitations}</div>
                <div className="text-gray-600">AI Platform Citations</div>
              </div>
              <div className="text-center">
                <div className="text-executive font-bold">✓ {metrics.seoKeywords}</div>
                <div className="text-gray-600">SEO Keywords Tracked</div>
              </div>
              <div className="text-center">
                <div className="text-executive font-bold">✓ {metrics.contentPieces}</div>
                <div className="text-gray-600">AI-Optimized Content</div>
              </div>
              <div className="text-center">
                <div className="text-executive font-bold">✓ {overallProgress}%</div>
                <div className="text-gray-600">AUTOMATE Completion</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Real-Time Connection Status */}
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
                <div className="text-green-700">Real Database</div>
              </div>
              <div className="text-center">
                <div className="text-green-600 font-bold">✓ Active</div>
                <div className="text-green-700">Real-time Updates</div>
              </div>
              <div className="text-center">
                <div className="text-green-600 font-bold">✓ Synced</div>
                <div className="text-green-700">Live Metrics</div>
              </div>
              <div className="text-center">
                <div className="text-green-600 font-bold">✓ Live</div>
                <div className="text-green-700">Workspace: {tenant?.name || 'Loading...'}</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Dashboard;

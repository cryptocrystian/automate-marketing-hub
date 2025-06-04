
import Layout from '@/components/Layout';
import { SidebarTrigger } from '@/components/ui/sidebar';
import AICitationMonitor from '@/components/analytics/AICitationMonitor';
import InteractiveDashboard from '@/components/analytics/InteractiveDashboard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Brain, BarChart3, Zap } from 'lucide-react';

const AICitationDashboard = () => {
  return (
    <Layout>
      <div className="p-6">
        <div className="flex items-center space-x-4 mb-6">
          <SidebarTrigger />
          <div>
            <h1 className="text-2xl font-bold text-executive flex items-center">
              <Brain className="w-6 h-6 mr-2 text-visionary" />
              PRAVADO AI Citation Intelligence Hub
            </h1>
            <p className="text-slate-600">Revolutionary AI platform monitoring and citation tracking</p>
          </div>
        </div>

        <Tabs defaultValue="citations" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 bg-white border border-slate-200">
            <TabsTrigger value="citations" className="flex items-center gap-2">
              <Zap className="h-4 w-4" />
              AI Citations
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              Analytics
            </TabsTrigger>
          </TabsList>

          <TabsContent value="citations" className="space-y-6">
            <AICitationMonitor />
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <InteractiveDashboard />
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default AICitationDashboard;


import { useState } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Users, Building, Activity, DollarSign, Settings, UserCheck, Cog, FileText } from 'lucide-react';
import ClientManagement from '@/components/admin/ClientManagement';
import UserManagement from '@/components/admin/UserManagement';
import SystemSettings from '@/components/admin/SystemSettings';
import AuditLogs from '@/components/admin/AuditLogs';

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const systemStats = [
    {
      title: "Total Revenue",
      value: "$127,500",
      icon: DollarSign,
      color: "text-green-600"
    },
    {
      title: "Active Clients",
      value: "21",
      icon: Users,
      color: "text-blue-600"
    },
    {
      title: "Total Campaigns",
      value: "89",
      icon: Activity,
      color: "text-blue-600"
    },
    {
      title: "System Load",
      value: "23%",
      icon: Settings,
      color: "text-slate-600"
    }
  ];

  return (
    <Layout>
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <SidebarTrigger />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Admin Panel</h1>
              <p className="text-gray-600">Comprehensive system administration</p>
            </div>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 bg-white border border-gray-200">
            <TabsTrigger value="overview" className="flex items-center space-x-2">
              <Building className="h-4 w-4" />
              <span>Overview</span>
            </TabsTrigger>
            <TabsTrigger value="clients" className="flex items-center space-x-2">
              <Users className="h-4 w-4" />
              <span>Clients</span>
            </TabsTrigger>
            <TabsTrigger value="users" className="flex items-center space-x-2">
              <UserCheck className="h-4 w-4" />
              <span>Users</span>
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center space-x-2">
              <Cog className="h-4 w-4" />
              <span>Settings</span>
            </TabsTrigger>
            <TabsTrigger value="logs" className="flex items-center space-x-2">
              <FileText className="h-4 w-4" />
              <span>Audit Logs</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* System Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {systemStats.map((stat, index) => (
                <Card key={index} className="bg-white shadow-sm border-gray-200">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-gray-700">
                      {stat.title}
                    </CardTitle>
                    <stat.icon className={`h-4 w-4 ${stat.color}`} />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Actions */}
            <Card className="bg-white shadow-sm border-gray-200">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900">Quick Actions</CardTitle>
                <CardDescription className="text-gray-600">
                  Common administrative tasks
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button 
                    onClick={() => setActiveTab('clients')}
                    className="bg-blue-600 hover:bg-blue-700 text-white h-20 flex flex-col space-y-2"
                  >
                    <Users className="h-6 w-6" />
                    <span>Manage Clients</span>
                  </Button>
                  <Button 
                    onClick={() => setActiveTab('users')}
                    className="bg-green-600 hover:bg-green-700 text-white h-20 flex flex-col space-y-2"
                  >
                    <UserCheck className="h-6 w-6" />
                    <span>User Management</span>
                  </Button>
                  <Button 
                    onClick={() => setActiveTab('logs')}
                    className="bg-gray-600 hover:bg-gray-700 text-white h-20 flex flex-col space-y-2"
                  >
                    <Activity className="h-6 w-6" />
                    <span>View Audit Logs</span>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity Summary */}
            <Card className="bg-white shadow-sm border-gray-200">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900">Recent System Activity</CardTitle>
                <CardDescription className="text-gray-600">
                  Latest system events and user actions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span className="text-gray-900">New client registration: TechCorp Inc.</span>
                    </div>
                    <span className="text-sm text-gray-500">2 hours ago</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-900">System backup completed successfully</span>
                    </div>
                    <span className="text-sm text-gray-500">4 hours ago</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span className="text-gray-900">User permissions updated for 3 users</span>
                    </div>
                    <span className="text-sm text-gray-500">6 hours ago</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="clients">
            <ClientManagement />
          </TabsContent>

          <TabsContent value="users">
            <UserManagement />
          </TabsContent>

          <TabsContent value="settings">
            <SystemSettings />
          </TabsContent>

          <TabsContent value="logs">
            <AuditLogs />
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default AdminPanel;

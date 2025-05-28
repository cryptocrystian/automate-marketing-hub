
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Users, Building, Activity, DollarSign, Settings, Plus } from 'lucide-react';

const AdminPanel = () => {
  const clients = [
    {
      id: 1,
      name: "TechCorp Inc.",
      contact: "John Smith",
      email: "john@techcorp.com",
      status: "active",
      campaigns: 8,
      revenue: "$12,400"
    },
    {
      id: 2,
      name: "Growth Solutions",
      contact: "Sarah Johnson",
      email: "sarah@growth.com",
      status: "active",
      campaigns: 5,
      revenue: "$8,200"
    },
    {
      id: 3,
      name: "StartupXYZ",
      contact: "Mike Chen",
      email: "mike@startup.com",
      status: "pending",
      campaigns: 2,
      revenue: "$3,100"
    },
    {
      id: 4,
      name: "Enterprise Corp",
      contact: "Lisa Williams",
      email: "lisa@enterprise.com",
      status: "active",
      campaigns: 12,
      revenue: "$18,900"
    }
  ];

  const systemStats = [
    {
      title: "Total Revenue",
      value: "$127,500",
      icon: DollarSign,
      color: "text-success"
    },
    {
      title: "Active Clients",
      value: "21",
      icon: Users,
      color: "text-primary"
    },
    {
      title: "Total Campaigns",
      value: "89",
      icon: Activity,
      color: "text-secondary"
    },
    {
      title: "System Load",
      value: "23%",
      icon: Settings,
      color: "text-warning"
    }
  ];

  return (
    <Layout>
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <SidebarTrigger />
            <div>
              <h1 className="text-2xl font-bold text-slate-800">Admin Panel</h1>
              <p className="text-slate-600">Manage clients and system operations</p>
            </div>
          </div>
          <Button className="bg-primary hover:bg-primary-800 text-white">
            <Plus className="h-4 w-4 mr-2" />
            Add Client
          </Button>
        </div>

        {/* System Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {systemStats.map((stat, index) => (
            <Card key={index} className="border border-slate-200">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-slate-700">
                  {stat.title}
                </CardTitle>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-slate-800">{stat.value}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Client Management */}
        <Card className="border border-slate-200">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-slate-800">Client Management</CardTitle>
            <CardDescription className="text-slate-600">
              Overview of all clients and their status
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-3 px-4 font-medium text-slate-700">Company</th>
                    <th className="text-left py-3 px-4 font-medium text-slate-700">Contact</th>
                    <th className="text-left py-3 px-4 font-medium text-slate-700">Status</th>
                    <th className="text-left py-3 px-4 font-medium text-slate-700">Campaigns</th>
                    <th className="text-left py-3 px-4 font-medium text-slate-700">Revenue</th>
                    <th className="text-left py-3 px-4 font-medium text-slate-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {clients.map((client) => (
                    <tr key={client.id} className="border-b border-slate-100 hover:bg-slate-50">
                      <td className="py-3 px-4">
                        <div>
                          <p className="font-medium text-slate-800">{client.name}</p>
                          <p className="text-sm text-slate-500">{client.email}</p>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-slate-700">{client.contact}</td>
                      <td className="py-3 px-4">
                        <Badge 
                          variant={client.status === 'active' ? 'default' : 'secondary'}
                          className={client.status === 'active' ? 'bg-success text-white' : 'bg-warning text-white'}
                        >
                          {client.status}
                        </Badge>
                      </td>
                      <td className="py-3 px-4 text-slate-700">{client.campaigns}</td>
                      <td className="py-3 px-4 font-medium text-slate-800">{client.revenue}</td>
                      <td className="py-3 px-4">
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline" className="text-xs">
                            View
                          </Button>
                          <Button size="sm" variant="outline" className="text-xs">
                            Edit
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default AdminPanel;

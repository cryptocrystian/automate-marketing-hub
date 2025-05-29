import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { TrendingUp, TrendingDown, Eye, MousePointer, Mail, Users, Download } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

const Analytics = () => {
  const performanceData = [
    { month: 'Jan', emails: 2400, clicks: 400, conversions: 240 },
    { month: 'Feb', emails: 1398, clicks: 300, conversions: 180 },
    { month: 'Mar', emails: 9800, clicks: 1200, conversions: 720 },
    { month: 'Apr', emails: 3908, clicks: 600, conversions: 360 },
    { month: 'May', emails: 4800, clicks: 800, conversions: 480 },
    { month: 'Jun', emails: 3800, clicks: 650, conversions: 390 }
  ];

  const trafficData = [
    { name: 'Email', value: 35, color: '#1E40AF' },
    { name: 'Social', value: 25, color: '#3B82F6' },
    { name: 'Direct', value: 20, color: '#10B981' },
    { name: 'Organic', value: 15, color: '#F59E0B' },
    { name: 'Paid', value: 5, color: '#EF4444' }
  ];

  const keyMetrics = [
    {
      title: "Total Impressions",
      value: "127,543",
      change: "+12.5%",
      trend: "up",
      icon: Eye,
      color: "text-blue-600"
    },
    {
      title: "Click Rate",
      value: "3.8%",
      change: "+0.3%",
      trend: "up",
      icon: MousePointer,
      color: "text-green-600"
    },
    {
      title: "Email Opens",
      value: "18,429",
      change: "+8.2%",
      trend: "up",
      icon: Mail,
      color: "text-gray-600"
    },
    {
      title: "Conversions",
      value: "2,847",
      change: "-2.1%",
      trend: "down",
      icon: Users,
      color: "text-blue-600"
    }
  ];

  const campaignPerformance = [
    {
      name: "Holiday Email Series",
      opens: "8,429",
      clicks: "1,284",
      conversions: "347",
      roi: "+245%"
    },
    {
      name: "Product Launch Campaign",
      opens: "6,832",
      clicks: "892",
      conversions: "156",
      roi: "+180%"
    },
    {
      name: "Newsletter Q1",
      opens: "12,483",
      clicks: "2,156",
      conversions: "678",
      roi: "+320%"
    },
    {
      name: "Social Media Boost",
      opens: "4,829",
      clicks: "734",
      conversions: "89",
      roi: "+95%"
    }
  ];

  return (
    <Layout>
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <SidebarTrigger />
            <div>
              <h1 className="text-2xl font-bold text-slate-800">Analytics Dashboard</h1>
              <p className="text-slate-600">Track performance and insights across all campaigns</p>
            </div>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {keyMetrics.map((metric, index) => (
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
                  {metric.trend === 'up' ? (
                    <TrendingUp className="h-3 w-3 mr-1 text-green-600" />
                  ) : (
                    <TrendingDown className="h-3 w-3 mr-1 text-red-600" />
                  )}
                  {metric.change} from last month
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Performance Chart */}
          <Card className="border border-slate-200">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-slate-800">Performance Overview</CardTitle>
              <CardDescription className="text-slate-600">
                Email performance metrics over time
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                  <XAxis dataKey="month" stroke="#64748B" />
                  <YAxis stroke="#64748B" />
                  <Tooltip />
                  <Line type="monotone" dataKey="emails" stroke="#1E40AF" strokeWidth={2} />
                  <Line type="monotone" dataKey="clicks" stroke="#3B82F6" strokeWidth={2} />
                  <Line type="monotone" dataKey="conversions" stroke="#10B981" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Traffic Sources */}
          <Card className="border border-slate-200">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-slate-800">Traffic Sources</CardTitle>
              <CardDescription className="text-slate-600">
                Distribution of traffic by source
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={trafficData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {trafficData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Campaign Performance Table */}
        <Card className="border border-slate-200">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-slate-800">Campaign Performance</CardTitle>
            <CardDescription className="text-slate-600">
              Detailed metrics for individual campaigns
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-3 px-4 font-medium text-slate-700">Campaign</th>
                    <th className="text-left py-3 px-4 font-medium text-slate-700">Opens</th>
                    <th className="text-left py-3 px-4 font-medium text-slate-700">Clicks</th>
                    <th className="text-left py-3 px-4 font-medium text-slate-700">Conversions</th>
                    <th className="text-left py-3 px-4 font-medium text-slate-700">ROI</th>
                    <th className="text-left py-3 px-4 font-medium text-slate-700">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {campaignPerformance.map((campaign, index) => (
                    <tr key={index} className="border-b border-slate-100 hover:bg-slate-50">
                      <td className="py-3 px-4">
                        <p className="font-medium text-slate-800">{campaign.name}</p>
                      </td>
                      <td className="py-3 px-4 text-slate-700">{campaign.opens}</td>
                      <td className="py-3 px-4 text-slate-700">{campaign.clicks}</td>
                      <td className="py-3 px-4 text-slate-700">{campaign.conversions}</td>
                      <td className="py-3 px-4">
                        <span className="font-medium text-success">{campaign.roi}</span>
                      </td>
                      <td className="py-3 px-4">
                        <Badge className="bg-green-600 text-white">Active</Badge>
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

export default Analytics;

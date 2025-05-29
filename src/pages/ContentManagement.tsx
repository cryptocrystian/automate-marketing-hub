
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { FileText, Calendar, Clock, Plus, Edit } from 'lucide-react';

const ContentManagement = () => {
  const contentItems = [
    {
      id: 1,
      title: "Holiday Email Campaign",
      type: "Email",
      status: "published",
      publishDate: "2024-01-15",
      performance: "High"
    },
    {
      id: 2,
      title: "Q1 Social Media Posts",
      type: "Social",
      status: "scheduled",
      publishDate: "2024-01-20",
      performance: "Medium"
    },
    {
      id: 3,
      title: "Product Launch Blog",
      type: "Blog",
      status: "draft",
      publishDate: "2024-01-25",
      performance: "N/A"
    },
    {
      id: 4,
      title: "Newsletter Template",
      type: "Email",
      status: "published",
      publishDate: "2024-01-10",
      performance: "High"
    },
    {
      id: 5,
      title: "Instagram Stories",
      type: "Social",
      status: "review",
      publishDate: "2024-01-18",
      performance: "Medium"
    }
  ];

  const contentStats = [
    {
      title: "Total Content",
      value: "42",
      icon: FileText,
      color: "text-blue-600"
    },
    {
      title: "Published",
      value: "28",
      icon: Calendar,
      color: "text-green-600"
    },
    {
      title: "Scheduled",
      value: "8",
      icon: Clock,
      color: "text-blue-600"
    },
    {
      title: "Drafts",
      value: "6",
      icon: Edit,
      color: "text-slate-500"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published':
        return 'bg-green-600 text-white';
      case 'scheduled':
        return 'bg-blue-600 text-white';
      case 'draft':
        return 'bg-slate-400 text-white';
      case 'review':
        return 'bg-gray-600 text-white';
      default:
        return 'bg-slate-200 text-slate-800';
    }
  };

  const getPerformanceColor = (performance: string) => {
    switch (performance) {
      case 'High':
        return 'text-green-600';
      case 'Medium':
        return 'text-blue-600';
      case 'Low':
        return 'text-red-600';
      default:
        return 'text-slate-500';
    }
  };

  return (
    <Layout>
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <SidebarTrigger />
            <div>
              <h1 className="text-2xl font-bold text-slate-800">Content Management</h1>
              <p className="text-slate-600">Create, schedule, and manage your marketing content</p>
            </div>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            <Plus className="h-4 w-4 mr-2" />
            Create Content
          </Button>
        </div>

        {/* Content Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {contentStats.map((stat, index) => (
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

        {/* Content Calendar View */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <Card className="border border-slate-200">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-slate-800">This Week</CardTitle>
              <CardDescription>Scheduled content for this week</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="font-medium text-slate-800">Q1 Social Media Posts</p>
                  <p className="text-sm text-slate-600">Jan 20, 2024</p>
                </div>
                <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg">
                  <p className="font-medium text-slate-800">Instagram Stories</p>
                  <p className="text-sm text-slate-600">Jan 18, 2024</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-slate-200">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-slate-800">Next Week</CardTitle>
              <CardDescription>Upcoming content schedule</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                  <p className="font-medium text-slate-800">Product Launch Blog</p>
                  <p className="text-sm text-slate-600">Jan 25, 2024</p>
                </div>
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-center">
                  <p className="text-sm text-slate-500">No other content scheduled</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-slate-200">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-slate-800">Performance</CardTitle>
              <CardDescription>Recent content performance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-700">Holiday Email</span>
                  <Badge className="bg-success text-white">High</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-700">Newsletter</span>
                  <Badge className="bg-success text-white">High</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-700">Social Posts</span>
                  <Badge className="bg-warning text-white">Medium</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Content List */}
        <Card className="border border-slate-200">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-slate-800">All Content</CardTitle>
            <CardDescription className="text-slate-600">
              Manage all your marketing content in one place
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-3 px-4 font-medium text-slate-700">Title</th>
                    <th className="text-left py-3 px-4 font-medium text-slate-700">Type</th>
                    <th className="text-left py-3 px-4 font-medium text-slate-700">Status</th>
                    <th className="text-left py-3 px-4 font-medium text-slate-700">Publish Date</th>
                    <th className="text-left py-3 px-4 font-medium text-slate-700">Performance</th>
                    <th className="text-left py-3 px-4 font-medium text-slate-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {contentItems.map((item) => (
                    <tr key={item.id} className="border-b border-slate-100 hover:bg-slate-50">
                      <td className="py-3 px-4">
                        <p className="font-medium text-slate-800">{item.title}</p>
                      </td>
                      <td className="py-3 px-4">
                        <Badge variant="outline" className="text-slate-600">
                          {item.type}
                        </Badge>
                      </td>
                      <td className="py-3 px-4">
                        <Badge className={getStatusColor(item.status)}>
                          {item.status}
                        </Badge>
                      </td>
                      <td className="py-3 px-4 text-slate-700">{item.publishDate}</td>
                      <td className="py-3 px-4">
                        <span className={`font-medium ${getPerformanceColor(item.performance)}`}>
                          {item.performance}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline" className="text-xs">
                            Edit
                          </Button>
                          <Button size="sm" variant="outline" className="text-xs">
                            View
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

export default ContentManagement;

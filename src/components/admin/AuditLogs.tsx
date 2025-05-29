
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Activity, Download, Search, Filter } from 'lucide-react';

interface AuditLog {
  id: number;
  timestamp: string;
  user: string;
  action: string;
  resource: string;
  details: string;
  ipAddress: string;
  status: 'Success' | 'Failed' | 'Warning';
}

const AuditLogs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [actionFilter, setActionFilter] = useState('all');

  const auditLogs: AuditLog[] = [
    {
      id: 1,
      timestamp: "2024-01-15 10:30:25",
      user: "admin@company.com",
      action: "Login",
      resource: "System",
      details: "User logged in successfully",
      ipAddress: "192.168.1.100",
      status: "Success"
    },
    {
      id: 2,
      timestamp: "2024-01-15 10:25:18",
      user: "john@techcorp.com",
      action: "Create",
      resource: "Campaign",
      details: "Created new campaign 'Summer Sale 2024'",
      ipAddress: "192.168.1.101",
      status: "Success"
    },
    {
      id: 3,
      timestamp: "2024-01-15 10:20:45",
      user: "manager@company.com",
      action: "Update",
      resource: "Client",
      details: "Updated client status to 'Active'",
      ipAddress: "192.168.1.102",
      status: "Success"
    },
    {
      id: 4,
      timestamp: "2024-01-15 10:15:32",
      user: "user@invalid.com",
      action: "Login",
      resource: "System",
      details: "Failed login attempt - invalid credentials",
      ipAddress: "10.0.0.50",
      status: "Failed"
    },
    {
      id: 5,
      timestamp: "2024-01-15 10:10:15",
      user: "sarah@growth.com",
      action: "Delete",
      resource: "Campaign",
      details: "Deleted draft campaign",
      ipAddress: "192.168.1.103",
      status: "Warning"
    }
  ];

  const filteredLogs = auditLogs.filter(log => {
    const matchesSearch = log.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         log.action.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         log.resource.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesAction = actionFilter === 'all' || log.action === actionFilter;
    return matchesSearch && matchesAction;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Success': return 'bg-green-600 text-white';
      case 'Failed': return 'bg-red-600 text-white';
      case 'Warning': return 'bg-blue-600 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const exportLogs = () => {
    console.log('Exporting audit logs...');
  };

  return (
    <Card className="bg-white shadow-sm border-gray-200">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg font-semibold text-gray-900 flex items-center">
              <Activity className="h-5 w-5 mr-2" />
              Audit Logs
            </CardTitle>
            <CardDescription className="text-gray-600">
              Real-time system activity and user action tracking
            </CardDescription>
          </div>
          <Button onClick={exportLogs} variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export Logs
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-4 mb-6">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search logs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <select
            value={actionFilter}
            onChange={(e) => setActionFilter(e.target.value)}
            className="px-3 py-2 border border-gray-200 rounded-md bg-white text-gray-700"
          >
            <option value="all">All Actions</option>
            <option value="Login">Login</option>
            <option value="Create">Create</option>
            <option value="Update">Update</option>
            <option value="Delete">Delete</option>
          </select>
          <input
            type="date"
            className="px-3 py-2 border border-gray-200 rounded-md bg-white text-gray-700"
            defaultValue="2024-01-15"
          />
        </div>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Timestamp</TableHead>
                <TableHead>User</TableHead>
                <TableHead>Action</TableHead>
                <TableHead>Resource</TableHead>
                <TableHead>Details</TableHead>
                <TableHead>IP Address</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredLogs.map((log) => (
                <TableRow key={log.id}>
                  <TableCell className="text-gray-700 font-mono text-sm">
                    {log.timestamp}
                  </TableCell>
                  <TableCell className="text-gray-700">{log.user}</TableCell>
                  <TableCell>
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded font-medium">
                      {log.action}
                    </span>
                  </TableCell>
                  <TableCell className="text-gray-700">{log.resource}</TableCell>
                  <TableCell className="text-gray-700 max-w-xs truncate">
                    {log.details}
                  </TableCell>
                  <TableCell className="text-gray-700 font-mono text-sm">
                    {log.ipAddress}
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(log.status)}>
                      {log.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Real-time Activity Feed */}
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-3">Live Activity Feed</h4>
          <div className="space-y-2">
            <div className="flex items-center space-x-3 text-sm">
              <div className="w-2 h-2 bg-green-600 rounded-full"></div>
              <span className="text-gray-600">10:32:15</span>
              <span className="text-gray-900">sarah@growth.com updated campaign settings</span>
            </div>
            <div className="flex items-center space-x-3 text-sm">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="text-gray-600">10:31:42</span>
              <span className="text-gray-900">New user registration: mike@startup.com</span>
            </div>
            <div className="flex items-center space-x-3 text-sm">
              <div className="w-2 h-2 bg-green-600 rounded-full"></div>
              <span className="text-gray-600">10:30:58</span>
              <span className="text-gray-900">Campaign 'Winter Sale' published successfully</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AuditLogs;

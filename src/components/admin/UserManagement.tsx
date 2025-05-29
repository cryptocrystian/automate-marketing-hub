
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { Users, Plus, Mail, Activity, Settings } from 'lucide-react';

interface User {
  id: number;
  name: string;
  email: string;
  role: 'Admin' | 'Client' | 'Manager';
  status: 'Active' | 'Inactive';
  lastLogin: string;
  permissions: string[];
}

const UserManagement = () => {
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);

  const form = useForm({
    defaultValues: {
      email: '',
      role: 'Client' as const,
      message: ''
    }
  });

  const users: User[] = [
    {
      id: 1,
      name: "Admin User",
      email: "admin@company.com",
      role: "Admin",
      status: "Active",
      lastLogin: "2024-01-15 10:30",
      permissions: ["all"]
    },
    {
      id: 2,
      name: "John Manager",
      email: "manager@company.com",
      role: "Manager",
      status: "Active",
      lastLogin: "2024-01-15 09:15",
      permissions: ["clients", "campaigns", "reports"]
    },
    {
      id: 3,
      name: "Client User",
      email: "client@company.com",
      role: "Client",
      status: "Active",
      lastLogin: "2024-01-14 16:45",
      permissions: ["campaigns", "reports"]
    }
  ];

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'Admin': return 'bg-red-600 text-white';
      case 'Manager': return 'bg-blue-600 text-white';
      case 'Client': return 'bg-green-600 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const onSubmit = (data: any) => {
    console.log('Inviting user:', data);
    setIsInviteModalOpen(false);
    form.reset();
  };

  return (
    <Card className="bg-white shadow-sm border-gray-200">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg font-semibold text-gray-900">User Management</CardTitle>
            <CardDescription className="text-gray-600">
              Manage user roles and permissions
            </CardDescription>
          </div>
          <Dialog open={isInviteModalOpen} onOpenChange={setIsInviteModalOpen}>
            <DialogTrigger asChild>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                <Mail className="h-4 w-4 mr-2" />
                Invite User
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Invite New User</DialogTitle>
                <DialogDescription>
                  Send an invitation to a new user
                </DialogDescription>
              </DialogHeader>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="user@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="role"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Role</FormLabel>
                        <FormControl>
                          <select
                            {...field}
                            className="w-full px-3 py-2 border border-gray-200 rounded-md bg-white text-gray-700"
                          >
                            <option value="Client">Client</option>
                            <option value="Manager">Manager</option>
                            <option value="Admin">Admin</option>
                          </select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Welcome Message (Optional)</FormLabel>
                        <FormControl>
                          <textarea
                            {...field}
                            className="w-full px-3 py-2 border border-gray-200 rounded-md bg-white text-gray-700"
                            rows={3}
                            placeholder="Welcome to our platform..."
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <DialogFooter>
                    <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">
                      Send Invitation
                    </Button>
                  </DialogFooter>
                </form>
              </Form>
            </DialogContent>
          </Dialog>
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Login</TableHead>
                <TableHead>Permissions</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <div>
                      <p className="font-medium text-gray-900">{user.name}</p>
                      <p className="text-sm text-gray-500">{user.email}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={getRoleColor(user.role)}>
                      {user.role}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge className={user.status === 'Active' ? 'bg-green-600 text-white' : 'bg-gray-500 text-white'}>
                      {user.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-gray-700">{user.lastLogin}</TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {user.permissions.slice(0, 2).map((permission) => (
                        <span key={permission} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                          {permission}
                        </span>
                      ))}
                      {user.permissions.length > 2 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                          +{user.permissions.length - 2}
                        </span>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="text-xs">
                        <Settings className="h-3 w-3" />
                      </Button>
                      <Button size="sm" variant="outline" className="text-xs">
                        <Activity className="h-3 w-3" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserManagement;

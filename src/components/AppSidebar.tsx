
import { useAuth } from '@/context/AuthContext';
import { useLocation, useNavigate } from 'react-router-dom';
import { LayoutDashboard, User, FileText, BarChart3, Settings, LogOut } from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Button } from '@/components/ui/button';

export function AppSidebar() {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Content",
      url: "/content",
      icon: FileText,
    },
    {
      title: "Analytics",
      url: "/analytics",
      icon: BarChart3,
    },
    ...(user?.role === 'admin' ? [{
      title: "Admin Panel",
      url: "/admin",
      icon: Settings,
    }] : [])
  ];

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <Sidebar className="bg-slate-800 border-r border-slate-700">
      <SidebarHeader className="border-b border-slate-700 p-6">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            <div className="w-5 h-5 bg-blue-600 rounded"></div>
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">AUTOMATED</h1>
            <p className="text-xs text-slate-400">Marketing Operating System</p>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent className="px-4">
        <SidebarGroup>
          <SidebarGroupLabel className="text-slate-400 font-medium mb-2">
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild 
                    isActive={location.pathname === item.url}
                    className="text-white hover:bg-gray-700 data-[active=true]:bg-blue-600 data-[active=true]:text-white"
                  >
                    <a href={item.url} className="flex items-center space-x-3 px-3 py-2 rounded-lg">
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-slate-700 p-4">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-slate-800" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-white truncate">{user?.name}</p>
            <p className="text-xs text-slate-400 truncate">{user?.email}</p>
            {user?.companyName && (
              <p className="text-xs text-slate-400 truncate">{user.companyName}</p>
            )}
          </div>
        </div>
        <Button 
          onClick={handleLogout}
          variant="outline" 
          size="sm" 
          className="w-full bg-transparent border-slate-600 text-white hover:bg-gray-700"
        >
          <LogOut className="w-4 h-4 mr-2" />
          Logout
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}

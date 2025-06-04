
import { useAuth } from '@/context/AuthContext';
import { useLocation, useNavigate } from 'react-router-dom';
import { LayoutDashboard, User, FileText, BarChart3, Settings, LogOut, Megaphone, TrendingUp } from 'lucide-react';
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
} from "@/components/ui/sidebar";
import { Button } from '@/components/ui/button';

export function AppSidebar() {
  const { userProfile, tenant, signOut } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  // Check if user has admin privileges (client_admin or workspace_admin)
  const isAdmin = userProfile?.role === 'client_admin' || userProfile?.role === 'workspace_admin';

  const menuItems = [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Content Marketing",
      url: "/content",
      icon: FileText,
    },
    {
      title: "Public Relations",
      url: "/pr-media",
      icon: Megaphone,
    },
    {
      title: "SEO Intelligence",
      url: "/seo",
      icon: TrendingUp,
    },
    {
      title: "Analytics",
      url: "/analytics",
      icon: BarChart3,
    },
    ...(isAdmin ? [{
      title: "Settings",
      url: "/admin",
      icon: Settings,
    }] : [])
  ];

  const handleLogout = () => {
    signOut();
    navigate('/login');
  };

  const handleNavigation = (url: string) => {
    navigate(url);
  };

  return (
    <Sidebar className="bg-white border-r border-gray-200 shadow-sm">
      <SidebarHeader className="px-6 py-4 bg-executive border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm">
            <div className="w-5 h-5 bg-authority rounded"></div>
          </div>
          <div>
            <h1 className="text-lg font-bold text-white">PRAVADO</h1>
            <p className="text-xs text-blue-100">Marketing Operating System</p>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent className="bg-white">
        <SidebarGroup className="px-3 py-4">
          <SidebarGroupLabel className="text-gray-500 font-medium mb-3 px-3 text-xs uppercase tracking-wide">
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    isActive={location.pathname === item.url}
                    className={`w-full text-gray-700 hover:bg-authority hover:text-white transition-all duration-200 rounded-lg px-3 py-2.5 ${
                      location.pathname === item.url ? 'bg-authority text-white shadow-sm' : ''
                    }`}
                    onClick={() => handleNavigation(item.url)}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 bg-gray-50 border-t border-gray-200">
        <div className="flex items-center space-x-3 mb-4 px-2">
          <div className="w-10 h-10 bg-executive rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">{userProfile?.full_name || 'Christian Dibrell'}</p>
            <p className="text-xs text-gray-500 truncate">{userProfile?.email || 'cdibrell@gmail.com'}</p>
            {tenant?.name && (
              <p className="text-xs text-gray-400 truncate">{tenant.name || "Christian Dibrell's Workspace"}</p>
            )}
          </div>
        </div>
        <Button 
          onClick={handleLogout}
          variant="outline" 
          size="sm" 
          className="w-full bg-white border-gray-300 text-gray-700 hover:bg-red-50 hover:border-red-300 hover:text-red-700 transition-colors"
        >
          <LogOut className="w-4 h-4 mr-2" />
          Logout
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}

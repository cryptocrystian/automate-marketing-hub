
import { useAuth } from '@/context/AuthContext';
import { useLocation, useNavigate } from 'react-router-dom';
import { LayoutDashboard, User, FileText, BarChart3, Settings, LogOut, Target, Megaphone, TrendingUp } from 'lucide-react';
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
      title: "AUTOMATE Strategy",
      url: "/automate",
      icon: Target,
    },
    {
      title: "Content",
      url: "/content",
      icon: FileText,
    },
    {
      title: "PR & Media",
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
      title: "Admin Panel",
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
    <Sidebar className="bg-executive border-r border-gray-200">
      <SidebarHeader className="p-6 bg-executive">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            <div className="w-5 h-5 bg-authority rounded"></div>
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">AUTOMATED</h1>
            <p className="text-xs text-gray-300">Marketing Operating System</p>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent className="bg-executive">
        <SidebarGroup>
          <SidebarGroupLabel className="text-gray-300 font-medium mb-2 px-2">
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    isActive={location.pathname === item.url}
                    className={`text-white hover:bg-authority hover:text-white transition-colors duration-200 ${
                      location.pathname === item.url ? 'bg-authority text-white' : ''
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

      <SidebarFooter className="p-4 bg-executive border-t border-gray-600">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-executive" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-white truncate">{userProfile?.full_name || 'User'}</p>
            <p className="text-xs text-gray-300 truncate">{userProfile?.email}</p>
            {tenant?.name && (
              <p className="text-xs text-gray-300 truncate">{tenant.name}</p>
            )}
          </div>
        </div>
        <Button 
          onClick={handleLogout}
          variant="outline" 
          size="sm" 
          className="w-full bg-transparent border-gray-300 text-white hover:bg-authority hover:border-authority hover:text-white transition-colors"
        >
          <LogOut className="w-4 h-4 mr-2" />
          Logout
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}

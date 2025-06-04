
import React, { useState, useEffect } from 'react';
import { ReactNode } from 'react';
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { GlobalSearch } from "@/components/GlobalSearch";
import { NotificationSystem } from "@/components/NotificationSystem";
import { PerformanceMonitor } from "@/components/PerformanceMonitor";
import { useMobileOptimization } from "@/hooks/useMobileOptimization";
import { Button } from "@/components/ui/button";
import { Search, Download } from "lucide-react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { isMobile, canInstall, installPWA } = useMobileOptimization();

  // Keyboard shortcut for global search (Cmd/Ctrl + K)
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
        event.preventDefault();
        setIsSearchOpen(true);
      }
      if (event.key === 'Escape') {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <AppSidebar />
        <main className="flex-1 overflow-auto">
          {/* Top Bar with Search and Notifications */}
          <div className="sticky top-0 z-40 bg-white border-b border-gray-200 px-4 py-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-64 justify-start text-slate-500"
                  onClick={() => setIsSearchOpen(true)}
                  style={{ backgroundColor: '#ff6b35', color: 'white', borderColor: '#ff6b35' }}
                >
                  <Search className="mr-2 h-4 w-4" />
                  Search anything...
                  <kbd className="ml-auto pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-white/20 px-1.5 font-mono text-[10px] font-medium text-white opacity-100">
                    <span className="text-xs">⌘</span>K
                  </kbd>
                </Button>
              </div>
              
              <div className="flex items-center gap-2">
                {/* PWA Install Button */}
                {canInstall && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={installPWA}
                    className="hidden sm:flex"
                    style={{ backgroundColor: '#c3073f', color: 'white', borderColor: '#c3073f' }}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Install App
                  </Button>
                )}
                
                <NotificationSystem />
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className={`${isMobile ? 'p-4' : 'p-6'}`}>
            {children}
          </div>
        </main>

        {/* Global Search Modal */}
        <GlobalSearch
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
        />

        {/* Performance Monitor */}
        <PerformanceMonitor />
      </div>
    </SidebarProvider>
  );
};

export default Layout;


import React, { useState, useEffect } from 'react';
import { Search, Clock, FileText, Users, Calendar, BarChart3, Command } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from 'react-router-dom';

interface SearchResult {
  id: string;
  title: string;
  type: 'content' | 'user' | 'campaign' | 'analytics' | 'admin';
  description: string;
  url: string;
  icon: React.ComponentType<any>;
  lastAccessed?: string;
}

interface GlobalSearchProps {
  isOpen: boolean;
  onClose: () => void;
}

const mockSearchResults: SearchResult[] = [
  {
    id: '1',
    title: 'Q4 Marketing Campaign',
    type: 'content',
    description: 'Holiday season promotional content',
    url: '/content',
    icon: FileText,
    lastAccessed: '2 hours ago'
  },
  {
    id: '2',
    title: 'User Analytics Dashboard',
    type: 'analytics',
    description: 'Real-time user engagement metrics',
    url: '/analytics',
    icon: BarChart3,
    lastAccessed: '1 day ago'
  },
  {
    id: '3',
    title: 'Team Management',
    type: 'admin',
    description: 'User roles and permissions',
    url: '/admin',
    icon: Users,
    lastAccessed: '3 days ago'
  },
  {
    id: '4',
    title: 'Content Calendar',
    type: 'content',
    description: 'Editorial calendar and scheduling',
    url: '/content',
    icon: Calendar,
    lastAccessed: '5 hours ago'
  }
];

const typeColors = {
  content: 'bg-blue-100 text-blue-800',
  user: 'bg-green-100 text-green-800',
  campaign: 'bg-purple-100 text-purple-800',
  analytics: 'bg-orange-100 text-orange-800',
  admin: 'bg-red-100 text-red-800'
};

export const GlobalSearch: React.FC<GlobalSearchProps> = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredResults, setFilteredResults] = useState<SearchResult[]>([]);
  const [recentSearches, setRecentSearches] = useState<SearchResult[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchQuery.trim()) {
      const filtered = mockSearchResults.filter(result =>
        result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        result.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredResults(filtered);
    } else {
      setFilteredResults([]);
      setRecentSearches(mockSearchResults.slice(0, 3));
    }
  }, [searchQuery]);

  const handleResultClick = (result: SearchResult) => {
    navigate(result.url);
    onClose();
  };

  const quickActions = [
    { label: 'Create Content', action: () => navigate('/content'), icon: FileText },
    { label: 'View Analytics', action: () => navigate('/analytics'), icon: BarChart3 },
    { label: 'Manage Users', action: () => navigate('/admin'), icon: Users },
    { label: 'Dashboard', action: () => navigate('/dashboard'), icon: Command }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl p-0">
        <DialogHeader className="sr-only">
          <DialogTitle>Global Search</DialogTitle>
        </DialogHeader>
        
        <div className="flex items-center border-b px-4 py-3">
          <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
          <Input
            placeholder="Search anything... (⌘K)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border-0 shadow-none focus-visible:ring-0 text-sm"
            autoFocus
          />
        </div>

        <div className="max-h-96 overflow-y-auto">
          {searchQuery.trim() ? (
            <div className="p-2">
              <div className="mb-2 px-2 text-xs font-medium text-slate-500 uppercase tracking-wide">
                Search Results ({filteredResults.length})
              </div>
              {filteredResults.map((result) => {
                const IconComponent = result.icon;
                return (
                  <div
                    key={result.id}
                    className="flex items-center gap-3 rounded-md px-2 py-2 text-sm hover:bg-slate-100 cursor-pointer"
                    onClick={() => handleResultClick(result)}
                  >
                    <IconComponent className="h-4 w-4 text-slate-500" />
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-slate-900 truncate">{result.title}</div>
                      <div className="text-slate-500 text-xs truncate">{result.description}</div>
                    </div>
                    <Badge variant="secondary" className={`text-xs ${typeColors[result.type]}`}>
                      {result.type}
                    </Badge>
                  </div>
                );
              })}
              {filteredResults.length === 0 && (
                <div className="px-2 py-4 text-center text-sm text-slate-500">
                  No results found for "{searchQuery}"
                </div>
              )}
            </div>
          ) : (
            <div className="p-2">
              {recentSearches.length > 0 && (
                <div className="mb-4">
                  <div className="mb-2 px-2 text-xs font-medium text-slate-500 uppercase tracking-wide flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    Recent
                  </div>
                  {recentSearches.map((result) => {
                    const IconComponent = result.icon;
                    return (
                      <div
                        key={result.id}
                        className="flex items-center gap-3 rounded-md px-2 py-2 text-sm hover:bg-slate-100 cursor-pointer"
                        onClick={() => handleResultClick(result)}
                      >
                        <IconComponent className="h-4 w-4 text-slate-500" />
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-slate-900 truncate">{result.title}</div>
                          <div className="text-slate-500 text-xs truncate">{result.lastAccessed}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
              
              <div>
                <div className="mb-2 px-2 text-xs font-medium text-slate-500 uppercase tracking-wide">
                  Quick Actions
                </div>
                {quickActions.map((action, index) => {
                  const IconComponent = action.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-3 rounded-md px-2 py-2 text-sm hover:bg-slate-100 cursor-pointer"
                      onClick={() => {
                        action.action();
                        onClose();
                      }}
                    >
                      <IconComponent className="h-4 w-4 text-slate-500" />
                      <span className="text-slate-900">{action.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        <div className="border-t px-4 py-2 text-xs text-slate-500">
          Use ↑↓ to navigate, ↵ to select, esc to close
        </div>
      </DialogContent>
    </Dialog>
  );
};

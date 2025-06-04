
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/context/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { 
  Brain, 
  Search, 
  TrendingUp, 
  Activity, 
  RefreshCw, 
  Eye,
  ExternalLink,
  Zap
} from 'lucide-react';

interface Citation {
  id: string;
  platform: string;
  content_title: string;
  citation_url: string;
  citation_context: string;
  visibility_score: number;
  click_through_rate: number;
  citation_date: string;
}

const AICitationMonitor = () => {
  const { tenant } = useAuth();
  const { toast } = useToast();
  const [citations, setCitations] = useState<Citation[]>([]);
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null);

  const fetchCitations = async () => {
    if (!tenant) return;

    try {
      const { data, error } = await supabase
        .from('ai_platform_citations')
        .select('*')
        .eq('tenant_id', tenant.id)
        .order('citation_date', { ascending: false })
        .limit(20);

      if (error) throw error;
      setCitations(data || []);
      setLastUpdate(new Date());
    } catch (error) {
      console.error('Error fetching citations:', error);
      toast({
        title: "Error",
        description: "Failed to fetch AI citations",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const startMonitoring = async () => {
    if (!tenant) return;

    setIsMonitoring(true);
    try {
      const { data, error } = await supabase.functions.invoke('ai-citation-monitor', {
        body: {
          action: 'monitor_citations',
          tenant_id: tenant.id,
          search_terms: [
            'digital marketing automation',
            'content strategy framework',
            'AI marketing tools',
            'brand awareness campaigns'
          ]
        }
      });

      if (error) throw error;

      toast({
        title: "Monitoring Started",
        description: `Found ${data.citations_found} new citations across ${data.platforms_monitored.length} AI platforms`,
      });

      // Refresh citations list
      await fetchCitations();

    } catch (error) {
      console.error('Error starting monitoring:', error);
      toast({
        title: "Monitoring Failed",
        description: "Failed to start AI citation monitoring",
        variant: "destructive",
      });
    } finally {
      setIsMonitoring(false);
    }
  };

  const testMonitoring = async () => {
    try {
      const { data, error } = await supabase.functions.invoke('ai-citation-monitor', {
        body: { action: 'test_monitoring' }
      });

      if (error) throw error;

      toast({
        title: "System Status",
        description: data.message,
      });

    } catch (error) {
      console.error('Error testing monitoring:', error);
      toast({
        title: "Test Failed",
        description: "Failed to test monitoring system",
        variant: "destructive",
      });
    }
  };

  const getPlatformColor = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'chatgpt': return 'bg-green-100 text-green-800';
      case 'claude': return 'bg-visionary text-white';
      case 'perplexity': return 'bg-executive text-white';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-disruptor';
    return 'text-red-600';
  };

  useEffect(() => {
    fetchCitations();

    // Set up real-time subscription
    const subscription = supabase
      .channel('ai-citations')
      .on('postgres_changes', {
        event: '*',
        schema: 'public',
        table: 'ai_platform_citations',
        filter: `tenant_id=eq.${tenant?.id}`
      }, () => {
        fetchCitations();
      })
      .subscribe();

    return () => {
      supabase.removeChannel(subscription);
    };
  }, [tenant]);

  const totalCitations = citations.length;
  const avgVisibilityScore = citations.length > 0 
    ? citations.reduce((sum, c) => sum + c.visibility_score, 0) / citations.length 
    : 0;
  const avgCTR = citations.length > 0 
    ? citations.reduce((sum, c) => sum + c.click_through_rate, 0) / citations.length 
    : 0;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-executive flex items-center">
            <Brain className="w-6 h-6 mr-2 text-visionary" />
            PRAVADO AI Citation Intelligence
          </h2>
          <p className="text-slate-600">Real-time monitoring of AI platform citations</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" onClick={testMonitoring}>
            <Activity className="w-4 h-4 mr-2" />
            Test System
          </Button>
          <Button 
            onClick={startMonitoring} 
            disabled={isMonitoring}
            className="bg-authority hover:bg-authority-700 text-white"
          >
            {isMonitoring ? (
              <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
            ) : (
              <Search className="w-4 h-4 mr-2" />
            )}
            {isMonitoring ? 'Monitoring...' : 'Monitor Now'}
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Citations</CardTitle>
            <Brain className="h-4 w-4 text-visionary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-executive">{totalCitations}</div>
            <p className="text-xs text-muted-foreground">
              Across all AI platforms
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Visibility</CardTitle>
            <Eye className="h-4 w-4 text-disruptor" />
          </CardHeader>
          <CardContent>
            <div className={`text-2xl font-bold ${getScoreColor(avgVisibilityScore)}`}>
              {Math.round(avgVisibilityScore)}
            </div>
            <p className="text-xs text-muted-foreground">
              Visibility score
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg CTR</CardTitle>
            <TrendingUp className="h-4 w-4 text-authority" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-authority">
              {avgCTR.toFixed(1)}%
            </div>
            <p className="text-xs text-muted-foreground">
              Click-through rate
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Last Update</CardTitle>
            <RefreshCw className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-sm font-bold text-executive">
              {lastUpdate ? lastUpdate.toLocaleTimeString() : 'Never'}
            </div>
            <p className="text-xs text-muted-foreground">
              Live monitoring active
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Citations Feed */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Zap className="w-5 h-5 mr-2 text-disruptor" />
            Live Citation Feed
          </CardTitle>
          <CardDescription>
            Real-time citations from AI platforms
          </CardDescription>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="animate-pulse">
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                </div>
              ))}
            </div>
          ) : citations.length > 0 ? (
            <div className="space-y-4">
              {citations.map((citation) => (
                <div key={citation.id} className="border rounded-lg p-4 hover:bg-slate-50">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <Badge className={getPlatformColor(citation.platform)}>
                          {citation.platform}
                        </Badge>
                        <span className="text-sm text-gray-500">
                          {new Date(citation.citation_date).toLocaleDateString()}
                        </span>
                      </div>
                      <h4 className="font-medium text-executive mb-1">
                        {citation.content_title}
                      </h4>
                      <p className="text-sm text-slate-600 line-clamp-2">
                        {citation.citation_context}
                      </p>
                    </div>
                    <div className="flex flex-col items-end space-y-1 ml-4">
                      <div className="flex items-center space-x-2">
                        <span className={`text-sm font-medium ${getScoreColor(citation.visibility_score)}`}>
                          {citation.visibility_score}
                        </span>
                        <span className="text-sm text-authority">
                          {citation.click_through_rate.toFixed(1)}%
                        </span>
                      </div>
                      <Button variant="ghost" size="sm" asChild>
                        <a href={citation.citation_url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <Brain className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">No citations found yet</p>
              <p className="text-sm text-gray-400">Click "Monitor Now" to start tracking</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AICitationMonitor;

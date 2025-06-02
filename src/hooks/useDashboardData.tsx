
import { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface AutomateStep {
  step_code: string;
  step_index: number;
  status: string;
  completion_percentage: number;
  name: string;
  description: string;
}

interface DashboardMetrics {
  activeCampaigns: number;
  contentPieces: number;
  seoKeywords: number;
  aiCitations: number;
  podcastSyndications: number;
  pressReleases: number;
  engagementRate: number;
  teamMembers: number;
}

interface AutomateFramework {
  id: string;
  name: string;
  description: string;
  steps: any[];
}

export const useDashboardData = () => {
  const { userProfile, tenant } = useAuth();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(true);
  const [metrics, setMetrics] = useState<DashboardMetrics>({
    activeCampaigns: 0,
    contentPieces: 0,
    seoKeywords: 0,
    aiCitations: 0,
    podcastSyndications: 0,
    pressReleases: 0,
    engagementRate: 0,
    teamMembers: 0
  });
  const [automateSteps, setAutomateSteps] = useState<AutomateStep[]>([]);
  const [framework, setFramework] = useState<AutomateFramework | null>(null);

  const fetchDashboardMetrics = async () => {
    if (!tenant) {
      console.log('No tenant available for metrics');
      return;
    }

    try {
      console.log('Fetching comprehensive dashboard metrics for tenant:', tenant.id);

      // Fetch all metrics in parallel for better performance
      const [
        activeCampaignsResult,
        contentPiecesResult,
        seoKeywordsResult,
        aiCitationsResult,
        podcastSyndicationsResult,
        pressReleasesResult,
        teamMembersResult,
        engagementDataResult
      ] = await Promise.all([
        // Active PR campaigns
        supabase
          .from('pr_campaigns')
          .select('*', { count: 'exact', head: true })
          .eq('status', 'active')
          .eq('tenant_id', tenant.id),

        // Total content pieces (not archived)
        supabase
          .from('content_pieces')
          .select('*', { count: 'exact', head: true })
          .neq('status', 'archived')
          .eq('tenant_id', tenant.id),

        // SEO keywords
        supabase
          .from('seo_keywords')
          .select('*', { count: 'exact', head: true })
          .eq('tenant_id', tenant.id),

        // AI platform citations
        supabase
          .from('ai_platform_citations')
          .select('*', { count: 'exact', head: true })
          .eq('tenant_id', tenant.id),

        // Podcast syndications
        supabase
          .from('podcast_syndications')
          .select('*', { count: 'exact', head: true })
          .eq('tenant_id', tenant.id),

        // Press releases
        supabase
          .from('press_releases')
          .select('*', { count: 'exact', head: true })
          .eq('tenant_id', tenant.id),

        // Team members
        supabase
          .from('user_profiles')
          .select('*', { count: 'exact', head: true })
          .eq('tenant_id', tenant.id),

        // Engagement rate from content pieces
        supabase
          .from('content_pieces')
          .select('engagement_rate')
          .eq('tenant_id', tenant.id)
          .not('engagement_rate', 'is', null)
      ]);

      // Handle any errors from the queries
      const errors = [
        activeCampaignsResult.error,
        contentPiecesResult.error,
        seoKeywordsResult.error,
        aiCitationsResult.error,
        podcastSyndicationsResult.error,
        pressReleasesResult.error,
        teamMembersResult.error,
        engagementDataResult.error
      ].filter(Boolean);

      if (errors.length > 0) {
        console.error('Errors fetching dashboard metrics:', errors);
        throw new Error(`Failed to fetch some metrics: ${errors.map(e => e?.message).join(', ')}`);
      }

      // Calculate average engagement rate
      const engagementRates = engagementDataResult.data?.map(item => item.engagement_rate).filter(rate => rate > 0) || [];
      const avgEngagementRate = engagementRates.length > 0 
        ? engagementRates.reduce((sum, rate) => sum + rate, 0) / engagementRates.length 
        : 0;

      const newMetrics: DashboardMetrics = {
        activeCampaigns: activeCampaignsResult.count || 0,
        contentPieces: contentPiecesResult.count || 0,
        seoKeywords: seoKeywordsResult.count || 0,
        aiCitations: aiCitationsResult.count || 0,
        podcastSyndications: podcastSyndicationsResult.count || 0,
        pressReleases: pressReleasesResult.count || 0,
        engagementRate: Number(avgEngagementRate.toFixed(1)),
        teamMembers: teamMembersResult.count || 1
      };

      setMetrics(newMetrics);

      console.log('Real dashboard metrics fetched successfully:', newMetrics);

    } catch (error) {
      console.error('Error fetching dashboard metrics:', error);
      toast({
        title: "Error fetching metrics",
        description: "Failed to load dashboard metrics. Please try again.",
        variant: "destructive",
      });
      
      // Set minimal fallback metrics
      setMetrics({
        activeCampaigns: 0,
        contentPieces: 0,
        seoKeywords: 0,
        aiCitations: 0,
        podcastSyndications: 0,
        pressReleases: 0,
        engagementRate: 0,
        teamMembers: 1
      });
    }
  };

  const fetchAutomateProgress = async () => {
    if (!tenant) {
      console.log('No tenant available for AUTOMATE progress');
      return;
    }

    try {
      console.log('Fetching real AUTOMATE progress for tenant:', tenant.id);

      // Fetch framework
      const { data: frameworkData, error: frameworkError } = await supabase
        .from('automate_frameworks')
        .select('*')
        .eq('tenant_id', tenant.id)
        .eq('is_active', true)
        .single();

      if (frameworkError && frameworkError.code !== 'PGRST116') {
        console.error('Error fetching framework:', frameworkError);
        throw frameworkError;
      }

      let currentFramework = frameworkData;
      
      if (!frameworkData) {
        console.log('No framework found, creating default framework...');
        const { data: newFrameworkId, error: createError } = await supabase
          .rpc('create_default_automate_framework', { tenant_id: tenant.id });

        if (createError) {
          console.error('Error creating framework:', createError);
          throw createError;
        }

        // Fetch the newly created framework
        const { data: createdFramework, error: fetchError } = await supabase
          .from('automate_frameworks')
          .select('*')
          .eq('tenant_id', tenant.id)
          .eq('is_active', true)
          .single();

        if (fetchError) {
          console.error('Error fetching created framework:', fetchError);
          throw fetchError;
        }

        currentFramework = createdFramework;
      }

      // Parse framework steps
      const frameworkSteps = currentFramework?.steps || [];
      const parsedSteps = Array.isArray(frameworkSteps) 
        ? frameworkSteps 
        : typeof frameworkSteps === 'string' 
          ? JSON.parse(frameworkSteps)
          : [];

      if (currentFramework) {
        setFramework({
          id: currentFramework.id,
          name: currentFramework.name,
          description: currentFramework.description,
          steps: parsedSteps
        });
      }

      // Fetch real progress for all steps
      const { data: progressData, error: progressError } = await supabase
        .from('automate_progress')
        .select('*')
        .eq('tenant_id', tenant.id)
        .order('step_index', { ascending: true });

      if (progressError) {
        console.error('Error fetching progress:', progressError);
        throw progressError;
      }

      console.log('Real progress data fetched:', progressData);

      // Combine framework steps with real progress data
      const stepsWithProgress = parsedSteps.map((step: any, index: number) => {
        const progress = progressData?.find(p => p.step_index === index);
        return {
          step_code: step.step,
          step_index: index,
          name: step.name,
          description: step.description,
          status: progress?.status || 'not_started',
          completion_percentage: progress?.completion_percentage || 0
        };
      });

      setAutomateSteps(stepsWithProgress);
      console.log('Real AUTOMATE progress loaded successfully:', stepsWithProgress);

    } catch (error) {
      console.error('Error fetching AUTOMATE progress:', error);
      toast({
        title: "Error fetching progress",
        description: "Failed to load AUTOMATE framework progress.",
        variant: "destructive",
      });
      
      // Fallback to empty steps array
      setAutomateSteps([]);
    }
  };

  const updateStepProgress = async (stepIndex: number, newPercentage: number) => {
    if (!tenant || !userProfile || !framework) {
      console.log('Missing required data for progress update');
      return;
    }

    try {
      const newStatus = newPercentage === 100 ? 'completed' : 
                       newPercentage > 0 ? 'in_progress' : 'not_started';

      console.log('Updating step progress:', { stepIndex, newPercentage, newStatus, tenantId: tenant.id });

      const { error } = await supabase
        .from('automate_progress')
        .upsert({
          tenant_id: tenant.id,
          framework_id: framework.id,
          step_index: stepIndex,
          step_code: automateSteps[stepIndex]?.step_code,
          completion_percentage: newPercentage,
          status: newStatus,
          completed_by: newPercentage === 100 ? userProfile.id : null,
          completed_at: newPercentage === 100 ? new Date().toISOString() : null
        }, {
          onConflict: 'tenant_id,framework_id,step_index'
        });

      if (error) {
        console.error('Error updating step progress:', error);
        throw error;
      }

      // Update local state immediately for responsive UI
      setAutomateSteps(prev => prev.map((step, index) => 
        index === stepIndex 
          ? { ...step, completion_percentage: newPercentage, status: newStatus }
          : step
      ));

      toast({
        title: "Progress Updated",
        description: `Step ${stepIndex + 1} progress updated to ${newPercentage}%`,
      });

      console.log('Step progress updated successfully');

    } catch (error) {
      console.error('Error updating step progress:', error);
      toast({
        title: "Update Failed",
        description: "Failed to update step progress. Please try again.",
        variant: "destructive",
      });
    }
  };

  const calculateOverallProgress = () => {
    if (automateSteps.length === 0) return 0;
    const totalProgress = automateSteps.reduce((sum, step) => sum + step.completion_percentage, 0);
    return Math.round(totalProgress / automateSteps.length);
  };

  const getCurrentStep = () => {
    // Find the first step that is not completed
    const currentStepIndex = automateSteps.findIndex(step => step.status !== 'completed');
    return currentStepIndex === -1 ? automateSteps.length - 1 : currentStepIndex;
  };

  useEffect(() => {
    const fetchData = async () => {
      if (!tenant || !userProfile) {
        console.log('Waiting for authentication...');
        return;
      }
      
      console.log('Fetching complete dashboard data for user:', userProfile.full_name, 'workspace:', tenant.name);
      setIsLoading(true);
      
      await Promise.all([
        fetchDashboardMetrics(),
        fetchAutomateProgress()
      ]);
      
      setIsLoading(false);
    };

    fetchData();
  }, [tenant, userProfile]);

  // Set up real-time subscriptions for live updates
  useEffect(() => {
    if (!tenant) return;

    console.log('Setting up comprehensive real-time subscriptions for tenant:', tenant.id);

    const channels = [
      // Subscribe to user profiles changes
      supabase
        .channel('dashboard-user-profiles')
        .on('postgres_changes', {
          event: '*',
          schema: 'public',
          table: 'user_profiles',
          filter: `tenant_id=eq.${tenant.id}`
        }, () => {
          console.log('User profiles updated, refreshing metrics...');
          fetchDashboardMetrics();
        })
        .subscribe(),

      // Subscribe to AUTOMATE progress changes
      supabase
        .channel('dashboard-automate-progress')
        .on('postgres_changes', {
          event: '*',
          schema: 'public',
          table: 'automate_progress',
          filter: `tenant_id=eq.${tenant.id}`
        }, () => {
          console.log('AUTOMATE progress updated, refreshing...');
          fetchAutomateProgress();
        })
        .subscribe(),

      // Subscribe to framework changes
      supabase
        .channel('dashboard-automate-frameworks')
        .on('postgres_changes', {
          event: '*',
          schema: 'public',
          table: 'automate_frameworks',
          filter: `tenant_id=eq.${tenant.id}`
        }, () => {
          console.log('AUTOMATE frameworks updated, refreshing...');
          fetchAutomateProgress();
        })
        .subscribe(),

      // Subscribe to PR campaigns changes
      supabase
        .channel('dashboard-pr-campaigns')
        .on('postgres_changes', {
          event: '*',
          schema: 'public',
          table: 'pr_campaigns',
          filter: `tenant_id=eq.${tenant.id}`
        }, () => {
          console.log('PR campaigns updated, refreshing metrics...');
          fetchDashboardMetrics();
        })
        .subscribe(),

      // Subscribe to content pieces changes
      supabase
        .channel('dashboard-content-pieces')
        .on('postgres_changes', {
          event: '*',
          schema: 'public',
          table: 'content_pieces',
          filter: `tenant_id=eq.${tenant.id}`
        }, () => {
          console.log('Content pieces updated, refreshing metrics...');
          fetchDashboardMetrics();
        })
        .subscribe(),

      // Subscribe to SEO keywords changes
      supabase
        .channel('dashboard-seo-keywords')
        .on('postgres_changes', {
          event: '*',
          schema: 'public',
          table: 'seo_keywords',
          filter: `tenant_id=eq.${tenant.id}`
        }, () => {
          console.log('SEO keywords updated, refreshing metrics...');
          fetchDashboardMetrics();
        })
        .subscribe(),

      // Subscribe to AI citations changes
      supabase
        .channel('dashboard-ai-citations')
        .on('postgres_changes', {
          event: '*',
          schema: 'public',
          table: 'ai_platform_citations',
          filter: `tenant_id=eq.${tenant.id}`
        }, () => {
          console.log('AI citations updated, refreshing metrics...');
          fetchDashboardMetrics();
        })
        .subscribe()
    ];

    return () => {
      console.log('Cleaning up comprehensive real-time subscriptions');
      channels.forEach(channel => supabase.removeChannel(channel));
    };
  }, [tenant]);

  return {
    isLoading,
    metrics,
    automateSteps,
    framework,
    updateStepProgress,
    calculateOverallProgress,
    getCurrentStep,
    refreshData: () => {
      if (tenant && userProfile) {
        console.log('Manual refresh triggered');
        fetchDashboardMetrics();
        fetchAutomateProgress();
      }
    }
  };
};

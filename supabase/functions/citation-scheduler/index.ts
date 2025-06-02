
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const supabase = createClient(
  Deno.env.get('SUPABASE_URL') ?? '',
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
);

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log('Running scheduled AI citation monitoring...');

    // Get all active tenants
    const { data: tenants, error: tenantError } = await supabase
      .from('tenants')
      .select('id, name')
      .eq('tenant_type', 'saas_organization');

    if (tenantError) {
      throw tenantError;
    }

    const results = [];

    // Monitor citations for each tenant
    for (const tenant of tenants || []) {
      try {
        console.log(`Monitoring citations for tenant: ${tenant.name}`);

        // Call the AI citation monitor function
        const response = await fetch(`${Deno.env.get('SUPABASE_URL')}/functions/v1/ai-citation-monitor`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            action: 'monitor_citations',
            tenant_id: tenant.id,
            search_terms: [
              'digital marketing automation',
              'content strategy framework',
              'AI marketing tools',
              'brand awareness campaigns',
              'marketing analytics',
              'SEO optimization',
              'social media marketing',
              'email marketing campaigns'
            ]
          }),
        });

        const result = await response.json();
        results.push({
          tenant_id: tenant.id,
          tenant_name: tenant.name,
          citations_found: result.citations_found || 0,
          success: result.success
        });

        console.log(`Completed monitoring for ${tenant.name}: ${result.citations_found} citations found`);

      } catch (error) {
        console.error(`Error monitoring tenant ${tenant.name}:`, error);
        results.push({
          tenant_id: tenant.id,
          tenant_name: tenant.name,
          citations_found: 0,
          success: false,
          error: error.message
        });
      }
    }

    const totalCitations = results.reduce((sum, r) => sum + (r.citations_found || 0), 0);

    console.log(`Scheduled monitoring complete. Total citations found: ${totalCitations}`);

    return new Response(JSON.stringify({
      success: true,
      message: 'Scheduled AI citation monitoring completed',
      total_citations_found: totalCitations,
      tenants_processed: results.length,
      results: results
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Citation Scheduler Error:', error);
    return new Response(JSON.stringify({ 
      error: error.message,
      success: false 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});

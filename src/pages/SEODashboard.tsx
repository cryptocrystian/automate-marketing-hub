
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Search, 
  TrendingUp, 
  Target, 
  Globe, 
  BarChart3, 
  Plus, 
  Settings,
  ExternalLink,
  Brain,
  Zap,
  Award,
  FileText,
  Activity
} from 'lucide-react';
import KeywordResearch from '@/components/seo/KeywordResearch';
import ContentOptimization from '@/components/seo/ContentOptimization';
import GEOCenter from '@/components/seo/GEOCenter';
import TechnicalSEOHub from '@/components/seo/TechnicalSEOHub';
import LinkBuildingHub from '@/components/seo/LinkBuildingHub';
import UnifiedSEOAnalytics from '@/components/seo/UnifiedSEOAnalytics';

const SEODashboard = () => {
  const seoStats = [
    {
      title: "Organic Traffic",
      value: "1.4M",
      change: "+23%",
      icon: TrendingUp,
      color: "text-green-600"
    },
    {
      title: "Keyword Rankings",
      value: "2,847",
      change: "+12%",
      icon: Search,
      color: "text-blue-600"
    },
    {
      title: "Domain Authority",
      value: "87",
      change: "+5",
      icon: Award,
      color: "text-purple-600"
    },
    {
      title: "Technical Score",
      value: "92/100",
      change: "+8",
      icon: Settings,
      color: "text-blue-600"
    },
    {
      title: "Content Performance",
      value: "89%",
      change: "+15%",
      icon: FileText,
      color: "text-green-600"
    },
    {
      title: "AI Visibility",
      value: "82%",
      change: "+18%",
      icon: Brain,
      color: "text-purple-600"
    }
  ];

  return (
    <Layout>
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <SidebarTrigger />
            <div>
              <h1 className="text-2xl font-bold text-slate-800">SEO Intelligence Hub</h1>
              <p className="text-slate-600">Integrated SEO optimization across Content and PR pillars</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Badge className="bg-purple-100 text-purple-800 border-purple-300">
              <Brain className="w-3 h-3 mr-1" />
              AI-Enhanced
            </Badge>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <Plus className="h-4 w-4 mr-2" />
              New SEO Campaign
            </Button>
          </div>
        </div>

        {/* SEO Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {seoStats.map((stat, index) => (
            <Card key={index} className="border border-slate-200 bg-white">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-slate-700">
                  {stat.title}
                </CardTitle>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-slate-800">{stat.value}</div>
                  <div className="text-sm text-green-600 font-medium">{stat.change}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced SEO Intelligence Tabs */}
        <Tabs defaultValue="keyword-research" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6 bg-white border border-slate-200">
            <TabsTrigger value="keyword-research" className="flex items-center gap-2">
              <Search className="h-4 w-4" />
              Keywords
            </TabsTrigger>
            <TabsTrigger value="content-optimization" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Content
            </TabsTrigger>
            <TabsTrigger value="geo-center" className="flex items-center gap-2">
              <Globe className="h-4 w-4" />
              GEO
            </TabsTrigger>
            <TabsTrigger value="technical-seo" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Technical
            </TabsTrigger>
            <TabsTrigger value="link-building" className="flex items-center gap-2">
              <ExternalLink className="h-4 w-4" />
              Authority
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              Analytics
            </TabsTrigger>
          </TabsList>

          <TabsContent value="keyword-research" className="space-y-6">
            <KeywordResearch />
          </TabsContent>

          <TabsContent value="content-optimization" className="space-y-6">
            <ContentOptimization />
          </TabsContent>

          <TabsContent value="geo-center" className="space-y-6">
            <GEOCenter />
          </TabsContent>

          <TabsContent value="technical-seo" className="space-y-6">
            <TechnicalSEOHub />
          </TabsContent>

          <TabsContent value="link-building" className="space-y-6">
            <LinkBuildingHub />
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <UnifiedSEOAnalytics />
          </TabsContent>
        </Tabs>

        {/* Cross-Pillar Integration Summary */}
        <Card className="mt-8 border-purple-200 bg-purple-50">
          <CardHeader>
            <CardTitle className="text-purple-800 flex items-center">
              <Target className="w-5 h-5 mr-2" />
              Cross-Pillar SEO Integration
            </CardTitle>
            <CardDescription className="text-purple-600">
              SEO performance enhanced by Content and PR pillar integration
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-1">+45%</div>
                <div className="text-sm text-purple-700">Content Amplification</div>
                <div className="text-xs text-purple-600">from PR integration</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-1">156</div>
                <div className="text-sm text-purple-700">PR Backlinks</div>
                <div className="text-xs text-purple-600">boosting domain authority</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-1">94%</div>
                <div className="text-sm text-purple-700">Cross-Pillar Synergy</div>
                <div className="text-xs text-purple-600">optimization score</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default SEODashboard;

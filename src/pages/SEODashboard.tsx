
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
      borderColor: "border-l-authority"
    },
    {
      title: "Keyword Rankings",
      value: "2,847",
      change: "+12%",
      icon: Search,
      borderColor: "border-l-executive"
    },
    {
      title: "Domain Authority",
      value: "87",
      change: "+5",
      icon: Award,
      borderColor: "border-l-visionary"
    },
    {
      title: "Technical Score",
      value: "92/100",
      change: "+8",
      icon: Settings,
      borderColor: "border-l-disruptor"
    },
    {
      title: "Content Performance",
      value: "89%",
      change: "+15%",
      icon: FileText,
      borderColor: "border-l-authority"
    },
    {
      title: "AI Visibility",
      value: "82%",
      change: "+18%",
      icon: Brain,
      borderColor: "border-l-executive"
    }
  ];

  return (
    <Layout>
      <div className="p-6 bg-white min-h-screen">
        {/* Header - PRAVADO Executive Style */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <SidebarTrigger />
            <div>
              <h1 className="text-2xl font-bold text-executive">SEO Intelligence Hub</h1>
              <p className="text-gray-600">Integrated SEO optimization across Content and PR pillars</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Badge className="bg-white border-visionary text-visionary hover:bg-visionary hover:text-white">
              <Brain className="w-3 h-3 mr-1" />
              AI-Enhanced
            </Badge>
            <Button className="bg-authority hover:bg-authority/90 text-white">
              <Plus className="h-4 w-4 mr-2" />
              New SEO Campaign
            </Button>
          </div>
        </div>

        {/* SEO Stats Overview - White Cards with PRAVADO Accents */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {seoStats.map((stat, index) => (
            <Card key={index} className={`bg-white border-l-4 ${stat.borderColor} shadow-sm`}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-700">
                  {stat.title}
                </CardTitle>
                <stat.icon className="h-4 w-4 text-gray-500" />
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                  <div className="text-sm text-green-600 font-medium">{stat.change}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced SEO Intelligence Tabs - White Background */}
        <Tabs defaultValue="keyword-research" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6 bg-white border border-gray-200">
            <TabsTrigger value="keyword-research" className="flex items-center gap-2 data-[state=active]:bg-executive data-[state=active]:text-white">
              <Search className="h-4 w-4" />
              Keywords
            </TabsTrigger>
            <TabsTrigger value="content-optimization" className="flex items-center gap-2 data-[state=active]:bg-authority data-[state=active]:text-white">
              <FileText className="h-4 w-4" />
              Content
            </TabsTrigger>
            <TabsTrigger value="geo-center" className="flex items-center gap-2 data-[state=active]:bg-disruptor data-[state=active]:text-white">
              <Globe className="h-4 w-4" />
              GEO
            </TabsTrigger>
            <TabsTrigger value="technical-seo" className="flex items-center gap-2 data-[state=active]:bg-visionary data-[state=active]:text-white">
              <Settings className="h-4 w-4" />
              Technical
            </TabsTrigger>
            <TabsTrigger value="link-building" className="flex items-center gap-2 data-[state=active]:bg-executive data-[state=active]:text-white">
              <ExternalLink className="h-4 w-4" />
              Authority
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center gap-2 data-[state=active]:bg-authority data-[state=active]:text-white">
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

        {/* Cross-Pillar Integration Summary - White Background with Executive Deep Accents */}
        <Card className="mt-8 bg-white border-l-4 border-l-executive shadow-sm">
          <CardHeader>
            <CardTitle className="text-executive flex items-center">
              <Target className="w-5 h-5 mr-2" />
              Cross-Pillar SEO Integration
            </CardTitle>
            <CardDescription className="text-gray-600">
              SEO performance enhanced by Content and PR pillar integration
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-white border border-gray-200 rounded-lg">
                <div className="text-2xl font-bold text-authority mb-1">+45%</div>
                <div className="text-sm text-gray-700">Content Amplification</div>
                <div className="text-xs text-gray-600">from PR integration</div>
              </div>
              <div className="text-center p-4 bg-white border border-gray-200 rounded-lg">
                <div className="text-2xl font-bold text-disruptor mb-1">156</div>
                <div className="text-sm text-gray-700">PR Backlinks</div>
                <div className="text-xs text-gray-600">boosting domain authority</div>
              </div>
              <div className="text-center p-4 bg-white border border-gray-200 rounded-lg">
                <div className="text-2xl font-bold text-visionary mb-1">94%</div>
                <div className="text-sm text-gray-700">Cross-Pillar Synergy</div>
                <div className="text-xs text-gray-600">optimization score</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default SEODashboard;

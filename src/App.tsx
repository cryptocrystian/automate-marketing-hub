
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AutomateStrategy from "./pages/AutomateStrategy";
import AssessAudit from "./pages/AssessAudit";
import UnderstandAudience from "./pages/UnderstandAudience";
import TargetStrategy from "./pages/TargetStrategy";
import OptimizeSystems from "./pages/OptimizeSystems";
import MeasureMonitor from "./pages/MeasureMonitor";
import AccelerateGrowth from "./pages/AccelerateGrowth";
import TransformEvolve from "./pages/TransformEvolve";
import ExecuteExcellence from "./pages/ExecuteExcellence";
import AdminPanel from "./pages/AdminPanel";
import ContentManagement from "./pages/ContentManagement";
import PRMedia from "./pages/PRMedia";
import Analytics from "./pages/Analytics";
import NotFound from "./pages/NotFound";
import SEODashboard from "./pages/SEODashboard";
import Index from "./pages/Index";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Layout>
                    <Index />
                  </Layout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Layout>
                    <Dashboard />
                  </Layout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/automate"
              element={
                <ProtectedRoute>
                  <Layout>
                    <AutomateStrategy />
                  </Layout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/automate/assess-audit"
              element={
                <ProtectedRoute>
                  <Layout>
                    <AssessAudit />
                  </Layout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/automate/understand-audience"
              element={
                <ProtectedRoute>
                  <Layout>
                    <UnderstandAudience />
                  </Layout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/automate/target-strategy"
              element={
                <ProtectedRoute>
                  <Layout>
                    <TargetStrategy />
                  </Layout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/automate/optimize-systems"
              element={
                <ProtectedRoute>
                  <Layout>
                    <OptimizeSystems />
                  </Layout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/automate/measure-monitor"
              element={
                <ProtectedRoute>
                  <Layout>
                    <MeasureMonitor />
                  </Layout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/automate/accelerate-growth"
              element={
                <ProtectedRoute>
                  <Layout>
                    <AccelerateGrowth />
                  </Layout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/automate/transform-evolve"
              element={
                <ProtectedRoute>
                  <Layout>
                    <TransformEvolve />
                  </Layout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/automate/execute-excellence"
              element={
                <ProtectedRoute>
                  <Layout>
                    <ExecuteExcellence />
                  </Layout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin"
              element={
                <ProtectedRoute requireRole="workspace_admin">
                  <Layout>
                    <AdminPanel />
                  </Layout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/content"
              element={
                <ProtectedRoute>
                  <Layout>
                    <ContentManagement />
                  </Layout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/pr-media"
              element={
                <ProtectedRoute>
                  <Layout>
                    <PRMedia />
                  </Layout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/seo"
              element={
                <ProtectedRoute>
                  <Layout>
                    <SEODashboard />
                  </Layout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/analytics"
              element={
                <ProtectedRoute>
                  <Layout>
                    <Analytics />
                  </Layout>
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;

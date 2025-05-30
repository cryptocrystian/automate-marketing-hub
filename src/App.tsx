
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AutomateStrategy from "./pages/AutomateStrategy";
import AssessAudit from "./pages/AssessAudit";
import UnderstandAudience from "./pages/UnderstandAudience";
import TargetStrategy from "./pages/TargetStrategy";
import OptimizeSystems from "./pages/OptimizeSystems";
import AdminPanel from "./pages/AdminPanel";
import ContentManagement from "./pages/ContentManagement";
import Analytics from "./pages/Analytics";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/automate"
              element={
                <ProtectedRoute>
                  <AutomateStrategy />
                </ProtectedRoute>
              }
            />
            <Route
              path="/automate/assess-audit"
              element={
                <ProtectedRoute>
                  <AssessAudit />
                </ProtectedRoute>
              }
            />
            <Route
              path="/automate/understand-audience"
              element={
                <ProtectedRoute>
                  <UnderstandAudience />
                </ProtectedRoute>
              }
            />
            <Route
              path="/automate/target-strategy"
              element={
                <ProtectedRoute>
                  <TargetStrategy />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin"
              element={
                <ProtectedRoute requireAdmin>
                  <AdminPanel />
                </ProtectedRoute>
              }
            />
            <Route
              path="/content"
              element={
                <ProtectedRoute>
                  <ContentManagement />
                </ProtectedRoute>
              }
            />
            <Route
              path="/analytics"
              element={
                <ProtectedRoute>
                  <Analytics />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

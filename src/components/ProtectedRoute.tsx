
import { useAuth } from '@/context/AuthContext';
import { Navigate } from 'react-router-dom';
import { ReactNode } from 'react';
import { UserRole } from '@/types/auth';
import { Button } from '@/components/ui/button';
import { AlertCircle, RefreshCw } from 'lucide-react';

interface ProtectedRouteProps {
  children: ReactNode;
  requireRole?: UserRole;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, requireRole }) => {
  const { user, userProfile, isLoading, authError, clearError } = useAuth();

  console.log('ProtectedRoute - user:', user?.id);
  console.log('ProtectedRoute - userProfile:', userProfile?.role);
  console.log('ProtectedRoute - isLoading:', isLoading);
  console.log('ProtectedRoute - authError:', authError);
  console.log('ProtectedRoute - requireRole:', requireRole);

  // Show error state if there's an authentication error
  if (authError) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-6">
          <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Authentication Error</h2>
          <p className="text-gray-600 mb-6">{authError}</p>
          <div className="space-y-3">
            <Button 
              onClick={() => window.location.reload()} 
              className="w-full"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Refresh Page
            </Button>
            <Button 
              variant="outline" 
              onClick={() => {
                clearError();
                window.location.href = '/login';
              }}
              className="w-full"
            >
              Back to Login
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Show loading state while authentication is being checked
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Setting up your workspace...</p>
          <p className="text-sm text-gray-500 mt-2">This should only take a moment</p>
        </div>
      </div>
    );
  }

  if (!user) {
    console.log('ProtectedRoute - No user found, redirecting to login');
    return <Navigate to="/login" replace />;
  }

  // If user profile hasn't loaded yet, show loading
  if (!userProfile) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your profile...</p>
        </div>
      </div>
    );
  }

  // Check role-based access if required
  if (requireRole) {
    let hasRequiredRole = false;
    
    // Handle role compatibility: client_admin should be treated as workspace_admin
    if (requireRole === 'workspace_admin') {
      hasRequiredRole = userProfile.role === 'workspace_admin' || userProfile.role === 'client_admin';
    } else {
      hasRequiredRole = userProfile.role === requireRole;
    }
    
    if (!hasRequiredRole) {
      console.log(`ProtectedRoute - User role ${userProfile.role} insufficient for required role ${requireRole}`);
      return <Navigate to="/dashboard" replace />;
    }
  }

  return <>{children}</>;
};

export default ProtectedRoute;

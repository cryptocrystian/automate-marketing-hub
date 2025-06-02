
import { useAuth } from '@/context/AuthContext';
import { Navigate } from 'react-router-dom';
import { ReactNode } from 'react';
import { UserRole } from '@/types/auth';

interface ProtectedRouteProps {
  children: ReactNode;
  requireRole?: UserRole;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, requireRole }) => {
  const { user, userProfile, isLoading } = useAuth();

  console.log('ProtectedRoute - user:', user?.id);
  console.log('ProtectedRoute - userProfile:', userProfile?.role);
  console.log('ProtectedRoute - isLoading:', isLoading);
  console.log('ProtectedRoute - requireRole:', requireRole);

  // Show loading state while authentication is being checked
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
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
          <p className="text-gray-600">Setting up your workspace...</p>
        </div>
      </div>
    );
  }

  // Check role-based access if required
  if (requireRole) {
    const hasRequiredRole = userProfile.role === requireRole;
    
    if (!hasRequiredRole) {
      console.log(`ProtectedRoute - User role ${userProfile.role} insufficient for required role ${requireRole}`);
      return <Navigate to="/dashboard" replace />;
    }
  }

  return <>{children}</>;
};

export default ProtectedRoute;

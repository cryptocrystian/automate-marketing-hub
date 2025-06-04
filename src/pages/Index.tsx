
import { Navigate } from 'react-router-dom';

const Index = () => {
  // Since this component is now wrapped in Layout and ProtectedRoute,
  // we know the user is authenticated, so redirect to dashboard
  return <Navigate to="/dashboard" replace />;
};

export default Index;


import React, { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { Navigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2, Building2, Users, Zap } from 'lucide-react';

const Login = () => {
  const { user, signIn, signUp, isLoading } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullName: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Redirect if already authenticated
  if (user && !isLoading) {
    return <Navigate to="/dashboard" replace />;
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = (isSignUp: boolean = false) => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (isSignUp && !formData.fullName) {
      newErrors.fullName = 'Full name is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    const { error } = await signIn(formData.email, formData.password);
    
    if (error) {
      setErrors({ submit: error });
    }
    setIsSubmitting(false);
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm(true)) return;

    setIsSubmitting(true);
    const { error } = await signUp(formData.email, formData.password, formData.fullName);
    
    if (error) {
      setErrors({ submit: error });
    }
    setIsSubmitting(false);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-blue-600" />
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo and Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
            <Building2 className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
          <p className="text-gray-600">Sign in to your AUTOMATED Marketing Platform</p>
        </div>

        <Card className="shadow-xl border-0">
          <CardHeader className="space-y-1 pb-6">
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
              <Users className="w-4 h-4" />
              <span>Multi-tenant Platform</span>
              <Zap className="w-4 h-4" />
              <span>AUTOMATE Methodology</span>
            </div>
          </CardHeader>
          
          <CardContent>
            <Tabs defaultValue="signin" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6 bg-gray-100">
                <TabsTrigger 
                  value="signin" 
                  className="data-[state=active]:bg-blue-600 data-[state=active]:text-white font-medium"
                >
                  Sign In
                </TabsTrigger>
                <TabsTrigger 
                  value="signup" 
                  className="data-[state=active]:bg-purple-600 data-[state=active]:text-white font-medium"
                >
                  Sign Up
                </TabsTrigger>
              </TabsList>
              
              {/* Display errors */}
              {errors.submit && (
                <Alert className="mb-4 border-red-200 bg-red-50">
                  <AlertDescription className="text-red-700">
                    {errors.submit}
                  </AlertDescription>
                </Alert>
              )}

              <TabsContent value="signin">
                <form onSubmit={handleSignIn} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="signin-email" className="text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <Input
                      id="signin-email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      className={errors.email ? 'border-red-500' : ''}
                    />
                    {errors.email && (
                      <p className="text-sm text-red-600">{errors.email}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="signin-password" className="text-sm font-medium text-gray-700">
                      Password
                    </label>
                    <Input
                      id="signin-password"
                      name="password"
                      type="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="Enter your password"
                      className={errors.password ? 'border-red-500' : ''}
                    />
                    {errors.password && (
                      <p className="text-sm text-red-600">{errors.password}</p>
                    )}
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Signing In...
                      </>
                    ) : (
                      'Sign In'
                    )}
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="signup">
                <form onSubmit={handleSignUp} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="signup-fullname" className="text-sm font-medium text-gray-700">
                      Full Name
                    </label>
                    <Input
                      id="signup-fullname"
                      name="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className={errors.fullName ? 'border-red-500' : ''}
                    />
                    {errors.fullName && (
                      <p className="text-sm text-red-600">{errors.fullName}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="signup-email" className="text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <Input
                      id="signup-email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      className={errors.email ? 'border-red-500' : ''}
                    />
                    {errors.email && (
                      <p className="text-sm text-red-600">{errors.email}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="signup-password" className="text-sm font-medium text-gray-700">
                      Password
                    </label>
                    <Input
                      id="signup-password"
                      name="password"
                      type="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="Create a password (min. 6 characters)"
                      className={errors.password ? 'border-red-500' : ''}
                    />
                    {errors.password && (
                      <p className="text-sm text-red-600">{errors.password}</p>
                    )}
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-purple-600 hover:bg-purple-700"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Creating Account...
                      </>
                    ) : (
                      'Create Account'
                    )}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>

            <div className="mt-6 text-center text-sm text-gray-500">
              <p>Your Personal Workspace will be created automatically</p>
            </div>
          </CardContent>
        </Card>

        <div className="mt-6 text-center text-xs text-gray-500">
          <p>Powered by AUTOMATE Methodology • Multi-tenant Architecture</p>
        </div>
      </div>
    </div>
  );
};

export default Login;

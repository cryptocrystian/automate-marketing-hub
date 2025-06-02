
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User as SupabaseUser, Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { UserProfile, Tenant } from '@/types/auth';

interface AuthContextType {
  user: SupabaseUser | null;
  userProfile: UserProfile | null;
  tenant: Tenant | null;
  session: Session | null;
  isLoading: boolean;
  authError: string | null;
  signIn: (email: string, password: string) => Promise<{ error?: string }>;
  signUp: (email: string, password: string, fullName: string) => Promise<{ error?: string }>;
  signOut: () => Promise<void>;
  clearError: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [tenant, setTenant] = useState<Tenant | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState<string | null>(null);

  const clearError = () => setAuthError(null);

  const fetchUserData = async (userId: string, retryCount = 0) => {
    const maxRetries = 3;
    const retryDelay = 1000 * (retryCount + 1); // Progressive delay
    
    try {
      console.log(`AuthProvider - Fetching user data for userId: ${userId} (attempt ${retryCount + 1})`);
      
      // Add timeout to prevent infinite hanging
      const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error('Request timeout')), 10000);
      });

      // Fetch user profile with timeout
      const profilePromise = supabase
        .from('user_profiles')
        .select('*')
        .eq('id', userId)
        .single();

      const { data: profileData, error: profileError } = await Promise.race([
        profilePromise,
        timeoutPromise
      ]) as any;

      if (profileError) {
        console.error('AuthProvider - Error fetching user profile:', profileError);
        
        if (retryCount < maxRetries) {
          console.log(`AuthProvider - Retrying in ${retryDelay}ms...`);
          setTimeout(() => {
            fetchUserData(userId, retryCount + 1);
          }, retryDelay);
          return;
        }
        
        setAuthError('Failed to load user profile. Please try logging in again.');
        setIsLoading(false);
        return;
      }

      console.log('AuthProvider - User profile fetched:', profileData);
      
      // Accept client_admin, workspace_admin, and workspace_member roles
      const validRoles = ['client_admin', 'workspace_admin', 'workspace_member'];
      if (!validRoles.includes(profileData.role)) {
        console.error('AuthProvider - Invalid role detected:', profileData.role);
        console.log('AuthProvider - Expected roles:', validRoles);
        setAuthError('Invalid user role. Please contact support.');
        setIsLoading(false);
        return;
      }
      
      const typedProfile: UserProfile = {
        ...profileData,
        role: profileData.role as UserProfile['role'],
        permissions: profileData.permissions as Record<string, any>
      };
      
      setUserProfile(typedProfile);

      // Fetch tenant data with timeout
      const tenantPromise = supabase
        .from('tenants')
        .select('*')
        .eq('id', profileData.tenant_id)
        .single();

      const { data: tenantData, error: tenantError } = await Promise.race([
        tenantPromise,
        timeoutPromise
      ]) as any;

      if (tenantError) {
        console.error('AuthProvider - Error fetching tenant:', tenantError);
        
        if (retryCount < maxRetries) {
          console.log(`AuthProvider - Retrying tenant fetch in ${retryDelay}ms...`);
          setTimeout(() => {
            fetchUserData(userId, retryCount + 1);
          }, retryDelay);
          return;
        }
        
        setAuthError('Failed to load workspace data. Please try logging in again.');
        setIsLoading(false);
        return;
      }

      console.log('AuthProvider - Tenant data fetched:', tenantData);
      
      // Type assertion for simplified tenant structure
      const typedTenant: Tenant = {
        ...tenantData,
        tenant_type: 'saas_organization', // Simplified to single type
        branding: tenantData.branding as Record<string, any>,
        settings: tenantData.settings as Record<string, any>
      };
      
      setTenant(typedTenant);
      setAuthError(null); // Clear any previous errors
      setIsLoading(false);

    } catch (error) {
      console.error('AuthProvider - Unexpected error in fetchUserData:', error);
      
      if (retryCount < maxRetries) {
        console.log(`AuthProvider - Retrying due to error in ${retryDelay}ms...`);
        setTimeout(() => {
          fetchUserData(userId, retryCount + 1);
        }, retryDelay);
        return;
      }
      
      setAuthError('An unexpected error occurred. Please try logging in again.');
      setIsLoading(false);
    }
  };

  // Initialize auth state
  useEffect(() => {
    console.log('AuthProvider - Initializing simplified SaaS auth state...');

    // Set loading timeout as a fallback
    const loadingTimeout = setTimeout(() => {
      if (isLoading) {
        console.warn('AuthProvider - Loading timeout reached');
        setAuthError('Authentication is taking longer than expected. Please refresh the page.');
        setIsLoading(false);
      }
    }, 30000); // 30 second timeout

    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log('AuthProvider - Auth state changed:', event, session?.user?.id);
        
        clearTimeout(loadingTimeout);
        setSession(session);
        setUser(session?.user ?? null);

        if (session?.user && event !== 'TOKEN_REFRESHED') {
          console.log('AuthProvider - User authenticated, fetching workspace data...');
          setTimeout(() => {
            fetchUserData(session.user.id);
          }, 100);
        } else if (!session?.user) {
          console.log('AuthProvider - No user session, clearing data...');
          setUserProfile(null);
          setTenant(null);
          setAuthError(null);
          setIsLoading(false);
        } else if (event === 'TOKEN_REFRESHED') {
          console.log('AuthProvider - Token refreshed, checking if data exists...');
          if (!userProfile) {
            setTimeout(() => {
              fetchUserData(session.user.id);
            }, 100);
          } else {
            setIsLoading(false);
          }
        }
      }
    );

    // Check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      console.log('AuthProvider - Initial session check:', session?.user?.id);
      setSession(session);
      setUser(session?.user ?? null);
      
      if (session?.user) {
        setTimeout(() => {
          fetchUserData(session.user.id);
        }, 100);
      } else {
        clearTimeout(loadingTimeout);
        setIsLoading(false);
      }
    });

    return () => {
      console.log('AuthProvider - Cleaning up auth subscription');
      clearTimeout(loadingTimeout);
      subscription.unsubscribe();
    };
  }, []);

  const signIn = async (email: string, password: string): Promise<{ error?: string }> => {
    console.log('AuthProvider - Sign in attempt for:', email);
    setIsLoading(true);
    setAuthError(null);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        console.error('AuthProvider - Sign in error:', error.message);
        setAuthError(error.message);
        setIsLoading(false);
        return { error: error.message };
      }

      console.log('AuthProvider - Sign in successful for:', data.user?.email);
      return {};
    } catch (error) {
      console.error('AuthProvider - Unexpected sign in error:', error);
      const errorMessage = 'An unexpected error occurred during sign in';
      setAuthError(errorMessage);
      setIsLoading(false);
      return { error: errorMessage };
    }
  };

  const signUp = async (email: string, password: string, fullName: string): Promise<{ error?: string }> => {
    console.log('AuthProvider - Sign up attempt for:', email);
    setIsLoading(true);
    setAuthError(null);

    try {
      const redirectUrl = `${window.location.origin}/`;
      
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: redirectUrl,
          data: {
            full_name: fullName,
          },
        },
      });

      if (error) {
        console.error('AuthProvider - Sign up error:', error.message);
        setAuthError(error.message);
        setIsLoading(false);
        return { error: error.message };
      }

      console.log('AuthProvider - Sign up successful for:', data.user?.email);
      
      if (data.user && !data.session) {
        setIsLoading(false);
        return { error: 'Please check your email for a confirmation link.' };
      }

      return {};
    } catch (error) {
      console.error('AuthProvider - Unexpected sign up error:', error);
      const errorMessage = 'An unexpected error occurred during sign up';
      setAuthError(errorMessage);
      setIsLoading(false);
      return { error: errorMessage };
    }
  };

  const signOut = async (): Promise<void> => {
    console.log('AuthProvider - Sign out initiated');
    
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error('AuthProvider - Sign out error:', error.message);
        setAuthError(error.message);
      } else {
        console.log('AuthProvider - Sign out successful');
        setUser(null);
        setUserProfile(null);
        setTenant(null);
        setSession(null);
        setAuthError(null);
      }
    } catch (error) {
      console.error('AuthProvider - Unexpected sign out error:', error);
      setAuthError('An error occurred during sign out');
    }
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      userProfile, 
      tenant, 
      session, 
      isLoading, 
      authError,
      signIn, 
      signUp, 
      signOut,
      clearError
    }}>
      {children}
    </AuthContext.Provider>
  );
};


import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User as SupabaseUser, Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';

export interface UserProfile {
  id: string;
  tenant_id: string;
  full_name: string;
  email: string;
  role: 'agency_owner' | 'agency_admin' | 'account_manager' | 'content_specialist' | 'pr_specialist' | 'seo_specialist' | 'client_admin' | 'client_user';
  permissions: Record<string, any>;
  created_at: string;
  updated_at: string;
}

export interface Tenant {
  id: string;
  name: string;
  slug: string;
  tenant_type: 'agency' | 'saas_organization';
  parent_agency_id?: string;
  subscription_tier?: string;
  branding: Record<string, any>;
  settings: Record<string, any>;
}

interface AuthContextType {
  user: SupabaseUser | null;
  userProfile: UserProfile | null;
  tenant: Tenant | null;
  session: Session | null;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<{ error?: string }>;
  signUp: (email: string, password: string, fullName: string) => Promise<{ error?: string }>;
  signOut: () => Promise<void>;
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

  // Function to fetch user profile and tenant data
  const fetchUserData = async (userId: string) => {
    try {
      console.log('AuthProvider - Starting fetchUserData for userId:', userId);
      
      // Add delay to prevent potential race conditions
      await new Promise(resolve => setTimeout(resolve, 100));
      
      // Fetch user profile with detailed logging
      console.log('AuthProvider - Attempting to fetch user profile...');
      const { data: profile, error: profileError } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('id', userId)
        .maybeSingle();

      if (profileError) {
        console.error('AuthProvider - Error fetching user profile:', profileError);
        setIsLoading(false);
        return;
      }

      if (!profile) {
        console.log('AuthProvider - No profile found for user:', userId);
        setIsLoading(false);
        return;
      }

      console.log('AuthProvider - User profile loaded successfully:', profile);
      setUserProfile({
        id: profile.id,
        tenant_id: profile.tenant_id,
        full_name: profile.full_name,
        email: profile.email,
        role: profile.role as UserProfile['role'],
        permissions: profile.permissions as Record<string, any>,
        created_at: profile.created_at,
        updated_at: profile.updated_at
      });

      // Fetch tenant data with detailed logging
      console.log('AuthProvider - Attempting to fetch tenant for tenant_id:', profile.tenant_id);
      const { data: tenantData, error: tenantError } = await supabase
        .from('tenants')
        .select('*')
        .eq('id', profile.tenant_id)
        .maybeSingle();

      if (tenantError) {
        console.error('AuthProvider - Error fetching tenant:', tenantError);
        setIsLoading(false);
        return;
      }

      if (!tenantData) {
        console.log('AuthProvider - No tenant found for tenant_id:', profile.tenant_id);
        setIsLoading(false);
        return;
      }

      console.log('AuthProvider - Tenant data loaded successfully:', tenantData);
      setTenant({
        id: tenantData.id,
        name: tenantData.name,
        slug: tenantData.slug,
        tenant_type: tenantData.tenant_type as Tenant['tenant_type'],
        parent_agency_id: tenantData.parent_agency_id,
        subscription_tier: tenantData.subscription_tier,
        branding: tenantData.branding as Record<string, any>,
        settings: tenantData.settings as Record<string, any>
      });

      console.log('AuthProvider - Data fetching completed successfully');
      setIsLoading(false);
    } catch (error) {
      console.error('AuthProvider - Unexpected error in fetchUserData:', error);
      setIsLoading(false);
    }
  };

  // Initialize auth state
  useEffect(() => {
    console.log('AuthProvider - Initializing auth state...');

    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log('AuthProvider - Auth state changed:', event, session?.user?.id);
        
        setSession(session);
        setUser(session?.user ?? null);

        if (session?.user && event !== 'TOKEN_REFRESHED') {
          console.log('AuthProvider - User authenticated, fetching data...');
          // Use setTimeout to prevent potential deadlocks
          setTimeout(() => {
            fetchUserData(session.user.id);
          }, 100);
        } else if (!session?.user) {
          console.log('AuthProvider - No user session, clearing data...');
          // Clear user data when logged out
          setUserProfile(null);
          setTenant(null);
          setIsLoading(false);
        } else if (event === 'TOKEN_REFRESHED') {
          console.log('AuthProvider - Token refreshed, checking if data exists...');
          // Only fetch if we don't have profile data
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
        setIsLoading(false);
      }
    });

    return () => {
      console.log('AuthProvider - Cleaning up auth subscription');
      subscription.unsubscribe();
    };
  }, []);

  const signIn = async (email: string, password: string): Promise<{ error?: string }> => {
    console.log('AuthProvider - Sign in attempt for:', email);
    setIsLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        console.error('AuthProvider - Sign in error:', error.message);
        setIsLoading(false);
        return { error: error.message };
      }

      console.log('AuthProvider - Sign in successful for:', data.user?.email);
      return {};
    } catch (error) {
      console.error('AuthProvider - Unexpected sign in error:', error);
      setIsLoading(false);
      return { error: 'An unexpected error occurred' };
    }
  };

  const signUp = async (email: string, password: string, fullName: string): Promise<{ error?: string }> => {
    console.log('AuthProvider - Sign up attempt for:', email);
    setIsLoading(true);

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
        setIsLoading(false);
        return { error: error.message };
      }

      console.log('AuthProvider - Sign up successful for:', data.user?.email);
      
      // Check if email confirmation is required
      if (data.user && !data.session) {
        setIsLoading(false);
        return { error: 'Please check your email for a confirmation link.' };
      }

      return {};
    } catch (error) {
      console.error('AuthProvider - Unexpected sign up error:', error);
      setIsLoading(false);
      return { error: 'An unexpected error occurred' };
    }
  };

  const signOut = async (): Promise<void> => {
    console.log('AuthProvider - Sign out initiated');
    
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error('AuthProvider - Sign out error:', error.message);
      } else {
        console.log('AuthProvider - Sign out successful');
        // Clear local state
        setUser(null);
        setUserProfile(null);
        setTenant(null);
        setSession(null);
      }
    } catch (error) {
      console.error('AuthProvider - Unexpected sign out error:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      userProfile, 
      tenant, 
      session, 
      isLoading, 
      signIn, 
      signUp, 
      signOut 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

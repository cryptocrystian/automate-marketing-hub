
// Shared authentication types for consistent role management
export type UserRole = 'workspace_admin' | 'workspace_member';

export interface AuthUser {
  id: string;
  email?: string;
}

export interface UserProfile {
  id: string;
  tenant_id: string;
  full_name: string;
  email: string;
  role: UserRole;
  permissions: Record<string, any>;
  created_at: string;
  updated_at: string;
}

export interface Tenant {
  id: string;
  name: string;
  slug: string;
  tenant_type: 'saas_organization';
  subscription_tier?: string;
  branding: Record<string, any>;
  settings: Record<string, any>;
}

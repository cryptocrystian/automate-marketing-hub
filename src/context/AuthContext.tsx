
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'client' | 'admin';
  companyName?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
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
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Mock users for demo
  const mockUsers: User[] = [
    {
      id: '1',
      email: 'admin@automated.com',
      name: 'Admin User',
      role: 'admin'
    },
    {
      id: '2',
      email: 'client@company.com',
      name: 'John Smith',
      role: 'client',
      companyName: 'TechCorp Inc.'
    },
    {
      id: '3',
      email: 'demo@client.com',
      name: 'Sarah Johnson',
      role: 'client',
      companyName: 'Growth Solutions'
    }
  ];

  // Check for stored user on component mount
  useEffect(() => {
    console.log('AuthProvider - Checking for stored user...');
    const storedUser = localStorage.getItem('authenticated_user');
    
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        console.log('AuthProvider - Found stored user:', parsedUser);
        setUser(parsedUser);
      } catch (error) {
        console.error('AuthProvider - Error parsing stored user:', error);
        localStorage.removeItem('authenticated_user');
      }
    } else {
      console.log('AuthProvider - No stored user found');
    }
    
    setIsLoading(false);
    console.log('AuthProvider - Initialization complete');
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    console.log('AuthProvider - Login attempt for:', email);
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const foundUser = mockUsers.find(u => u.email === email);
    
    if (foundUser && password === 'password') {
      console.log('AuthProvider - Login successful for user:', foundUser);
      setUser(foundUser);
      // Store user in localStorage for persistence
      localStorage.setItem('authenticated_user', JSON.stringify(foundUser));
      setIsLoading(false);
      return true;
    }
    
    console.log('AuthProvider - Login failed for:', email);
    setIsLoading(false);
    return false;
  };

  const logout = () => {
    console.log('AuthProvider - Logging out user');
    setUser(null);
    localStorage.removeItem('authenticated_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

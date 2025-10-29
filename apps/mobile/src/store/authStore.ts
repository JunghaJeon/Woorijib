import { create } from 'zustand';

interface User {
  id: string;
  email: string;
  name: string;
  profileImageUrl?: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  
  // Actions
  setUser: (user: User) => void;
  setToken: (token: string) => void;
  login: (user: User, token: string) => void;
  logout: () => void;
  setLoading: (loading: boolean) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,
  isAuthenticated: false,
  isLoading: false,
  
  setUser: (user) => set({ user }),
  
  setToken: (token) => set({ token }),
  
  login: (user, token) => set({ 
    user, 
    token, 
    isAuthenticated: true 
  }),
  
  logout: () => set({ 
    user: null, 
    token: null, 
    isAuthenticated: false 
  }),
  
  setLoading: (loading) => set({ isLoading: loading }),
}));


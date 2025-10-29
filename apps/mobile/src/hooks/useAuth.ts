import {useEffect} from 'react';
import {useAuthStore} from '../store/authStore';
import {authService} from '../services/auth/authService';

/**
 * 인증 관련 커스텀 훅
 */
export const useAuth = () => {
  const {user, isAuthenticated, setUser, setIsAuthenticated, clearUser} = useAuthStore();

  useEffect(() => {
    // 앱 시작 시 현재 사용자 정보 로드
    loadCurrentUser();
  }, []);

  const loadCurrentUser = async () => {
    try {
      const currentUser = await authService.getCurrentUser();
      setUser(currentUser);
      setIsAuthenticated(true);
    } catch (error) {
      console.log('Not authenticated');
      clearUser();
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      const {user: newUser} = await authService.signIn(email, password);
      setUser(newUser);
      setIsAuthenticated(true);
      return {success: true};
    } catch (error: any) {
      return {success: false, error: error.message};
    }
  };

  const signUp = async (email: string, password: string, name: string) => {
    try {
      const {user: newUser} = await authService.signUp({email, password, name});
      setUser(newUser);
      setIsAuthenticated(true);
      return {success: true};
    } catch (error: any) {
      return {success: false, error: error.message};
    }
  };

  const signOut = async () => {
    try {
      await authService.signOut();
      clearUser();
      return {success: true};
    } catch (error: any) {
      return {success: false, error: error.message};
    }
  };

  return {
    user,
    isAuthenticated,
    signIn,
    signUp,
    signOut,
    refreshUser: loadCurrentUser,
  };
};

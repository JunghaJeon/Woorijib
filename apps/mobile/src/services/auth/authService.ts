import {apiClient} from '../api/apiClient';
import {User, ApiResponse} from '../../types';
import {storage} from '../../utils/storage';

interface SignInRequest {
  email: string;
  password: string;
}

interface SignUpRequest {
  email: string;
  password: string;
  name: string;
  phone?: string;
}

interface AuthResponse {
  user: User;
  accessToken: string;
  refreshToken: string;
}

/**
 * 인증 서비스
 */
export const authService = {
  /**
   * 로그인
   */
  async signIn(email: string, password: string): Promise<AuthResponse> {
    const response = await apiClient.post<ApiResponse<AuthResponse>>('/auth/signin', {
      email,
      password,
    });

    // 토큰 저장
    await storage.setAccessToken(response.data.accessToken);
    await storage.setRefreshToken(response.data.refreshToken);

    return response.data;
  },

  /**
   * 회원가입
   */
  async signUp(data: SignUpRequest): Promise<AuthResponse> {
    const response = await apiClient.post<ApiResponse<AuthResponse>>('/auth/signup', data);

    // 토큰 저장
    await storage.setAccessToken(response.data.accessToken);
    await storage.setRefreshToken(response.data.refreshToken);

    return response.data;
  },

  /**
   * 로그아웃
   */
  async signOut(): Promise<void> {
    await storage.clearTokens();
    // 필요시 서버에 로그아웃 요청
  },

  /**
   * 토큰 갱신
   */
  async refreshToken(): Promise<string> {
    const refreshToken = await storage.getRefreshToken();

    if (!refreshToken) {
      throw new Error('No refresh token available');
    }

    const response = await apiClient.post<ApiResponse<{accessToken: string; refreshToken: string}>>(
      '/auth/refresh',
      {refreshToken}
    );

    await storage.setAccessToken(response.data.accessToken);
    await storage.setRefreshToken(response.data.refreshToken);

    return response.data.accessToken;
  },

  /**
   * 현재 사용자 정보 조회
   */
  async getCurrentUser(): Promise<User> {
    const response = await apiClient.get<ApiResponse<User>>('/auth/me');
    return response.data;
  },

  /**
   * 소셜 로그인 - 카카오
   */
  async signInWithKakao(accessToken: string): Promise<AuthResponse> {
    const response = await apiClient.post<ApiResponse<AuthResponse>>('/auth/kakao', {
      accessToken,
    });

    await storage.setAccessToken(response.data.accessToken);
    await storage.setRefreshToken(response.data.refreshToken);

    return response.data;
  },

  /**
   * 소셜 로그인 - 네이버
   */
  async signInWithNaver(accessToken: string): Promise<AuthResponse> {
    const response = await apiClient.post<ApiResponse<AuthResponse>>('/auth/naver', {
      accessToken,
    });

    await storage.setAccessToken(response.data.accessToken);
    await storage.setRefreshToken(response.data.refreshToken);

    return response.data;
  },

  /**
   * 소셜 로그인 - 구글
   */
  async signInWithGoogle(idToken: string): Promise<AuthResponse> {
    const response = await apiClient.post<ApiResponse<AuthResponse>>('/auth/google', {
      idToken,
    });

    await storage.setAccessToken(response.data.accessToken);
    await storage.setRefreshToken(response.data.refreshToken);

    return response.data;
  },

  /**
   * 소셜 로그인 - 애플
   */
  async signInWithApple(identityToken: string): Promise<AuthResponse> {
    const response = await apiClient.post<ApiResponse<AuthResponse>>('/auth/apple', {
      identityToken,
    });

    await storage.setAccessToken(response.data.accessToken);
    await storage.setRefreshToken(response.data.refreshToken);

    return response.data;
  },
};

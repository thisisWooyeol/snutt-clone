import type { AuthApi } from '@/api/authApi';
import type { LoginRequest, LoginResponse, UserInfo } from '@/api/types';

export type AuthService = {
  signInWithPassword: (req: LoginRequest) => Promise<LoginResponse>;
  getUser: (token: string) => Promise<UserInfo>;
  signOut: () => void;
};

export const getAuthService = (authApi: AuthApi): AuthService => ({
  signInWithPassword: (req: LoginRequest): Promise<LoginResponse> => {
    return authApi.signInWithPassword(req);
  },
  getUser: async (token: string): Promise<UserInfo> => {
    return authApi.getUser(token);
  },
  signOut: () => {
    localStorage.removeItem('token');
  },
});

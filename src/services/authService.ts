import { type AuthApi } from '@/api/authApi';
import { type LoginRequest } from '@/api/types';
import type {
  GetUserResult,
  LoginResult,
  SignOutResult,
} from '@/services/types';

export type AuthService = {
  signInWithPassword: (req: LoginRequest) => Promise<LoginResult>;
  getUser: (token: string) => Promise<GetUserResult>;
  signOut: () => SignOutResult;
};

export const getAuthService = (authApi: AuthApi): AuthService => ({
  signInWithPassword: async (req: LoginRequest): Promise<LoginResult> => {
    try {
      const data = await authApi.signInWithPassword(req);
      return { data, error: null };
    } catch (error: unknown) {
      return {
        data: null,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  },
  getUser: async (token: string): Promise<GetUserResult> => {
    try {
      const data = await authApi.getUser(token);
      return { data, error: null };
    } catch (error: unknown) {
      return {
        data: null,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  },
  signOut: (): SignOutResult => {
    try {
      localStorage.removeItem('token');
      return { error: null };
    } catch (error: unknown) {
      return {
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  },
});

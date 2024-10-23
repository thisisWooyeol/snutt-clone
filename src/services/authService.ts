import { type AuthApi } from '@/api/authApi';
import { type SignInRequest } from '@/api/types';
import type { SignInResult, SignOutResult } from '@/services/types';

export type AuthService = {
  signInWithPassword: (req: SignInRequest) => Promise<SignInResult>;
  signOut: () => SignOutResult;
};

export const getAuthService = (authApi: AuthApi): AuthService => ({
  signInWithPassword: async (req: SignInRequest): Promise<SignInResult> => {
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

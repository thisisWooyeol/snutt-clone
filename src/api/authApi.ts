import type { LoginRequest, LoginResponse } from '@/api/types';

export type AuthApi = {
  signInWithPassword: (req: LoginRequest) => Promise<LoginResponse>;
};

export const getAuthApi = (API_BASE_URL: string): AuthApi => ({
  signInWithPassword: async (req: LoginRequest): Promise<LoginResponse> => {
    const response = await fetch(`${API_BASE_URL}/v1/auth/login_local`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: req.id, password: req.pw }),
    });

    if (!response.ok) {
      throw new Error('Login failed');
    }

    console.debug('Login success');
    return response.json() as Promise<LoginResponse>;
  },
});

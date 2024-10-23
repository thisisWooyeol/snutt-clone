import type { LoginRequest, LoginResponse, UserInfo } from '@/api/types';

export type AuthApi = {
  signInWithPassword: (req: LoginRequest) => Promise<LoginResponse>;
  getUser: (token: string) => Promise<UserInfo>;
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
  getUser: async (token: string): Promise<UserInfo> => {
    const response = await fetch(`${API_BASE_URL}/v1/users/me`, {
      headers: {
        'x-access-token': token,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch user info');
    }

    console.debug('Fetched user info');
    return response.json() as Promise<UserInfo>;
  },
});

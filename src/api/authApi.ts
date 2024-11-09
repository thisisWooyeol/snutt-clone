import type { SignInRequest, SignInResponse } from '@/api/types';

export type AuthApi = {
  signInWithPassword: (req: SignInRequest) => Promise<SignInResponse>;
};

export const getAuthApi = (API_BASE_URL: string): AuthApi => ({
  signInWithPassword: async (req: SignInRequest): Promise<SignInResponse> => {
    const response = await fetch(`${API_BASE_URL}/v1/auth/login_local`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: req.id, password: req.pw }),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    console.debug('SignIn success');
    return response.json() as Promise<SignInResponse>;
  },
});

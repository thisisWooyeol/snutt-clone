export type LoginRequest = { id: string; pw: string };
type LoginResponse = { user_id: string; token: string; message: string };

export type UserInfo = {
  id: string;
  isAdmin: boolean;
  regDate: string;
  notificationCheckedAt: string;
  email: string;
  localId: string;
  fbName: string;
  nickname: { nickname: string; tag: string };
};

export type AuthApi = {
  signInWithPassword: (req: LoginRequest) => Promise<LoginResponse>;
  getUser: (token: string) => Promise<UserInfo>;
};

export const getAuthApi = (): AuthApi => ({
  signInWithPassword: async (req: LoginRequest): Promise<LoginResponse> => {
    const response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/v1/auth/login_local`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: req.id, password: req.pw }),
      },
    );

    if (!response.ok) {
      throw new Error('Login failed');
    }

    return response.json() as Promise<LoginResponse>;
  },
  getUser: async (token: string): Promise<UserInfo> => {
    const response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/v1/users/me`,
      {
        headers: {
          'x-access-token': token,
        },
      },
    );

    if (!response.ok) {
      throw new Error('Failed to fetch user info');
    }

    return response.json() as Promise<UserInfo>;
  },
});

type LoginResponse = { user_id: string; token: string; message: string };
type LoginRequest = { id: string; pw: string };

export const signInWithPassword = async ({
  id,
  pw,
}: LoginRequest): Promise<LoginResponse> => {
  const response = await fetch(
    `${import.meta.env.VITE_API_BASE_URL}/v1/auth/login_local`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, password: pw }),
    },
  );

  if (!response.ok) {
    throw new Error('Login failed');
  }

  return response.json() as Promise<LoginResponse>;
};

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

export const getUser = async (token: string): Promise<UserInfo> => {
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
};

import type { GetUserRequest, GetUserResponse } from '@/api/types';

export type UserApi = {
  getUser: (req: GetUserRequest) => Promise<GetUserResponse>;
};

export const getUserApi = (API_BASE_URL: string): UserApi => ({
  getUser: async ({ token }: GetUserRequest): Promise<GetUserResponse> => {
    const response = await fetch(`${API_BASE_URL}/v1/users/me`, {
      headers: {
        'x-access-token': token,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch user info');
    }

    console.debug('Fetched user info');
    return response.json() as Promise<GetUserResponse>;
  },
});

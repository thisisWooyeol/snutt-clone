import type {
  ChangeNicknameRequest,
  ChangeNicknameResponse,
  GetUserRequest,
  GetUserResponse,
} from '@/api/types';

export type UserApi = {
  getUser: (req: GetUserRequest) => Promise<GetUserResponse>;
  changeNickname: (
    req: ChangeNicknameRequest,
  ) => Promise<ChangeNicknameResponse>;
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
  changeNickname: async ({
    token,
    nickname,
  }: ChangeNicknameRequest): Promise<ChangeNicknameResponse> => {
    const response = await fetch(`${API_BASE_URL}/v1/users/me`, {
      method: 'PATCH',
      headers: {
        'x-access-token': token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nickname: nickname }),
    });

    if (!response.ok) {
      throw new Error('Failed to change nickname');
    }

    console.debug('Changed nickname to', nickname);
    return response.json() as Promise<ChangeNicknameResponse>;
  },
});

import type { ChangeNicknameRequest } from '@/api/types';
import { type UserApi } from '@/api/userApi';
import type { ChangeNicknameResult, GetUserResult } from '@/services/types';

export type UserService = {
  getUser: () => Promise<GetUserResult>;
  changeNickname: ({
    nickname,
  }: ChangeNicknameRequest) => Promise<ChangeNicknameResult>;
};

export const getUserService = (userApi: UserApi): UserService => ({
  getUser: async (): Promise<GetUserResult> => {
    try {
      const token = localStorage.getItem('token');
      if (token === null) throw new Error('Token not found');

      const data = await userApi.getUser({ token });
      return { data, error: null };
    } catch (error: unknown) {
      return {
        data: null,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  },
  changeNickname: async ({
    nickname,
  }: ChangeNicknameRequest): Promise<ChangeNicknameResult> => {
    try {
      const token = localStorage.getItem('token');
      if (token === null) throw new Error('Token not found');

      const data = await userApi.changeNickname({ token, nickname });
      return { data, error: null };
    } catch (error: unknown) {
      return {
        data: null,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  },
});

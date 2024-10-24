import type { ChangeNicknameRequest, GetUserRequest } from '@/api/types';
import { type UserApi } from '@/api/userApi';
import type { ChangeNicknameResult, GetUserResult } from '@/services/types';

export type UserService = {
  getUser: (req: GetUserRequest) => Promise<GetUserResult>;
  changeNickname: (req: ChangeNicknameRequest) => Promise<ChangeNicknameResult>;
};

export const getUserService = (userApi: UserApi): UserService => ({
  getUser: async (req: GetUserRequest): Promise<GetUserResult> => {
    try {
      const data = await userApi.getUser(req);
      return { data, error: null };
    } catch (error: unknown) {
      return {
        data: null,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  },
  changeNickname: async (
    req: ChangeNicknameRequest,
  ): Promise<ChangeNicknameResult> => {
    try {
      const data = await userApi.changeNickname(req);
      return { data, error: null };
    } catch (error: unknown) {
      return {
        data: null,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  },
});

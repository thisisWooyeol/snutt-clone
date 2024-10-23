import { type GetUserRequest } from '@/api/types';
import { type UserApi } from '@/api/userApi';
import { type GetUserResult } from '@/services/types';

export type UserService = {
  getUser: (req: GetUserRequest) => Promise<GetUserResult>;
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
});

import type { AuthApi, LoginRequest, UserInfo } from '@/api/authApi';

export type AuthService = {
  signInWithPassword: (req: LoginRequest) => void;
  getUser: (token: string) => Promise<UserInfo>;
  signOut: () => void;
};

export const getAuthService = ({
  authApi,
}: {
  authApi: AuthApi;
}): AuthService => ({
  signInWithPassword: (req: LoginRequest): void => {
    authApi
      .signInWithPassword(req)
      .then((response) => {
        localStorage.setItem('token', response.token);
      })
      .catch((error: unknown) => {
        console.error(error);
        //FIXME: return error
      });
  },
  getUser: async (token: string): Promise<UserInfo> => {
    return authApi.getUser(token);
  },
  signOut: () => {
    localStorage.removeItem('token');
    //TODO: navigate
  },
});

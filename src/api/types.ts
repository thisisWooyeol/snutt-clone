// Types for AuthApi
export type LoginRequest = { id: string; pw: string };
export type LoginResponse = { user_id: string; token: string; message: string };

// Types for UserApi
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

export type GetUserRequest = { token: string };
export type GetUserResponse = UserInfo;

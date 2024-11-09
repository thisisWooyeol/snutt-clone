import type {
  ChangeNicknameResponse,
  GetTimeTableByIdResponse,
  GetTimeTableListResponse,
  GetTimeTableRecentResponse,
  GetUserResponse,
  SignInResponse,
} from '@/api/types';

// Types for AuthService
export type SignInResult =
  | { data: SignInResponse; error: null }
  | { data: null; error: string };

export type SignOutResult = { error: null } | { error: string };

// Types for UserService
export type GetUserResult =
  | { data: GetUserResponse; error: null }
  | { data: null; error: string };

export type ChangeNicknameResult =
  | { data: ChangeNicknameResponse; error: null }
  | { data: null; error: string };

// Types for TableService
export type GetTimeTableListResult =
  | {
      data: GetTimeTableListResponse;
      error: null;
    }
  | { data: null; error: string };
export type GetTimeTableRecentResult =
  | {
      data: GetTimeTableRecentResponse;
      error: null;
    }
  | { data: null; error: string };
export type GetTimeTableByIdResult =
  | {
      data: GetTimeTableByIdResponse;
      error: null;
    }
  | { data: null; error: string };

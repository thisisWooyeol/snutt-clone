import type {
  ChangeNicknameResponse,
  GetTimetableByIdResponse,
  GetTimetableListResponse,
  GetTimetableRecentResponse,
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
export type GetTimetableListResult =
  | {
      data: GetTimetableListResponse;
      error: null;
    }
  | { data: null; error: string };
export type GetTimetableRecentResult =
  | {
      data: GetTimetableRecentResponse;
      error: null;
    }
  | { data: null; error: string };
export type GetTimetableByIdResult =
  | {
      data: GetTimetableByIdResponse;
      error: null;
    }
  | { data: null; error: string };

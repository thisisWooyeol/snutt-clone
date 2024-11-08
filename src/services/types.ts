import type {
  ChangeNicknameResponse,
  GetRecentTableResponse,
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
export type GetTableResult =
  | { data: GetRecentTableResponse; error: null }
  | { data: null; error: string };

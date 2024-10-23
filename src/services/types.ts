import type { GetUserResponse, LoginResponse } from '@/api/types';

export type LoginResult =
  | { data: LoginResponse; error: null }
  | { data: null; error: string };

export type GetUserResult =
  | { data: GetUserResponse; error: null }
  | { data: null; error: string };

export type SignOutResult = { error: null } | { error: string };

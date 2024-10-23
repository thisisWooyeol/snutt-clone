import type { GetUserResponse, LoginResponse } from '@/api/types';

export type LoginResult =
  | { data: LoginResponse; error?: string }
  | { data?: LoginResponse; error: string };

export type GetUserResult =
  | { data: GetUserResponse; error?: string }
  | { data?: GetUserResponse; error: string };

export type SignOutResult = { error?: string };

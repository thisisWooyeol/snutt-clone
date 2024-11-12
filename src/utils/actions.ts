import { redirect } from 'react-router-dom';

import { ROUTES } from '@/routes';
import type { AuthService } from '@/services/authService';
import type { UserService } from '@/services/userService';
import { encodedRedirect } from '@/utils/utils';

export const getSignInAction =
  (authService: AuthService) =>
  async ({ request }: { request: Request }) => {
    const formData = await request.formData();
    const id = formData.get('id') as string;
    const pw = formData.get('pw') as string;

    const { data, error } = await authService.signInWithPassword({ id, pw });
    if (error != null) {
      return encodedRedirect({
        type: 'error',
        path: ROUTES.signIn,
        message: '아이디 또는 비밀번호가 일치하지 않습니다.',
      });
    }
    localStorage.setItem('token', data.token);
    return redirect(ROUTES.root);
  };

export const getSignOutAction = (authService: AuthService) => () => {
  const { error } = authService.signOut();
  if (error != null) {
    return encodedRedirect({
      type: 'error',
      path: ROUTES.mypage,
      message: '로그아웃 중 오류가 발생했습니다.',
    });
  }
  return redirect(ROUTES.root);
};

export const getChangeNicknameAction =
  (userService: UserService) =>
  async ({ request }: { request: Request }) => {
    const formData = await request.formData();
    const nickname = formData.get('nickname') as string;

    const { error } = await userService.changeNickname(nickname);
    if (error != null) {
      return encodedRedirect({
        type: 'error',
        path: ROUTES.mypageAccountChangeNickname,
        message: '사용할 수 없는 닉네임입니다.',
      });
    }
    return redirect(ROUTES.mypageAccount);
  };

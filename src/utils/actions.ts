import { redirect } from 'react-router-dom';

import type { AuthService } from '@/services/authService';

export const getSignInAction =
  (authService: AuthService) =>
  async ({ request }: { request: Request }) => {
    const formData = await request.formData();
    const id = formData.get('id') as string;
    const pw = formData.get('pw') as string;

    const { data, error } = await authService.signInWithPassword({ id, pw });
    if (error != null) {
      console.error(error);
      alert('아이디 또는 비밀번호가 일치하지 않습니다.');
      return;
    }
    localStorage.setItem('token', data.token);
    return redirect('/');
  };

export const getSignOutAction = (authService: AuthService) => () => {
  const { error } = authService.signOut();
  if (error != null) {
    console.error(error);
    alert('로그아웃 중 오류가 발생했습니다.');
    return;
  }
  localStorage.removeItem('token');
  return redirect('/');
};

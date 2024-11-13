import { type Params, redirect } from 'react-router-dom';

import { ROUTES } from '@/routes';
import type { AuthService } from '@/services/authService';
import type { TableService } from '@/services/tableService';
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
        path: ROUTES.SIGNIN,
        message: '아이디 또는 비밀번호가 일치하지 않습니다.',
      });
    }
    localStorage.setItem('token', data.token);
    return redirect(ROUTES.ROOT);
  };

export const getSignOutAction = (authService: AuthService) => () => {
  const { error } = authService.signOut();
  if (error != null) {
    return encodedRedirect({
      type: 'error',
      path: ROUTES.MYPAGE,
      message: '로그아웃 중 오류가 발생했습니다.',
    });
  }
  return redirect(ROUTES.ROOT);
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
        path: ROUTES.MYPAGE_ACCOUNT_CHANGENICKNAME,
        message: '사용할 수 없는 닉네임입니다.',
      });
    }
    return redirect(ROUTES.MYPAGE_ACCOUNT);
  };

export const getDeleteLectureAction =
  (tableService: TableService) =>
  async ({ request, params }: { request: Request; params: Params }) => {
    const timetableId = params.timetableId;
    const lectureId = params.lectureId;

    if (timetableId === undefined || lectureId === undefined) {
      const url = new URL(request.url);
      return encodedRedirect({
        type: 'error',
        path: url.pathname,
        message: '강의 정보를 찾을 수 없습니다.',
      });
    }

    const { error } = await tableService.deleteTimetableLecture(
      timetableId,
      lectureId,
    );
    if (error != null) {
      const url = new URL(request.url);
      return encodedRedirect({
        type: 'error',
        path: url.pathname,
        message: '강의 삭제에 실패했습니다. 다시 시도해주세요.',
      });
    }
    return redirect(ROUTES.ROOT);
  };

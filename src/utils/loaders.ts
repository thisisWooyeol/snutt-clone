import { redirect } from 'react-router-dom';

import { type TableService } from '@/services/tableService';
import { type UserService } from '@/services/userService';

export const getAuthLoader =
  (userService: UserService) =>
  async ({ request }: { request: Request }) => {
    const { data, error } = await userService.getUser();
    if (data !== null) {
      return data; // 로그인 성공 시 유저 정보 반환
    }
    console.error(error);

    // TODO: token expired 시 "로그인이 필요합니다." alert 추가
    // 로그인 실패 시 루트 페이지로 리다이렉트
    // 조건의 목적:
    //  로그인되지 않은 상태에서 루트 페이지 새로고침 시 무한 리다이렉트 방지
    const url = new URL(request.url);
    const pathname = url.pathname;

    if (pathname === '/') return null;
    return redirect('/');
  };

export const getTimetableRecentLoader =
  (tableService: TableService) => async () => {
    const { data, error } = await tableService.getTimetableRecent();
    if (data !== null) {
      return data;
    }
    console.error(error);

    return null;
  };

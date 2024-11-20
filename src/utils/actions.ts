import { type Params, redirect } from 'react-router-dom';

import type { ClassTimeJson, CreateLectureData, Lecture } from '@/api/types';
import { DAYS_OF_WEEK } from '@/pages/Timetable';
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

export const getCreateLectureAction =
  (tableService: TableService) =>
  async ({ request, params }: { request: Request; params: Params }) => {
    const timetableId = params.timetableId;

    if (timetableId === undefined) {
      const url = new URL(request.url);
      return encodedRedirect({
        type: 'error',
        path: url.pathname,
        message: '시간표 정보를 찾을 수 없습니다.',
      });
    }

    const formData = await request.formData();
    const course_title = formData.get('course_title') as string;
    const instructor = formData.get('instructor') as string;
    const credit = Number(formData.get('credit')) as Lecture['credit'];
    const remark = formData.get('remark') as string;
    // ! FIXME: Warning, it may harm the user experience
    const isForced = true; // FIXME: magic value

    // Build class_time_json
    const dayString = formData.get('dayString') as string;
    const day = DAYS_OF_WEEK.findIndex(
      (d) => d === dayString,
    ) as ClassTimeJson['day'];

    const place = formData.get('place') as string;
    const start_time = formData.get('start_time') as string;
    const end_time = formData.get('end_time') as string;
    const startMinute = start_time
      .split(':')
      .reduce((acc, cur) => acc * 60 + +cur, 0);
    const endMinute = end_time
      .split(':')
      .reduce((acc, cur) => acc * 60 + +cur, 0);
    const len = endMinute - startMinute;
    const startOfDay = 9; // FIXME: magic value
    const start = startMinute / 60 - startOfDay;

    const class_time_json: CreateLectureData['class_time_json'] = [
      {
        day,
        place,
        start_time,
        end_time,
        startMinute,
        endMinute,
        len,
        start,
      },
    ];
    // end of building class_time_json

    const colorIndex = 0; // FIXME: magic value

    const createLectureData: CreateLectureData = {
      course_title,
      instructor,
      credit,
      class_time_json,
      remark,
      colorIndex,
    };

    const { error } = await tableService.createTimetableLecture(
      timetableId,
      createLectureData,
      isForced,
    );
    if (error != null) {
      const url = new URL(request.url);
      return encodedRedirect({
        type: 'error',
        path: url.pathname,
        message: '강의 추가에 실패했습니다. 다시 시도해주세요.',
      });
    }
    return redirect(ROUTES.getTimetableLectureListPath(timetableId));
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

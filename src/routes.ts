export const ROUTES = {
  ROOT: '/',
  MYPAGE: '/mypage',
  MYPAGE_ACCOUNT: '/mypage/account',
  MYPAGE_ACCOUNT_CHANGENICKNAME: '/mypage/account/change-nickname',
  SIGNIN: '/sign-in',
  TIMETABLE_LECTURE: '/timetables/:timetableId/lectures/:lectureId',
  TIMETABLE_LECTURELIST: '/timetables/:timetableId/lectures',
  TIMETABLE_NEW: '/timetables/:timetableId/new',

  // Function to generate a path with parameters
  getTimetableLecturePath: (timetableId: string, lectureId: string) =>
    `/timetables/${timetableId}/lectures/${lectureId}`,
  getTimetableLectureListPath: (timetableId: string) =>
    `/timetables/${timetableId}/lectures`,
  getTimetableNewPath: (timetableId: string) =>
    `/timetables/${timetableId}/new`,
};

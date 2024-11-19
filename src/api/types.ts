// Types for AuthApi
export type SignInRequest = { id: string; pw: string };
export type SignInResponse = {
  user_id: string;
  token: string;
  message: string;
};

// Types for UserApi
export type UserInfo = {
  id: string;
  isAdmin: boolean;
  regDate: string;
  notificationCheckedAt: string;
  email: string;
  localId: string;
  fbName: string;
  nickname: { nickname: string; tag: string };
};

export type GetUserRequest = { token: string };
export type GetUserResponse = UserInfo;

export type ChangeNicknameRequest = {
  token: string;
  nickname: string;
};
export type ChangeNicknameResponse = UserInfo;

// Types for TableApi
// FIXME: nullable types are not verified
export type TimetableBasic = {
  _id: string;
  year: number;
  semester: 1 | 2 | 3 | 4;
  title: string;
  isPrimary: boolean;
  updated_at: string;
  total_credit: number;
};

export type TimetableDetailed = {
  _id: string;
  year: number;
  semester: 1 | 2 | 3 | 4;
  title: string;
  isPrimary: boolean;
  updated_at: string;
  user_id: string;
  lecture_list: Lecture[];
  theme: number;
  themeId: string;
};

export type Lecture = {
  _id: string;
  academic_year?: string;
  category: string;
  class_time_json: ClassTimeJson[];
  classification: string;
  credit: 1 | 2 | 3 | 4;
  department?: string;
  instructor?: string;
  lecture_number: string;
  quota?: number;
  freshman_quota?: number;
  remark: string;
  course_number: string;
  course_title: string;
  color?: {
    bg: string;
    fg: string;
  };
  colorIndex: number;
  lecture_id: string;
  snuttEvLecture: {
    evLectureId: number;
  };
  class_time_mask: number[];
};

export type ClassTimeJson = {
  day: 0 | 1 | 2 | 3 | 4 | 5;
  place: string;
  startMinute: number;
  endMinute: number;
  start_time: string;
  end_time: string;
  len: number;
  start: number;
  lectureBuildings: [
    {
      id: string;
      buildingNumber: string;
      buildingNameKor: string;
      buildingNameEng: string;
      locationInDMS: {
        latitude: number;
        longitude: number;
      };
      locationInDecimal: {
        latitude: number;
        longitude: number;
      };
      campus: 'GWANAK';
    },
  ];
};

export type CreateLectureData = {
  course_title: string;
  instructor?: string;
  credit: 1 | 2 | 3 | 4;
  class_time_json: Omit<ClassTimeJson, 'lectureBuildings'>[];
  remark: string;
  color?: {
    bg: string;
    fg: string;
  };
  colorIndex: number;
  is_forced: boolean;
};

export type CreateTimetableLectureRequest = {
  token: string;
  timetableId: string;
  createLectureData: CreateLectureData;
};
export type CreateTimetableLectureResponse = TimetableDetailed;

export type DeleteTimetableLectureRequest = {
  token: string;
  timetableId: string;
  lectureId: string;
};
export type DeleteTimetableLectureResponse = TimetableDetailed;

export type GetTimetableListRequest = { token: string };
export type GetTimetableListResponse = TimetableBasic[];
export type GetTimetableRecentRequest = { token: string };
export type GetTimetableRecentResponse = TimetableDetailed;
export type GetTimetableByIdRequest = { token: string; id: string };
export type GetTimetableByIdResponse = TimetableDetailed;

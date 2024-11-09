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

//Types for tableApi
export type TableInfo = {
  id: string;
  user_id: string;
  year: number;
  semester: string;
  lecture_list: [
    {
      id: string;
      academic_year: string;
      category: string;
      class_time_json: [
        {
          day: number;
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
              locationInDMS: { latitude: number; longitude: number };
              locationInDecimal: { latitude: number; longitude: number };
              campus: string;
            },
          ];
        },
      ];
      classification: string;
      credit: number;
      department: string;
      instructor: string;
      lecture_number: string;
      quota: number;
      freshman_quota: number;
      remark: string;
      course_number: string;
      course_title: string;
      color: { bg: string; fg: string };
      colorIndex: number;
      lecture_id: string;
      snuttEvLecture: { evLectureId: number };
      class_time_mask: [number];
    },
  ];
  title: string;
  theme: string;
  themeId: string;
  isPrimary: boolean;
  updated_at: string;
};

export type GetRecentTableResponse = TableInfo;

export type GetUserRequest = { token: string };
export type GetUserResponse = UserInfo;

export type ChangeNicknameRequest = {
  token: string;
  nickname: string;
};
export type ChangeNicknameResponse = UserInfo;

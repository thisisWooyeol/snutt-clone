import { AlignLeft, BellRing, List, Share2 } from 'lucide-react';
import React from 'react';

// import { useLoaderData } from 'react-router-dom';
// import { styled } from 'styled-components';
// import { type UserInfo } from '@/api/types';
import { NavigationBar } from '@/components/navigation-bar';
import { PageHeader } from '@/components/page-header';
// import { ServiceContext } from '@/context/ServiceContext';
// import { useGuardContext } from '@/hooks/useGuardContext';
// import { useRoutes } from '@/hooks/useRoutes';

// interface ClassTime {
//   day: number; // 0: Monday, 1: Tuesday, ..., 4: Friday
//   place: string;
//   startMinute: number;
//   endMinute: number;
// }

// interface Lecture {
//   course_title: string;
//   lecture_number: string;
//   class_time_json: ClassTime[];
//   color: {
//     bg: string;
//     fg: string;
//   };
// }

// interface TimetableProps {
//   lecture_list: Lecture[];
// }

// const daysOfWeek = ["월", "화", "수", "목", "금"];
// const minutesToTime = (minutes: number) => {
//   const hours = Math.floor(minutes / 60);
//   const mins = minutes % 60;
//   return `${hours}:${mins.toString().padStart(2, '0')}`;
// };

export const TimeTable = () => {
  // const { authService } = useGuardContext(ServiceContext);
  // const { toRoot } = useRoutes();

  // const userInfo = useLoaderData() as UserInfo;
  const daysOfWeek = ['월', '화', '수', '목', '금'];
  const hours = Array.from({ length: 14 }, (_, i) => 9 + i);

  // TODO: SNUTT 클론코딩 (2-1) - 시간표 화면 구현하기
  // 피그마 오른쪽에 있는 시간표 사진 (스누티티 모바일 어플리케이션과 동일합니다) 대로 디자인해 주세요.
  // 이 때, 각 강의 아이템의 색깔은 API 스펙이 좀 복잡해서 구현 패스하겠습니다. 까만색 배경에 흰색 텍스트로만 구현해주세요.
  // 시간표 데이터를 불러올 땐 GET /v1/tables/recent API를 사용하시면 됩니다.
  // 시간표 영역의 시간 표시 부분은 오전 9시부터 오후 10시까지로 고정해 주세요.
  // 시간표 영역과 바텀 네비바의 마이페이지 버튼 빼고는 모두 저번과 마찬가지로 클릭해도 아무 동작도 하지 않는 상태로 잡아 주세요.

  return (
    <>
      <PageHeader>
        <div className="flex items-center gap-2 p-4">
          <AlignLeft size={24} />
          <div className="font-bold">학점 채우기</div>
          <div className="text-xs text-muted-foreground">
            <span className="align-sub">(0 학점)</span>
          </div>
        </div>
        <div className="flex items-center gap-3 p-4">
          <List strokeWidth={1.5} />
          <Share2 strokeWidth={1.5} size={20} />
          <BellRing strokeWidth={1.5} size={20} />
        </div>
      </PageHeader>
      {/* Days of the Week */}
      <div className="grid grid-cols-[5%_19%_19%_19%_19%_19%] border-t">
        {/* Empty top-left cell for the time column */}
        <div className="bg-white-50 h-6 border-b"></div>
        {daysOfWeek.map((day, index) => (
          <div
            key={index}
            className="bg-white-50 flex h-6 items-center justify-center border-b border-l text-xs text-gray-500"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Timetable Grid */}
      <div className="grid grid-cols-[5%_19%_19%_19%_19%_19%]">
        {hours.map((hour) => (
          <React.Fragment key={hour}>
            {/* Time Column */}
            <div className="bg-white-50 flex h-12 items-center justify-center border-b pb-6 text-xs font-medium text-gray-500">
              {hour}
            </div>
            {/* Empty Cells for Each Day of the Week */}
            {Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className="relative h-12 w-full border-b border-l bg-white"
              >
                {/* Horizontal Divider */}
                <div className="absolute inset-x-0 top-1/2 border-t border-gray-100"></div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>

      <NavigationBar />
    </>
  );
};

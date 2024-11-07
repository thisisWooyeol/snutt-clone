import { AlignLeft, BellRing, List, Share2 } from 'lucide-react';

// import { useLoaderData } from 'react-router-dom';
// import { type UserInfo } from '@/api/types';
import { NavigationBar } from '@/components/navigation-bar';
import { PageHeader } from '@/components/page-header';

export const TimeTable = () => {
  // const userInfo = useLoaderData() as UserInfo;
  const daysOfWeek = ['월', '화', '수', '목', '금'];
  const startHour = 9;
  const endHour = 22;
  const hours = Array.from(
    { length: endHour - startHour + 1 },
    (_, i) => startHour + i,
  );

  // TODO: SNUTT 클론코딩 (2-1) - 시간표 화면 구현하기
  // 피그마 오른쪽에 있는 시간표 사진 (스누티티 모바일 어플리케이션과 동일합니다) 대로 디자인해 주세요.
  // 이 때, 각 강의 아이템의 색깔은 API 스펙이 좀 복잡해서 구현 패스하겠습니다. 까만색 배경에 흰색 텍스트로만 구현해주세요.
  // 시간표 데이터를 불러올 땐 GET /v1/tables/recent API를 사용하시면 됩니다.
  // 시간표 영역의 시간 표시 부분은 오전 9시부터 오후 10시까지로 고정해 주세요.
  // 시간표 영역과 바텀 네비바의 마이페이지 버튼 빼고는 모두 저번과 마찬가지로 클릭해도 아무 동작도 하지 않는 상태로 잡아 주세요.

  return (
    <div className="flex h-full flex-col">
      <PageHeader>
        <div className="flex items-center gap-2 p-4">
          <AlignLeft size={24} />
          <div className="font-bold">시간표</div>
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

      {/* Days of the Week Header */}
      <div className="grid grid-cols-[5%_19%_19%_19%_19%_19%] border-t">
        <div className="h-6 border-b" /> {/* Placeholder for time column */}
        {daysOfWeek.map((day, index) => (
          <div
            key={index}
            className="flex h-6 items-center justify-center border-b border-l text-xs text-muted-foreground"
          >
            {day}
          </div>
        ))}
      </div>
      {/* Timetable Grid */}
      <div className="grid flex-grow grid-cols-[5%_19%_19%_19%_19%_19%]">
        {/* Time Column */}
        <div className="flex flex-col">
          {hours.map((hour) => (
            <div
              key={hour}
              className="flex flex-grow items-center justify-center border-b pb-6 text-xs font-medium text-muted-foreground"
            >
              {hour}
            </div>
          ))}
        </div>
        {/* Schedule Cells by Day */}
        {daysOfWeek.map((_, dayIndex) => (
          <div key={dayIndex} className="flex flex-col">
            {hours.map((_, hourIndex) => (
              <div
                key={hourIndex}
                className="relative flex-grow border-b border-l"
              >
                {/* Horizontal Divider */}
                <div className="absolute inset-x-0 top-1/2 border-t border-muted" />
                {/* Optional: Here you can add dayIndex and hourIndex to manage schedule data */}
              </div>
            ))}
          </div>
        ))}
      </div>

      <NavigationBar />
    </div>
  );
};

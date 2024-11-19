import { ChevronRight } from 'lucide-react';
import { NavLink, useLoaderData } from 'react-router-dom';

import type { TimetableDetailed } from '@/api/types';
import { PageHeader } from '@/components/page-header';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ROUTES } from '@/routes';

import { DAYS_OF_WEEK } from './Timetable';

type LectureItemProps = {
  lecture: TimetableDetailed['lecture_list'][0];
  timetableId: string;
};

const LectureItem = ({ lecture, timetableId }: LectureItemProps) => (
  <NavLink
    key={lecture._id}
    to={ROUTES.getTimetableLecturePath(timetableId, lecture._id)}
  >
    <Button
      variant="ghost"
      className="flex h-auto w-full flex-col items-start gap-2 rounded-none px-6 py-4 text-left font-normal"
    >
      <div className="flex w-full justify-between">
        <div className="text-md font-semibold">{lecture.course_title}</div>
        <div className="text-xs">
          {lecture.instructor} / {lecture.credit}학점
        </div>
      </div>
      <div className="flex flex-col gap-1 text-xs">
        <div className="flex flex-wrap items-center gap-1">
          <img src="/icons/tag.svg" alt="tag" className="size-3" />
          <div>
            {lecture.department}, {lecture.academic_year}
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-1">
          <img src="/icons/clock-5.svg" alt="clock" className="size-3" />
          {lecture.class_time_json.map((classTime, index) => (
            <div key={index}>
              {DAYS_OF_WEEK[classTime.day]}({classTime.start_time}~
              {classTime.end_time})
            </div>
          ))}
        </div>
      </div>
    </Button>
  </NavLink>
);

export const TimetableLectureList = () => {
  const timetableDetail = useLoaderData() as TimetableDetailed;

  return (
    <div className="flex h-full flex-col">
      <PageHeader className="border-b border-muted">
        <div className="flex items-center gap-1 p-4">
          <Button asChild variant="ghost" size="icon" className="size-6">
            <NavLink to={ROUTES.ROOT}>
              <img src="/icons/chevron-left.svg" alt="back" />
            </NavLink>
          </Button>
          <h1 className="font-bold">나의 시간표</h1>
        </div>
      </PageHeader>

      <div className="flex-1 overflow-y-auto">
        {timetableDetail.lecture_list.map((lecture) => (
          <>
            <LectureItem
              key={lecture._id}
              lecture={lecture}
              timetableId={timetableDetail._id}
            />
            <div className="px-6">
              <Separator decorative={true} className="bg-muted" />
            </div>
          </>
        ))}
        <NavLink to={ROUTES.getTimetableNewPath(timetableDetail._id)}>
          <Button
            variant="ghost"
            className="h-12 w-full justify-between rounded-none p-6 font-normal"
          >
            <span>강의 추가하기</span>
            <ChevronRight />
          </Button>
        </NavLink>
      </div>
    </div>
  );
};

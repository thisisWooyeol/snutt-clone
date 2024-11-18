import { ChevronRight } from 'lucide-react';
import { NavLink, useLoaderData } from 'react-router-dom';

import type { TimetableDetailed } from '@/api/types';
import { PageHeader } from '@/components/page-header';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ROUTES } from '@/routes';

import { DAYS_OF_WEEK } from './Timetable';

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
          <h1 className="font-bold">강의 목록</h1>
        </div>
      </PageHeader>

      <div className="flex-1">
        {timetableDetail.lecture_list.map((lecture) => (
          <NavLink
            key={lecture._id}
            to={ROUTES.getTimetableLecturePath(
              timetableDetail._id,
              lecture._id,
            )}
            className={'hover:opacity-80'}
          >
            <div className="flex h-28 flex-col justify-center gap-2 p-6">
              <div className="flex justify-between">
                <div className="text-md font-semibold">
                  {lecture.course_title}
                </div>
                <div className="text-xs">
                  {lecture.instructor} / {lecture.credit}학점
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-xs">
                  {lecture.department}, {lecture.academic_year}
                </div>
                <div className="flex gap-x-2">
                  {lecture.class_time_json.map((classTime, index) => (
                    <span key={index} className="text-xs">
                      {DAYS_OF_WEEK[classTime.day]}({classTime.start_time}~
                      {classTime.end_time})
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="px-4">
              <Separator decorative={true} className="bg-muted" />
            </div>
          </NavLink>
        ))}
        <div className="w-full">
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
    </div>
  );
};

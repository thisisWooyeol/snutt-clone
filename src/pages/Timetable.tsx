import { Slot } from '@radix-ui/react-slot';
import { AlignLeft, BellRing, List, Share2 } from 'lucide-react';
import { NavLink, useLoaderData } from 'react-router-dom';

import { type TimetableDetailed } from '@/api/types';
import { NavigationBar } from '@/components/navigation-bar';
import { PageHeader } from '@/components/page-header';
import { ROUTES } from '@/routes';

// Constants
// FIXME: Handle shared constants
export const DAYS_OF_WEEK = ['월', '화', '수', '목', '금'];
const START_OF_DAY = 9;
const END_OF_DAY = 22;
const NUM_HOURS = END_OF_DAY - START_OF_DAY + 1;
const HOURS = Array.from({ length: NUM_HOURS }, (_, i) => START_OF_DAY + i);

export const TimetablePage = () => {
  const { recentTimetable } = useLoaderData() as {
    recentTimetable: TimetableDetailed | null;
  };
  if (recentTimetable === null) {
    alert('시간표 불러오기에 실패했습니다. 다시 시도해주세요.');
    return null;
  }

  const totalCredit = recentTimetable.lecture_list.reduce(
    (acc, lecture) => acc + lecture.credit,
    0,
  );

  return (
    <div className="flex h-full flex-col">
      <PageHeader>
        <div className="flex items-center gap-2 p-4">
          <AlignLeft size={24} />
          <div className="font-bold">{recentTimetable.title}</div>
          <div className="text-xs text-muted-foreground">
            <span className="align-sub">({totalCredit} 학점)</span>
          </div>
        </div>
        <div className="flex items-center gap-3 p-4">
          <Slot className="hover:rounded-md hover:bg-accent">
            <NavLink
              to={ROUTES.getTimetableLectureListPath(recentTimetable._id)}
              state={{ timetable: recentTimetable }}
            >
              <List strokeWidth={1.5} size={24} />
            </NavLink>
          </Slot>
          <Slot className="hover:rounded-md hover:bg-accent">
            <Share2 strokeWidth={1.5} size={20} />
          </Slot>
          <Slot className="hover:rounded-md hover:bg-accent">
            <BellRing strokeWidth={1.5} size={20} />
          </Slot>
        </div>
      </PageHeader>

      {/* Days of the Week Header */}
      <div className="grid h-6 grid-cols-[5%_19%_19%_19%_19%_19%] divide-x border-y">
        <div /> {/* Placeholder for time column */}
        {DAYS_OF_WEEK.map((day, index) => (
          <div
            key={index}
            className="flex items-center justify-center text-xs text-muted-foreground"
          >
            {day}
          </div>
        ))}
      </div>
      {/* Timetable Grid */}
      <div className="grid flex-grow grid-cols-[5%_19%_19%_19%_19%_19%] divide-x">
        {/* Time Column */}
        <div className="flex flex-col">
          {HOURS.map((hour) => (
            <div
              key={hour}
              className="flex flex-grow justify-center border-b text-xs text-muted-foreground"
            >
              {hour}
            </div>
          ))}
        </div>
        {/* Schedule Cells by Day */}
        {DAYS_OF_WEEK.map((_, dayIndex) => (
          <div key={dayIndex} className="relative flex flex-col">
            {HOURS.map((_, hourIndex) => (
              <div key={hourIndex} className="relative flex-grow border-b">
                {/* Horizontal Divider */}
                <div className="absolute inset-x-0 top-1/2 border-t border-muted" />
              </div>
            ))}
            {/* Add Lectures for the Day */}
            {recentTimetable.lecture_list.map((lecture, lectureIndex) =>
              lecture.class_time_json
                .filter((classTime) => classTime.day === dayIndex)
                .map((classTime, classTimeIndex) => {
                  const startHourPosition =
                    classTime.startMinute / 60 - START_OF_DAY;
                  const endHourPosition =
                    classTime.endMinute / 60 - START_OF_DAY;
                  const duration = endHourPosition - startHourPosition;

                  return (
                    <NavLink
                      key={`${lectureIndex}-${classTimeIndex}`}
                      to={ROUTES.getTimetableLecturePath(
                        recentTimetable._id,
                        lecture._id,
                      )}
                      className={'hover:opacity-80'}
                    >
                      <div
                        className={`absolute inset-x-0 flex flex-col justify-center p-2 text-center text-xs font-bold text-snutt-foreground bg-lecture-${lecture.colorIndex}`}
                        style={{
                          top: `${(startHourPosition * 100) / NUM_HOURS}%`,
                          height: `${(duration * 100) / NUM_HOURS}%`,
                        }}
                      >
                        <p>{lecture.course_title}</p>
                        <p>{classTime.place}</p>
                      </div>
                    </NavLink>
                  );
                }),
            )}
          </div>
        ))}
      </div>

      <NavigationBar />
    </div>
  );
};

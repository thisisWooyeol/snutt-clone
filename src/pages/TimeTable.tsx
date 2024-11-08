import { AlignLeft, BellRing, List, Share2 } from 'lucide-react';
import { useLoaderData } from 'react-router-dom';

import { type TimeTable } from '@/api/types';
import { NavigationBar } from '@/components/navigation-bar';
import { PageHeader } from '@/components/page-header';
import { cn } from '@/lib/utils';

export const TimeTablePage = () => {
  const recentTimeTable = useLoaderData() as TimeTable;

  const daysOfWeek = ['월', '화', '수', '목', '금'];
  const startOfDay = 9;
  const endOfDay = 22;
  const numHours = endOfDay - startOfDay + 1;
  const hours = Array.from({ length: numHours }, (_, i) => startOfDay + i);

  const colors = [
    'bg-red-500',
    'bg-orange-500',
    'bg-yellow-400',
    'bg-lime-400',
    'bg-green-500',
    'bg-teal-400',
    'bg-blue-500',
    'bg-indigo-500',
    'bg-purple-500',
  ];

  return (
    <div className="flex h-full flex-col">
      <PageHeader>
        <div className="flex items-center gap-2 p-4">
          <AlignLeft size={24} />
          <div className="font-bold">{recentTimeTable.title}</div>
          <div className="text-xs text-muted-foreground">
            <span className="align-sub">
              (
              {recentTimeTable.lecture_list.reduce(
                (acc, lecture) => acc + lecture.credit,
                0,
              )}
              학점)
            </span>
          </div>
        </div>
        <div className="flex items-center gap-3 p-4">
          <List strokeWidth={1.5} />
          <Share2 strokeWidth={1.5} size={20} />
          <BellRing strokeWidth={1.5} size={20} />
        </div>
      </PageHeader>

      {/* Days of the Week Header */}
      <div className="grid h-6 grid-cols-[5%_19%_19%_19%_19%_19%] divide-x border-y">
        <div /> {/* Placeholder for time column */}
        {daysOfWeek.map((day, index) => (
          <div
            key={index}
            className="flex items-center justify-center text-xs text-muted-foreground"
          >
            {day}
          </div>
        ))}
      </div>
      {/* Timetable Grid */}
      <div className="grid flex-grow grid-cols-[5%_19%_19%_19%_19%_19%] divide-x border-b">
        {/* Time Column */}
        <div className="flex flex-col divide-y">
          {hours.map((hour) => (
            <div
              key={hour}
              className="flex flex-grow justify-center text-xs text-muted-foreground"
            >
              {hour}
            </div>
          ))}
        </div>
        {/* Schedule Cells by Day */}
        {daysOfWeek.map((_, dayIndex) => (
          <div key={dayIndex} className="relative flex flex-col divide-y">
            {hours.map((_, hourIndex) => (
              <div key={hourIndex} className="relative flex-grow">
                {/* Horizontal Divider */}
                <div className="absolute inset-x-0 top-1/2 border-t border-muted" />
              </div>
            ))}
            {/* Add Lectures for the Day */}
            {recentTimeTable.lecture_list.map((lecture, lectureIndex) =>
              lecture.class_time_json.map((classTime, classTimeIndex) => {
                if (classTime.day === dayIndex) {
                  const startHourPosition =
                    classTime.startMinute / 60 - startOfDay;
                  const endHourPosition = classTime.endMinute / 60 - startOfDay;
                  const duration = endHourPosition - startHourPosition;

                  return (
                    <div
                      key={`${lectureIndex}-${classTimeIndex}`}
                      className={cn(
                        'absolute inset-x-0 flex flex-col justify-center p-2 text-center text-xs font-bold text-white',
                        colors[lecture.colorIndex],
                      )}
                      style={{
                        top: `${(startHourPosition * 100) / numHours}%`,
                        height: `${(duration * 100) / numHours}%`,
                      }}
                    >
                      <p>{lecture.course_title}</p>
                      <p>{classTime.place}</p>
                    </div>
                  );
                }
              }),
            )}
          </div>
        ))}
      </div>

      <NavigationBar />
    </div>
  );
};

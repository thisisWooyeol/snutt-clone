import { NavLink, useLoaderData } from "react-router-dom";

import type { TimetableDetailed } from "@/api/types";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/routes";

import { DAYS_OF_WEEK } from "./Timetable";

export const TimetableLectureList = () => {
  const timetable = useLoaderData() as TimetableDetailed;


  return (
    <div className="p-4">
      <div className="flex items-center gap-1 mb-4">
        <Button asChild variant="ghost" size="icon" className="size-6">
          <NavLink to={ROUTES.ROOT}>
            <img src="/icons/chevron-left.svg" alt="back" />
          </NavLink>
        </Button>
        <h1 className="font-bold">강의 목록</h1>
      </div>
      {timetable.lecture_list.map((lecture) => (
        <NavLink
        key={lecture._id}
        to={ROUTES.getTimetableLecturePath(
          timetable._id,
          lecture._id,
        )}
        className={'hover:opacity-80'}
      >
          <div className="border rounded-lg p-4 mb-4 bg-gray-50 shadow">
            <h2 className="text-xl font-semibold">{lecture.course_title}</h2>
            <div className="flex justify-between text-gray-600 mb-2">
              <span className="text-sm">{lecture.department}, {lecture.academic_year}</span>
              <span className="text-sm">{lecture.instructor} / {lecture.credit}학점</span>
            </div>
            <div>
              {lecture.class_time_json.map((classTime, index) => (
                <span key={index} className="mr-2">
                  {DAYS_OF_WEEK[classTime.day]}({classTime.start_time}~{classTime.end_time})
                </span>
              ))}
            </div>
            <div className="text-sm text-gray-800">{}</div>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

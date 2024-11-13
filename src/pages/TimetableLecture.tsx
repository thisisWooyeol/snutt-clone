import { NavLink, useLoaderData, useParams } from 'react-router-dom';

import type { TimetableDetailed } from '@/api/types';
import { DeleteLectureDialog } from '@/components/delete-lecture-dialog';
import { PageHeader } from '@/components/page-header';
import { Button } from '@/components/ui/button';
import { DAYS_OF_WEEK } from '@/pages/Timetable';
import { ROUTES } from '@/routes';

type TimetableLectureParams = {
  timetableId: string;
  lectureId: string;
};

export const TimetableLecture = () => {
  const timetableDetail = useLoaderData() as TimetableDetailed;
  const { lectureId } = useParams<TimetableLectureParams>();

  const currentLecture = timetableDetail.lecture_list.find(
    (lecture) => lecture._id === lectureId,
  );
  if (currentLecture === undefined) {
    return <div>강의 정보를 찾을 수 없습니다.</div>;
  }

  return (
    <div className="flex h-full flex-col">
      <PageHeader>
        <div className="flex items-center gap-1 p-4">
          <Button asChild variant="ghost" size="icon" className="size-6">
            <NavLink to={ROUTES.ROOT}>
              <img src="/icons/chevron-left.svg" alt="back" />
            </NavLink>
          </Button>
          <h1 className="font-bold">강의 상세 보기</h1>
        </div>
      </PageHeader>

      <main className="flex-1 bg-muted">
        <div className="my-2 bg-background">
          <div className="flex h-12 w-full items-center justify-start px-4 py-2">
            <div className="basis-1/4 text-sm text-muted-foreground">
              강의명
            </div>
            <div className="text-sm">{currentLecture.course_title}</div>
          </div>

          <div className="flex h-12 w-full items-center justify-start px-4 py-2">
            <div className="basis-1/4 text-sm text-muted-foreground">교수</div>
            <div className="text-sm">{currentLecture.instructor}</div>
          </div>

          <div className="flex h-12 w-full items-center justify-start px-4 py-2">
            <div className="basis-1/4 text-sm text-muted-foreground">색상</div>
            <div className="flex">
              <div className="h-6 w-6 border bg-background" />
              <div
                className={`h-6 w-6 bg-lecture-${currentLecture.colorIndex}`}
              />
            </div>
          </div>
        </div>

        <div className="my-2 bg-background">
          <div className="flex h-12 w-full items-center justify-start px-4 py-2">
            <div className="basis-1/4 text-sm text-muted-foreground">
              강의평점
            </div>
            <div className="text-sm">
              <span>--</span>
              <span className="text-muted-foreground"> (0개)</span>
            </div>
          </div>
        </div>

        <div className="my-2 bg-background">
          <div className="flex h-12 w-full items-center justify-start px-4 py-2">
            <div className="basis-1/4 text-sm text-muted-foreground">학과</div>
            <div className="text-sm">{currentLecture.department}</div>
          </div>

          <div className="flex h-12 w-full items-center justify-start px-4 py-2">
            <div className="basis-1/4 text-sm text-muted-foreground">힉년</div>
            <div className="text-sm">{currentLecture.academic_year}</div>
          </div>

          <div className="flex h-12 w-full items-center justify-start px-4 py-2">
            <div className="basis-1/4 text-sm text-muted-foreground">힉점</div>
            <div className="text-sm">{currentLecture.credit}</div>
          </div>

          <div className="flex h-12 w-full items-center justify-start px-4 py-2">
            <div className="basis-1/4 text-sm text-muted-foreground">분류</div>
            <div className="text-sm">{currentLecture.classification}</div>
          </div>

          <div className="flex h-12 w-full items-center justify-start px-4 py-2">
            <div className="basis-1/4 text-sm text-muted-foreground">구분</div>
            <div className="text-sm">{currentLecture.category}</div>
          </div>

          <div className="flex h-12 w-full items-center justify-start px-4 py-2">
            <div className="basis-1/4 text-sm text-muted-foreground">
              강좌번호
            </div>
            <div className="text-sm">{currentLecture.course_number}</div>
          </div>

          <div className="flex h-12 w-full items-center justify-start px-4 py-2">
            <div className="basis-1/4 text-sm text-muted-foreground">
              분반번호
            </div>
            <div className="text-sm">{currentLecture.lecture_number}</div>
          </div>

          <div className="flex h-12 w-full items-center justify-start px-4 py-2">
            <div className="basis-1/4 text-sm text-muted-foreground">정원</div>
            <div className="text-sm">{currentLecture.quota}</div>
          </div>

          <div className="flex w-full basis-3 items-center justify-start px-4 py-2">
            <div className="flex-none basis-1/4 text-sm text-muted-foreground">
              비고
            </div>
            <div className="text-sm">{currentLecture.remark}</div>
          </div>
        </div>

        <div className="my-2 bg-background">
          <div className="flex h-12 w-full items-center justify-start px-4 py-2">
            <div className="basis-1/4 text-sm text-muted-foreground">
              시간 및 장소
            </div>
          </div>

          {currentLecture.class_time_json.map((classTime, index) => (
            <div key={index}>
              <div className="flex h-9 w-full items-center justify-start px-4 py-2">
                <div className="basis-1/4 text-sm text-muted-foreground">
                  시간
                </div>
                <div className="text-sm">
                  {DAYS_OF_WEEK[classTime.day]} {classTime.start_time}~
                  {classTime.end_time}
                </div>
              </div>

              <div className="flex h-9 w-full items-center justify-start px-4 py-2">
                <div className="basis-1/4 text-sm text-muted-foreground">
                  장소
                </div>
                <div className="text-sm">{classTime.place}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="my-2 bg-background">
          <div className="flex h-12 w-full items-center justify-center px-4 py-2">
            <div className="text-sm">강의계획서</div>
          </div>
          <div className="flex h-12 w-full items-center justify-center px-4 py-2">
            <div className="text-sm">강의평</div>
          </div>
        </div>

        <div className="my-2 bg-background">
          <DeleteLectureDialog
            deleteBlock={
              <Button
                asChild
                variant="ghost"
                className="h-12 font-normal text-destructive hover:text-destructive"
              >
                <div className="flex h-12 w-full items-center justify-center px-4 py-2">
                  <div className="text-sm">삭제</div>
                </div>
              </Button>
            }
          />
        </div>
      </main>
    </div>
  );
};

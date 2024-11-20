import { useLoaderData, useNavigate, useParams } from 'react-router-dom';

import type { TimetableDetailed } from '@/api/types';
import { DestructiveDialog } from '@/components/destructive-dialog';
import {
  DetailRow,
  DetailSection,
  TimePlaceRow,
} from '@/components/lecture-detail';
import { PageHeader } from '@/components/page-header';
import { Button } from '@/components/ui/button';
import { DAYS_OF_WEEK } from '@/pages/Timetable';

type TimetableLectureParams = {
  timetableId: string;
  lectureId: string;
};

export const TimetableLecture = () => {
  const navigate = useNavigate();
  const timetableDetail = useLoaderData() as TimetableDetailed;
  const { lectureId } = useParams<TimetableLectureParams>();

  const currentLecture = timetableDetail.lecture_list.find(
    (lecture) => lecture._id === lectureId,
  );
  if (currentLecture === undefined) {
    // TODO: use ErrorPage component
    return <div>강의 정보를 찾을 수 없습니다.</div>;
  }

  return (
    <div className="flex h-full flex-col">
      <PageHeader>
        <div className="flex items-center gap-1 p-4">
          <Button
            variant="ghost"
            size="icon"
            className="size-6"
            onClick={() => {
              navigate(-1);
            }}
          >
            <img src="/icons/chevron-left.svg" alt="back" />
          </Button>
          <h1 className="font-bold">강의 상세 보기</h1>
        </div>
      </PageHeader>

      <main className="flex-1 bg-muted">
        <DetailSection>
          <DetailRow label="강의명" value={currentLecture.course_title} />
          <DetailRow label="교수" value={currentLecture.instructor} />
          <DetailRow
            label="색상"
            value={
              <div className="flex">
                <div className="size-6 border bg-background" />
                <div
                  className={`size-6 bg-lecture-${currentLecture.colorIndex}`}
                />
              </div>
            }
          />
        </DetailSection>

        <DetailSection>
          <DetailRow
            label="강의평점"
            value={
              <>
                <span>--</span>
                <span className="text-muted-foreground"> (0개)</span>
              </>
            }
          />
        </DetailSection>

        <DetailSection>
          <DetailRow label="학과" value={currentLecture.department} />
          <DetailRow label="학년" value={currentLecture.academic_year} />
          <DetailRow label="학점" value={currentLecture.credit} />
          <DetailRow label="분류" value={currentLecture.classification} />
          <DetailRow label="구분" value={currentLecture.category} />
          <DetailRow label="강좌번호" value={currentLecture.course_number} />
          <DetailRow label="분반번호" value={currentLecture.lecture_number} />
          <DetailRow label="정원" value={currentLecture.quota} />
          <DetailRow label="비고" value={currentLecture.remark} />
        </DetailSection>

        <DetailSection>
          <DetailRow label="시간 및 장소" value="" />
          {currentLecture.class_time_json.map((classTime, index) => (
            <div key={index}>
              <TimePlaceRow
                dayString={DAYS_OF_WEEK[classTime.day] ?? ''}
                startTime={classTime.start_time}
                endTime={classTime.end_time}
                place={classTime.place}
              />
            </div>
          ))}
          {/* Spacer */}
          <div className="h-2" />
        </DetailSection>

        <DetailSection>
          <div className="flex h-12 w-full items-center justify-center px-4 py-2">
            <div className="text-sm">강의계획서</div>
          </div>
          <div className="flex h-12 w-full items-center justify-center px-4 py-2">
            <div className="text-sm">강의평</div>
          </div>
        </DetailSection>

        <DetailSection>
          <DestructiveDialog
            trigger={
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
            title="강의 삭제"
            description="강의를 삭제하시겠습니까?"
            action="확인"
          />
        </DetailSection>
      </main>
    </div>
  );
};

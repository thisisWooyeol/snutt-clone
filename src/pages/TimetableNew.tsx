import { useState } from 'react';
import { Form, NavLink, useParams } from 'react-router-dom';

import {
  DetailRow,
  DetailRowForm,
  DetailSection,
  TimePlaceRowForm,
} from '@/components/lecture-detail';
import { PageHeader } from '@/components/page-header';
import { Button } from '@/components/ui/button';
import { ROUTES } from '@/routes';

type TimeTableNewParams = {
  timetableId: string;
};

export const TimetableNew = () => {
  const { timetableId } = useParams<TimeTableNewParams>() as TimeTableNewParams;
  const [courseTitle, setCourseTitle] = useState('');

  return (
    <div className="flex h-full flex-col bg-muted">
      <Form method="post">
        <PageHeader>
          <div className="flex gap-1 p-4">
            <Button asChild variant="ghost" size="icon" className="size-6">
              <NavLink to={ROUTES.getTimetableLectureListPath(timetableId)}>
                <img src="/icons/chevron-left.svg" alt="back" />
              </NavLink>
            </Button>
            <h1 className="font-bold">강의 상세 보기</h1>
          </div>
          <Button
            type="submit"
            variant="ghost"
            className="size-14 rounded-none font-normal"
            disabled={courseTitle === ''}
          >
            완료
          </Button>
        </PageHeader>

        <main className="flex-1">
          <DetailSection>
            <DetailRowForm
              label="강의명"
              name="course_title"
              placeholder="예) 기초 영어"
              value={courseTitle}
              onChange={(e) => {
                setCourseTitle(e.target.value);
              }}
            />
            <DetailRowForm
              label="교수"
              name="instructor"
              placeholder="예) 홍길동"
            />
            <DetailRow
              label="색상"
              value={
                <div className="flex">
                  <div className="size-6 border bg-background" />
                  <div className="size-6 bg-lecture-0" />
                </div>
              }
            />
          </DetailSection>

          <DetailSection>
            <DetailRowForm label="학점" name="credit" placeholder="예) 3" />
            <DetailRowForm
              label="비고"
              name="remark"
              placeholder="비고를 입력해주세요"
            />
          </DetailSection>

          <DetailSection>
            <div className="flex h-8 w-full items-center justify-start px-4 py-2 text-sm text-muted-foreground">
              시간 및 장소
            </div>
            <TimePlaceRowForm />
            <Button
              type="button"
              variant="ghost"
              className="w-full rounded-none text-sm text-muted-foreground"
              disabled
            >
              + 시간 및 장소 추가
            </Button>
          </DetailSection>
        </main>
      </Form>
    </div>
  );
};

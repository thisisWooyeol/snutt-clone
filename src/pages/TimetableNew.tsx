//import { Form, useActionData, useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { Form, useNavigate, useNavigation } from 'react-router-dom';

import type { LectureInfo } from '@/api/types';
//import { DestructiveDialog } from '@/components/destructive-dialog';
import { DetailRow, DetailSection } from '@/components/lecture-detail';
import { PageHeader } from '@/components/page-header';
import { Button } from '@/components/ui/button';
import { DAYS_OF_WEEK } from '@/pages/Timetable';

export const TimetableNew = () => {
  const navigate = useNavigate();
  const navigation = useNavigation();
  //const timetableDetail = useLoaderData() as TimetableDetailed;
  //const { lectureId } = useParams<TimetableLectureParams>();

  const newInfo: LectureInfo = {
    course_title: '',
    instructor: '',
    credit: 3,
    class_time_json: [
      {
        day: 2,
        place: '',
        startMinute: 1140,
        endMinute: 1230,
        start_time: '19:00',
        end_time: '20:30',
        len: 0,
        start: 0,
      },
    ],
    remark: '',
    color: {
      bg: '',
      fg: '',
    },
    colorIndex: 0,
    is_forced: true,
  };

  const currentLecture = newInfo;
  // if (currentLecture === undefined) {
  //   return <div>강의 정보를 찾을 수 없습니다.</div>;
  // }

  return (
    // TODO: 강의 직접 생성하는 페이지 구현
    // `/timetables/:id/new` route로 들어오는 페이지
    // 바텀시트로 뜰 필요는 없고 새 페이지로. 색상이나 시간은 구현하지 않아도 됨
    // 폼처리가 꽤 번거로울 만 함
    // 1번에서 만든 강의 상세 화면과 똑같이 생긴 ui가 많은데, 얼마나 공통화할지도 고민할만한 포인트
    // post timetable lecture api: https://snutt-api-dev.wafflestudio.com/webjars/swagger-ui/index.html#/default/addCustomLecture

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
          <h1 className="font-bold">{'강의 추가하기'}</h1>
        </div>
      </PageHeader>

      <Form className="flex-1 bg-muted" method="post">
        <DetailSection>
          <div className="flex min-h-12 w-full items-center justify-start px-4 py-2">
            <div className="flex-none basis-1/4 text-sm text-muted-foreground">
              {'강의명'}
            </div>
            <label htmlFor="course_title"></label>
            <input
              type="text"
              name="course_title"
              className="text-sm"
              placeholder="(없음)"
              required
            />
          </div>

          <div className="flex min-h-12 w-full items-center justify-start px-4 py-2">
            <div className="flex-none basis-1/4 text-sm text-muted-foreground">
              {'교수'}
            </div>
            <label htmlFor="instructor"></label>
            <input
              type="text"
              name="instructor"
              className="text-sm"
              placeholder="(없음)"
            />
          </div>

          <div className="flex min-h-12 w-full items-center justify-start px-4 py-2">
            <div className="flex-none basis-1/4 text-sm text-muted-foreground">
              {'학점'}
            </div>
            <label htmlFor="credit"></label>
            <input
              type="text"
              name="credit"
              className="text-sm"
              placeholder="(없음)"
              required
            />
          </div>
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
          <div className="flex min-h-12 w-full items-center justify-start px-4 py-2">
            <div className="flex-none basis-1/4 text-sm text-muted-foreground">
              {'비고'}
            </div>
            <label htmlFor="remark"></label>
            <input
              type="text"
              name="remark"
              className="text-sm"
              placeholder="(없음)"
            />
          </div>
        </DetailSection>

        <DetailSection>
          <DetailRow label="시간 및 장소" value="" />
          {currentLecture.class_time_json.map((classTime, index) => (
            <div key={index}>
              <div className="flex h-8 w-full items-center justify-start px-4 py-2">
                <div className="flex-none basis-1/4 text-sm text-muted-foreground">
                  시간
                </div>
                <div className="text-sm">
                  {' '}
                  {`${DAYS_OF_WEEK[classTime.day] ?? ''} ${classTime.start_time} ~ ${classTime.end_time}`}
                </div>
              </div>

              <div className="flex h-8 w-full items-center justify-start px-4 py-2">
                <div className="flex-none basis-1/4 text-sm text-muted-foreground">
                  {'장소'}
                </div>
                <label htmlFor="place"></label>
                <input
                  type="text"
                  name="place"
                  className="text-sm"
                  placeholder="(없음)"
                />
              </div>
            </div>
          ))}
          {/* Spacer */}
          <div className="h-2" />
        </DetailSection>

        <DetailSection>
          <Button
            type="submit"
            variant="ghost"
            className="h-12 font-normal text-primary hover:text-primary"
          >
            <div className="flex h-12 w-full items-center justify-center px-4 py-2">
              <div className="text-sm">
                {navigation.state === 'submitting'
                  ? '저장중...'
                  : navigation.state === 'loading'
                    ? '저장하기'
                    : '저장하기'}
              </div>
            </div>
          </Button>
        </DetailSection>
      </Form>
    </div>
  );
};

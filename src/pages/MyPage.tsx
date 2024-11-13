import { ChevronRight, User } from 'lucide-react';
import { useLoaderData } from 'react-router-dom';

import { type UserInfo } from '@/api/types';
import { DestructiveDialog } from '@/components/destructive-dialog';
import { MyPageItem, MyPageSection } from '@/components/mypage-detail';
import { NavigationBar } from '@/components/navigation-bar';
import { PageHeader } from '@/components/page-header';
import { Avatar } from '@/components/ui/avatar';
import { useSearchParamsAlert } from '@/hooks/useSearchParamsAlert';
import { ROUTES } from '@/routes';

export const MyPage = () => {
  const userInfo = useLoaderData() as UserInfo;
  useSearchParamsAlert();

  const CHEVRON_RIGHT_MUTED = (
    <ChevronRight className="text-muted-foreground" />
  );

  return (
    <div className="flex h-full flex-col">
      <PageHeader>
        <div className="flex items-center gap-2 p-4">
          <img src="/tab/tab_mypage_off.svg" alt="mypage" className="size-6" />
          <div className="font-bold">더보기</div>
        </div>
      </PageHeader>

      <main className="flex-1 bg-muted">
        <MyPageSection>
          <MyPageItem
            asChild
            to={ROUTES.MYPAGE_ACCOUNT}
            leftContent={
              <div className="flex items-center gap-2">
                <Avatar className="size-6">
                  <div className="flex size-6 items-center justify-center rounded-full bg-muted">
                    <User />
                  </div>
                </Avatar>
                <div className="flex items-center gap-1">
                  <span>내 계정</span>
                  <span className="rounded bg-emerald-100 px-1.5 py-0.5 text-xs text-emerald-700">
                    NEW!
                  </span>
                </div>
              </div>
            }
            rightContent={
              <div className="flex items-center gap-2 text-muted-foreground">
                <span>
                  {`${userInfo.nickname.nickname}#${userInfo.nickname.tag}`}
                </span>
                <ChevronRight />
              </div>
            }
          />
        </MyPageSection>

        <MyPageSection>
          <MyPageItem
            leftContent={<span>화면 모드</span>}
            rightContent={
              <div className="flex items-center gap-2 text-muted-foreground">
                <span>자동</span>
                {CHEVRON_RIGHT_MUTED}
              </div>
            }
          />
          <MyPageItem
            leftContent={<span>시간표 설정</span>}
            rightContent={CHEVRON_RIGHT_MUTED}
          />
          <MyPageItem
            leftContent={<span>시간표 테마</span>}
            rightContent={CHEVRON_RIGHT_MUTED}
          />
        </MyPageSection>

        <MyPageSection>
          <MyPageItem
            leftContent={<span>빈자리 알림</span>}
            rightContent={CHEVRON_RIGHT_MUTED}
          />
        </MyPageSection>

        <MyPageSection>
          <div className="flex h-12 w-full items-center justify-between px-4 py-2 text-sm">
            <span>버전 정보</span>
            <span className="text-muted-foreground">3.8.2</span>
          </div>

          <MyPageItem
            leftContent={<span>개발자 정보</span>}
            rightContent={CHEVRON_RIGHT_MUTED}
          />
        </MyPageSection>

        <MyPageSection>
          <MyPageItem
            leftContent={<span>개발자 괴롭히기</span>}
            rightContent={CHEVRON_RIGHT_MUTED}
          />
        </MyPageSection>

        <MyPageSection>
          <MyPageItem
            leftContent={<span>오픈소스 라이선스</span>}
            rightContent={CHEVRON_RIGHT_MUTED}
          />
          <MyPageItem
            leftContent={<span>서비스 약관</span>}
            rightContent={CHEVRON_RIGHT_MUTED}
          />
          <MyPageItem
            leftContent={<span>개인정보처리방침</span>}
            rightContent={CHEVRON_RIGHT_MUTED}
          />
        </MyPageSection>

        <MyPageSection>
          <DestructiveDialog
            trigger={
              <MyPageItem
                leftContent={<span>로그아웃</span>}
                rightContent={<ChevronRight />}
                className="text-destructive hover:text-destructive"
              />
            }
            title="로그아웃"
            description="로그아웃 하시겠습니까?"
            action="로그아웃"
          />
        </MyPageSection>
      </main>

      <NavigationBar />
    </div>
  );
};

import { ChevronRight, Ellipsis, User } from 'lucide-react';
import { NavLink, useLoaderData } from 'react-router-dom';

import { type UserInfo } from '@/api/types';
import { MyPageButton } from '@/components/mypage-button';
import { NavigationBar } from '@/components/navigation-bar';
import { PageHeader } from '@/components/page-header';
import { SignOutDialog } from '@/components/sign-out-dialog';
import { Avatar } from '@/components/ui/avatar';
import { ServiceContext } from '@/context/ServiceContext';
import { useGuardContext } from '@/hooks/useGuardContext';
import { useRoutes } from '@/hooks/useRoutes';

export const MyPage = () => {
  const { authService } = useGuardContext(ServiceContext);
  const { toRoot } = useRoutes();
  const userInfo = useLoaderData() as UserInfo;

  return (
    <div className="flex h-full flex-col bg-zinc-50">
      <PageHeader>
        <div className="flex items-center gap-2 p-4">
          <Ellipsis className="h-5 w-5" />
          <div className="font-bold">더보기</div>
        </div>
      </PageHeader>

      <main className="flex-1">
        <div className="my-2 bg-white">
          <MyPageButton asChild>
            <NavLink to="account" relative="path">
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-muted">
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
              <div className="flex items-center gap-2 text-muted-foreground">
                <span>
                  {`${userInfo.nickname.nickname}#${userInfo.nickname.tag}`}
                </span>
                <ChevronRight />
              </div>
            </NavLink>
          </MyPageButton>
        </div>

        <div className="my-2 bg-white">
          <MyPageButton>
            <span>화면 모드</span>
            <div className="flex items-center gap-2 text-muted-foreground">
              <span>자동</span>
              <ChevronRight />
            </div>
          </MyPageButton>

          <MyPageButton>
            <span>시간표 설정</span>
            <ChevronRight className="text-muted-foreground" />
          </MyPageButton>

          <MyPageButton>
            <span>시간표 테마</span>
            <ChevronRight className="text-muted-foreground" />
          </MyPageButton>
        </div>

        <div className="my-2 bg-white">
          <MyPageButton>
            <span>빈자리 알림</span>
            <ChevronRight className="text-muted-foreground" />
          </MyPageButton>
        </div>

        <div className="my-2 bg-white">
          <div className="flex h-12 w-full items-center justify-between px-4 py-2">
            <span className="text-sm">버전 정보</span>
            <span className="text-sm text-muted-foreground">3.8.2</span>
          </div>

          <MyPageButton>
            <span>개발자 정보</span>
            <ChevronRight className="text-muted-foreground" />
          </MyPageButton>
        </div>

        <div className="my-2 bg-white">
          <MyPageButton>
            <span>개발자 괴롭히기</span>
            <ChevronRight className="text-muted-foreground" />
          </MyPageButton>
        </div>

        <div className="my-2 bg-white">
          <MyPageButton>
            <span>오픈소스 라이선스</span>
            <ChevronRight className="text-muted-foreground" />
          </MyPageButton>

          <MyPageButton>
            <span>서비스 약관</span>
            <ChevronRight className="text-muted-foreground" />
          </MyPageButton>

          <MyPageButton>
            <span>개인정보처리방침</span>
            <ChevronRight className="text-muted-foreground" />
          </MyPageButton>
        </div>

        <div className="my-2 bg-white">
          <SignOutDialog
            signOutButton={
              <MyPageButton className="text-red-500 hover:text-red-500">
                <span>로그아웃</span>
                <ChevronRight />
              </MyPageButton>
            }
            onClick={() => {
              authService.signOut();
              toRoot();
            }}
          />
        </div>
      </main>

      <NavigationBar />
    </div>
  );
};

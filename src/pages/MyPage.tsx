import { ChevronRight, Ellipsis, User } from 'lucide-react';
import { useLoaderData } from 'react-router-dom';

import { type UserInfo } from '@/api/types';
import { Avatar } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { ServiceContext } from '@/context/ServiceContext';
import { useGuardContext } from '@/hooks/useGuardContext';
import { useRoutes } from '@/hooks/useRoutes';

export const MyPage = () => {
  const { authService } = useGuardContext(ServiceContext);
  const { toRoot } = useRoutes();
  const userInfo = useLoaderData() as UserInfo;

  // TODO: SNUTT 클론코딩 (2-3) - 마이페이지 구현하기
  // 실제 snutt 앱과 유사한 디자인으로 마이페이지 만들기

  // TODO: SNUTT 클론코딩 (2-6) - 닉네임 변경 기능 구현하기
  // 내 계정 페이지는 /mypage/account 경로로
  // 닉네임 변경 페이지는 /mypage/account/change-nickname 경로로 구현해 주세요.
  // 닉네임 변경 API는 PATCH /v1/users/me 사용하시면 됩니다.
  // 닉네임 변경이 완료되면 내 계정 페이지로 이동해야 하며, 이동 시 변경된 닉네임이 내 계정 페이지에 반영되어 있어야 합니다.
  // SNUTT 앱이 그렇듯, 상단 바에 뒤로가기 버튼이 있어야 하며 뒤로가기 시 이전 페이지로 이동할 수 있어야 합니다.

  return (
    <div className="flex h-full flex-col bg-zinc-50">
      <header className="w-full bg-white">
        <div className="flex items-center gap-2 p-4">
          <Ellipsis className="h-5 w-5" />
          <div className="font-bold">더보기</div>
        </div>
      </header>

      <main className="flex-1">
        <div className="my-2 bg-white">
          <Button
            variant="ghost"
            className="h-12 w-full justify-between rounded-none font-normal"
          >
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
          </Button>
        </div>

        <div className="my-2 bg-white">
          <Button
            variant="ghost"
            className="h-12 w-full justify-between rounded-none font-normal"
          >
            <span>화면 모드</span>
            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="">자동</span>
              <ChevronRight />
            </div>
          </Button>

          <Button
            variant="ghost"
            className="h-12 w-full justify-between rounded-none font-normal"
          >
            <span>시간표 설정</span>
            <div className="text-muted-foreground">
              <ChevronRight />
            </div>
          </Button>

          <Button
            variant="ghost"
            className="h-12 w-full justify-between rounded-none font-normal"
          >
            <span>시간표 테마</span>
            <div className="text-muted-foreground">
              <ChevronRight />
            </div>
          </Button>
        </div>

        <div className="my-2 bg-white">
          <Button
            variant="ghost"
            className="h-12 w-full justify-between rounded-none font-normal"
          >
            <span>빈자리 알림</span>
            <div className="text-muted-foreground">
              <ChevronRight />
            </div>
          </Button>
        </div>

        <div className="my-2 bg-white">
          <div className="flex h-12 w-full items-center justify-between px-4 py-2">
            <span className="text-sm">버전 정보</span>
            <span className="text-sm text-muted-foreground">3.8.2</span>
          </div>

          <Button
            variant="ghost"
            className="h-12 w-full justify-between rounded-none font-normal"
          >
            <span>개발자 정보</span>
            <div className="text-muted-foreground">
              <ChevronRight />
            </div>
          </Button>
        </div>

        <div className="my-2 bg-white">
          <Button
            variant="ghost"
            className="h-12 w-full justify-between rounded-none font-normal"
          >
            <span>개발자 괴롭히기</span>
            <div className="text-muted-foreground">
              <ChevronRight />
            </div>
          </Button>
        </div>

        <div className="my-2 bg-white">
          <Button
            variant="ghost"
            className="h-12 w-full justify-between rounded-none font-normal"
          >
            <span>오픈소스 라이선스</span>
            <div className="text-muted-foreground">
              <ChevronRight />
            </div>
          </Button>

          <Button
            variant="ghost"
            className="h-12 w-full justify-between rounded-none font-normal"
          >
            <span>서비스 약관</span>
            <div className="text-muted-foreground">
              <ChevronRight />
            </div>
          </Button>

          <Button
            variant="ghost"
            className="h-12 w-full justify-between rounded-none font-normal"
          >
            <span>개인정보처리방침</span>
            <div className="text-muted-foreground">
              <ChevronRight />
            </div>
          </Button>
        </div>

        <div className="my-2 bg-white">
          <Button
            variant="ghost"
            className="h-12 w-full justify-between rounded-none font-normal text-red-500"
            onClick={() => {
              authService.signOut();
              toRoot();
            }}
          >
            <span>로그아웃</span>
            <ChevronRight />
          </Button>
        </div>
      </main>
    </div>
  );
};

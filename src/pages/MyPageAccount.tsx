import { ChevronLeft, ChevronRight, Copy } from 'lucide-react';
import { useLoaderData } from 'react-router-dom';

import type { UserInfo } from '@/api/types';
import { MyPageButton } from '@/components/mypage-button';
import { Button } from '@/components/ui/button';
import { useRoutes } from '@/hooks/useRoutes';

export const MyPageAccount = () => {
  const { toMyPage, toMyPageAccountChangeNickname } = useRoutes();
  const userInfo = useLoaderData() as UserInfo;

  return (
    <div className="flex h-full flex-col bg-zinc-50">
      <header className="w-full bg-white">
        <div className="flex items-center gap-2 p-4">
          <Button variant="ghost" size="icon" onClick={toMyPage}>
            <ChevronLeft />
          </Button>
          <h1 className="font-bold">내 계정</h1>
        </div>
      </header>

      <main className="flex-1">
        <div className="my-2 bg-white">
          <MyPageButton onClick={toMyPageAccountChangeNickname}>
            <span>닉네임 변경</span>
            <div className="flex items-center gap-2 text-muted-foreground">
              <span>
                {`${userInfo.nickname.nickname}#${userInfo.nickname.tag}`}
              </span>
              <div className="text-muted-foreground">
                <ChevronRight />
              </div>
            </div>
          </MyPageButton>

          {/** TODO: 닉네임 복사 toast 띄우기 */}
          <MyPageButton>
            <span>닉네임 복사하기</span>
            <span className="text-sm text-muted-foreground">
              <Copy />
            </span>
          </MyPageButton>
        </div>

        <div className="my-2 bg-white">
          <div className="flex h-12 w-full items-center justify-between px-4 py-2">
            <span className="text-sm">아이디</span>
            <span className="text-sm text-muted-foreground">
              {userInfo.localId}
            </span>
          </div>

          <MyPageButton>
            <span>비밀번호 변경</span>
            <div className="text-muted-foreground">
              <ChevronRight />
            </div>
          </MyPageButton>
        </div>

        <div className="my-2 bg-white">
          <MyPageButton>
            <span>SNS 계정 연동 및 해제</span>
            <div className="text-muted-foreground">
              <ChevronRight />
            </div>
          </MyPageButton>
        </div>

        <div className="my-2 bg-white">
          <div className="flex h-12 w-full items-center justify-between px-4 py-2">
            <span className="text-sm">이메일</span>
            <span className="text-sm text-muted-foreground">
              {userInfo.email}
            </span>
          </div>
        </div>

        <div className="my-2 bg-white">
          <MyPageButton className="text-red-500 hover:text-red-500">
            <span>회원탈퇴</span>
            <ChevronRight />
          </MyPageButton>
        </div>
      </main>
    </div>
  );
};

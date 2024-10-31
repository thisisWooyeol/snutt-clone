import { ChevronLeft, CircleX } from 'lucide-react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import type { UserInfo } from '@/api/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useRoutes } from '@/hooks/useRoutes';

export const MyPageChangeNickname = () => {
  const { toMyPageAccount } = useRoutes();
  const userInfo = useLoaderData() as UserInfo;
  const [nickname, setNickname] = useState(() => userInfo.nickname.nickname);

  return (
    <div className="flex h-full flex-col bg-zinc-50">
      <header className="flex w-full justify-between bg-white">
        <div className="flex items-center gap-1 p-4">
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6"
            onClick={toMyPageAccount}
          >
            <ChevronLeft />
          </Button>
          <h1 className="font-bold">닉네임 변경</h1>
        </div>
        <Button
          variant="ghost"
          className="h-full rounded-none font-normal"
          disabled={userInfo.nickname.nickname === nickname}
        >
          저장
        </Button>
      </header>

      <main className="flex-1">
        <div className="mt-4">
          <div className="px-6 py-4 text-xs">
            닉네임 (공백 포함 한/영/숫자 10자 이내)
          </div>
        </div>

        <div className="flex h-12 items-center justify-between gap-2 bg-white px-4">
          <Input
            className="text-md h-full rounded-none border-none shadow-none focus-visible:ring-0"
            value={nickname}
            onChange={(e) => {
              setNickname(e.target.value);
            }}
          />
          <Button
            asChild
            variant="ghost"
            size="icon"
            className="h-7 w-7 text-muted-foreground hover:bg-transparent hover:text-red-500"
          >
            <CircleX />
          </Button>
          <div className="pr-3 text-muted-foreground">#NNNN</div>
        </div>

        <div className="flex flex-col gap-4 px-6 py-4 text-xs text-muted-foreground">
          <div>
            <p>최초 닉네임은 가입 시 임의 부여된 닉네임으로,</p>
            <p>앞의 이름을 변경할 시 4자리 숫자 태그는 자동 변경됩니다.</p>
          </div>
          <div>
            <p>변경된 닉네임은 나의 모든 친구에게 반영됩니다.</p>
          </div>
        </div>

        <div className="space-y-2 px-6 py-4 text-xs text-muted-foreground">
          <p className="font-semibold">닉네임 안내</p>
          <ul className="list-inside list-disc space-y-1">
            <li>불완전한 한글 (예: ㄱ, ㅏ)는 포함될 수 없습니다.</li>
            <li>영문 대/소문자는 구분됩니다.</li>
            <li>
              상대에게 불쾌감을 주는 등 부적절한 닉네임은 관리자에 의해 안내
              없이 수정될 수 있습니다.
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};

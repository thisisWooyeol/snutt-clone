import { CircleX } from 'lucide-react';
import { useState } from 'react';
import { Form, NavLink, useLoaderData, useNavigation } from 'react-router-dom';
import { HashLoader } from 'react-spinners';

import type { UserInfo } from '@/api/types';
import { PageHeader } from '@/components/page-header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useSearchParamsAlert } from '@/hooks/useSearchParamsAlert';
import { ROUTES } from '@/routes';

export const MyPageChangeNickname = () => {
  const navigation = useNavigation();
  const userInfo = useLoaderData() as UserInfo;
  useSearchParamsAlert();

  const [nickname, setNickname] = useState(() => userInfo.nickname.nickname);

  return (
    <div className="flex h-full flex-col bg-zinc-50">
      <Form method="post">
        <PageHeader>
          <div className="flex gap-1 p-4">
            <Button asChild variant="ghost" size="icon" className="size-6">
              <NavLink to={ROUTES.MYPAGE_ACCOUNT}>
                <img src="/icons/chevron-left.svg" alt="back" />
              </NavLink>
            </Button>
            <h1 className="font-bold">닉네임 변경</h1>
          </div>
          <Button
            type="submit"
            variant="ghost"
            className="rounded-none font-normal"
            disabled={userInfo.nickname.nickname === nickname}
          >
            저장
          </Button>
        </PageHeader>

        <main className="flex-1">
          <div className="mt-4">
            <div className="px-6 py-4 text-xs">
              닉네임 (공백 포함 한/영/숫자 10자 이내)
            </div>
          </div>

          <div className="flex h-12 items-center justify-between gap-2 bg-white px-4">
            <Input
              className="text-md h-full rounded-none border-none shadow-none focus-visible:ring-0"
              name="nickname"
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
      </Form>

      {navigation.state === 'submitting' && (
        <div className="absolute inset-0 flex items-center justify-center">
          <HashLoader color={'#F58D3D'} />
        </div>
      )}
    </div>
  );
};

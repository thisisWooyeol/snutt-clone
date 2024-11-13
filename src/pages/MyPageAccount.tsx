import { ChevronRight, Copy } from 'lucide-react';
import { NavLink, useLoaderData } from 'react-router-dom';

import type { UserInfo } from '@/api/types';
import { MyPageItem, MyPageSection } from '@/components/mypage-detail';
import { PageHeader } from '@/components/page-header';
import { Button } from '@/components/ui/button';
import { ROUTES } from '@/routes';

export const MyPageAccount = () => {
  const userInfo = useLoaderData() as UserInfo;

  const CHEVRON_RIGHT_MUTED = (
    <ChevronRight className="text-muted-foreground" />
  );

  return (
    <div className="flex h-full flex-col bg-muted">
      <PageHeader>
        <div className="flex items-center gap-1 p-4">
          <Button asChild variant="ghost" size="icon" className="size-6">
            <NavLink to={ROUTES.MYPAGE}>
              <img src="/icons/chevron-left.svg" alt="back" />
            </NavLink>
          </Button>
          <h1 className="font-bold">내 계정</h1>
        </div>
      </PageHeader>

      <main className="flex-1">
        <MyPageSection>
          <MyPageItem
            asChild
            to={ROUTES.MYPAGE_ACCOUNT_CHANGENICKNAME}
            leftContent={<span>닉네임 변경</span>}
            rightContent={
              <div className="flex items-center gap-2 text-muted-foreground">
                <span>
                  {`${userInfo.nickname.nickname}#${userInfo.nickname.tag}`}
                </span>
                {CHEVRON_RIGHT_MUTED}
              </div>
            }
          />
          {/** TODO: 닉네임 복사 toast 띄우기 */}
          <MyPageItem
            leftContent={<span>닉네임 복사하기</span>}
            rightContent={
              <div className="flex items-center gap-2 text-muted-foreground">
                <Copy />
              </div>
            }
          />
        </MyPageSection>

        <MyPageSection>
          <div className="flex h-12 w-full items-center justify-between px-4 py-2 text-sm">
            <span>아이디</span>
            <span className="text-muted-foreground">{userInfo.localId}</span>
          </div>

          <MyPageItem
            leftContent={<span>비밀번호 변경</span>}
            rightContent={CHEVRON_RIGHT_MUTED}
          />
        </MyPageSection>

        <MyPageSection>
          <MyPageItem
            leftContent={<span>SNS 계정 연동 및 해제</span>}
            rightContent={CHEVRON_RIGHT_MUTED}
          />
        </MyPageSection>

        <MyPageSection>
          <div className="flex h-12 w-full items-center justify-between px-4 py-2 text-sm">
            <span>이메일</span>
            <span className="text-muted-foreground">{userInfo.email}</span>
          </div>
        </MyPageSection>

        <MyPageSection>
          <MyPageItem
            leftContent={<span>회원탈퇴</span>}
            rightContent={<ChevronRight />}
            className="text-destructive hover:text-destructive"
          />
        </MyPageSection>
      </main>
    </div>
  );
};

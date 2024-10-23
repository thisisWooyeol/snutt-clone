import { useLoaderData } from 'react-router-dom';

import { type UserInfo } from '@/api/types';
import { ServiceContext } from '@/context/ServiceContext';
import { useGuardContext } from '@/hooks/useGuardContext';
import { useRoutes } from '@/hooks/useRoutes';

export const MyPage = () => {
  const { authService } = useGuardContext(ServiceContext);
  const { toRoot } = useRoutes();
  const userInfo = useLoaderData() as UserInfo;

  // TODO: SNUTT 클론코딩 (2-3) - 마이페이지 구현하기
  // 실제 snutt 앱과 유사한 디자인으로 마이페이지 만들기

  return (
    <div className="p-8 text-center">
      <h1>Welcome, {userInfo.nickname.nickname}!</h1>
      {/* Display other user info as needed */}
      <button
        onClick={() => {
          authService.signOut();
          toRoot();
        }}
        className="mt-4 rounded bg-red-500 p-2 text-white"
      >
        Logout
      </button>
    </div>
  );
};

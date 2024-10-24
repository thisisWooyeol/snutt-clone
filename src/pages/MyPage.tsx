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

  // TODO: SNUTT 클론코딩 (2-6) - 닉네임 변경 기능 구현하기
  // 내 계정 페이지는 /mypage/account 경로로
  // 닉네임 변경 페이지는 /mypage/account/change-nickname 경로로 구현해 주세요.
  // 닉네임 변경 API는 PATCH /v1/users/me 사용하시면 됩니다.
  // 닉네임 변경이 완료되면 내 계정 페이지로 이동해야 하며, 이동 시 변경된 닉네임이 내 계정 페이지에 반영되어 있어야 합니다.
  // SNUTT 앱이 그렇듯, 상단 바에 뒤로가기 버튼이 있어야 하며 뒤로가기 시 이전 페이지로 이동할 수 있어야 합니다.

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

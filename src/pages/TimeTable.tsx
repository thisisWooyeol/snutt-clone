import { useLoaderData } from 'react-router-dom';

import { type UserInfo } from '@/api/types';
import { NavigationBar } from '@/components/navigation-bar';
import { ServiceContext } from '@/context/ServiceContext';
import { useGuardContext } from '@/hooks/useGuardContext';
import { useRoutes } from '@/hooks/useRoutes';

export const TimeTable = () => {
  const { authService } = useGuardContext(ServiceContext);
  const { toRoot } = useRoutes();

  const userInfo = useLoaderData() as UserInfo;

  // TODO: SNUTT 클론코딩 (2-1) - 시간표 화면 구현하기
  // 피그마 오른쪽에 있는 시간표 사진 (스누티티 모바일 어플리케이션과 동일합니다) 대로 디자인해 주세요.
  // 이 때, 각 강의 아이템의 색깔은 API 스펙이 좀 복잡해서 구현 패스하겠습니다. 까만색 배경에 흰색 텍스트로만 구현해주세요.
  // 시간표 데이터를 불러올 땐 GET /v1/tables/recent API를 사용하시면 됩니다.
  // 시간표 영역의 시간 표시 부분은 오전 9시부터 오후 10시까지로 고정해 주세요.
  // 시간표 영역과 바텀 네비바의 마이페이지 버튼 빼고는 모두 저번과 마찬가지로 클릭해도 아무 동작도 하지 않는 상태로 잡아 주세요.

  // TODO: SNUTT 클론코딩 (2-6) - 닉네임 변경 기능 구현하기
  // 내 계정 페이지는 /mypage/account 경로로
  // 닉네임 변경 페이지는 /mypage/account/change-nickname 경로로 구현해 주세요.
  // 닉네임 변경 API는 PATCH /v1/users/me 사용하시면 됩니다.
  // 닉네임 변경이 완료되면 내 계정 페이지로 이동해야 하며, 이동 시 변경된 닉네임이 내 계정 페이지에 반영되어 있어야 합니다.
  // SNUTT 앱이 그렇듯, 상단 바에 뒤로가기 버튼이 있어야 하며 뒤로가기 시 이전 페이지로 이동할 수 있어야 합니다.

  return (
    <>
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
      <div className="flex justify-center border-y border-gray-200">
        <NavigationBar />
      </div>
    </>
  );
};

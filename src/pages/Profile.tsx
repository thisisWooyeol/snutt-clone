import { useState } from 'react';

import { type UserInfo } from '@/api/authApi';
import { ServiceContext } from '@/context/ServiceContext';
import { useGuardContext } from '@/hooks/useGuardContext';
import { useRoutes } from '@/hooks/useRoutes';

export const Profile = () => {
  const [userInfo, setUserInfo] = useState<UserInfo>();
  const { authService } = useGuardContext(ServiceContext);
  const { toLogin } = useRoutes();

  const token = localStorage.getItem('token');
  if (token === null) {
    // FIXME: root 로 Redirect 시 상태 업데이트가 안되는 문제
    // 임시로 toLogin() 호출
    // TODO: toRoot() 함수로 대체할 수 있도록
    toLogin();
    return null;
  }

  authService
    .getUser(token)
    .then((data) => {
      setUserInfo(data);
    })
    .catch((error: unknown) => {
      console.error(error);
      // FIXME: root 로 Redirect 시 상태 업데이트가 안되는 문제
      // 임시로 toLogin() 호출
      // TODO: toRoot() 함수로 대체할 수 있도록
      toLogin();
    });

  return userInfo === undefined ? null : (
    <div className="p-8 text-center">
      <h1>Welcome, {userInfo.nickname.nickname}!</h1>
      {/* Display other user info as needed */}
      <button
        onClick={() => {
          authService.signOut();
        }}
        className="mt-4 rounded bg-red-500 p-2 text-white"
      >
        Logout
      </button>
    </div>
  );
};

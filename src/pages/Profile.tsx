import { useState } from 'react';

import { type UserInfo } from '@/api/authApi';
import { ServiceContext } from '@/context/ServiceContext';
import { useGuardContext } from '@/hooks/useGuardContext';
import { useRoutes } from '@/hooks/useRoutes';

export const Profile = () => {
  const [userInfo, setUserInfo] = useState<UserInfo>();
  const { authService } = useGuardContext(ServiceContext);
  const { toRoot, toLogin } = useRoutes();

  const token = localStorage.getItem('token');
  if (token === null) {
    toRoot();
    return null;
  }

  authService
    .getUser(token)
    .then((data) => {
      setUserInfo(data);
    })
    .catch((error: unknown) => {
      console.error(error);
      toLogin();
    });

  return userInfo === undefined ? null : (
    <div className="p-4">
      <h1>Welcome, {userInfo.nickname.nickname}!</h1>
      <p>Email: {userInfo.email}</p>
      {/* Display other user info as needed */}
      <button
        onClick={() => {
          authService.signOut();
        }}
        className="mt-4 rounded bg-red-500 py-2 text-white"
      >
        Logout
      </button>
    </div>
  );
};

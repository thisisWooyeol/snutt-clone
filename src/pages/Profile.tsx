import { useLoaderData } from 'react-router-dom';

import { type UserInfo } from '@/api/types';
import { ServiceContext } from '@/context/ServiceContext';
import { useGuardContext } from '@/hooks/useGuardContext';
import { useRoutes } from '@/hooks/useRoutes';

export const Profile = () => {
  const { authService } = useGuardContext(ServiceContext);
  const { toRoot } = useRoutes();

  const userInfo = useLoaderData() as UserInfo;

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

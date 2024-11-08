import './reset.css';
import './tailwind.css';

import {
  createBrowserRouter,
  type RouteObject,
  RouterProvider,
} from 'react-router-dom';

import { getAuthApi } from '@/api/authApi';
import { getTimeTableApi } from '@/api/timeTableApi';
import { getUserApi } from '@/api/userApi';
import { EnvContext } from '@/context/EnvContext';
import { ServiceContext } from '@/context/ServiceContext';
import { useGuardContext } from '@/hooks/useGuardContext';
import { RootLayout } from '@/layout';
import { MyPage } from '@/pages/MyPage';
import { MyPageAccount } from '@/pages/MyPageAccount';
import { MyPageChangeNickname } from '@/pages/MyPageChangeNickname';
import { RootPage } from '@/pages/RootPage';
import { SignIn } from '@/pages/SignIn';
import { getAuthService } from '@/services/authService';
import { getTimeTableService } from '@/services/timeTableService';
import { getUserService } from '@/services/userService';
import { getAuthLoader, getTimeTableRecentLoader } from '@/utils/loader';

export const App = () => {
  const { API_BASE_URL } = useGuardContext(EnvContext);

  const authApi = getAuthApi(API_BASE_URL);
  const userApi = getUserApi(API_BASE_URL);
  const timeTableApi = getTimeTableApi(API_BASE_URL);
  const authService = getAuthService(authApi);
  const userService = getUserService(userApi);
  const timeTableService = getTimeTableService(timeTableApi);

  const authLoader = getAuthLoader(userService);
  const timeTableRecentLoader = getTimeTableRecentLoader(timeTableService);

  const routes: RouteObject[] = [
    {
      path: '/',
      element: <RootPage />,
      loader: async ({ request, params }) => {
        const userInfo = await authLoader({ request, params });
        const recentTimeTable = await timeTableRecentLoader();
        return { ...userInfo, ...recentTimeTable };
      },
    },
    {
      path: '/mypage',
      element: <MyPage />,
      loader: authLoader,
    },
    {
      path: '/mypage/account',
      element: <MyPageAccount />,
      loader: authLoader,
    },
    {
      path: '/mypage/account/change-nickname',
      element: <MyPageChangeNickname />,
      loader: authLoader,
    },
    {
      path: '/sign-in',
      element: <SignIn />,
    },
    {
      path: '*',
      element: <div>Not found</div>,
    },
  ];

  return (
    <>
      <ServiceContext.Provider
        value={{ authService, userService, timeTableService }}
      >
        <RootLayout>
          <RouterProvider router={createBrowserRouter(routes)} />
        </RootLayout>
      </ServiceContext.Provider>
    </>
  );
};

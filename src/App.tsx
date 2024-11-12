import './reset.css';
import './tailwind.css';

import {
  createBrowserRouter,
  type RouteObject,
  RouterProvider,
} from 'react-router-dom';

import { getAuthApi } from '@/api/authApi';
import { getTableApi } from '@/api/tableApi';
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
import { ROUTES } from '@/routes';
import { getAuthService } from '@/services/authService';
import { getTableService } from '@/services/tableService';
import { getUserService } from '@/services/userService';
import {
  getChangeNicknameAction,
  getSignInAction,
  getSignOutAction,
} from '@/utils/actions';
import { getAuthLoader, getTimeTableRecentLoader } from '@/utils/loaders';

export const App = () => {
  const { API_BASE_URL } = useGuardContext(EnvContext);

  const authApi = getAuthApi(API_BASE_URL);
  const userApi = getUserApi(API_BASE_URL);
  const tableApi = getTableApi(API_BASE_URL);
  const authService = getAuthService(authApi);
  const userService = getUserService(userApi);
  const tableService = getTableService(tableApi);

  const authLoader = getAuthLoader(userService);
  const timeTableRecentLoader = getTimeTableRecentLoader(tableService);

  const routes: RouteObject[] = [
    {
      path: ROUTES.root,
      element: <RootPage />,
      loader: async ({ request }) => {
        const userInfo = await authLoader({ request });
        const recentTimeTable = await timeTableRecentLoader();
        return { userInfo, recentTimeTable };
      },
    },
    {
      path: ROUTES.mypage,
      element: <MyPage />,
      loader: authLoader,
      action: getSignOutAction(authService),
    },
    {
      path: ROUTES.mypageAccount,
      element: <MyPageAccount />,
      loader: authLoader,
    },
    {
      path: ROUTES.mypageAccountChangeNickname,
      element: <MyPageChangeNickname />,
      loader: authLoader,
      action: getChangeNicknameAction(userService),
    },
    {
      path: ROUTES.signIn,
      element: <SignIn />,
      action: getSignInAction(authService),
    },
    {
      path: '*',
      element: <div>Not found</div>,
    },
  ];

  return (
    <>
      <ServiceContext.Provider
        value={{ authService, userService, tableService }}
      >
        <RootLayout>
          <RouterProvider router={createBrowserRouter(routes)} />
        </RootLayout>
      </ServiceContext.Provider>
    </>
  );
};

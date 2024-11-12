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
import { TimetableLecture } from '@/pages/TimetableLecture';
import { TimetableLectureList } from '@/pages/TimetableLectureList';
import { TimetableNew } from '@/pages/TimetableNew';
import { ROUTES } from '@/routes';
import { getAuthService } from '@/services/authService';
import { getTableService } from '@/services/tableService';
import { getUserService } from '@/services/userService';
import {
  getChangeNicknameAction,
  getSignInAction,
  getSignOutAction,
} from '@/utils/actions';
import { getAuthLoader, getTimetableRecentLoader } from '@/utils/loaders';

export const App = () => {
  const { API_BASE_URL } = useGuardContext(EnvContext);

  const authApi = getAuthApi(API_BASE_URL);
  const userApi = getUserApi(API_BASE_URL);
  const tableApi = getTableApi(API_BASE_URL);
  const authService = getAuthService(authApi);
  const userService = getUserService(userApi);
  const tableService = getTableService(tableApi);

  const authLoader = getAuthLoader(userService);
  const timetableRecentLoader = getTimetableRecentLoader(tableService);

  const routes: RouteObject[] = [
    {
      path: ROUTES.ROOT,
      element: <RootPage />,
      loader: async ({ request }) => {
        const userInfo = await authLoader({ request });
        const recentTimetable = await timetableRecentLoader();
        return { userInfo, recentTimetable };
      },
    },
    {
      path: ROUTES.TIMETABLE_LECTURE,
      element: <TimetableLecture />,
      loader: authLoader,
    },
    {
      path: ROUTES.TIMETABLE_LECTURELIST,
      element: <TimetableLectureList />,
      loader: authLoader,
    },
    {
      path: ROUTES.TIMETABLE_NEW,
      element: <TimetableNew />,
      loader: authLoader,
    },
    {
      path: ROUTES.MYPAGE,
      element: <MyPage />,
      loader: authLoader,
      action: getSignOutAction(authService),
    },
    {
      path: ROUTES.MYPAGE_ACCOUNT,
      element: <MyPageAccount />,
      loader: authLoader,
    },
    {
      path: ROUTES.MYPAGE_ACCOUNT_CHANGENICKNAME,
      element: <MyPageChangeNickname />,
      loader: authLoader,
      action: getChangeNicknameAction(userService),
    },
    {
      path: ROUTES.SIGNIN,
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

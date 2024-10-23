import './reset.css';
import './tailwind.css';

import {
  createBrowserRouter,
  type RouteObject,
  RouterProvider,
} from 'react-router-dom';

import { getAuthApi } from '@/api/authApi';
import { getUserApi } from '@/api/userApi';
import { EnvContext } from '@/context/EnvContext';
import { ServiceContext } from '@/context/ServiceContext';
import { useGuardContext } from '@/hooks/useGuardContext';
import { RootLayout } from '@/layout';
import { Login } from '@/pages/Login';
import { MyPage } from '@/pages/MyPage';
import { RootPage } from '@/pages/RootPage';
import { getAuthService } from '@/services/authService';
import { getUserService } from '@/services/userService';
import { getAuthLoader } from '@/utils/loader';

// FIXME: login, signin 네이밍 통일
export const App = () => {
  const { API_BASE_URL } = useGuardContext(EnvContext);

  const authApi = getAuthApi(API_BASE_URL);
  const userApi = getUserApi(API_BASE_URL);
  const authService = getAuthService(authApi);
  const userService = getUserService(userApi);

  const authLoader = getAuthLoader(userService);

  const routes: RouteObject[] = [
    {
      path: '/',
      element: <RootPage />,
      loader: authLoader,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/mypage',
      element: <MyPage />,
      loader: authLoader,
    },
    {
      path: '*',
      element: <div>Not found</div>,
    },
  ];

  return (
    <>
      <ServiceContext.Provider value={{ authService, userService }}>
        <RootLayout>
          <RouterProvider router={createBrowserRouter(routes)} />
        </RootLayout>
      </ServiceContext.Provider>
    </>
  );
};

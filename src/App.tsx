import './reset.css';
import './tailwind.css';

import {
  createBrowserRouter,
  type RouteObject,
  RouterProvider,
} from 'react-router-dom';

import { getAuthApi } from '@/api/authApi';
import { Layout } from '@/components/layout';
import { EnvContext } from '@/context/EnvContext';
import { ServiceContext } from '@/context/ServiceContext';
import { useGuardContext } from '@/hooks/useGuardContext';
import { Login } from '@/pages/Login';
import { RootPage } from '@/pages/RootPage';
import { getAuthService } from '@/services/authService';
import { getAuthLoader } from '@/utils/loader';

// FIXME: login, signin 네이밍 통일
export const App = () => {
  const { API_BASE_URL } = useGuardContext(EnvContext);

  const authApi = getAuthApi(API_BASE_URL);
  const authService = getAuthService(authApi);
  const authLoader = getAuthLoader(authService);

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
      path: '*',
      element: <div>Not found</div>,
    },
  ];

  return (
    <>
      <ServiceContext.Provider value={{ authService }}>
        <Layout>
          <RouterProvider router={createBrowserRouter(routes)} />
        </Layout>
      </ServiceContext.Provider>
    </>
  );
};

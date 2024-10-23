import './reset.css';
import './tailwind.css';

import {
  createBrowserRouter,
  type RouteObject,
  RouterProvider,
} from 'react-router-dom';

import { getAuthApi } from '@/api/authApi';
import { Layout } from '@/components/Layout';
import { EnvContext } from '@/context/EnvContext';
import { ServiceContext } from '@/context/ServiceContext';
import { useGuardContext } from '@/hooks/useGuardContext';
import { Login } from '@/pages/Login';
import { RootPage } from '@/pages/RootPage';
import { getAuthService } from '@/services/authService';

export const App = () => {
  const { API_BASE_URL } = useGuardContext(EnvContext);

  const authApi = getAuthApi(API_BASE_URL);
  const authService = getAuthService(authApi);

  const routes: RouteObject[] = [
    {
      path: '/',
      element: <RootPage />,
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

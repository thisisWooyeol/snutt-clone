import './reset.css';
import './tailwind.css';

import { Route, Routes } from 'react-router-dom';

import { getAuthApi } from '@/api/authApi';
import { Layout } from '@/components/layout';
import { EnvContext } from '@/context/EnvContext';
import { ServiceContext } from '@/context/ServiceContext';
import { useGuardContext } from '@/hooks/useGuardContext';
import { Login } from '@/pages/Login';
import { getAuthService } from '@/services/authService';

import { HomePage } from './pages/HomePage';

export const App = () => {
  const { API_BASE_URL } = useGuardContext(EnvContext);

  const authApi = getAuthApi(API_BASE_URL);
  const authService = getAuthService({ authApi });

  return (
    <>
      <ServiceContext.Provider value={{ authService }}>
        <Layout>
          <Routes>
            {/** FIXME: crazy routes happen */}
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            {/* Add more routes as needed */}
            <Route path="*" element={<div>Not found</div>} />
          </Routes>
        </Layout>
      </ServiceContext.Provider>
    </>
  );
};

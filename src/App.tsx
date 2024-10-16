import './reset.css';
import './tailwind.css';

import { Route, Routes } from 'react-router-dom';

import { getAuthApi } from './api/authApi';
import { EnvContext } from './context/EnvContext';
import { ServiceContext } from './context/ServiceContext';
import { useGuardContext } from './hooks/useGuardContext';
import { useRoutes } from './hooks/useRoutes';
import { Landing } from './pages/Landing';
import { Login } from './pages/Login';
import { Profile } from './pages/Profile';
import { getAuthService } from './services/authService';

export const App = () => {
  const { API_BASE_URL } = useGuardContext(EnvContext);
  const { toLogin } = useRoutes();

  const authApi = getAuthApi(API_BASE_URL);
  const authService = getAuthService({ authApi });

  return (
    <>
      <ServiceContext.Provider value={{ authService }}>
        <Routes>
          {/** FIXME: crazy routes happen */}
          <Route
            path="/"
            element={
              localStorage.getItem('token') === null ? (
                <Landing onLoginClick={toLogin} />
              ) : (
                <Profile />
              )
            }
          />
          <Route path="/login" element={<Login />} />
          {/* Add more routes as needed */}
          <Route path="*" element={<div>Not found</div>} />
        </Routes>
      </ServiceContext.Provider>
    </>
  );
};

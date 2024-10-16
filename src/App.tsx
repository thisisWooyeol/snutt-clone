import './reset.css';
import './tailwind.css';

import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import { Landing } from './pages/Landing';
import { Login } from './pages/Login';
import { Profile } from './pages/Profile';
import { signInWithPassword } from './services/authService';

export const App = () => {
  const [token, setToken] = useState<string | null>(() =>
    localStorage.getItem('token'),
  );

  const navigate = useNavigate();

  useEffect(() => {
    if (token !== null) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }
  }, [token]);

  const handleLogin = (id: string, pw: string) => {
    signInWithPassword({ id, pw })
      .then((data) => {
        setToken(data.token);
        navigate('/');
      })
      .catch((error: unknown) => {
        console.error(error);
      });
  };

  const handleLogout = () => {
    setToken(null);
    navigate('/');
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            token !== null ? (
              <Profile token={token} onLogout={handleLogout} />
            ) : (
              <Landing
                onLoginClick={() => {
                  navigate('/login');
                }}
              />
            )
          }
        />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        {/* Add more routes as needed */}
        <Route path="*" element={<div>Not found</div>} />
      </Routes>
    </>
  );
};

import './reset.css';
import './tailwind.css';

import { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import { Landing } from './pages/Landing';
import { Login, postLogin } from './pages/Login';
import { Profile } from './pages/Profile';

export const App = () => {
  const [token, setToken] = useState<string | null>();

  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/login');
  };

  const loginHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const id = formData.get('id');
    const pw = formData.get('pw');
    console.info(id, pw);

    postLogin({ id: id, pw: pw })
      .then((data) => {
        console.info(data);
        setToken(data.token);
        navigate('/');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            token !== null ? (
              <Profile token={token} />
            ) : (
              <Landing handler={goToLogin} />
            )
          }
        />
        <Route
          path="/login"
          element={
            <>
              <Login handler={loginHandler} />
              <div>token: {token}</div>
            </>
          }
        ></Route>
      </Routes>
    </>
  );
};

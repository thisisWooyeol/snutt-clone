import './reset.css';
import './tailwind.css';

import { useState } from 'react';

import { Landing } from './pages/Landing';
import { Login, postLogin } from './pages/Login';
import { Route, Routes, useNavigate } from 'react-router-dom';
import React from 'react';

export const App = () => {
  const [token, setToken] = useState<string | null>();

  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/login');
  }

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
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <Routes>
        <Route path='/' element={<Landing handler={goToLogin}/>}></Route>
        <Route path='/login' element={<><Login handler={loginHandler} />
          <div>token: {token}</div>
        </>
        }></Route>
      </Routes>
    </>
  );
};

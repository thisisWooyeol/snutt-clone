import './reset.css';
import './tailwind.css';

import { useState } from 'react';

import { Landing } from './pages/Landing';
import { Login, postLogin } from './pages/Login';

export const App = () => {
  const [token, setToken] = useState<string | null>();

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
      <Login handler={loginHandler} />
      <h1>Token: {token}</h1>
    </>
  );
};

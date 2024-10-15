import './reset.css';
import './tailwind.css';

import { type FormEvent, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import { Landing } from './pages/Landing';
import { Login, postLogin } from './pages/Login';
import { Profile } from './pages/Profile';

export const App = () => {
  const [token, setToken] = useState<string | null>(null);

  const navigate = useNavigate();

  const loginHandler = (event: FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const id = formData.get('id') as string;
    const pw = formData.get('pw') as string;
    console.info(id, pw);

    postLogin({ id: id, pw: pw })
      .then((data) => {
        console.info(data);
        setToken(data.token);
        navigate('/');
      })
      .catch((error: unknown) => {
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
              <Landing
                router={() => {
                  navigate('/login');
                }}
              />
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

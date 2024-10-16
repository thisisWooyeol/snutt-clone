import { type FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ServiceContext } from '../context/ServiceContext';
import { useGuardContext } from '../hooks/useGuardContext';

export const Login = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const { authService } = useGuardContext(ServiceContext);
  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    authService.signInWithPassword({ id, pw });
    navigate('/', { replace: true });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <label htmlFor="id">아이디</label>
        <input
          type="text"
          name="id"
          id="id"
          value={id}
          onChange={(e) => {
            setId(e.target.value);
          }}
          required
          className="w-full border p-2"
        />
      </div>
      <div>
        <label htmlFor="pw">비밀번호</label>
        <input
          type="password"
          name="pw"
          id="pw"
          value={pw}
          onChange={(e) => {
            setPw(e.target.value);
          }}
          required
          className="w-full border p-2"
        />
      </div>
      <button type="submit" className="rounded bg-blue-500 py-2 text-white">
        로그인
      </button>
    </form>
  );
};

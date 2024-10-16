import { type FormEvent, useState } from 'react';

import { ServiceContext } from '@/context/ServiceContext';
import { useGuardContext } from '@/hooks/useGuardContext';
import { useRoutes } from '@/hooks/useRoutes';

export const Login = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const { authService } = useGuardContext(ServiceContext);
  const { toRoot } = useRoutes();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    authService
      .signInWithPassword({ id, pw })
      .then((data) => {
        localStorage.setItem('token', data.token);
        toRoot();
      })
      .catch((error: unknown) => {
        console.error(error);
      });
  };

  return (
    <div className="px-8">
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
            placeholder="아이디를 입력해주세요"
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
            placeholder="비밀번호를 입력해주세요"
            required
            className="w-full border p-2"
          />
        </div>
        <button
          type="submit"
          className="rounded bg-SNUTT-orange py-3 text-white"
        >
          로그인하기
        </button>
      </form>
    </div>
  );
};

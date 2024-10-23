import type { FormEvent } from 'react';

import { Button } from '@/components/ui/button';
import { ServiceContext } from '@/context/ServiceContext';
import { useGuardContext } from '@/hooks/useGuardContext';
import { useRoutes } from '@/hooks/useRoutes';

export const Login = () => {
  const { authService } = useGuardContext(ServiceContext);
  const { toRoot, toLogin } = useRoutes();

  const signInAction = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const id = formData.get('id') as string;
    const pw = formData.get('pw') as string;

    authService
      .signInWithPassword({ id, pw })
      .then(({ data, error }) => {
        if (error != null) {
          console.error(error);
          alert('로그인에 실패했습니다.');
          return;
        }

        localStorage.setItem('token', data.token);
        toRoot();
      })
      .catch((error: unknown) => {
        console.error(error);
        alert('로그인에 실패했습니다.');
        toLogin();
      });
  };

  return (
    <div className="px-8">
      <form className="flex flex-col gap-4" onSubmit={signInAction}>
        <div>
          <label htmlFor="id">아이디</label>
          <input
            name="id"
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
            placeholder="비밀번호를 입력해주세요"
            required
            className="w-full border p-2"
          />
        </div>
        <Button
          type="submit"
          className="rounded bg-SNUTT-orange py-3 text-white hover:opacity-80"
        >
          로그인하기
        </Button>
      </form>
    </div>
  );
};

import { type FormEvent, useState } from 'react';
import { HashLoader } from 'react-spinners';

import { Button } from '@/components/ui/button';
import { ServiceContext } from '@/context/ServiceContext';
import { useGuardContext } from '@/hooks/useGuardContext';
import { useRoutes } from '@/hooks/useRoutes';

export const SignIn = () => {
  const { authService } = useGuardContext(ServiceContext);
  const { toRoot, toSignIn } = useRoutes();
  const [isLoading, setIsLoading] = useState(false);

  const signInAction = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    const formData = new FormData(event.currentTarget);
    const id = formData.get('id') as string;
    const pw = formData.get('pw') as string;

    authService
      .signInWithPassword({ id, pw })
      .then(({ data, error }) => {
        setIsLoading(false);
        if (error != null) {
          console.error(error);
          alert('아이디 또는 비밀번호가 일치하지 않습니다.');
          return;
        }

        localStorage.setItem('token', data.token);
        toRoot();
      })
      .catch((error: unknown) => {
        setIsLoading(false);
        console.error(error);
        alert('알 수 없는 오류가 발생했습니다.');
        toSignIn();
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
          className="rounded bg-SNUTT-orange py-3 text-white hover:bg-SNUTT-orange hover:opacity-80"
          disabled={isLoading}
        >
          {isLoading ? '로그인중...' : '로그인하기'}
        </Button>
      </form>
      {isLoading && (
        <div className="absolute inset-1 flex items-center justify-center">
          <HashLoader color={'#F58D3D'} />
        </div>
      )}
    </div>
  );
};

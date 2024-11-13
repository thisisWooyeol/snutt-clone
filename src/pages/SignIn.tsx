import { Form, useNavigation } from 'react-router-dom';
import { HashLoader } from 'react-spinners';

import { Button } from '@/components/ui/button';
import { useSearchParamsAlert } from '@/hooks/useSearchParamsAlert';

export const SignIn = () => {
  const navigation = useNavigation();
  useSearchParamsAlert();

  return (
    <div className="px-8">
      <Form className="flex flex-col gap-4" method="post">
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
          className="rounded bg-snutt py-3 text-snutt-foreground hover:bg-snutt hover:opacity-80"
        >
          {navigation.state === 'submitting'
            ? '로그인중...'
            : navigation.state === 'loading'
              ? '로그인 성공!'
              : '로그인하기'}
        </Button>
      </Form>

      {navigation.state === 'submitting' && (
        <div className="absolute inset-1 flex items-center justify-center">
          <HashLoader color={'#F58D3D'} />
        </div>
      )}
      {/** TODO: loading 중일때 체크 애니메이션 넣기 */}
    </div>
  );
};

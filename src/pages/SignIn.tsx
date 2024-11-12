import { useEffect } from 'react';
import { Form, useNavigation, useSearchParams } from 'react-router-dom';
import { HashLoader } from 'react-spinners';

import { Button } from '@/components/ui/button';

export const SignIn = () => {
  const navigation = useNavigation();
  const [searchParams, setSearchParams] = useSearchParams();

  // Action으로부터 받은 error message를 alert로 띄워줍니다.
  useEffect(() => {
    if (searchParams.has('error')) {
      alert(searchParams.get('error'));
      setSearchParams(() => ''); // Clear search params
    }
  }, [searchParams, setSearchParams]);

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
          className="rounded bg-SNUTT-orange py-3 text-white hover:bg-SNUTT-orange hover:opacity-80"
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

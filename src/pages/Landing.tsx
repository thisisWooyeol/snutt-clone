import { NavLink } from 'react-router-dom';

import { ROUTES } from '@/routes';

export const Landing = () => {
  return (
    <div className="flex flex-col items-center gap-[14.5rem] pb-[5.62519rem]">
      <div /> {/* For layout */}
      <div className="flex flex-col items-center justify-center gap-[8.5rem] bg-background pb-0">
        <div className="flex flex-col items-center gap-4">
          <img src="/snutt-logo.svg" alt="logo" />
          <p className="text-center text-[1.33456rem] font-[860] not-italic leading-normal">
            TimeTable
          </p>
          {/** TODO add font */}
        </div>
        <div className="flex flex-col items-center gap-10">
          <div className="flex w-full flex-col gap-2.5 px-8 py-0">
            <div className="flex w-full flex-col items-center gap-3.5">
              <button className="bg-snutt text-snutt-foreground flex w-full items-center justify-center gap-[0.3125rem] self-stretch rounded-md p-3 hover:opacity-80">
                <NavLink to={ROUTES.SIGNIN} className={'w-full'}>
                  로그인
                </NavLink>
              </button>
              <button
                className="flex flex-col justify-center gap-2.5"
                onClick={() => {}} // TODO: add signup
                style={{ cursor: 'not-allowed' }}
              >
                <div className="flex items-center gap-1">회원가입</div>
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-2.5 px-3 py-0">
            <div className="flex w-full flex-col items-center gap-6">
              <div className="flex items-center justify-center gap-2.5 self-stretch">
                <hr className="bg-assistive h-[0.04688rem] w-[6rem] flex-1" />
                <p className="non-italic text-assistive flex-initial items-center text-sm font-medium">
                  SNS 계정으로 계속하기
                </p>
                {/* TODO add font style */}
                <hr className="bg-assistive h-[0.04688rem] w-[6rem] flex-1" />
              </div>
              <div className="flex items-center gap-3">
                <button style={{ cursor: 'not-allowed' }}>
                  <img src="/landing/kakaotalk.png" alt="kakaotalk" />
                </button>
                <button style={{ cursor: 'not-allowed' }}>
                  <img src="/landing/google.png" alt="google" />
                </button>
                <button style={{ cursor: 'not-allowed' }}>
                  <img src="/landing/facebook.png" alt="facebook" />
                </button>
                <button style={{ cursor: 'not-allowed' }}>
                  <img src="/landing/apple.png" alt="apple" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

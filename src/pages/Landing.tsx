export const Landing = () => {
  return (
    <div className="flex w-[23.4375rem] flex-col items-start gap-[14.5rem] bg-white pb-[5.62519rem]">
      <div /> {/* For layout */}
      <div className="flex w-[23.4375rem] flex-col items-center justify-center gap-[8.5rem] bg-white pb-0">
        <div className="flex flex-col items-center gap-4">
          <img src="/logo.svg" alt="logo" />
          <p className="text-Text-Normal text-center text-[1.33456rem] font-[860] not-italic leading-normal">
            TimeTable
          </p>
          {/** TODO add font */}
        </div>
        <div className="flex w-[23.4375rem] flex-col items-center gap-10">
          <div className="flex flex-col items-start gap-2.5 px-8 py-0">
            <div className="flex w-[19.4375rem] flex-col items-center gap-3.5">
              <button className="bg-SNUTT-orange text-Text-onBG flex items-center justify-center gap-[0.3125rem] self-stretch rounded-md p-3">
                로그인
              </button>
              <button className="flex flex-col items-start justify-center gap-2.5">
                <div className="text-Text-Plain flex items-center gap-1">
                  회원가입
                </div>
              </button>
            </div>
          </div>
          <div className="flex flex-col items-start gap-2.5 px-3 py-0">
            <div className="flex w-[21.9375rem] flex-col items-center gap-6">
              <div className="flex items-center justify-center gap-2.5 self-stretch">
                <hr className="bg-Text-Assistive h-[0.04688rem] w-[6.25rem]" />
                <p className="text-Text-Assistive text-sm">
                  SNS 계정으로 계속하기
                </p>{' '}
                {/* TODO add font style */}
                <hr className="bg-Text-Assistive h-[0.04688rem] w-[6.25rem]" />
              </div>
              <div className="flex items-center gap-3">
                {/* TODO fix style */}
                <img
                  src="/kakaotalk.png"
                  alt="kakaotalk"
                  className="h-11 w-11 rounded-[1.35rem]"
                />{' '}
                {/* TODO fix bg shift */}
                <div className="flex w-11 items-center justify-center gap-1 p-[0.6rem]">
                  <img
                    src="/google.png"
                    alt="google"
                    className="h-[1.55rem] w-[1.55rem] shrink-0 rounded-[1.525rem]"
                  />
                </div>
                <img src="/facebook.png" alt="facebook" className="h-11 w-11" />
                <img
                  src="/apple.png"
                  alt="apple"
                  className="h-11 w-11 rounded-[1.775rem]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

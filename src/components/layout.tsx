import { type ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex w-[23.4375rem] flex-col items-center gap-[14.5rem] bg-white pb-[5.62519rem]">
        {children}
      </div>
    </div>
  );
};

import { type ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex h-svh w-screen items-center justify-center">
      <div className="flex h-[49rem] w-[23.4375rem] flex-col justify-center bg-white">
        {children}
      </div>
    </div>
  );
};

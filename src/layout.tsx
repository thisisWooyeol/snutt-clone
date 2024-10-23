import { type ReactNode } from 'react';

export const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex h-svh w-screen items-center justify-center">
      <div className="flex h-[49rem] w-[23.4375rem] flex-col justify-center bg-white">
        {children}
      </div>
    </div>
  );
};

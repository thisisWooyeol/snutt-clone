import { type ReactNode } from 'react';

export const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex h-dvh w-screen items-center justify-center">
      <div className="flex h-full w-full max-w-4xl flex-col justify-center bg-white">
        {children}
      </div>
    </div>
  );
};

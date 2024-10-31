import type { ReactNode } from 'react';

export const PageHeader = ({ children }: { children: ReactNode }) => {
  return (
    <header className="flex w-full justify-between bg-white">{children}</header>
  );
};

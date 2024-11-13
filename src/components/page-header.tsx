import type { ReactNode } from 'react';

export const PageHeader = ({ children }: { children: ReactNode }) => {
  return (
    <header className="sticky top-0 flex w-full justify-between bg-background">
      {children}
    </header>
  );
};

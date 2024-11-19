import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

type PageHeaderProps = {
  children: ReactNode;
  className?: string;
};

export const PageHeader = ({ children, className }: PageHeaderProps) => {
  return (
    <header
      className={cn(
        'sticky top-0 flex w-full justify-between bg-background',
        className,
      )}
    >
      {children}
    </header>
  );
};

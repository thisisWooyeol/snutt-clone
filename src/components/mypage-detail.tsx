import { type ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type MyPageSectionProps = {
  children: ReactNode;
};

type MyPageItemProps = {
  asChild?: boolean;
  to?: string;
  leftContent: ReactNode;
  rightContent?: ReactNode;
  className?: string;
};

export const MyPageSection = ({ children }: MyPageSectionProps) => (
  <div className="my-2 bg-background">{children}</div>
);

export const MyPageItem = ({
  asChild,
  to,
  leftContent,
  rightContent,
  className,
  ...props
}: MyPageItemProps) => {
  const Content = (
    <>
      {leftContent}
      {rightContent}
    </>
  );

  if (asChild !== undefined && to !== undefined) {
    return (
      <NavLink to={to} {...props}>
        <Button
          variant="ghost"
          className={cn(
            'h-12 w-full justify-between rounded-none font-normal',
            className,
          )}
        >
          {Content}
        </Button>
      </NavLink>
    );
  }

  return (
    <Button
      variant="ghost"
      className={cn(
        'h-12 w-full justify-between rounded-none font-normal',
        className,
      )}
      {...props}
    >
      {Content}
    </Button>
  );
};

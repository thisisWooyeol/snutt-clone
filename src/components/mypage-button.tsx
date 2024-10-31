import { type ComponentPropsWithoutRef } from 'react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type ButtonProps = ComponentPropsWithoutRef<typeof Button>;

export const MyPageButton = ({ className, size, ...props }: ButtonProps) => {
  return (
    <Button
      variant="ghost"
      className={cn(
        'h-12 w-full justify-between rounded-none font-normal',
        className,
      )}
      size={size}
      {...props}
    />
  );
};

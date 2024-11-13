import { type ReactNode } from 'react';
import { Form } from 'react-router-dom';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { buttonVariants } from '@/components/ui/button';

export const SignOutDialog = ({
  signOutButton,
}: {
  signOutButton: ReactNode;
}) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{signOutButton}</AlertDialogTrigger>
      <AlertDialogContent>
        <Form method="post">
          <AlertDialogHeader>
            <AlertDialogTitle>로그아웃</AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogDescription>
            로그아웃 하시겠습니까?
          </AlertDialogDescription>
          <AlertDialogFooter>
            <AlertDialogCancel>취소</AlertDialogCancel>
            <AlertDialogAction
              className={buttonVariants({ variant: 'destructive' })}
              type="submit"
            >
              로그아웃
            </AlertDialogAction>
          </AlertDialogFooter>
        </Form>
      </AlertDialogContent>
    </AlertDialog>
  );
};

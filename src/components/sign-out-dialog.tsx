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
            <AlertDialogAction className="bg-red-500 hover:bg-red-600" asChild>
              <button type="submit">로그아웃</button>
            </AlertDialogAction>
          </AlertDialogFooter>
        </Form>
      </AlertDialogContent>
    </AlertDialog>
  );
};

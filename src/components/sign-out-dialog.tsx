import { type ReactNode } from 'react';

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
  onClick,
}: {
  signOutButton: ReactNode;
  onClick: () => void;
}) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{signOutButton}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>로그아웃</AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogDescription>로그아웃 하시겠습니까?</AlertDialogDescription>
        <AlertDialogFooter>
          <AlertDialogCancel>취소</AlertDialogCancel>
          <AlertDialogAction
            onClick={onClick}
            className="bg-red-500 hover:bg-red-600"
          >
            로그아웃
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

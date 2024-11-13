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

export const DeleteLectureDialog = ({
  deleteBlock,
}: {
  deleteBlock: ReactNode;
}) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{deleteBlock}</AlertDialogTrigger>
      <AlertDialogContent>
        <Form method="post">
          <AlertDialogHeader>
            <AlertDialogTitle>강의 삭제</AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogDescription>
            강의를 삭제하시겠습니까?
          </AlertDialogDescription>
          <AlertDialogFooter>
            <AlertDialogCancel>취소</AlertDialogCancel>
            <AlertDialogAction
              className={buttonVariants({ variant: 'destructive' })}
              type="submit"
            >
              확인
            </AlertDialogAction>
          </AlertDialogFooter>
        </Form>
      </AlertDialogContent>
    </AlertDialog>
  );
};

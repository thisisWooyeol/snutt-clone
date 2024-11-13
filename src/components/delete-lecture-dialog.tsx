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
            <AlertDialogAction className="bg-red-500 hover:bg-red-600" asChild>
              <button type="submit">확인</button>
            </AlertDialogAction>
          </AlertDialogFooter>
        </Form>
      </AlertDialogContent>
    </AlertDialog>
  );
};

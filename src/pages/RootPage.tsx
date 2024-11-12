import { useLoaderData } from 'react-router-dom';

import { type UserInfo } from '@/api/types';
import { Landing } from '@/pages/Landing';
import { TimetablePage } from '@/pages/Timetable';

export const RootPage = () => {
  const { userInfo } = useLoaderData() as { userInfo: UserInfo | null };

  return userInfo !== null ? <TimetablePage /> : <Landing />;
};

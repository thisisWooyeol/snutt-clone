import { useLoaderData } from 'react-router-dom';

import { type UserInfo } from '@/api/types';
import { Landing } from '@/pages/Landing';
import { TimeTablePage } from '@/pages/TimeTable';

export const RootPage = () => {
  const { userInfo } = useLoaderData() as { userInfo: UserInfo | null };

  return userInfo !== null ? <TimeTablePage /> : <Landing />;
};

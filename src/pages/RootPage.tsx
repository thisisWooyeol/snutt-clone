import { useLoaderData } from 'react-router-dom';

import { type UserInfo } from '@/api/types';
import { Landing } from '@/pages/Landing';
import { TimeTable } from '@/pages/TimeTable';

export const RootPage = () => {
  const userInfo = useLoaderData() as UserInfo | null;

  return userInfo !== null ? <TimeTable /> : <Landing />;
};

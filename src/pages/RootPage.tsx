import { useLoaderData } from 'react-router-dom';

import type { UserInfo } from '@/api/types';
import { Landing } from '@/pages/Landing';
import { Profile } from '@/pages/Profile';

export const RootPage = () => {
  const userInfo = useLoaderData() as UserInfo | null;

  return userInfo !== null ? <Profile /> : <Landing />;
};

import { useAuth } from '@/hooks/useAuth';
import { Landing } from '@/pages/Landing';
import { Profile } from '@/pages/Profile';

export const RootPage = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Profile /> : <Landing />;
};

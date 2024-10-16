import { useAuth } from '@/hooks/useAuth';
import { useRoutes } from '@/hooks/useRoutes';
import { Landing } from '@/pages/Landing';
import { Profile } from '@/pages/Profile';

export const HomePage = () => {
  const { isAuthenticated } = useAuth();
  const { toLogin } = useRoutes();

  return isAuthenticated ? <Profile /> : <Landing onLoginClick={toLogin} />;
};

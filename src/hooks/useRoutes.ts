import { useNavigate } from 'react-router-dom';

export const useRoutes = () => {
  const navigate = useNavigate();

  const toRoot = () => {
    navigate('/');
  };

  const toSignIn = () => {
    navigate('/sign-in');
  };

  return {
    toRoot,
    toSignIn,
  };
};

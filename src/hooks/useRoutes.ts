import { useNavigate } from 'react-router-dom';

export const useRoutes = () => {
  const navigate = useNavigate();

  const toRoot = () => {
    navigate('/');
  };

  const toLogin = () => {
    navigate('/login');
  };

  return {
    toRoot,
    toLogin,
  };
};

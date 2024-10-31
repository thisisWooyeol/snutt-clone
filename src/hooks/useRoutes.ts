import { useNavigate } from 'react-router-dom';

export const useRoutes = () => {
  const navigate = useNavigate();

  const toRoot = () => {
    navigate('/');
  };

  const toSignIn = () => {
    navigate('/sign-in');
  };

  const toMyPage = () => {
    navigate('/mypage');
  };

  const toMyPageAccount = () => {
    navigate('/mypage/account');
  };

  const toMyPageAccountChangeNickname = () => {
    navigate('/mypage/account/change-nickname');
  };

  return {
    toRoot,
    toSignIn,
    toMyPage,
    toMyPageAccount,
    toMyPageAccountChangeNickname,
  };
};

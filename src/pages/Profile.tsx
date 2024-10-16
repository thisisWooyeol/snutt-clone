import { useEffect, useState } from 'react';

import { getUser, type UserInfo } from '../services/authService';

type ProfileProps = {
  token: string;
  onLogout: () => void;
};

export const Profile = ({ token, onLogout }: ProfileProps) => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  useEffect(() => {
    getUser(token)
      .then((data) => {
        setUserInfo(data);
      })
      .catch((error: unknown) => {
        console.error(error);
      });
  }, [token]);

  if (userInfo === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      <h1>Welcome, {userInfo.nickname.nickname}!</h1>
      <p>Email: {userInfo.email}</p>
      {/* Display other user info as needed */}
      <button
        onClick={onLogout}
        className="mt-4 rounded bg-red-500 py-2 text-white"
      >
        Logout
      </button>
    </div>
  );
};

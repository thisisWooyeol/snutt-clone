type ProfileProps = {
  token: string;
};

type UserInfo = {
  id: string;
  isAdmin: boolean;
  regDate: string;
  notificationCheckedAt: string;
  email: string;
  localId: string;
  fbName: string;
  nickname: { nickname: string; tag: string };
};

const getUser = async (token: string): Promise<UserInfo> => {
  const response = await fetch(
    `${import.meta.env.VITE_API_BASE_URL}/v1/users/me`,
    {
      headers: {
        'x-access-token': token,
      },
    },
  );
  const data = (await response.json()) as UserInfo;
  console.info(data);
  return data;
};

import { useState } from 'react';
export const Profile = ({ token }: ProfileProps) => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  getUser(token)
    .then((data) => {
      setUserInfo(data);
    })
    .catch((error: unknown) => {
      console.error(error);
    });

  if (userInfo === null) {
    return <div>Loading...</div>;
  }

  return <div>{userInfo.nickname.nickname}</div>;
};

export const getUser = async ({token}) => {
  const response = await fetch(
    'https://wafflestudio-seminar-2024-snutt-redirect.vercel.app/v1/auth/login_local',
    {
      method: 'GET',
      headers: {
        'x-access-token': {token},
      },
    },
  );
  const data = (await response.json());
  console.info(data);
  return data;
};
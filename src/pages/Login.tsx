type LoginProps = {
  handler: (e: React.FormEvent<HTMLFormElement>) => void;
};

export const Login = ({ handler }: LoginProps) => {
  return (
    <form onSubmit={handler}>
      <div>
        <h1>아이디</h1>
        <input type="text" name="id" required />
      </div>
      <div>
        <h1>비밀번호</h1>
        <input type="password" name="pw" required />
      </div>
      <button>로그인</button>
    </form>
  );
};

type LoginResponse = { user_id: string; token: string; message: string };
type LoginRequest = { id: string; pw: string };

export const postLogin = async ({
  id,
  pw,
}: LoginRequest): Promise<LoginResponse> => {
  const response = await fetch(
    `${import.meta.env.VITE_API_BASE_URL}/v1/auth/login_local`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: id, password: pw }),
    },
  );
  const data = (await response.json()) as LoginResponse;
  console.info(data);
  return data;
};

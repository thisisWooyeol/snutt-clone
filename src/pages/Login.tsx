import { type FormEvent, useState } from 'react';

type LoginProps = {
  onLogin: (id: string, pw: string) => void;
};

export const Login = ({ onLogin }: LoginProps) => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onLogin(id, pw);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <label htmlFor="id">아이디</label>
        <input
          type="text"
          name="id"
          id="id"
          value={id}
          onChange={(e) => {
            setId(e.target.value);
          }}
          required
          className="w-full border p-2"
        />
      </div>
      <div>
        <label htmlFor="pw">비밀번호</label>
        <input
          type="password"
          name="pw"
          id="pw"
          value={pw}
          onChange={(e) => {
            setPw(e.target.value);
          }}
          required
          className="w-full border p-2"
        />
      </div>
      <button type="submit" className="rounded bg-blue-500 py-2 text-white">
        로그인
      </button>
    </form>
  );
};

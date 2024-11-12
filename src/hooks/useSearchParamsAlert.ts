import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export const useSearchParamsAlert = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Action으로부터 받은 error message를 alert로 띄워줍니다.
  useEffect(() => {
    if (searchParams.has('error')) {
      alert(searchParams.get('error'));
      setSearchParams({});
    }
  }, [searchParams, setSearchParams]);
};

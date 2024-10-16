import { useEffect, useState } from 'react';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // TODO: use getUser from authService to check if the token is valid
    // => improved security
    const token = localStorage.getItem('token');
    setIsAuthenticated(token !== null);
  }, []);

  return { isAuthenticated };
};

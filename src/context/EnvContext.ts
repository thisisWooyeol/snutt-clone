import { createContext } from 'react';

type EnvContextType = {
  API_BASE_URL: string;
};

export const EnvContext = createContext<EnvContextType | null>(null);

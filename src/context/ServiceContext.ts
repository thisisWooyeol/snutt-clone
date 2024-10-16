import { createContext } from 'react';

import { type AuthService } from '@/services/authService';

type ServiceContextType = {
  authService: AuthService;
};

export const ServiceContext = createContext<ServiceContextType | null>(null);

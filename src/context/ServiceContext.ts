import { createContext } from 'react';

import { type AuthService } from '@/services/authService';
import { type UserService } from '@/services/userService';

type ServiceContextType = {
  authService: AuthService;
  userService: UserService;
};

export const ServiceContext = createContext<ServiceContextType | null>(null);

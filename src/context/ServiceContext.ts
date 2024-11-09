import { createContext } from 'react';

import { type AuthService } from '@/services/authService';
import { type TableService } from '@/services/tableService';
import { type UserService } from '@/services/userService';

type ServiceContextType = {
  authService: AuthService;
  userService: UserService;
  tableService: TableService;
};

export const ServiceContext = createContext<ServiceContextType | null>(null);

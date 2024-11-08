import { createContext } from 'react';

import { type AuthService } from '@/services/authService';
import { type TimeTableService } from '@/services/timeTableService';
import { type UserService } from '@/services/userService';

type ServiceContextType = {
  authService: AuthService;
  userService: UserService;
  timeTableService: TimeTableService;
};

export const ServiceContext = createContext<ServiceContextType | null>(null);

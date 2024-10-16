import { type Context, useContext } from 'react';

export const useGuardContext = <T>(context: Context<T | null>): T => {
  const value = useContext(context);

  if (value === null) {
    throw new Error('Context not found.');
  }

  return value;
};

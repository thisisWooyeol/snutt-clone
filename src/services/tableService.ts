import { type TableApi } from '@/api/tableApi';
//import { type GetRecentTableResponse } from '@/api/types';
import type { GetTableResult } from '@/services/types';

export type TableService = {
  getTable: () => Promise<GetTableResult>;
};

export const getTableService = (tableApi: TableApi): TableService => ({
  getTable: async (): Promise<GetTableResult> => {
    try {
      const token = localStorage.getItem('token');
      if (token === null) throw new Error('Token not found');

      const data = await tableApi.getTimetable({ token });
      return { data, error: null };
    } catch (error: unknown) {
      return {
        data: null,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  },
});

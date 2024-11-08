import { type TableApi } from '@/api/tableApi';
//import { type GetRecentTimetableResponse } from '@/api/types';
import type { GetTableResult } from '@/services/types';

export type TableService = {
  getTable: () => Promise<GetTableResult>;
};

export const getTableService = (tableApi: TableApi): TableService => ({
  getTable: async (): Promise<GetTableResult> => {
    try {
      const data = await tableApi.getTimetable();
      return { data, error: null };
    } catch (error: unknown) {
      return {
        data: null,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  },
});

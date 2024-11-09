import { type TableApi } from '@/api/tableApi';
import type {
  GetTimeTableByIdResult,
  GetTimeTableListResult,
  GetTimeTableRecentResult,
} from '@/services/types';

export type TableService = {
  getTimeTableList: () => Promise<GetTimeTableListResult>;
  getTimeTableRecent: () => Promise<GetTimeTableRecentResult>;
  getTimeTableById: (id: string) => Promise<GetTimeTableByIdResult>;
};

export const getTableService = (tableApi: TableApi): TableService => ({
  getTimeTableList: async (): Promise<GetTimeTableListResult> => {
    try {
      const token = localStorage.getItem('token');
      if (token === null) throw new Error('Token not found');

      const data = await tableApi.getTimeTableList({ token });
      return { data, error: null };
    } catch (error: unknown) {
      return {
        data: null,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  },
  getTimeTableRecent: async (): Promise<GetTimeTableRecentResult> => {
    try {
      const token = localStorage.getItem('token');
      if (token === null) throw new Error('Token not found');

      const data = await tableApi.getTimeTableRecent({ token });
      return { data, error: null };
    } catch (error: unknown) {
      return {
        data: null,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  },
  getTimeTableById: async (id: string): Promise<GetTimeTableByIdResult> => {
    try {
      const token = localStorage.getItem('token');
      if (token === null) throw new Error('Token not found');

      const data = await tableApi.getTimeTableById({ token, id });
      return { data, error: null };
    } catch (error: unknown) {
      return {
        data: null,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  },
});

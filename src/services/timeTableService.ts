import { type TimeTableApi } from '@/api/timeTableApi';
import type {
  GetTimeTableByIdResult,
  GetTimeTableListResult,
  GetTimeTableRecentResult,
} from '@/services/types';

export type TimeTableService = {
  getTimeTableList: () => Promise<GetTimeTableListResult>;
  getTimeTableRecent: () => Promise<GetTimeTableRecentResult>;
  getTimeTableById: (id: string) => Promise<GetTimeTableByIdResult>;
};

export const getTimeTableService = (
  timeTableApi: TimeTableApi,
): TimeTableService => ({
  getTimeTableList: async (): Promise<GetTimeTableListResult> => {
    try {
      const token = localStorage.getItem('token');
      if (token === null) throw new Error('Token not found');

      const data = await timeTableApi.getTimeTableList({ token });
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

      const data = await timeTableApi.getTimeTableRecent({ token });
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

      const data = await timeTableApi.getTimeTableById({ token, id });
      return { data, error: null };
    } catch (error: unknown) {
      return {
        data: null,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  },
});

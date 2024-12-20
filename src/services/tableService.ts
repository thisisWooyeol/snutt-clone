import { type TableApi } from '@/api/tableApi';
import type { CreateLectureData } from '@/api/types';
import type {
  CreateTimetableLectureResult,
  DeleteTimetableLectureResult,
  GetTimetableByIdResult,
  GetTimetableListResult,
  GetTimetableRecentResult,
} from '@/services/types';

export type TableService = {
  createTimetableLecture: (
    timetableId: string,
    createLectureData: CreateLectureData,
    isForced: boolean,
  ) => Promise<CreateTimetableLectureResult>;
  deleteTimetableLecture: (
    timetableId: string,
    lectureId: string,
  ) => Promise<DeleteTimetableLectureResult>;
  getTimetableById: (id: string) => Promise<GetTimetableByIdResult>;
  getTimetableList: () => Promise<GetTimetableListResult>;
  getTimetableRecent: () => Promise<GetTimetableRecentResult>;
};

export const getTableService = (tableApi: TableApi): TableService => ({
  createTimetableLecture: async (
    timetableId: string,
    createLectureData: CreateLectureData,
    isForced: boolean,
  ): Promise<CreateTimetableLectureResult> => {
    try {
      const token = localStorage.getItem('token');
      if (token === null) throw new Error('Token not found');

      const data = await tableApi.createTimetableLecture({
        token,
        timetableId,
        createLectureData,
        isForced,
      });
      return { data, error: null };
    } catch (error: unknown) {
      return {
        data: null,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  },
  deleteTimetableLecture: async (
    timetableId: string,
    lectureId: string,
  ): Promise<DeleteTimetableLectureResult> => {
    try {
      const token = localStorage.getItem('token');
      if (token === null) throw new Error('Token not found');

      const data = await tableApi.deleteTimetableLecture({
        token,
        timetableId,
        lectureId,
      });
      return { data, error: null };
    } catch (error: unknown) {
      return {
        data: null,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  },
  getTimetableById: async (id: string): Promise<GetTimetableByIdResult> => {
    try {
      const token = localStorage.getItem('token');
      if (token === null) throw new Error('Token not found');

      const data = await tableApi.getTimetableById({ token, id });
      return { data, error: null };
    } catch (error: unknown) {
      return {
        data: null,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  },
  getTimetableList: async (): Promise<GetTimetableListResult> => {
    try {
      const token = localStorage.getItem('token');
      if (token === null) throw new Error('Token not found');

      const data = await tableApi.getTimetableList({ token });
      return { data, error: null };
    } catch (error: unknown) {
      return {
        data: null,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  },
  getTimetableRecent: async (): Promise<GetTimetableRecentResult> => {
    try {
      const token = localStorage.getItem('token');
      if (token === null) throw new Error('Token not found');

      const data = await tableApi.getTimetableRecent({ token });
      return { data, error: null };
    } catch (error: unknown) {
      return {
        data: null,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  },
});

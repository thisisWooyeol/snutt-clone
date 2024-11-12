import type {
  GetTimetableByIdRequest,
  GetTimetableByIdResponse,
  GetTimetableListRequest,
  GetTimetableListResponse,
  GetTimetableRecentRequest,
  GetTimetableRecentResponse,
} from '@/api/types';

export type TableApi = {
  getTimetableList: (
    req: GetTimetableListRequest,
  ) => Promise<GetTimetableListResponse>;
  getTimetableRecent: (
    req: GetTimetableRecentRequest,
  ) => Promise<GetTimetableRecentResponse>;
  getTimetableById: (
    req: GetTimetableByIdRequest,
  ) => Promise<GetTimetableByIdResponse>;
};

export const getTableApi = (API_BASE_URL: string): TableApi => ({
  getTimetableList: async ({
    token,
  }: GetTimetableListRequest): Promise<GetTimetableListResponse> => {
    const response = await fetch(`${API_BASE_URL}/v1/tables`, {
      headers: {
        'x-access-token': token,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch time table list');
    }

    console.debug('Fetched time table list');
    return response.json() as Promise<GetTimetableListResponse>;
  },
  getTimetableRecent: async ({
    token,
  }: GetTimetableRecentRequest): Promise<GetTimetableRecentResponse> => {
    const response = await fetch(`${API_BASE_URL}/v1/tables/recent`, {
      headers: {
        'x-access-token': token,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch recent time table');
    }

    console.debug('Fetched recent time table');
    return response.json() as Promise<GetTimetableRecentResponse>;
  },
  getTimetableById: async ({
    token,
    id,
  }: GetTimetableByIdRequest): Promise<GetTimetableByIdResponse> => {
    const response = await fetch(`${API_BASE_URL}/v1/tables/${id}`, {
      headers: {
        'x-access-token': token,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch time table by id');
    }

    console.debug('Fetched time table by id');
    return response.json() as Promise<GetTimetableByIdResponse>;
  },
});

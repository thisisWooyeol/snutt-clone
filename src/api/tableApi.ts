import type {
  GetTimeTableByIdRequest,
  GetTimeTableByIdResponse,
  GetTimeTableListRequest,
  GetTimeTableListResponse,
  GetTimeTableRecentRequest,
  GetTimeTableRecentResponse,
} from '@/api/types';

export type TableApi = {
  getTimeTableList: (
    req: GetTimeTableListRequest,
  ) => Promise<GetTimeTableListResponse>;
  getTimeTableRecent: (
    req: GetTimeTableRecentRequest,
  ) => Promise<GetTimeTableRecentResponse>;
  getTimeTableById: (
    req: GetTimeTableByIdRequest,
  ) => Promise<GetTimeTableByIdResponse>;
};

export const getTableApi = (API_BASE_URL: string): TableApi => ({
  getTimeTableList: async ({
    token,
  }: GetTimeTableListRequest): Promise<GetTimeTableListResponse> => {
    const response = await fetch(`${API_BASE_URL}/v1/tables`, {
      headers: {
        'x-access-token': token,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch time table list');
    }

    console.debug('Fetched time table list');
    return response.json() as Promise<GetTimeTableListResponse>;
  },
  getTimeTableRecent: async ({
    token,
  }: GetTimeTableRecentRequest): Promise<GetTimeTableRecentResponse> => {
    const response = await fetch(`${API_BASE_URL}/v1/tables/recent`, {
      headers: {
        'x-access-token': token,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch recent time table');
    }

    console.debug('Fetched recent time table');
    return response.json() as Promise<GetTimeTableRecentResponse>;
  },
  getTimeTableById: async ({
    token,
    id,
  }: GetTimeTableByIdRequest): Promise<GetTimeTableByIdResponse> => {
    const response = await fetch(`${API_BASE_URL}/v1/tables/${id}`, {
      headers: {
        'x-access-token': token,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch time table by id');
    }

    console.debug('Fetched time table by id');
    return response.json() as Promise<GetTimeTableByIdResponse>;
  },
});

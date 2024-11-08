import type { GetRecentTableResponse, GetUserRequest } from '@/api/types';

export type TableApi = {
  getTimetable: (req: GetUserRequest) => Promise<GetRecentTableResponse>;
};

export const getTableApi = (API_BASE_URL: string): TableApi => ({
  getTimetable: async ({
    token,
  }: GetUserRequest): Promise<GetRecentTableResponse> => {
    const response = await fetch(`${API_BASE_URL}/v1/tables/recent`, {
      headers: {
        'x-access-token': token,
      },
    });

    if (!response.ok) {
      //alert('TimeTable 정보가 없습니다.');
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    return response.json() as Promise<GetRecentTableResponse>;
  },
});

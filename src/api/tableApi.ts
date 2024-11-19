import type {
  CreateTimetableLectureRequest,
  CreateTimetableLectureResponse,
  DeleteTimetableLectureRequest,
  DeleteTimetableLectureResponse,
  GetTimetableByIdRequest,
  GetTimetableByIdResponse,
  GetTimetableListRequest,
  GetTimetableListResponse,
  GetTimetableRecentRequest,
  GetTimetableRecentResponse,
} from '@/api/types';

export type TableApi = {
  createTimetableLecture: (
    req: CreateTimetableLectureRequest,
  ) => Promise<CreateTimetableLectureResponse>;
  deleteTimetableLecture: (
    req: DeleteTimetableLectureRequest,
  ) => Promise<DeleteTimetableLectureResponse>;
  getTimetableById: (
    req: GetTimetableByIdRequest,
  ) => Promise<GetTimetableByIdResponse>;
  getTimetableList: (
    req: GetTimetableListRequest,
  ) => Promise<GetTimetableListResponse>;
  getTimetableRecent: (
    req: GetTimetableRecentRequest,
  ) => Promise<GetTimetableRecentResponse>;
};

export const getTableApi = (API_BASE_URL: string): TableApi => ({
  createTimetableLecture: async ({
    token,
    //isForced,
    timetableId,
  }: CreateTimetableLectureRequest): Promise<CreateTimetableLectureResponse> => {
    const response = await fetch(
      `${API_BASE_URL}/v1/tables/${timetableId}/lecture`,
      {
        method: 'POST',
        headers: {
          'x-access-token': token,
        },
      },
    );

    if (!response.ok) {
      throw new Error('Failed to create lecture from time table');
    }

    console.debug('Created lecture from time table');
    return response.json() as Promise<CreateTimetableLectureResponse>;
  },
  deleteTimetableLecture: async ({
    token,
    timetableId,
    lectureId,
  }: DeleteTimetableLectureRequest): Promise<DeleteTimetableLectureResponse> => {
    const response = await fetch(
      `${API_BASE_URL}/v1/tables/${timetableId}/lecture/${lectureId}`,
      {
        method: 'DELETE',
        headers: {
          'x-access-token': token,
        },
      },
    );

    if (!response.ok) {
      throw new Error('Failed to delete lecture from time table');
    }

    console.debug('Deleted lecture from time table');
    return response.json() as Promise<DeleteTimetableLectureResponse>;
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
});

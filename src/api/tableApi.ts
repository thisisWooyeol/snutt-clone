import type { GetRecentTimetableResponse } from '@/api/types';

export type TimetableApi = {
    getTimetable: () => Promise<GetRecentTimetableResponse>;
};

export const getRecentTimetable = (API_BASE_URL: string): TimetableApi => ({
    getTimetable: async (): Promise<GetRecentTimetableResponse> => {
        const response = await fetch(`${API_BASE_URL}/v1/tables/recent`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
    
        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        return response.json() as Promise<GetRecentTimetableResponse>;
    },
});

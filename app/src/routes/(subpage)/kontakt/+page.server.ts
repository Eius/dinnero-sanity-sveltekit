import groq from 'groq';
import type { PageServerLoad } from './$types';
import { client } from '$lib/utils/sanity';
import type { DayData } from '$lib/types/DayData';

type OpeningHoursData = {
    _id: string,
    _updatedAt: string,
    _type: string,
    _createdAt: string,
    _rev: string,
    monday: DayData,
    tuesday: DayData,
    wednesday: DayData,
    thursday: DayData,
    friday: DayData
};

type QueryData = {
    openingHoursData: OpeningHoursData | undefined
}

const fetchOpeningHours = async (): Promise<QueryData> => {
    const query = groq`*[_type in ["opening_hours"]]`;
    const result = await client.fetch(query);
    const openingHoursData = result.find((item: OpeningHoursData) => item._type === 'opening_hours');

    return {
        openingHoursData: openingHoursData as OpeningHoursData
    };
};

function organizeOpeningHours(data: OpeningHoursData): Record<string, DayData> {
    const openingHours: Record<string, DayData> = {
        Pondelok: data.monday,
        Utorok: data.tuesday,
        Streda: data.wednesday,
        Štvrtok: data.thursday,
        Piatok: data.friday
    };
    return openingHours;
};

export const load: PageServerLoad = async () => {
    try {
        const { openingHoursData: openingHoursData } = await fetchOpeningHours();
        
        const openingHours = !openingHoursData ? undefined : organizeOpeningHours(openingHoursData);
        
        return { 
            openingHours
        };
    } catch (error) {
        console.error('Error fetching opening hours:', error);
        return { openingHours: undefined};
    }
};
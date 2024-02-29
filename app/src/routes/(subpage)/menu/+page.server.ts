import groq from 'groq';
import type { PageServerLoad } from './$types';
import { client } from '$lib/utils/sanity';
import type {FoodCategory, FoodData} from '$lib/types/foodTypes';

type QueryType = {
    _type: string,
    food_data: FoodData & {
        _type: string | undefined
    }
}

export const load: PageServerLoad = async () => {
    const query = groq`*[_type in ['pizza', "burger", "side_dish", "dressing", "standing_offer", "drink"]] | order(food_data.order asc) {_type, food_data}`;

    const result = await client.fetch<QueryType[]>(query);

    const foodCategories: Record<string, FoodCategory> =
    {
        pizza: { name: "Pizza", foods: [] },
        burger: { name: "Burgre", foods: [] },
        standing_offer: { name: "Stála ponuka", foods: [] },
        side_dish: { name: "Prílohy", foods: [] },
        dressing: { name: "Dresingy", foods: [] },
        drink: { name: "Nápoje", foods: [] }
    }

    result.forEach((item) => {
        if (foodCategories[item._type])
        {
            const food_data = item.food_data;
            delete food_data._type;
            foodCategories[item._type].foods.push(item.food_data);
        }
    })

    return {
        foodCategories: Object.values(foodCategories),
	};
};

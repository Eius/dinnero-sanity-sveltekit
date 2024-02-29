import groq from 'groq';
import type { PageServerLoad } from './$types';
import { client } from '$lib/utils/sanity';
import { urlFor } from '$lib/utils/image';
import type { ImagePizza } from '$lib/types/ImagePizza';

export const load: PageServerLoad = async () => {
    const query = groq`*[_type in ['pizza', "homepageSettings"]] | order(order asc) 
    {_type, discount_title, discount_text, food_data, image}`;

    const result = await client.fetch(query);
    
    const pizzas: ImagePizza[] = [];
    let homepageSettings: {discount_title: string, discount_text: string | null} | undefined;

    result.forEach((item) => {
        if (item._type === 'pizza') {
            if (item.image != null) 
            {
                pizzas.push({
                    title: item.food_data.title,
                    imageUrl: urlFor(item.image).url()
                });   
            }
        } else if (item._type === 'homepageSettings') {
          homepageSettings = item;
        }
    });

    return {
        pizzas,
        homepageSettings
	};
};

/* : {title: string, image: Image}[] */
import groq from 'groq';
import type { PageServerLoad } from './$types';
import { client } from '$lib/utils/sanity';
import { urlFor } from '$lib/utils/image';
import type { Image } from '@sanity/types';

export const load: PageServerLoad = async () => {
    const query = groq`*[_type == 'pizza'] | order(order asc) {title, image}`;
    const pizzas: {title: string, image: Image}[] = await client.fetch(query);
    const refinedPizzas: { title: string, imageUrl: string }[] = pizzas.map((pizza) => {
        return {
            title: pizza.title,
            imageUrl: urlFor(pizza.image).url()
        }
    });

    return {
		pizzas: refinedPizzas
	};
};
<script lang="ts">
    import {currentPage} from "$lib/stores/CurrentPage";
    import { onMount } from "svelte";
	import type { PageData } from "./$types";
	import type { FoodData } from "$lib/types/foodTypes";
	import { formatCurrency } from "$lib/utils/formatCurrency";

    export let data: PageData;
    const { foodCategories } = data;
    
    let currentCategory: string = foodCategories[0].name;
    let currentCategoryFoods: FoodData[] = foodCategories[0].foods;

    onMount(() => {
        currentPage.set("Menu");
    });
</script>

<svelte:head>
	<title>Dinnero Pizza | Menu</title>
</svelte:head>

<div class="py-16 container">
    <ul class="flex flex-wrap justify-center">
        {#each foodCategories as category, index}
        <li class="border-l border-dashed border-gray first-of-type:border-l-0">
            <button 
            class="py-2 px-6 {currentCategory === category.name ? "text-accent-green" : "text-white"} text-2xl font-title font-semibold tracking-wider uppercase"
            on:click={() => {
                currentCategory = category.name;
                currentCategoryFoods = foodCategories[index].foods;
            }}>
                {category.name}
            </button>
        </li>
        {/each}
    </ul>
    <section class="mt-16 flex justify-center">
        <div class="grid grid-cols-1 gap-6 w-full max-w-[1200px]">
            {#each currentCategoryFoods as food, index}
            <article id={index.toString()} class="col-span-1">
                <div class="flex justify-between">
                    <div class="text-white">
                        <h3 class="mb-1 font-title font-medium text-3xl">{food.title}</h3>
                        {#if food.weight}
                            <p class="{food.description ? "mb-1" : ""} text-xl">{food.weight.toString() + food.weight_unit}</p>
                        {/if}
                    </div>
                    <p class="font-funny text-accent-green text-2xl">{formatCurrency(food.price)}</p>
                </div>
                {#if food.description}
                <p class="text-white text-lg">{food.description}</p>
                {/if}
            </article>
            {#if index < currentCategoryFoods.length - 1}
            <div class="my-2 col-span-1 border-t border-gray border-dashed" />
            {/if}
            {/each}
        </div>
    </section>
</div>

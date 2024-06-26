<script lang="ts">
	import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css/core';
	import Icon from '@iconify/svelte';
	import type { PageData } from './$types';
	import contacts from '$lib/data/contacts';
	import { onMount } from 'svelte';

	export let data: PageData;

	let header_image: HTMLImageElement;
	let header_image_loaded = false;

	onMount(() => {
		if (header_image && header_image.complete)
		{
			header_image_loaded = true;
		} else {
			header_image.addEventListener("load", () => { header_image_loaded = true });
		}
	})
	
</script>

<svelte:head>
	<title>Dinnero Pizza | Dražovce</title>
</svelte:head>

<section>
	<div class="flex lg:items-center lg:justify-center w-full bg-[url('/images/header_image_1_small.webp')] bg-cover bg-center bg-no-repeat aspect-[16/6] min-h-[200px]">
		<img bind:this={header_image}
		class="object-cover object-center block aspect-[16/6] transition-opacity duration-300 {header_image_loaded ? "opacity-100" : "opacity-0"}"
		src="/images/header_image_1.webp" alt="pizza">
		<!-- DESKTOP ONLY -->
		<div class="absolute hidden lg:flex flex-col justify-center z-10">
			<h1 class="font-title font-semibold text-center text-white text-8xl uppercase leading-none">
				Dinnero Pizza
			</h1>
			<div class="mt-1 mb-2 flex h-[9px] w-full">
				<div class="bg-accent-green size-full" />
				<div class="bg-white size-full" />
				<div class="bg-accent-red size-full" />
			</div>
			<a class="text-white text-center text-5xl font-title font-semibold" href={"tel: " + contacts.phone_number.replaceAll(" ", "")}>
				{contacts.phone_number}
			</a>
			<p class="text-white text-center text-2xl font-title font-semibold">
				{contacts.address}
			</p>
		</div>
	</div>
	<div class="flex flex-col py-16 lg:py-32 items-center text-center bg-[url('/images/background_1.webp')] bg-center bg-cover bg-scroll bg-no-repeat">
		<!-- MOBILE ONLY -->
		<div class="flex lg:hidden flex-col pb-16 items-center w-full text-white font-semibold">
			<p class="text-2xl font-sans">Objednávky</p>
			<a class="text-3xl font-funny underline underline-offset-4" href={"tel: " + contacts.phone_number.replaceAll(" ", "")}>
				{contacts.phone_number}
			</a>
		</div>
		<h2 class="mb-3 px-4 font-title font-bold text-white text-4xl xs:text-5xl md:text-7xl uppercase">Vitajte v Dinnero Pizza!</h2>
		<p class="mb-10 font-funny text-accent-green text-2xl">Vyberte si tú svoju</p>
		
		<Splide class="w-full" hasTrack={false} aria-label="Pizza zoznam" options={{ type: "loop", perPage: 3, perMove: 1, 
		breakpoints: { 768: { perPage: 2, }, 596: { perPage: 1 }}}}>
			<SplideTrack class="w-full pt-4">
				{#each data.pizzas as { title, imageUrl }}
					<SplideSlide>
						<div class="flex flex-col items-center">
							<img
							src={imageUrl}
							alt={"Pizza " + title}
							class="w-3/4 mb-8 spin aspect-square"
							width="400"
							height="400"
							/>
							<p class="pb-4 font-funny text-2xl text-accent-green">{title}</p>
						</div>
					</SplideSlide>
				{/each}
			</SplideTrack>
			<div class="splide__arrows flex gap-2 justify-center text-white text-3xl">
				<button class="splide__arrow splide__arrow--prev bg-primary rounded-full p-2 -rotate-90 border border-gray min-w-[48px] aspect-square">
					<Icon icon="ri:arrow-up-line" />
				</button>
				<button class="splide__arrow splide__arrow--next bg-primary rounded-full p-2 rotate-90 border border-gray min-w-[48px] aspect-square">
					<Icon icon="ri:arrow-up-line" class="min-w-[30px] min-h-[30px]" />
				</button>
			</div>
		</Splide>
	</div>
</section>

<section class="flex flex-col py-16 items-center text-center bg-[url('/images/background_2.jpg')] bg-center bg-cover bg-fixed bg-no-repeat">
	<h2 class="mb-3 px-4 font-title font-bold text-white text-4xl xs:text-5xl md:text-7xl uppercase">
		{data.homepageSettings == null ? "Máte vybrané?" : data.homepageSettings.discount_title}
	</h2> 
	{#if data.homepageSettings != null && data.homepageSettings.discount_text != null}
	<p class="mb-10 font-funny text-white text-2xl">
		{data.homepageSettings.discount_text}
	</p>
	{/if} 
	<a href="/kontakt" class="text-white text-2xl font-title font-bold uppercase border-[3px] border-white rounded-full pt-2 pb-1 px-4 
	hover:bg-white hover:text-black transition-colors duration-100">
		Zavolajte nám
	</a>
</section>

<style lang="postcss">

	@keyframes rotate {
		0% {
		transform: rotate(0deg);
		}
		100% {
		transform: rotate(360deg);
		}
	}

	.spin {
		animation: rotate 5s linear infinite both paused;
		transition: scale .15s ease-in-out
	}

	.spin:hover {
		animation-play-state: running;
		scale: 1.07;
	}
</style>
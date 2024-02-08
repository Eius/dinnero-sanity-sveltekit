<script lang="ts">
	import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css/core';
	import Icon from '@iconify/svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<section>
	<img src="/images/header_image_1.jpg" alt="Header" class="w-full object-cover aspect-[16/8] min-h-[200px]" width="1920" height="923" />
	<div class="flex flex-col py-32 items-center text-center bg-[url('/images/background_1.jpg')] bg-center bg-cover bg-scroll bg-no-repeat">
		<h2 class="mb-3 px-4 font-title font-bold text-white text-4xl xs:text-5xl md:text-7xl uppercase">Vitajte v Dinnero Pizza!</h2>
		<p class="mb-10 font-funny text-accent-green text-2xl">Vyberte si tú svoju</p>
		
		<Splide class="w-full" hasTrack={false} aria-label="Pizza zoznam" options={{ type: "loop", perPage: 3, perMove: 1, breakpoints: { 768: { perPage: 2, }}}}>
			<SplideTrack class="w-full pt-4">
				{#each data.pizzas as { title, imageUrl }}
					<SplideSlide>
						<div class="flex flex-col items-center">
							<img
							src={imageUrl}
							alt={"Pizza " + title}
							class="w-3/4 mb-8 spin"
							width="400"
							height="400"
							/>
							<p class="font-funny text-2xl text-accent-green">{title}</p>
						</div>
					</SplideSlide>
				{/each}
			</SplideTrack>
			<div class="splide__arrows flex gap-2 justify-center text-white text-3xl mt-8">
				<button class="splide__arrow splide__arrow--prev bg-primary rounded-full p-2 -rotate-90 border border-gray min-w-[48px] aspect-square">
					<Icon icon="ri:arrow-up-line" />
				</button>
				<button class="splide__arrow splide__arrow--next bg-primary rounded-full p-2 rotate-90 border border-gray min-w-[48px] aspect-square">
					<Icon icon="ri:arrow-up-line" />
				</button>
			</div>
		</Splide>
	</div>
</section>

<!-- <Splide class="w-full" hasTrack={false} aria-label="Pizza zoznam" options={{ type: "loop", perPage: 3, perMove: 1, breakpoints: { 768: { perPage: 2, }}}}>
	<SplideTrack class="w-full pt-4">
			<SplideSlide>
				  <div class="flex flex-col items-center">
					<img
					src="/images/pizza/bismarck.png"
					alt="Pizza"
					class="w-3/4 mb-8 spin"
					width="400"
					height="400"
					/>
					<p class="font-funny text-2xl text-accent-green">Pizza 1</p>
				  </div>
			</SplideSlide>
			<SplideSlide>
				<div class="flex flex-col items-center">
				  <img
				  src="/images/pizza/boscaiola.png"
				  alt="Pizza"
				  class="w-3/4 mb-8 spin"
				  width="400"
				  height="400"
				  />
				  <p class="font-funny text-2xl text-accent-green">Pizza 2</p>
				</div>
		  </SplideSlide>
		  <SplideSlide>
			<div class="flex flex-col items-center">
			  <img
			  src="/images/pizza/campagnola.png"
			  alt="Pizza"
			  class="w-3/4 mb-8 spin"
			  width="400"
			  height="400"
			  />
			  <p class="font-funny text-2xl text-accent-green">Pizza 3</p>
			</div>
	  </SplideSlide>
	</SplideTrack>
	<div class="splide__arrows flex gap-2 justify-center text-white text-3xl mt-8">
		<button class="splide__arrow splide__arrow--prev bg-primary rounded-full p-2 -rotate-90 border border-gray min-w-[48px] aspect-square">
			<Icon icon="ri:arrow-up-line" />
		</button>
		<button class="splide__arrow splide__arrow--next bg-primary rounded-full p-2 rotate-90 border border-gray min-w-[48px] aspect-square">
			<Icon icon="ri:arrow-up-line" />
		</button>
	</div>
  </Splide> -->



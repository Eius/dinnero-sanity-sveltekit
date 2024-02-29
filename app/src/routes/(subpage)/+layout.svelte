<script lang="ts">
    import { currentPage } from "$lib/stores/CurrentPage";
	import { onMount } from "svelte";

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

<div class="flex items-center justify-center min-h-[180px] w-full bg-[url('/images/header_image_2_small.webp')] bg-no-repeat bg-cover bg-center aspect-[16/4]">
    <img bind:this={header_image} class="absolute object-cover object-center block aspect-[16/4] transition-opacity duration-200 
        {header_image_loaded ? "opacity-100" : "opacity-0"}" src="/images/header_image_2.jpg" alt="pizza">
    <p class="relative -bottom-4 text-white font-bold tracking-wider uppercase
    hidden lg:block lg:text-6xl xl:text-7xl xxl:text-8xl">
        {$currentPage}
    </p>
</div>
<p class="block lg:hidden pt-16 text-white text-center text-5xl font-bold tracking-wider uppercase">
    {$currentPage}
</p>
<slot />
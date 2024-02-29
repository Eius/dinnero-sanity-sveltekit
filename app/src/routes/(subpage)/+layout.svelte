<script lang="ts">
    import { currentPage } from "$lib/stores/CurrentPage";
</script>

<div class="flex items-center justify-center min-h-[180px] w-full bg-[url('/images/header_image_2.jpg')] bg-no-repeat bg-cover bg-center aspect-[16/4]">
    <p class="relative -bottom-4 text-white font-bold tracking-wider uppercase
    hidden lg:block lg:text-6xl xl:text-7xl xxl:text-8xl
    ">
        {$currentPage}
    </p>
</div>
<p class="block lg:hidden pt-16 text-white text-center text-5xl font-bold tracking-wider uppercase">
    {$currentPage}
</p>
<slot />
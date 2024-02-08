<script lang="ts">
    import { onMount } from "svelte";
    import Icon from "@iconify/svelte";
	import { page } from "$app/stores";

    let mobileMenuVisibile = false;
    let currentHref: string = "";
    let scrolled = false;
    onMount(() => {
        scrolled = window.scrollY > 0;
        document.addEventListener("scroll", () => {
            scrolled = window.scrollY > 0;
        })
        
        page.subscribe((value) => {
            currentHref = value.url.pathname;
            console.log(currentHref);
        })
    })

    function closeMobileMenu(): void
    {
        mobileMenuVisibile = false;
    }

    function toggleMobileMenu(): void
    {
        mobileMenuVisibile = !mobileMenuVisibile;
    }

    const mobileMenuItems: {title: string, href: string, icon: string}[] = [
        {title: "Úvod", href: "/", icon: "material-symbols:home"},
        {title: "Menu", href: "/menu", icon: "ion:pizza-sharp"},
        {title: "Kontakt", href: "/kontakt", icon: "ic:baseline-phone"},
    ]

</script>

<!-- MOBILE MENU -->
<section class="pt-6 fixed left-0 top-0 right-0 bottom-0 bg-primary z-50 {mobileMenuVisibile ? "translate-x-0" : "-translate-x-full"} transition-transform">
    <ul class="flex flex-col gap-4 font-title text-white text-3xl font-semibold uppercase">
        {#each mobileMenuItems as {title, href, icon}}
            <li>
                <a class="px-6 py-2 flex justify-center gap-4" class:active={currentHref == href} href={href} on:click={closeMobileMenu}>
                    <span class="relative current-underline">
                        {title}
                    </span>
                </a>
            </li>
        {/each}
    </ul>
    <button class="absolute top-4 right-6 text-white text-4xl" on:click={closeMobileMenu}>
        <Icon icon="line-md:menu-to-close-transition" />
    </button>
</section>

<!-- HEADER -->
<header class="py-3 fixed top-0 left-0 right-0 bg-secondary {scrolled ? "bg-opacity-100" : "bg-opacity-60"} transition-all duration-150 z-40
after:content-[''] after:pointer-events-none after:absolute after:-bottom-8 after:h-8 after:w-full after:from-secondary/60 after:bg-gradient-to-b">
    <div class="container flex justify-between items-center bg-gray-500">
        <a href="/">
            <img src="/images/logo.webp" alt="Logo" class="max-w-[120px] w-full">
        </a>
        <button class="flex flex-col gap-1.5 text-white text-4xl" on:click={toggleMobileMenu}>
            {#each Array(3) as _}
                <div class="h-[4px] w-[30px] bg-white" />
            {/each}
        </button>
    </div>
</header>

<style class="postcss">
    .current-underline::after {
        content: "";
        position: absolute;
        opacity: 0;
        bottom: -8px;
        left: 0px;
        width: 100%;
        height: 3px;
        background-color: theme("colors.white");
        transition: all 0.1s ease;
    }

    a:hover .current-underline::after, .active .current-underline::after {
        opacity: 1;
        bottom: -4px;
    }
</style>
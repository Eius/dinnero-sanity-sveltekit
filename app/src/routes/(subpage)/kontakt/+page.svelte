<script lang="ts">
	import Icon from "@iconify/svelte";
    import type { PageData } from "../kontakt/$types";
	import { formatTime } from "$lib/utils/formatTime";
	import { currentPage } from "$lib/stores/CurrentPage";
	import { onMount } from "svelte";
	import contacts from "$lib/data/contacts";

    export let data: PageData;
    const {openingHours} = data;
    
    onMount(() => {
        currentPage.set("Kontakt");
    })
</script>

<svelte:head>
	<title>Dinnero Pizza | Kontakt</title>
</svelte:head>

<div class="py-16 container">
    <div class="grid grid-cols-3 gap-16">
        <div class="col-span-3 lg:col-span-1 flex flex-col md:flex-row lg:flex-col items-center md:items-start justify-between lg:justify-normal gap-16">
            <section class="flex flex-col gap-4 text-white text-xl items-center md:items-start">
                <h2 class="pb-4 text-4xl font-title tracking">Ozvite sa nám</h2>
                <a href={"tel: " + contacts.phone_number} class="flex items-center gap-3">
                    <span class="text-3xl">
                        <Icon icon="mdi:phone" />
                    </span>
                    <span class="text-xl">
                        {contacts.phone_number}
                    </span>
                </a>
                <p class="flex items-center gap-3">
                    <span class="text-3xl">
                        <Icon icon="mdi:location" />
                    </span>
                    <span>
                        {contacts?.address}
                    </span>
                </p>
                <a href={"mailto: " + contacts.email} class="flex items-center gap-3">
                    <span class="text-3xl">
                        <Icon icon="mdi:email" />
                    </span>
                    <span>
                        {contacts.email}
                    </span>
                </a>
                <a href={contacts.facebook} class="flex items-center gap-3">
                    <span class="text-3xl">
                        <Icon icon="mdi:facebook" />
                    </span>
                    <span>
                        Facebook
                    </span>
                </a>
            </section>
            <section class="flex flex-col gap-4 text-white text-xl">
                <h2 class="pb-4 text-4xl font-title text-center md:text-start">Otváracie hodiny</h2>
                <div class="grid grid-cols-2 max-w-[270px]">
                    {#if openingHours}
                        {#each Object.entries(openingHours) as [dayName, {start, end}]}
                        <p class="col-span-1">{dayName}</p>
                        <p class="col-span-1 text-end">{formatTime(start)} - {formatTime(end)}</p>
                        {/each}
                    {/if}
                </div>
            </section>
        </div>
        <div class="col-span-3 lg:col-span-2">
            <iframe 
            title="Mapa"
            class="aspect-square w-full"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d557.4163122754072!2d18.05693890944762!3d48.35026603785661!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476b38a8ad7642f7%3A0x42fa4fb9bf12cded!2sDinero%20Bar!5e0!3m2!1ssk!2ssk!4v1685372681335!5m2!1ssk!2ssk" 
            style="border:0;" 
            loading="lazy"
            referrerpolicy="no-referrer">
            </iframe>
        </div>
    </div>
</div>

<!-- <div class="bg-[url(/images/header_image_2.jpg)] flex items-center justify-center min-h-[180px] w-full bg-no-repeat bg-cover bg-center aspect-[16/4]" />
<p class="pt-16 block lg:hidden text-white text-center text-5xl font-bold tracking-wider uppercase">Kontakt</p>
<div class="py-16 container grid grid-cols-2 lg:grid-cols-3 gap-8">
    <div class="col-span-2 lg:col-span-1 flex flex-col md:flex-row lg:flex-col items-center md:justify-between lg:justify-start gap-16">
        <div class="flex flex-col gap-6">
            <h2 class="text-white text-4xl font-title tracking">Ozvite sa nám</h2>
            <div class="flex flex-col gap-4 text-white text-xl">
                <div class="flex items-center gap-2">
                    <Icon icon="ic:baseline-phone" />
                    <p>{contacts?.phone_number}</p>
                </div>
                <div class="flex items-center gap-2">
                    <Icon icon="ic:round-email" />
                    <p>{contacts?.email}</p>
                </div>
                <div class="flex items-center gap-2">
                    <Icon icon="mdi:location" />
                    <p>{contacts?.address}</p>
                </div>
                <div class="flex items-center gap-2">
                    <Icon icon="ic:baseline-facebook" />
                    <p>{contacts?.facebook}</p>
                </div>
            </div>
        </div>
        <div class="flex flex-col gap-6">
            <h2 class="text-white text-4xl font-title tracking">Otváracie hodiny</h2>
            <div class="grid grid-cols-3 max-w-[270px] text-white text-xl">
                {#if openingHours}
                    {#each Object.entries(openingHours) as [dayName, {start, end}]}
                    <p class="col-span-1">{dayName}</p>
                    <p class="col-span-2 text-end">{formatTime(start)} - {formatTime(end)}</p>
                    {/each}
                {/if}
            </div>
        </div>
    </div>
</div> -->
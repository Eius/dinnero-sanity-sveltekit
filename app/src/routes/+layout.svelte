<script lang="ts">
	import "../app.css";

	/* COMPONENTS */
	import Header from "$lib/components/layout/Header.svelte";
	
	/* FONTS */
	import "@fontsource/yanone-kaffeesatz/300.css"
	import "@fontsource/yanone-kaffeesatz/400.css"
	import "@fontsource/yanone-kaffeesatz/500.css"
	import "@fontsource/yanone-kaffeesatz/600.css"
	import "@fontsource/yanone-kaffeesatz/700.css"
	import "@fontsource/pacifico/400.css"
	import "@fontsource/port-lligat-slab/400.css"
	import Footer from "$lib/components/layout/Footer.svelte";

</script>

<Header />
<main>
	<slot />
</main>
<Footer />

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
	import "@fontsource/leckerli-one/400.css"
	import "@fontsource/port-lligat-slab/400.css"
	
</script>

<Header />
<main>
	<slot />
</main>
<footer class="footer">
	
</footer>

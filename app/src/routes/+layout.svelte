<script lang="ts">
	import "../app.css";

	/* COMPONENTS */
	import Header from "$lib/components/layout/Header.svelte";
	
	/* FONTS */
	import Footer from "$lib/components/layout/Footer.svelte";

</script>

<Header />
<main>
	<slot />
</main>
<Footer />
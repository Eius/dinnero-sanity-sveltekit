<script lang="ts">
	import contacts from "$lib/data/contacts";
	import Facebook from "$lib/components/Facebook.svelte";

</script>

<footer class="pt-16 bg-secondary flex flex-col gap-12 items-center">
	<a href="/">
		<img src="/images/logo.webp" alt="Logo" class="px-4 max-w-[232px] w-full" width="651" height="250">
	</a> 
	<ul class="flex gap-8 font-title text-2xl text-white">
		<li>
			<a href="/" class="hover:text-accent-green transition-colors">Úvod</a> 
		</li>
		<li>
			<a href="/kontakt" class="hover:text-accent-green transition-colors">Kontakt</a> 
		</li>
		<li>
			<a href="/menu" class="hover:text-accent-green transition-colors">Menu</a> 
		</li>
	</ul> 
	<Facebook />
	<div class="py-2 px-16 border-t border-gray border-dashed text-center">
		<p class="text-gray text-lg">
			<a href="/ochrana-osobnych-udajov" class="text-white hover:text-accent-green transition-colors">Ochrana súkromia</a> / Dinnero Pizza © 2024 / Všetky práva vyhradené
		</p>
	</div>
</footer>
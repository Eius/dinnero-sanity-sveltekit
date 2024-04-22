<script lang="ts">
	import { onNavigate } from "$app/navigation";

    let navigating = false;

    onNavigate(async (navigation) => {
        navigating = true;
        navigation.complete.then(() => {
            navigating = false;
            console.log("Navigating finished")
        });
    })
</script>

<div class="fixed inset-0 bg-accent-red z-50 pointer-events-none {navigating ? "bg-opacity-100" : "bg-opacity-0"}
            transition-opacity duration-300">

</div>
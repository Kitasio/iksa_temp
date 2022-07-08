<script>
    import { hoveredPanel } from "$lib/functions/stores";
</script>

<img
	on:click={() => ($hoveredPanel = !$hoveredPanel)}
	class="fixed z-30 bottom-4 right-4 m-3 lg:hidden w-10 cursor-pointer"
	src="/images/icons/menu.svg"
	alt=""
/>

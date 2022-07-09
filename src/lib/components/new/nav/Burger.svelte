<script>
    import { hoveredPanel } from "$lib/functions/stores";
</script>

<img
	on:click={() => ($hoveredPanel = !$hoveredPanel)}
	class="z-50 absolute lg:hidden w-10 h-10 cursor-pointer"
	src="/images/icons/menu.svg"
	alt=""
/>

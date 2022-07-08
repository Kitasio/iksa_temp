<script>
	import { fade, fly } from 'svelte/transition';
	import { hoveredPanel } from '$lib/functions/stores';
	import PanelItems from './PanelItems.svelte';

	const hoverOff = () => {
        $hoveredPanel = false;
	};
</script>

{#if $hoveredPanel}
	<div
		transition:fade={{ duration: 200 }}
		class="grid grid-cols-12 bg-black bg-opacity-20 z-20 h-screen fixed top-0 left-0 w-full"
	>
		<div
			transition:fly={{ x: -300, duration: 300 }}
			class="px-10 lg:pt-28 overflow-y-scroll bg-white z-20 col-span-10 sm:col-span-8 md:col-span-7 lg:col-span-5 h-screen xl:mr-10 2xl:mr-20"
		>
			<PanelItems />
		</div>
		<div on:mouseenter={hoverOff} class="h-screen col-span-7 xl:-ml-10 2xl:-ml-20" />
	</div>
{/if}

<script>
	import { createEventDispatcher } from 'svelte';
	import { fade, fly } from 'svelte/transition';

	const dispatch = createEventDispatcher();
	const close = () => dispatch('close');

	let modal;

	const handle_keydown = (e) => {
		if (e.key === 'Escape') {
			close();
			return;
		}

		if (e.key === 'Tab') {
			// trap focus
			const nodes = modal.querySelectorAll('*');
			const tabbable = Array.from(nodes).filter((n) => n.tabIndex >= 0);

			let index = tabbable.indexOf(document.activeElement);
			if (index === -1 && e.shiftKey) index = 0;

			index += tabbable.length + (e.shiftKey ? -1 : 1);
			index %= tabbable.length;

			tabbable[index].focus();
			e.preventDefault();
		}
	};
</script>

<svelte:window on:keydown={handle_keydown} />

<div transition:fade={{duration: 100}} class="modal-background z-50" on:click={close} />

<div transition:fly={{duration: 300, y: -40}} class="modal" role="dialog" aria-modal="true" bind:this={modal}>
	<slot name="header" />
	<slot />

	<!-- svelte-ignore a11y-autofocus -->
	<!-- <button autofocus on:click={close}>close modal</button> -->
</div>

<style>
	.modal-background {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.3);
	}

	.modal {
		position: fixed;
		left: 50%;
		top: 50%;
		width: calc(100vw - 4em);
		max-width: 32em;
		max-height: calc(100vh - 4em);
		overflow: auto;
		transform: translate(-50%, -50%);
		padding: 1em;
		border-radius: 0.5em;
		background: white;
		z-index: 10000;
	}
</style>

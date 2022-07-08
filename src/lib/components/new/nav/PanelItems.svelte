<script>
	import { activeLink } from '$lib/functions/stores';
	import { links } from '$lib/links';
	import { fade } from 'svelte/transition';
	import Link from '../links/Link.svelte';
</script>

<!-- Desktop -->
{#key $activeLink}
	<div in:fade={{ duration: 150, delay: 110 }} out:fade={{ duration: 100 }} class="space-y-5 hidden lg:inline-block">
		{#if $activeLink}
			{#each $activeLink['sublinks'] as link}
				<div class="xl:text-xl">
					<Link link={link.link} name={link.linkname} />
				</div>
			{/each}
		{/if}
	</div>
{/key}

<!-- Mobile -->
<div class="lg:hidden space-y-10 divide-y">
	{#each links as link}
		<div class="pt-5">
			<div class="flex items-center justify-center">
				<a class="text-2xl text-teal-800" href={link.link}>{link.linkname}</a>
			</div>
			<div class="mt-3">
				{#each link['sublinks'] as sublink}
					<div>
						<Link name={sublink.linkname} link={sublink.link} />
					</div>
				{/each}
			</div>
		</div>
	{/each}
</div>

<script lang="ts">
	import { hoveredPanel, activeLink } from '$lib/functions/stores';
	import { links } from '$lib/links';
	import Link from '$lib/components/new/links/Link.svelte';
	import Panel from '$lib/components/new/nav/Panel.svelte';
	import Burger from './Burger.svelte';

	const hoverLink = (link: any) => {
		if ($activeLink != link && link['sublinks'].length) {
			$activeLink = link;
		}
		// Opens panel only if there's content
		if (link['sublinks'].length) {
			$hoveredPanel = true;
		}
	};
</script>

<div class="py-5 grid grid-cols-12 bg-iksa-50 hover:bg-iksa-100 transition duration-300">
	<Panel />
	<div
		class="hidden lg:flex px-10 items-center justify-between text-sm xl:text-base col-span-5 xl:pr-20 2xl:pr-32"
	>
		{#each links as link}
			<span
				class={link == $activeLink && $hoveredPanel ? 'z-20 text-teal-700 underline' : 'z-20'}
				on:mouseenter={() => hoverLink(link)}
			>
				<Link link={link.link} name={link.linkname} />
			</span>
		{/each}
	</div>
	<a href="/" class="col-span-2 w-32 lg:w-auto pl-10 lg:pl-0 flex lg:justify-center items-center">
		<img
			class="w-14 h-14 lg:w-20 lg:h-20 hover:scale-105 transition duration-300"
			src="/images/logo-new.svg"
			alt="logo new"
		/>
	</a>
	<div class="col-span-8 pr-10 lg:col-span-5 flex gap-5 justify-end items-center">
		<span class="hidden md:inline-block">
			<Link name={'Личный кабинет'} link={'https://www.ifes-ras.ru/loginV2'} />
		</span>
		<div class="flex items-center justify-center space-x-3 mb-1">
			<a class="hover:scale-105 transition" href="https://www.ifes-ras.ru/ru-RU" rel="external">
				<img class="w-5 h-5" src="/images/sidebar/ru.svg" alt="" />
			</a>
			<a class="hover:scale-105 transition" href="/zh-CN" rel="external">
				<img class="w-5 h-5" src="/images/sidebar/zh.svg" alt="" />
			</a>
			<a class="hover:scale-105 transition" href="/en-US" rel="external">
				<img class="w-5 h-5" src="/images/sidebar/uk.svg" alt="" />
			</a>
		</div>
	</div>
	<span class="col-sapn-1 flex items-center justify-end">
		<Burger />
	</span>
</div>

<script lang="ts">
	import BookBox from '$lib/components/new/index/BookBox.svelte';
	import GradBox from '$lib/components/new/index/GradBox.svelte';
	import Link from '$lib/components/new/links/Link.svelte';
	import Main from '$lib/components/new/news/Main.svelte';
	import NewsBox from '$lib/components/new/news/NewsBox.svelte';
	import ModalGeneric from '$lib/components/ModalGeneric.svelte';
	import Subscribe from '$lib/components/Subscribe.svelte';
	import type { news, book } from '@prisma/client';

	export let news: news[];
	export let books: book[];
	export let pinned: any[];

	let showModal = false;
</script>

{#if showModal}
	<ModalGeneric on:close={() => (showModal = false)}>
		<h2 class="text-xl text-center mt-3" slot="header">
			Подписка на рассылку новостей
		</h2>
		<Subscribe on:close={() => (showModal = false)} />
	</ModalGeneric>
{/if}
<div class="2xl:grid grid-cols-5 gap-5">
	<h1
		class="col-span-1 mb-5 2xl:mb-0 font-semibold text-xl lg:text-2xl xl:text-3xl md:tracking-wide"
	>
		ИНСТИТУТ КИТАЯ <span class="font-medium text-xl xl:text-2xl">И&nbsp;СОВРЕМЕННОЙ АЗИИ РАН</span> <br><span class="text-base md:text-lg lg:text-xl xl:text-2xl font-normal text-gray-600">ОСНОВАН В&nbsp;1966&nbsp;ГОДУ</span>
	</h1>
	<span class="col-span-4">
		<Main news={pinned[0]} />
	</span>
</div>

<div class="mt-16 lg:mt-28 space-y-5">
	<h2 class="namer">
		<Link name="НОВОСТИ ИНСТИТУТА" link="https://www.ifes-ras.ru/ru-RU/news" />
		<span on:click="{() => showModal = true}" class="text-teal-700 cursor-pointer hover:underline">[ПОДПИСАТЬСЯ]</span>
	</h2>
	<div class="gap-5 sm:space-y-0 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
		{#each news as i (i.id)}
			<NewsBox news={i} />
		{/each}
	</div>
</div>

<div class="mt-16 lg:mt-28 lg:space-y-0 grid gap-5 xl:grid-cols-5">
	<h2 class="namer xl:col-span-2 xl:row-start-1">Мероприятия</h2>
	<div class="grid place-content-stretch grid-cols-1 gap-5 xl:col-span-2 lg:mr-32">
		<div
			class="p-5 flex flex-col justify-between border border-iksa-900 bg-white hover:shadow-border transition"
		>
			<h3 class="font-semibold">
				Конференция «The Challenge for Euro-Asia: Past – Present – Future»
			</h3>
			<p class="date mt-10">16.10.2022</p>
		</div>
		<div
			class="p-5 flex flex-col justify-between border border-iksa-900 bg-white hover:shadow-border transition"
		>
			<h3 class="font-semibold">
				Конференция «The Challenge for Euro-Asia: Past – Present – Future»
			</h3>
			<p class="date mt-10">16.10.2022</p>
		</div>
	</div>

	<h2 class="namer mt-10 xl:mt-0 xl:col-span-3 xl:row-start-1">
		<Link name="Издания и документы" link="https://www.ifes-ras.ru/ru-RU/library" />
	</h2>
	<div class="grid gap-5 md:grid-cols-2 md:grid-rows-2 xl:col-span-3 2xl:grid-cols-3">
		{#each books as i (i.id)}
			<BookBox book={i} />
		{/each}
		<a
			href="https://www.ifes-ras.ru/ru-RU/releases"
			class="hidden group 2xl:flex flex-col justify-between  p-5 border border-iksa-900 bg-white hover:shadow-border transition col-start-3 row-start-1 row-end-3"
		>
			<p class="text-3xl font-medium">ЖУРНАЛЫ ИНСТИТУТА КИТАЯ И СОВЕРМЕННОЙ АЗИИ</p>
			<img
				class="w-10/12 group-hover:scale-105 transition origin-left"
				src="/images/icons/long-arrow.svg"
				alt=""
			/>
		</a>
	</div>
</div>

<div class="my-16 lg:mt-28 lg:space-y-0 grid gap-5 grid-cols-5">
	<h2 class="namer mt-10 lg:mt-0 col-span-5 lg:col-span-3 xl:col-span-2 lg:row-start-1">
		<Link name="АСПИРАНТУРА" link="https://www.ifes-ras.ru/ru-RU/graduate" />
	</h2>
	<div class="col-span-5 md:col-span-4 lg:col-span-3 xl:col-span-2 md:row-span-2">
		<GradBox />
	</div>
	<h2 class="namer mt-10 lg:mt-0 col-span-5 lg:col-span-3 xl:col-span-2 xl:col-start-4 lg:row-start-1">
		<Link name="Партнёрства" link="https://www.ifes-ras.ru/" />
	</h2>
	<a href="/" class="p-5 border border-iksa-900 bg-white hover:shadow-border transition col-span-5 md:col-span-4 lg:col-start-4 lg:col-end-5 md:row-span-2">
		<p class="font-semibold text-sm break-words">КООРДИНАЦИОННЫЙ СОВЕТ ПО КИТАЮ И СТРАНАМ ВОСТОЧНОЙ И ЮГО-ВОСТОЧНОЙ АЗИИ</p>
	</a>
	<a href="/" class="p-5 border border-iksa-900 bg-white hover:shadow-border transition col-span-5 md:col-span-4 lg:col-span-1 lg:col-start-5">
		<p class="font-semibold text-sm">ОБЩЕСТВО РОССИЙСКО-КИТАЙСКОЙ ДРУЖБЫ</p>
	</a>
	<a href="/" class="p-5 border border-iksa-900 bg-white hover:shadow-border transition col-span-5 md:col-span-4 lg:col-span-1 lg:col-start-5">
		<p class="font-semibold text-sm">КАФЕДРА ВШЭ / ЦЕНТР ИЗУЧЕНИЯ ВОСТОЧНОЙ АЗИИ</p>
	</a>
</div>
<script lang="ts">
	import type { news } from '@prisma/client';
	export let news: news;

	const cutComma = (str: string) => {
		let words = str.split(',');
		if (words.length) {
			return words[0];
		}
		return str;
	};
</script>

<a href="https://www.ifes-ras.ru/ru-RU/news/{news.id}" class="group h-full flex flex-col">
	<div class="relative">
		<img class="object-cover -z-10 h-48 w-full" src="https://www.ifes-ras.ru/{news.img}" alt="" />
		<a
			href="https://www.ifes-ras.ru/ru-RU/news/tag/{news.tag}"
			class="absolute py-1.5 px-1.5 bg-white text-xs bottom-5 left-5 border border-iksa-900 hover:shadow-border transition"
			>#{cutComma(news.tag || '')}</a
		>
	</div>
	<div
		class="p-5 grow flex flex-col justify-between border border-iksa-900 bg-white group-hover:shadow-border transition"
	>
		<h3 class="font-semibold">{news.title}</h3>
		<p class="date mt-10">{news.date}</p>
	</div>
</a>

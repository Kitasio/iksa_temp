<script lang="ts">
	import type { book } from '@prisma/client';
	const cutWords = (str: string, max: number) => {
		const words = str.split(' ');
		if (words.length > max) {
			let lessWords = words.slice(0, max);
			return lessWords.join(' ') + '...';
		}
		return str;
	};

	export let book: book;
</script>

<a
	href="https://www.ifes-ras.ru/ru-RU/library/{book.id}"
	class="flex gap-3 p-5 border border-iksa-900 bg-white hover:shadow-border transition"
>
	<img class="w-16 object-cover" src="https://www.ifes-ras.ru/{book.img || '/images/sidebar/logo.png'}" alt="" />
	<p class="text-sm">{cutWords(book.title || '', 10)}</p>
</a>

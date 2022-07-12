<script lang="ts">
    import type { news } from '@prisma/client'

    export let news: news;
</script>

<a href="https://www.ifes-ras.ru/ru-RU/news/{news.id}" class="flex flex-col lg:flex-row group">
    <img class="lg:w-80 xl:w-3/12 2xl:w-4/12 object-cover xl:h-[30rem]" src="https://www.ifes-ras.ru/{news.img}" alt="">
    <div class="xl:w-9/12 2xl:w-8/12 p-5 flex flex-col justify-between border border-iksa-900 bg-white group-hover:shadow-border transition">
        <p class="font-semibold lg:text-sm xl:text-lg">{news.title}</p>
        <p class="mt-3 text-sm xl:text-base">{@html news.body}</p>
        <p class="date mt-10">{news.date}</p>
    </div>
</a>
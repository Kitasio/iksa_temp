<script lang="ts">
    import type { news } from '@prisma/client'

    export let news: news;
</script>

<a href="https://www.ifes-ras.ru/ru-RU/news/{news.id}" class="flex flex-col md:flex-row group">
    <img class="md:w-1/2 lg:w-7/12 object-cover md:h-80 xl:h-96" src="https://www.ifes-ras.ru/{news.img}" alt="">
    <div class="md:w-1/2 lg:w-5/12 p-5 lg:p-7 flex flex-col justify-between border border-iksa-900 bg-white group-hover:shadow-border transition">
        <p class="font-semibold lg:text-lg">{news.title}</p>
        <p class="date mt-10">{news.date}</p>
    </div>
</a>
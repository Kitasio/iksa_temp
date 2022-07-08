<script>
	let leftLinks = [
		{ name: 'ВАКАНСИИ И КОНКУРСЫ', url: '/ru-RU/contest' },
		{ name: 'ПРОТИВОДЕЙСТВИЕ КОРРУПЦИИ', url: '/ru-RU/anticorruption' },
		{ name: 'ДОКУМЕНТЫ', url: '/ru-RU/documents' },
		{ name: 'КОНТАКТЫ', url: '/ru-RU/contact' }
	];
	let rightLinks = [
		{ name: 'СТАРЫЙ САЙТ', url: 'http://old.ifes-ras.ru/' },
		{ name: 'КАБИНЕТ СОТРУДНИКА', url: '/loginV2' },
		{ name: 'СИСТЕМА СТАТЕЙ', url: '/' }
	];
</script>

<div
	class="px-10 py-10 md:py-20 bg-iksa-700 text-iksa-100 text-sm md:text-base md:flex justify-between"
>
	<div class="flex flex-col gap-3 md:gap-5">
		{#each leftLinks as link}
			<a class="hover:underline hover:text-iksa-50" href={link.url}>{link.name}</a>
		{/each}
	</div>
	<div class="flex flex-col gap-3 md:gap-5 mt-3 md:mt-0 md:order-last md:text-right">
		{#each rightLinks as link}
			<a class="hover:underline hover:text-iksa-50" href={link.url}>{link.name}</a>
		{/each}
		<button class="hover:underline hover:text-iksa-50">ПОДПИСАТЬСЯ НА НОВОСТИ</button>
	</div>
	<div class="flex flex-col items-center mt-5 md:mt-0 gap-3">
		<img class="w-20 h-20" src="/images/icons/logo-gray.svg" alt="" />
		<div class="flex space-x-3 mt-2">
			<a target="_blank" href="https://www.facebook.com/ifesras">
				<img class="w-5 h-5" src="/images/icons/fb-gray.svg" alt="" />
			</a>
			<a target="_blank" href="https://zen.yandex.ru/id/6230da85bb9d86373d61a425">
				<img class="w-5 h-5" src="/images/icons/dzen.png" alt="" />
			</a>
			<a target="_blank" href="https://t.me/asiatica_ru">
				<img class="w-5 h-5" src="/images/icons/tg-gray.svg" alt="" />
			</a>
		</div>
		<p>Copyright © {new Date().getFullYear()}</p>
	</div>
</div>

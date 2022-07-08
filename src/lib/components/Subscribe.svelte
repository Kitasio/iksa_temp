<script>
    import { createEventDispatcher } from 'svelte';
    import { fly } from 'svelte/transition'

    const dispatch = createEventDispatcher();
	const close = () => dispatch('close');

	let email;
	let checked = false;
    let subscribed = false;
    let error = false;

	const handleSubmit = async () => {
		if (checked) {
			const res = await fetch('/endpoints/subscribe', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(email)
			});

            if (res.ok) {
                subscribed = true;
                email = '';
                setTimeout(() => {
                    subscribed = false;
                    close()
                }, 2000);
            } else {
                error = true;
                setTimeout(() => {
                    error = false;
                    close()
                }, 2000);
            }
		}
	};
</script>

<form on:submit|preventDefault={handleSubmit} class="space-y-5 mt-5 p-3">
	<input class="w-full p-2 rounded" bind:value={email} required type="email" placeholder="Email" />

	<div class="flex space-x-2">
		<input bind:checked type="checkbox" />
		<p class="text-xs text-gray-500">Нажимая, вы соглашаетесь на обработку персональных данных.</p>
	</div>
	{#if checked}
		<div in:fly={{ duration: 200, y: 20 }} class="flex justify-center">
			<button type="submit" class="btn">Подписаться</button>
		</div>
	{/if}
    {#if subscribed}
        <p in:fly={{ duration: 200, y: 20 }} class="text-center text-sm text-deep-green">Вы успешно подписались на новости</p>
    {/if}
    {#if error}
        <p in:fly={{ duration: 200, y: 20 }} class="text-center text-sm text-base-red">Произошла ошибка</p>
    {/if}
</form>

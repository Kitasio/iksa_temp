<script>
	import '../app.css';
    import Footer from '$lib/components/new/Footer.svelte';
	import Navbar from '$lib/components/new/nav/Navbar.svelte';
</script>

<div class="text-iksa-800 font-open">
	<div>
		<Navbar />
		<div class="px-10 py-10 bg-iksa-50 min-h-screen">
			<slot />
		</div>
	</div>
	<Footer />
</div>

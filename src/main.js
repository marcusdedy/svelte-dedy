import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Marcus Dedy',
		profesi: '{ Web Developer }',
		img: './gambar.png'
	}
});

export default app;
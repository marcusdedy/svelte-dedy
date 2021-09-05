<script>
	export let name;
	export let profesi;
	const foto = "/img/gambar.png";
</script>

<main>
	<img alt="..." src="{foto}"/>
	<h1> .: {name} :. </h1>
	<p> {profesi} </p>
</main>

<style>

	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	img {
        max-width: 20%;
  		height: auto;
		-webkit-box-reflect: below 1px linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.4));
    }

	h1 {
		color:indianred;
		font-size: 4em;
		font-weight: 500;
		text-shadow:1px 1px cornflowerblue;
	}

	p {
		color: black;
		font-size:x-large;
		font-weight: 500;
		text-shadow: 3px 3px cornflowerblue;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
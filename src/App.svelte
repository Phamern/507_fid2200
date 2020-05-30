<script>
import { Router, Link, Route } from 'svelte-routing'
import Header from './components/Header.svelte'
import LandingPage from './components/LandingPage.svelte'
import Fire from './components/Fire.svelte'
import Water from './components/Water.svelte'
import Air from './components/Air.svelte'
import Earth from './components/Earth.svelte'

export let url = '';
</script>
<svelte:head>
	<!--Fonts-->
	<link rel="stylesheet" href="https://use.typekit.net/iiy6nab.css">
	<link href="https://fonts.googleapis.com/css2?family=Inknut+Antiqua:wght@300;400;900&display=swap" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet">
</svelte:head>
<Router url="{url}">
		<Header />
  <div>
    <Route path="/"><LandingPage /></Route>
    <Route path="fire" component="{Fire}" type='fire' />
    <Route path="water" component="{Water}" type='water'/>
    <Route path="air" component="{Air}" type='air'/>
    <Route path="earth" component="{Earth}" type='earth'/>
  </div>
</Router>

<style>

:global(html, body) {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
	font-family: 'poppins', sans-serif;
}

:global(h1) {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}

:global(a, a:hover, a:visited) {
	font-family: 'Cormorant Garamond', serif;
	color: #fff;
	text-decoration: none;
}

</style>
<script>
import { Router, Link, Route } from 'svelte-routing'
import { db, auth, googleProvider } from './components/firebase.js'
import { authState } from 'rxfire/auth';
import Profile from './components/Profile.svelte'
import Login from './components/Login.svelte'
import Fruits from './components/Fruits.svelte'
import Lemon from './components/Lemon.svelte'
import LandingPage from './components/LandingPage.svelte'
import Header from './components/Header.svelte'

export let url = '';

export let signedIn = false;

const loggedIn = (user) => {
	signedIn = !signedIn
}

</script>
<svelte:head>
	<!--Fonts-->
	<link rel="stylesheet" href="https://use.typekit.net/iiy6nab.css">
	
</svelte:head>
<Router url="{url}">
		<Header />
  <div>
    <Route path="/"><LandingPage /></Route>
    <Route path="login" component={Login}/>
    <Route path="fruits" component="{Fruits}"/>
    <Route path="lemon" component="{Lemon}"/>
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
	font-family: 'flood-std', sans-serif;
	font-weight: 100;
}

:global(a, a:hover, a:visited) {
	font-family: 'flood-std', sans-serif;
	color: #fff;
	text-decoration: none;
}

</style>
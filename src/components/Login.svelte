<script>
// import firebase from './firebase.js'
import {auth, googleProvider} from './firebase.js'
import { authState } from 'rxfire/auth'
import Profile from './Profile.svelte'
import Header from './Header.svelte'

export let user;

const unsubscribe = authState(auth).subscribe(u => user = u);


const login = () => {
	auth.signInWithPopup(googleProvider);
}

const logout = () => {
	auth.signOut()
}



</script>

<main>
	{#if user}
		<Profile {...user} />
		<button on:click={logout}>Logout</button>
	{:else}
		<button on:click={login}>Sign in</button>
	{/if}
</main>

<style>

main {
	padding-top: 75px;
	background-color: #fff44f;
	display: grid;
	place-items: center;
	width: 100vw;
	height: 100vh;
}

</style>
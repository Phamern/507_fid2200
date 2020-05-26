<script>
// import firebase from './firebase.js'
import {auth, googleProvider} from './firebase.js'
import { authState } from 'rxfire/auth'
import Profile from './Profile.svelte'
// import Todos from '.Todos.svelte'

export let user;

const unsubscribe = authState(auth).subscribe(u => user = u);


function login() {
	auth.signInWithPopup(googleProvider);
}

</script>

<main>
	{#if user}
		<Profile {...user} />
		<button on:click={ () => auth.signOut()}>Logout</button>
	{:else}
		<button on:click={login}>Sign in</button>
	{/if}
</main>

<style>

main {
	padding-top: 75px;
	background-color: #fff;
}

</style>
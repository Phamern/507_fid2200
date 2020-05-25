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


{#if user}
	<Profile {...user} />
	<button on:click={ () => auth.signOut()}>Logout</button>
	<hr>
	<!-- <Todos uid={user.uid} /> -->
{:else}
	<button on:click={login}>Sign in</button>
{/if}
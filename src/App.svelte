<script>
import { Router, Link, Route } from 'svelte-routing'
import { db, auth, googleProvider } from './components/firebase.js'
import { authState } from 'rxfire/auth';
import Profile from './components/Profile.svelte'
import Login from './components/Login.svelte'
import Fruits from './components/Fruits.svelte'
import LandingPage from './components/LandingPage.svelte'

export let url = '';

</script>


<Router url="{url}">
  <nav>
    <Link to="/">Home</Link>
    <Link to="fruits">Fruits</Link>
    <Link to="login">Login</Link>
  </nav>
  <div>
    <Route path="/"><LandingPage /></Route>
    <Route path="/login" component={Login}/>
    <Route path="fruits" component="{Fruits}"/>
  </div>
</Router>
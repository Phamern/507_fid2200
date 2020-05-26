<script>
  import { Link } from 'svelte-routing'
  import Fruits from './Fruits.svelte'
  import Login from './Login.svelte'

</script>

<header>
  <h1>Squeeze</h1>
  <div class='header-mid-items'>
    <Link to="/"><p class='header-item'>Home</p></Link>
    <Link to="fruits"><p class='header-item'>Fruits</p></Link>
  </div>
  <Link to="login"><p class='header-item'></p></Link>
</header>

<style>

  header {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 100vw;
    height: 75px;
    background-color: none;
    position: fixed;
    place-items: center;
  }

  h1 {
    font-family: 'flood-std', sans-serif;
    color:white; 
  }

  .header-mid-items {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .header-item {
    font-family: 'poppins', sans-serif;
    font-size: 1rem;
    color: #fff;
    mix-blend-mode: difference;
  }

</style>
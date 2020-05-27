<script>
  import { Link } from 'svelte-routing'

  let show = false

</script>

<nav class='fullscreen'>
  <h1>Squeeze</h1>
  <Link on:click={!show} to="/"><p class='header-item'>Home</p></Link>
  <Link on:click={!show} to="fruits"><p class='header-item'>Fruits</p></Link>
</nav>

<style>

  nav {
    width: 100vw;
    height: 100vh;
    top: 0;
    position: absolute;
    display: grid;
    place-items: center;
    grid-template-rows: repeat(3, 100px);
    background-color: #1d1d1d;
    padding: 5rem;
  }


  h1 {
    font-family: 'flood-std', sans-serif;
    color:white; 
    font-size: 2rem;
    margin-top: 3rem;
  }

  .header-item {
    font-size: 1.2rem;
    color: #fff;
  }

</style>
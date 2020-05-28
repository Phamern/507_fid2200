<script>
  import { Link } from 'svelte-routing'

  let show = false

</script>

<nav class='fullscreen'>
  <h1>Squeeze</h1>
  <div class='links'>
    <Link on:click={!show} to="/"><p class='header-item'>Home</p></Link>
    <Link on:click={!show} to="fire"><p class='header-item'>Fire</p></Link>
    <Link on:click={!show} to="water"><p class='header-item'>Water</p></Link>
    <Link on:click={!show} to="air"><p class='header-item'>Air</p></Link>
    <Link on:click={!show} to="earth"><p class='header-item'>Earth</p></Link>
  </div>
</nav>

<style>

  nav {
    width: 100vw;
    height: 100vh;
    top: 0;
    position: absolute;
    display: grid;
    justify-content: center;
    grid-template-rows: repeat(3, 100px);
    background-color: #1d1d1d;
    gap: 1rem;
  }


  h1 {
    font-family: 'flood-std', sans-serif;
    color:white; 
    font-size: 2rem;
    margin-top: 3rem;
  }

  .links {
   display: grid;
   justify-content: center;
  }

  .header-item {
    font-size: 1.2rem;
    color: #fff;
    text-align: center;
  }

</style>
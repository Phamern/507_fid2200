<script>
  import { Link } from 'svelte-routing'
  import { fly } from 'svelte/transition'

  let show = false

</script>

<nav transition:fly={{x: 300}} class='fullscreen'>
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
    width: 30vw;
    height: 100vh;
    top: 0;
    right: 0;
    position: absolute;
    display: grid;
    place-items: center;
    background-color: #843f5b;
    gap: 1rem;
  }

  .links {
    padding-top: 15rem;
    display: grid;
    grid-template-rows: repeat(5, 4rem);
    height: 100vh;
    place-items: center;
  }

  .header-item {
    font-family: 'Inknut Antiqua', serif;
    font-size: 1.5rem;
    color: #fff;
    text-align: center;
  }

  @media (max-width: 900px) {
    nav {
      width: 100%;
    }
  }


</style>
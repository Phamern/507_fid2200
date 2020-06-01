<script>
  import { Link } from 'svelte-routing'
  import { fly } from 'svelte/transition'

  let show = false

</script>

<nav transition:fly={{x: 300}} class='side-nav'>
  <div class='links'>
    <div class='link-container'>
      <Link on:click={!show} to="/"><p class='nav-item'>Home</p></Link>
      <Link on:click={!show} to="fire"><p class='nav-item'>Fire</p></Link>
      <Link on:click={!show} to="water"><p class='nav-item'>Water</p></Link>
      <Link on:click={!show} to="air"><p class='nav-item'>Air</p></Link>
      <Link on:click={!show} to="earth"><p class='nav-item'>Earth</p></Link>
    </div>
  </div>
</nav>

<style>

  .side-nav {
    width: 30vw;
    height: 100vh;
    top: 0;
    right: 0;
    position: fixed;
    background-color: #843f5b;
  }

  .links{
    display: grid;
    width: 100%;
    height: 100%;
    place-items: center;
  }

  .link-container {
    display: grid;
    grid-template-rows: repeat(5, 4rem);
  }

  .nav-item {
    font-family: 'Inknut Antiqua', serif;
    font-size: 1.5rem;
    color: #fff;
    text-align: center;
  }

  @media (max-width: 900px) {
    .side-nav {
      width: 100%;
    }
  }


</style>
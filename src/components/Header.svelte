<script>
  import { Link } from 'svelte-routing'
  import { fade } from 'svelte/transition'
  import BurgerMenu from './BurgerMenu.svelte'

  let show = false

  const showBurger = () => {
    show = !show
  }

</script>

<header>
  <Link to="/"><h1>elements</h1></Link>
  <div class='header-mid-items'>
    <Link to="fire"><p class='header-item'>Fire</p></Link>
    <Link to="water"><p class='header-item'>Water</p></Link>
    <Link to="air"><p class='header-item'>Air</p></Link>
    <Link to="earth"><p class='header-item'>Earth</p></Link>
  </div>
  <Link to="login"><p class='header-item'></p></Link>
  <div class='hamburger' on:click={showBurger}>
      <div class='hamburger-icon'></div>
      <div class='hamburger-icon'></div>
      <div class='hamburger-icon'></div>
  </div>
    {#if show}
      <BurgerMenu />
    {/if}

</header>

<style>

  header {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 100vw;
    height: 75px;
    position: fixed;
    place-items: center;
    z-index: 1;
  }

  h1 {
    font-family: 'Cormorant Garamond', serif;
    letter-spacing: 1rem;
    font-size: 1.2rem;
    color:#fff; 
  }

  .header-mid-items {
    display: grid;
    grid-template-columns: repeat(5, 5rem);
  }

  .header-item {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1rem;
    color: #fff;
    text-align: center;
    mix-blend-mode: difference;
  }

  .hamburger {
    display: none;
  }

  @media (max-width: 900px) {
    h1 {
      font-size: 1.5rem;
    }

    .hamburger {
      z-index: 1;
      display: grid;
      grid-template-rows: repeat(3, 5px);
      height: 30px;
      position: absolute;
      right: 5rem;
      gap: 4px;
    }
    
    .hamburger-icon {
      width: 30px;
      height: 2px;
      background-color: #fff;
    }

    .header-mid-items {
      display: none;
    }


  }

</style>
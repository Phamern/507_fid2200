<script>
  import { Link } from 'svelte-routing'
  import { fade } from 'svelte/transition'
  import Fruits from './Fruits.svelte'
  import Login from './Login.svelte'
  import BurgerMenu from './BurgerMenu.svelte'

  let show = false

  const showBurger = () => {
    show = !show
  }

</script>

<header>
  <h1>Squeeze</h1>
  <div class='header-mid-items'>
    <Link to="/"><p class='header-item'>Home</p></Link>
    <Link to="fruits"><p class='header-item'>Fruits</p></Link>
  </div>
  <Link to="login"><p class='header-item'></p></Link>
  <button class='hamburger' on:click={showBurger}>
    <div class='hamburger-icon'>I</div>
    <div class='hamburger-icon'>I</div>
    <div class='hamburger-icon'>I</div>
  </button>
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
    background-color: none;
    position: fixed;
    place-items: center;
    z-index: 1000;
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
  }

  .hamburger {
    display: none;
  }

  @media (max-width: 900px) {
    h1 {
      font-size: 1.5rem;
    }

    .hamburger {
      display: block;
      z-index: 1;
      position: absolute;
      right: 5vw;
      text-decoration: none;
      width: 2rem;
      background-color: transparent;
      border: none;
      user-select: none;
    }
    
    .hamburger-icon {
      font-family: 'flood-std', sans-serif;
      font-size: 2rem;
      display: grid;
      grid-template-rows: repeat(3, 0.2rem);
      user-select: none;
      transform: rotate(70deg);
    }

    .header-mid-items {
      display: none;
    }


  }

</style>
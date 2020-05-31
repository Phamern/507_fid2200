<script>
  import { Link } from 'svelte-routing'
  import { fade } from 'svelte/transition'
  import BurgerMenu from './BurgerMenu.svelte'
  import BurgerIcon from './BurgerIcon.svelte'

  let show = false

  const showBurger = () => {
    show = !show
  }

</script>

<header>
  <Link to="/"><h1>elements</h1></Link>
  <!-- <div class='header-mid-items'>
    <Link to="fire"><p class='header-item'>Fire</p></Link>
    <Link to="water"><p class='header-item'>Water</p></Link>
    <Link to="air"><p class='header-item'>Air</p></Link>
    <Link to="earth"><p class='header-item'>Earth</p></Link>
  </div> -->
  <BurgerIcon show={show} showBurger={showBurger}/>
</header>

<style>

  header {
    display: grid;
    /* grid-template-columns: repeat(3, 1fr); */
    width: 100vw;
    height: 75px;
    position: fixed;
    place-items: center;
    z-index: 1;
  }

  h1 {
    font-family: 'Cormorant Garamond', serif;
    letter-spacing: .5rem;
    font-size: 1.2rem;
    color:#fff; 
    padding-left: 2rem;
  }

  /* .header-mid-items {
    display: grid;
    grid-template-columns: repeat(5, 5rem);
  }

  .header-item {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1rem;
    color: #fff;
    text-align: center;
    mix-blend-mode: difference;
  } */

  /* .hamburger {
    display: none;
  } */

  @media (max-width: 900px) {
    h1 {
      font-size: 1.5rem;
    }

    /* .header-mid-items {
      display: none;
    } */


  }

</style>
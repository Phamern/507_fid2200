<script>
  import { Link } from 'svelte-routing'
  import { fade } from 'svelte/transition'
  import BurgerMenu from './BurgerMenu.svelte'
  import BurgerIcon from './BurgerIcon.svelte'

  let show = false

  //Settes for å definere om side navigasjonen skal vises eller ikke
  const showNav = () => {
    show = !show
  }

</script>

<header>
  <Link to="/"><p class='logo-header'>elements</p></Link>
  <BurgerIcon show={show} showNav={showNav}/>
</header>

<style>

  header {
    display: grid;
    width: 100vw;
    height: 75px;
    position: fixed;
    justify-content: center;
    align-items: center;
    z-index: 1;
  }

  .logo-header {
    font-family: 'Cormorant Garamond', serif;
    letter-spacing: .5rem;
    font-size: 1.2rem;
    color:#fff; 
  }

  @media (max-width: 900px) {

    header {
      justify-content: left;
    }

    .logo-header {
      font-size: 1rem;
      padding-left: 2rem;
    }
    
  }

</style>
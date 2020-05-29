<script>
  import { fade } from 'svelte/transition'
  import IntroSection from './IntroSection.svelte'
  import HeroSection from './HeroSection.svelte'
  export let fact;
  export let cor;
</script>

  <main class='scroll-snap-container'>
    <section class='snap-scroll-section hero-section'>
      <HeroSection fact={fact} />
    </section>
    <section class='snap-scroll-section'>
      <IntroSection cor={cor} fact={fact}/>
    </section>
  </main>

<style>

.scroll-snap-container {
  display: grid;
  height: 100vh;
  width: 100vw;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
}

.snap-scroll-section {
  display: grid;
  min-height: 100vh;
  width: 100vw;
  scroll-snap-align: start;
  position: relative;
}

.hero-section {
  place-items: center;
  overflow: hidden;
}


/* @media (max-width: 900px) {

  .snap-scroll-section {
    place-items: center;
    justify-content: left;
    align-items: center;
  }

} */

  @media (max-width: 360px){
  .scroll-snap-container {
    scroll-snap-type: none;
    overflow-y: auto;
  }

  .snap-scroll-section {
    scroll-snap-align: none;
  }

  .hero-section {
    place-items: center;
    overflow: auto;
  }
    
  }

</style>
<script>
  import { fade } from 'svelte/transition'
  import HeroSection from './HeroSection.svelte'
  import IntroSection from './IntroSection.svelte'
  import TraitsSection from './TraitsSection.svelte'
  export let fact;
  export let trait;
  export let type;
</script>

  <main class='scroll-snap-container'>
    <section class='snap-scroll-section hero-section'>
      <HeroSection fact={fact} />
    </section>
    <section class='snap-scroll-section'>
      <IntroSection fact={fact}/>
    </section>
    <section class='snap-scroll-section'>
      <TraitsSection trait={trait} fact={fact} type={type}/>
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
    overflow-x: hidden;
  }
    
  }

</style>
<script>
  import { fade } from 'svelte/transition'
  import HeroSection from './HeroSection.svelte'
  import IntroSection from './IntroSection.svelte'
  import TraitsSection from './TraitsSection.svelte'

  export let element;
  export let trait;
</script>

  <main class='scroll-snap-container'>
    <section class='snap-scroll-section hero-section'>
      <div class='scroll-down-indicator' in:fade={{y: 200, duration: 2000, delay: 2500}}>
        <p class='scrolldown-text'>Explore the {element.name}</p>
        <div class='scrolldown-line'></div>
      </div>
      <HeroSection element={element} />
    </section>
    <section id='1' class='snap-scroll-section'>
      <IntroSection element={element}/>
    </section>
    <section class='snap-scroll-section'>
      <TraitsSection trait={trait} element={element}/>
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
  overflow: hidden;
}

.hero-section {
  place-items: center;
}

.scroll-down-indicator {
  display: grid;
  grid-template-rows: 1fr 1fr;
  place-items: center;
  position: absolute;
  bottom: 15vh;
}

.scrolldown-text {
  color: #fff;
  font-size: .8rem;
  font-weight: 100;
}

.scrolldown-line {
  width: 1px;
  height: 15px;
  background-color: #fff;
}

  @media (max-width: 360px){

    .scroll-snap-container {
      scroll-snap-type: none;
      height: auto;
    }

    .snap-scroll-section {
      scroll-snap-align: none;
    }

    .hero-section {
      place-items: center;
      overflow: auto;
      overflow-x: hidden;
    }

    .scroll-down-indicator {
      display: grid;
      grid-template-rows: 1fr 1fr;
      place-items: center;
      position: absolute;
      bottom: 20vh;
    }
    
  }

</style>
<script>
import { Link, Route } from 'svelte-routing'
import Header from './Header.svelte'
import Fire from './Fire.svelte'
import {fade} from 'svelte/transition'

let videoLife = './video/life.mp4'

</script>

  <main class='scroll-snap-container'>
    <section class='snap-scroll-section hero-section'>
      <video
        class='hero-video'
        src={videoLife}
        playsinline
        autoplay
        muted
      />
      <div class='hero-title-container'>
        <h1 class='hero-title' in:fade={{y: 200, duration: 3000, delay: 500}}>Elements</h1>
        <p class='hero-text' in:fade={{y: 200, duration: 3000, delay: 500}}>The Earth without Water to moisten it, without Fire to warm it, and without Air to surround it, would be a lifeless planet.</p>
      </div>
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

.hero-video {
  min-width: 100%;
  min-height: 100%;
  opacity: 0.9;
}

.hero-title-container {
  display: grid;
  width: 100vw;
  place-items: center;
  position: absolute;
}

.hero-title {
  font-size: 5rem;
  font-family: 'Cormorant Garamond', serif;
  font-family: 'Inknut Antiqua', serif;
  font-weight: 400;
  letter-spacing: 2rem;
  color: white;
}

.hero-text {
  padding-left: 5rem;
  color: #fff;
  font-family: 'Cormorant Garamond', serif;
  width: 650px;
  font-size: 2rem;
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
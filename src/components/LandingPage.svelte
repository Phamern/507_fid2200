<script>
import { Link, Route } from 'svelte-routing'
import Header from './Header.svelte'
import { fade } from 'svelte/transition'

let heroVideo = './video/life.mp4'

</script>

  <main class='front-page-container'>
    <section class='front-page-section hero-section'>
      <video
        class='hero-video'
        src={heroVideo}
        playsinline
        autoplay
        muted
      />
      <div class='hero-title-container'>
        <h1 class='hero-title' in:fade={{y: 200, duration: 2000, delay: 2000}}>The <br>Elements</h1>
        <p class='hero-text' in:fade={{y: 200, duration: 2000, delay: 2000}}>The <em>Earth</em> without <em>Water</em> to moisten it, without <em>Fire</em> to warm it, and without <em>Air</em> to surround it, would be a lifeless planet.</p>
       <div class="explore-section" in:fade={{y: 200, duration: 2000, delay: 3000}}>
        <h2 class='subtitle'>Explore the elements</h2>
        <div class="frontpage-nav">
          <Link to='fire'><p class='link-item'>Fire</p></Link>
          <Link to='water'><p class='link-item'>Water</p></Link>
          <Link to='air'><p class='link-item'>Air</p></Link>
          <Link to='earth'><p class='link-item'>Earth</p></Link>
        </div>
       </div>
      </div>
    </section>
  </main>

<style>

.front-page-container {
  display: grid;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}

.front-page-section {
  display: grid;
  min-height: 100%;
  width: 100%;
  position: relative;
}

.hero-section {
  place-items: center;
}

.hero-video {
  min-width: 100%;
  min-height: 100%;
  opacity: 0.8;
}

.hero-title-container {
  display: grid;
  width: 100vw;
  place-items: center;
  position: absolute;
}

.hero-title {
  font-size: 5rem;
  font-family: 'Inknut Antiqua', serif;
  font-weight: 400;
  letter-spacing: 1rem;
  line-height: 7rem;
  color: #fff;
  text-shadow: 1px 1px 20px #1d1a1a;
}

.hero-text {
  color: #fff;
  font-family: 'Cormorant Garamond', serif;
  width: 60%;
  font-size: 2rem;
  text-shadow: 1px 1px 1px #1d1a1a;
  text-align: center;
}

.explore-section {
  display: grid;
  place-items: center;
}

.subtitle {
  font-family: 'Inknut Antiqua', serif;
  font-size: 2rem;
  color: #843f5b;
}

.frontpage-nav {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: space-evenly;
  width: 30%;
  gap: 2rem;
}

.link-item {
  font-size: 2rem;
  transition: .2s;
  text-align: center;
}

.link-item:hover {
  text-decoration: underline;
  font-weight: 900;
  transform: scale(1.1);
}

@media (max-width: 750px){

  .front-page-section {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .hero-section {
    place-items: left;
  }

  .hero-title-container {
    justify-items: start;
  }

  .hero-title {
    font-size: 1.5rem;
    letter-spacing: 1rem;
    line-height: 3rem;
  }

  .hero-text {
    width: 80%;
    font-size: 1.3rem;
    padding: 0;
    text-align: left;
  }

  .subtitle {
    font-size: 1.5rem;
    margin: 0;
    padding: 0;
  }

  .frontpage-nav {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    justify-content: left;
    width: 100%;
    gap: 1rem;
  }

  .link-item {
    font-size: 1.5rem;
    text-decoration: underline;
    text-align: left;
    text-shadow: 1px 1px 3px #1d1a1a;
  }

}

@media (max-width: 360px) {
  .front-page-container {
    scroll-snap-type: none;
  }

  .front-page-section {
    scroll-snap-align: none;
  }

  .hero-section {
    place-items: center;
  }

  .hero-title {
    font-size: 1rem;
    line-height: 2rem;
  }

  .hero-text {
    font-size: 1rem;
  }

  .subtitle {
    font-size: 1rem;
  }
}
  
</style>
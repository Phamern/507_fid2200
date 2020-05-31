<script>
import { Link, Route } from 'svelte-routing'
import Header from './Header.svelte'
import { fade } from 'svelte/transition'

let videoLife = './video/life.mp4'

</script>

  <main class='front-page-container'>
    <section class='front-page-section hero-section'>
      <video
        class='hero-video'
        src={videoLife}
        playsinline
        autoplay
        muted
      />
      <div class='hero-title-container'>
        <h1 class='hero-title' in:fade={{y: 200, duration: 3000, }}>Elements</h1>
        <p class='hero-text' in:fade={{y: 200, duration: 3000, }}>The <em>Earth</em> without <em>Water</em> to moisten it, without <em>Fire</em> to warm it, and without <em>Air</em> to surround it, would be a lifeless planet.</p>
       <div class="explore-section">
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
  color: #fff;
  text-shadow: 1px 1px 20px #1d1a1a;
}

.hero-text {
  padding-left: 2rem;
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
}

.link-item:hover {
  text-decoration: underline;
  font-weight: 900;
  transform: scale(1.1);
}

  @media (max-width: 750px){

    .front-page-section {
      width: 100vw;
      padding-left: 2rem;
      padding-right: 2rem;
    }

    .hero-title {
      font-size: 2rem;
      letter-spacing: 1rem;
    }

    .hero-title-container {
      display: grid;
      width: 100vw;
      justify-items: start;
      position: absolute;
    }

    .hero-text {
      width: 80%;
      font-size: 1.5rem;
      padding: 0;
      text-align: left;
    }

    .hero-section {
      place-items: left;
    }

    .subtitle {
      font-size: 1.5rem;
      margin: 0;
      padding: 0;
    }

    .frontpage-nav {
      display: grid;
      grid-template-columns: repeat(2, 8rem);
      grid-template-rows: repeat(2, 4rem);
      justify-content: left; 
      width: 80%;
      gap: 1rem;
    }

    .link-item {
      text-decoration: underline;
    }

  }

  @media (max-width: 360px){
    .front-page-container {
      scroll-snap-type: none;
      overflow-y: auto;
    }

    .front-page-section {
      scroll-snap-align: none;
    }

    .hero-section {
      place-items: center;
    }

    .hero-title {
      font-size: 1.5rem;
    }

    .subtitle {
      font-size: 1.3rem;
    }
    
    .link-item {
      font-size: 1.5rem;
    }
  }
</style>
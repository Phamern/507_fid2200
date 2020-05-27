<script>
import { db } from './firebase'
import { Link, Route } from 'svelte-routing'
import Header from './Header.svelte'
import Lemon from './Lemon.svelte'
import Orange from './Orange.svelte'
import {fade} from 'svelte/transition'

let video = './Underwater Bubbles.mp4'
let volume 

let list = [];

db.collection('citrus').orderBy('pos', 'asc').onSnapshot(snapData => {
  list = snapData.docs
})

</script>
<body>
  
  <h1 class='test' in:fade={{y:300, duration: 2000, delay: 2000}}>The water element</h1>
  <div class='videoframe'>
  <video
  src={video}
  autoplay
  loop
  ></video>
  </div>
  <main class='landingpage-grid'>
    <div class="frontpage-items">
      <h1 class='hero-title'>Squeeze</h1>
      <p class='byline'>Take a bite into something juicy</p>
    </div>
    <div class="select">
    {#each list as item}
      <Link to='lemon'}>The <br>Lemon</Link>
      <Link to='orange' >The <br>Orange</Link>
    {/each}
    </div>
  </main>
</body>


  <!-- {#each list as item}
    <Lemon id={item.id} fruitInfo={item.data()} />
    <Orange id={item.id} fruitInfo={item.data()} />
  <!-- {:else}
    <div>loading...</div>
  {/each} -->
<style>
body {
  display: grid;
  overflow-x: hidden;
  grid-template-rows: repeat(4, 100vh);
  min-height: 100vh;
}
.test {
  position: absolute;
  top: 50vh;
  left: 20vw;
  font-size: 5rem;
  color: white;
}
.videoframe {
  max-width: 100vw;
  min-height: 100vh;
  z-index: -10;
}
  .landingpage-grid {
    display: grid;
    justify-content: center;
    background-color: #fff44f;
    height: 100vh;
    width: 100vw;
  }

  .hero-title {
    font-size: 7rem;
    margin-top: 15rem;
    text-align: center;
    color: #fff;
  }

  .byline {
    font-size: 1.5rem;
    font-weight: 600;
    font-style: italic;
    text-align: center;
  }

  .select {
    font-family: 'flood std', sans-serif;
    font-size: 5rem;
    color: orange;
    display: grid;
    gap: 5rem;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 900px) {
    .landingpage-grid {
      display: grid;
      justify-content: center;
      height: auto;
    }

    .hero-title {
      font-size: 3rem;
    }
    
    .select {
      font-size: 3rem;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(2, 1fr);
      align-items: center;
    }
  }

</style>
<script>
import { db } from './firebase'
import { Link, Route } from 'svelte-routing'
import Header from './Header.svelte'
import Fire from './Fire.svelte'
import {fade} from 'svelte/transition'

// let video = './water_video.mp4'
let volume 

let list = [];

db.collection('elements').orderBy('pos', 'asc').onSnapshot(snapData => {
  list = snapData.docs
})

</script>
<body>
  <h1 class='test' in:fade={{y:300, duration: 2000, delay: 2000}}>The water element</h1>
  <div class='videoframe'>
    <!-- <Link to='fire'>
      <video
      in:fade={{y:300, duration: 2000, delay: 500}}
      src={video}
      autoplay
      loop
      ></video>
   </Link> -->
  </div>
</body>
<style>
body {
  display: grid;
  overflow-x: hidden;
  grid-template-rows: repeat(4, 100vh);
  min-height: 100vh;
  place-items: center;
  position: relative;
}
.test {
  position: absolute;
  top: 30vh;
  font-size: 5rem;
  font-family: 'Cormorant Garamond', serif;
  font-weight: 700;
  letter-spacing: 2rem;
  color: white;
}
.videoframe {
  max-width: 100vw;
  display: grid;
  grid-template-columns: repeat(2, 50vw);
  min-height: 100vh;
}

@media (max-width: 900px) {

  .videoframe {
    grid-template-columns: repeat(1, 100vw)
  }
}

/* video {
  width: 50vw;
} */
  /* .landingpage-grid {
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
  } */
/* 
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
  } */

</style>
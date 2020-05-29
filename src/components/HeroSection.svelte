<script>
  import { fade } from 'svelte/transition'
  export let fact;
</script>

<video
  class='hero-video'
  src={fact.video}
  playsinline
  autoplay
  loop 
/>
<div class='hero-title-container'>
  <h1 class='hero-title' in:fade={{y: 200, duration: 3000, delay: 500}}>{fact.name}</h1>
</div>

<style>

.hero-video {
  min-width: 100%;
  min-height: 100%;
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



@media (max-width: 900px) {

    .hero-video {
      min-width: 100%;
      height: 100%;
    }

  .hero-title {
    font-size: 4rem;
    letter-spacing: 1rem;
  }

}

</style>
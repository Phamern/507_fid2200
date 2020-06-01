<script>
  import { fade } from 'svelte/transition'
  export let element;
</script>

<video
  class='hero-video'
  src={element.video}
  playsinline
  autoplay
  loop 
  muted
/>
<div class='hero-title-container'>
  <h1 class='hero-title' in:fade={{y: 200, duration: 2000, delay: 2000}}>{element.name}</h1>
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
  color: white;
}

@media (max-width: 900px) {

  .hero-video {
    height: 100%;
  }

  .hero-title {
    font-size: 4rem;
  }

}

</style>
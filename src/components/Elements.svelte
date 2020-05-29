<script>
import { fade } from 'svelte/transition'
export let fact;
</script>

  <main>
   <div class='videoframe'>
    <video
      src={fact.video}
      playsinline
      autoplay
      loop 
    />
    <div class='sticky'>
      <h2 in:fade={{y: 200, duration: 3000, delay: 500}}>{fact.name}</h2>
    </div>
  </div>
    <div class='videoframe'>
        <section class='element-information'>
          <p>{fact.description}</p>
          <p>Direction: {fact.direction}</p>
        </section>
    </div>
  </main>
<style>



main {
  display: grid;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  overflow-x: hidden;
}

.videoframe {
  display: grid;
  min-height: 100vh;
  scroll-snap-align: start;
  place-items: center;
  position: relative;
  overflow: hidden;
}

video {
  min-width: 100%;
  min-height: 100%;
}

.sticky {
  position: absolute;
  margin: auto 0;
  padding-top: 30vh;
}

h2 {
  font-size: 5rem;
  font-family: 'Cormorant Garamond', serif;
  font-weight: 700;
  letter-spacing: 2rem;
  color: white;

}

.element-information {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

p {
  margin: 0;
  padding: 0;
  color: #fff;
  font-family: 'Cormorant Garamond', serif;
  width: 500px;
  font-size: 2rem;
}

@media (max-width: 900px) {

  .videoframe {
    place-items: start;
    justify-content: left;
    align-items: center;
  }
  h2 {
    font-size: 4rem;
    width: 80vw;
    padding: 2rem;
    letter-spacing: 1rem;
  }
  .sticky {
    position: absolute;
    margin: 1rem;
    padding-top: 10vh;
  }
}

</style>
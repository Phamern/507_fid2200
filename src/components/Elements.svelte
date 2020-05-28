<script>
import { fade } from 'svelte/transition'
 export let fact;
</script>

  <body in:fade={{y: 200, duration: 500}}>
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
          <!-- <img class='fire' src='{item.data().icon}' alt="fire"> -->
          <p>{fact.description}</p>
        </section>
    </div>
  </main>
</body>
<style>

body {
  display: grid;
  overflow-x: hidden;
  height: 100vh;
  background-color: #1d1a1a;
}

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

</style>
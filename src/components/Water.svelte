<script>
import { db } from './firebase.js'
import { fly, fade } from 'svelte/transition'
import Store from './Store.js'
import Elements from './Elements.svelte'

let waterVideo = './water.mp4'

let list = [];

export let type;

db.collection('elements').orderBy('pos', 'asc').onSnapshot(snapData => {
  list = snapData.docs
})

</script>

{#if type === 'water'}
  {#each $Store.water as fact}
    <Elements fact={fact}/>
  {/each}
{/if}

{#each list as item}
 {#if item.data().pos === 3}
<body in:fade={{y: 200, duration: 500}}>
  <main>
   <div class='videoframe'>
      <video
        src={waterVideo}
        playsinline
        autoplay
        loop 
      />
    <div class='sticky'>
      <h2 in:fade={{y: 200, duration: 3000, delay: 500}}>{item.data().name}</h2>
    </div>
  </div>
    <div class='videoframe'>
        <section class='element-information'>
          <img class='fire' src='{item.data().img}' alt="fire">
          <p>{item.data().description}</p>
        </section>
    </div>
  </main>
</body>
{/if}
{/each}
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
  height: 100vh;
  width: 100vw;
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

.fire {
  width: 50vw;
  object-fit: cover;
  object-position: 20% 10px; 
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


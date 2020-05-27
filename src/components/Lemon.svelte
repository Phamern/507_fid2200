<script>
import { db } from './firebase.js'
import { fly } from 'svelte/transition'

export let fruitInfo = {}

let list = [];

db.collection('citrus').orderBy('pos', 'asc').onSnapshot(snapData => {
  list = snapData.docs
})

</script>
<body transition:fly={{y: 1200}}>
  <main>
    <h1>heiheihei</h1>
    {#if fruitInfo.name === 'Lemon'}
      <img class='hero' src={fruitInfo.img} alt='lemon' />
      <p>{fruitInfo.name}</p>
    {/if}
  </main>
</body>
<style>

body {
  background-color: orange;
  width: 100vw;
  min-height: 100vh;
  background-image: url('{fruitInfo.img}')
}

.hero {
  width: 50vw;
}
p {
  font-size: 10rem;
}
</style>


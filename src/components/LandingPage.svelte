<script>
import { db } from './firebase'
import Header from './Header.svelte'
import Lemon from './Lemon.svelte'
import Orange from './Orange.svelte'

let list = [];
let images = []

db.collection('citrus').orderBy('pos', 'asc').onSnapshot(snapData => {
  list = snapData.docs
})

</script>
  <main class='landingpage-grid'>
  {#each list as item}
    <Lemon id={item.id} fruitInfo={item.data()} />
    <Orange id={item.id} fruitInfo={item.data()} />
  {:else}
    <div>loading...</div>
  {/each}
  </main>
<style>

  .landingpage-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: #fff44f;
    height: 100vh;
    width: 100vw;
  }
</style>
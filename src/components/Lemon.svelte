<script>
import { db } from './firebase.js'
export let fruitInfo = {}
</script>
  {#if fruitInfo.name === 'Lemon'}
    <img class='hero' src={fruitInfo.img} alt='lemon' />
    <!-- <p>{fruitInfo.name}</p> -->
  {/if}
<style>
.hero {
  width: 50vw;
}
</style>


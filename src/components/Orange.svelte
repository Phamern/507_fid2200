<script>
import { db } from './firebase.js'
// export let id = ''
export let fruitInfo = {}
</script>
  {#if fruitInfo.name === 'Orange'}
    <!-- <p>{fruitInfo.name}</p> -->
    <img class='hero' src={fruitInfo.img} alt='orange' />
  {/if}


<style>
.hero {
  width: 50vw;
}

</style>
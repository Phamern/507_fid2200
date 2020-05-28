<script>
  import Store from './Store.js'
  import Elements from './Elements.svelte'

  export let type;
</script>

{#if type === 'water'}
  {#each $Store.water as fact}
    <Elements fact={fact}/>
  {/each}
{/if}


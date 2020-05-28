<script>
  import Store from './Store.js'
  import Elements from './Elements.svelte'

  export let type;
</script>

{#if type === 'earth'}
  {#each $Store.earth as fact}
    <Elements fact={fact}/>
  {/each}
{/if}


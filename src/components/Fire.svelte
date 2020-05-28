<script>
  import Store from './Store.js'
  import Elements from './Elements.svelte'

  export let type;
</script>

{#if type === 'fire'}
  {#each $Store.fire as fact}
    <Elements fact={fact} />
  {/each}
{/if}


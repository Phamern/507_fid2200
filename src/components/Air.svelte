<script>
  import Store from './Store.js'
  import Elements from './Elements.svelte'

  export let type;
</script>

{#if type === 'air'}
  {#each $Store.air as fact}
    <Elements fact={fact}/>
  {/each}
{/if}
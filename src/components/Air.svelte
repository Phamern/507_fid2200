<script>
  import Store from './Store.js'
  import Elements from './Elements.svelte'
  import {fade} from 'svelte/transition'

  export let type;
</script>
<body in:fade={{y: 200, duration: 500}}>
  {#if type === 'air'}
    {#each $Store.air as fact}
      {#each fact.cors as cor}
        <Elements fact={fact} cor={cor}/>
      {/each}
    {/each}
  {/if}
</body>

<style>

  body {
    background-color: #1d1a1a;
    background-image: url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232d2d2d' fill-opacity='0.18'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
  
</style>
<script>
  import Store from './Store.js'
  import { Link } from 'svelte-routing'
  import Elements from './Elements.svelte'
  import {fade} from 'svelte/transition'

  export let type;
</script>

<body in:fade={{y: 200, duration: 500}}>
  {#if type === 'fire'}
    {#each $Store.fire as element}
      {#each element.traits as trait}
        <Elements element={element} trait={trait}/>
      {/each}
    {/each}
  {/if}
</body>

<style>

 body {
    background-color: #1d1a1a;
    background-image: url("data:image/svg+xml,%3Csvg width='40' height='12' viewBox='0 0 40 12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 6.172L6.172 0h5.656L0 11.828V6.172zm40 5.656L28.172 0h5.656L40 6.172v5.656zM6.172 12l12-12h3.656l12 12h-5.656L20 3.828 11.828 12H6.172zm12 0L20 10.172 21.828 12h-3.656z' fill='%232d2d2d' fill-opacity='0.15' fill-rule='evenodd'/%3E%3C/svg%3E");
  }
  
</style>

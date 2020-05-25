
<script>

import { onMount } from 'svelte';

const apiURL = "http://www.fruityvice.com/api/fruit/all";
let data = [];

	onMount(async function() {
		const response = await fetch(apiURL);
		data = await response.json();
	});

</script>

<div>
{#each data as item}
	<div>
		<p>{item.genus}</p>
	</div>
	{/each}
</div>
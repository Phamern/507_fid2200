<script>
import { db } from './firebase.js'

let arrList = [];
let newItemText = ''

db.collection('citrus').orderBy('pos', 'asc').onSnapshot(snapData => {
	arrList = snapData.docs
})



function addItem() {
	let date = new Date()
	db.collection('citrus').add({name: newItemText, pos: date.getTime()})
}

function deleteItem(itemId) {
	db.collection('citrus').doc(itemId).delete();
}


</script>
<main>
<h1>List</h1>
Add Item:
<input type='text' bind:value={newItemText}/>
<button on:click={addItem}>Add</button>
{#each arrList as listItem}
	<p>{listItem.data().name}<button on:click={() => deleteItem(listItem.id)}>delte</button></p>
{/each}
</main>


<style>

main {
	padding-top: 100px;
}
</style>
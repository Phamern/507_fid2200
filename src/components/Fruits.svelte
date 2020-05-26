<script>
import { db } from './firebase.js'

let arrList = [];
let newItemText = ''
let text = '';

db.collection('citrus').orderBy('pos', 'asc').onSnapshot(snapData => {
	arrList = snapData.docs
})



function addItem() {
	let date = new Date()
	db.collection('citrus').add({
		name: newItemText, 
		description: text, 
		pos: date.getTime(),

		
		})
}

function deleteItem(itemId) {
	db.collection('citrus').doc(itemId).delete();
}

// function updateInfo(itemId) {
// 	db.collection('citrus').doc(itemId).update();
// }

// function addDescription() {
// 	let date = new Date()
// 	db.collection('citrus').add({description: text})
// }


</script>
<main>
<h1>List</h1>
Add Item:
<input type='text' bind:value={newItemText}/>
<textarea name='description' bind:value={text}/>
<button on:click={addItem}>Add</button>
{#each arrList as listItem}
	<p>{listItem.data().name}<button on:click={() => deleteItem(listItem.id)}>Delete Setup</button></p>
	<!-- <p>{listItem.data().name}<button on:click={() => updateInfo(listItem.id)}>Edit Setup</button></p> -->
{/each}
</main>


<style>

main {
	padding-top: 100px;
	display: grid;
	place-items: center;
	gap: 2rem;
}
</style>
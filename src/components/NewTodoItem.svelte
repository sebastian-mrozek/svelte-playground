<script lang="typescript">
	import { blur } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	let value = '';
	let elem = undefined;

	const keyPressed = (e) => {
		if (e.keyCode === 13 && value.length > 0) {
			addItem();
		}
	};

	const addItem = () => {
		dispatch('item-created', value);
		value = '';
		elem.focus();
	};
</script>

<div>
	<input bind:value bind:this={elem} on:keydown={keyPressed} />
	<button on:click={addItem} disabled={value.length === 0}>Add</button>
</div>

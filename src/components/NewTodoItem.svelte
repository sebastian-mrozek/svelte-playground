<script lang="typescript">
	import { blur } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	let value = '';
	let elem = undefined;

	const keyPressed = (e) => {
		if (e.keyCode === 13) {
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
	<!-- svelte-ignore a11y-autofocus -->
	<input bind:value bind:this={elem} on:keydown={keyPressed} />
	<button on:click={addItem}>Add</button>
</div>

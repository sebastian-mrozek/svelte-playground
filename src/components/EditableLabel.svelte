<script lang="typescript">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let editing = false;
	export let value = '';
	let undoValue = '';

	const handleKeyDown = (e) => {
		if (editing && e.keyCode === 13) {
			finishEditing();
		} else if (editing && e.keyCode === 27) {
			undoEditing();
		}
	};

	const startEditing = () => {
		undoValue = value;
		editing = true;
	};

	const finishEditing = () => {
		editing = false;
		dispatch('value-changed', value);
	};

	const undoEditing = () => {
		editing = false;
		value = undoValue;
	};
</script>

<span>
	{#if editing}
		<input bind:value on:keydown={handleKeyDown} on:blur={finishEditing} autofocus />
	{:else}
		<span on:click={startEditing}>
			{value}
		</span>
	{/if}
</span>

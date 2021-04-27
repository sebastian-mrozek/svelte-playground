<script lang="typescript">
	import { blur } from 'svelte/transition';
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

{#if editing}
	<input in:blur bind:value on:keydown={handleKeyDown} on:blur={finishEditing} autofocus />
{:else}
	<span in:blur on:click={startEditing}>
		<slot>{value}</slot>
	</span>
{/if}

<script lang="typescript">
	import type { TodoItem } from '../model/model';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	export let item: TodoItem;

	function onItemClicked() {
		dispatch('item-toggled', { id: item.id });
	}
</script>

<li>
	<input type="checkbox" on:click={onItemClicked} checked={item.completed} />
	<span class:done={item.completed}>{item.caption}</span>
</li>

<style>
	.done {
		text-decoration: line-through;
	}
</style>

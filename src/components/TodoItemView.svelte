<script lang="typescript">
	import type { TodoItem } from '../model/model';
	import { createEventDispatcher } from 'svelte';
	import EditableLabel from './EditableLabel.svelte';

	const dispatch = createEventDispatcher();
	export let item: TodoItem;
</script>

<li>
	<input
		type="checkbox"
		on:click={() => dispatch('item-toggled', { id: item.id })}
		checked={item.completed}
	/>
	<span class:done={item.completed}>
		<EditableLabel
			value={item.caption}
			on:value-changed={(e) => dispatch('item-renamed', { id: item.id, name: e.detail })}
		/>
	</span>
</li>

<style>
	.done {
		text-decoration: line-through;
	}
</style>

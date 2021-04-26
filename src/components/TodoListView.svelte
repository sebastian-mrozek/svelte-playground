<script lang="typescript">
	import type { TodoList } from '../model/model';
	import TodoItemView from './TodoItemView.svelte';

	export let todoList: TodoList;
	export let todoCount: number;
</script>

<div class="container">
	<div class="header">{todoList.name}</div>
	{#if todoList.items.length == 0}
		Plan your next step!
	{:else}
		<ul>
			{#each todoList.items as item}
				<TodoItemView {item} on:item-toggled />
			{/each}
		</ul>
		{#if todoCount === 0}
			You have completed all tasks, time to rest!
		{:else}
			Total of {todoCount} item{todoCount > 1 ? 's' : ''} to do.
		{/if}
	{/if}
</div>

<style>
	.header {
		font-variant: small-caps;
		margin-bottom: 1em;
		border-bottom: 1px solid darkslategray;
	}
	.container {
		border: 1px solid lightgray;
		border-radius: 3px;
		padding: 1em;
	}
</style>

<script lang="typescript">
	import { createEventDispatcher } from 'svelte';
	import type { TodoList } from '../model/model';
	import TodoItemView from './TodoItemView.svelte';

	const dispatch = createEventDispatcher();

	export let todoList: TodoList;
	export let todoCount: number;
</script>

<div class="container">
	<div class="header">
		<span class="name">{todoList.name}</span>
		<div class="hide-completed">
			<input
				type="checkbox"
				on:click={() => dispatch('hide-toggled')}
				checked={todoList.hideCompleted}
			/>
			<span>hide completed</span>
		</div>
	</div>

	{#if todoList.items.length == 0 || (todoList.hideCompleted && todoCount === 0)}
		Plan your next step!
	{:else}
		<ul>
			{#each todoList.items as item}
				{#if !item.completed || !todoList.hideCompleted}
					<TodoItemView {item} on:item-toggled />
				{/if}
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
		margin-bottom: 1em;
		border-bottom: 1px solid #ddd;
	}
	.hide-completed {
		float: right;
	}
	.name {
		font-variant: small-caps;
		font-size: 1.2em;
	}
	.container {
		border: 1px solid #e0e0e0;
		border-radius: 3px;
		padding: 1em;
		background-color: #fafafa;
		color: #044;
	}
</style>

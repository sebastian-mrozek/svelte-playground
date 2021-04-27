<script lang="typescript">
	import { emptyList, TodoList } from '../model/model';

	export let todoList: TodoList = emptyList();
</script>

<div class="container">
	All tasks:
	<div>
		{#each todoList.items as item}
			{item.id}: '{item.caption}' is {!item.completed ? 'not' : ''} done<br />
		{/each}
	</div>
</div>

<style>
	.container {
		font-family: monospace;
		color: gray;
		background-color: lightgrey;
		padding: 1em;
		margin: 2em;
		border: 1px solid red;
	}
</style>

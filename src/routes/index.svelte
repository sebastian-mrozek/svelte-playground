<script lang="typescript">
	import { v4 as uuidv4 } from 'uuid';
	import { todoStore, todoCountStore } from '../data/store';
	import TodoListView from '../components/TodoListView.svelte';

	function itemToggled(itemToggledEvent) {
		todoStore.toggleCompleted(itemToggledEvent.detail.id);
	}

	// initialize the todo list with some data
	todoStore.set({
		id: uuidv4(),
		name: 'my first list',
		hideCompleted: false,
		items: [
			{
				id: uuidv4(),
				caption: 'a task',
				completed: false
			},
			{
				id: uuidv4(),
				caption: 'a task',
				completed: true
			},
			{
				id: uuidv4(),
				caption: 'other task',
				completed: true
			}
		]
	});
</script>

<TodoListView todoList={$todoStore} todoCount={$todoCountStore} on:item-toggled={itemToggled} />

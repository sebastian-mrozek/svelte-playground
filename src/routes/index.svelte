<script lang="typescript">
	import { v4 as uuidv4 } from 'uuid';
	import { todoStore, todoCountStore } from '../data/todoStore';
	import TodoListView from '../components/TodoListView.svelte';
	import DebugComponent from '../components/DebugComponent.svelte';

	// initialize the todo list with some data
	$todoStore = {
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
				completed: false
			}
		]
	};
</script>

<div>
	<TodoListView
		todoList={$todoStore}
		todoCount={$todoCountStore}
		on:hide-toggled={() => todoStore.toggleHide()}
		on:item-toggled={(e) => todoStore.toggleCompleted(e.detail.id)}
		on:item-renamed={(e) => todoStore.renameItem(e.detail.id, e.detail.name)}
		on:item-created={(e) => todoStore.addItem(e.detail)}
	/>
	<DebugComponent />
</div>

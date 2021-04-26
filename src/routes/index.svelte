<script lang="typescript">
	import { todoStore, todoCountStore } from '../data/store';
	import TodoListView from '../components/TodoListView.svelte';

	function itemToggled(itemToggledEvent) {
		todoStore.toggleItem(itemToggledEvent.detail.caption);
	}

	todoStore.set({
		hideCompleted: false,
		items: [
			{
				caption: 'a task',
				completed: false
			},
			{
				caption: 'task 2',
				completed: true
			}
		]
	});
</script>

<TodoListView todoList={$todoStore} todoCount={$todoCountStore} on:item-toggled={itemToggled} />

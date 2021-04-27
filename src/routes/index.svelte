<script lang="typescript">
	import { v4 as uuidv4 } from 'uuid';
	import TodoListView from '../components/TodoListView.svelte';
	import DebugComponent from '../components/DebugComponent.svelte';
	import type { TodoList } from 'src/model/model';

	// initialize the todo list with some data
	let todoList: TodoList = {
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

	$: todoCount = todoList.items.filter((item) => !item.completed).length;

	const toggleHide = () => (todoList.hideCompleted = !todoList.hideCompleted);

	const toggleCompleted = (e: CustomEvent) => {
		todoList.items = todoList.items.map((item) => {
			if (item.id === e.detail.id) {
				return {
					...item,
					completed: !item.completed
				};
			} else {
				return item;
			}
		});
	};

	const renameItem = (e: CustomEvent) => {
		todoList.items = todoList.items.map((item) => {
			if (item.id === e.detail.id) {
				return {
					...item,
					caption: e.detail.name
				};
			} else {
				return item;
			}
		});
	};

	const addItem = (e: CustomEvent) => {
		const newItem = {
			id: uuidv4(),
			caption: e.detail,
			completed: false
		};
		todoList.items.push(newItem);
		todoList = todoList;
	};
</script>

<div>
	<TodoListView
		{todoList}
		{todoCount}
		on:hide-toggled={toggleHide}
		on:item-toggled={toggleCompleted}
		on:item-renamed={renameItem}
		on:item-created={addItem}
	/>
	<DebugComponent {todoList} />
</div>

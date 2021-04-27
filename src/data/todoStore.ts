import { emptyList, TodoItem } from '../model/model';
import { writable, Readable, derived } from 'svelte/store';
import { v4 as uuidv4 } from 'uuid';

export const todoStore = (() => {
	const { subscribe, set, update } = writable(emptyList());

	const toggleCompletedInArray = (items: TodoItem[], id: string): TodoItem[] => {
		return items.map((item) => {
			if (item.id === id) {
				return {
					...item,
					completed: !item.completed
				};
			} else {
				return item;
			}
		});
	};

	const toggleCompleted = (id: string) => {
		update((todoList) => {
			return {
				...todoList,
				items: toggleCompletedInArray(todoList.items, id)
			};
		});
	};

	const toggleHide = () => {
		update((todoList) => {
			return {
				...todoList,
				hideCompleted: !todoList.hideCompleted
			};
		});
	};

	const renameItemInArray = (items: TodoItem[], id: string, name: string): TodoItem[] => {
		return items.map((item) => {
			if (item.id === id) {
				return {
					...item,
					caption: name
				};
			} else {
				return item;
			}
		});
	};

	const renameItem = (id: string, name: string) => {
		update((todoList) => {
			return {
				...todoList,
				items: renameItemInArray(todoList.items, id, name)
			};
		});
	};

	const createItem = (name: string): TodoItem => {
		return {
			id: uuidv4(),
			caption: name,
			completed: false
		};
	};

	const addItem = (name: string) => {
		update((todoList) => {
			return {
				...todoList,
				items: [...todoList.items, createItem(name)]
			};
		});
	};

	return {
		subscribe,
		set,
		toggleCompleted,
		toggleHide,
		renameItem,
		addItem
	};
})();

export const todoCountStore: Readable<number> = derived(
	todoStore,
	($todoStore) => $todoStore.items.filter((item) => !item.completed).length
);

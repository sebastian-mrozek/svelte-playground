import { emptyList, TodoItem } from '../model/model';
import { writable, Readable, derived } from 'svelte/store';

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

	return {
		subscribe,
		set,
		toggleCompleted
	};
})();

export const todoCountStore: Readable<number> = derived(
	todoStore,
	($todoStore) => $todoStore.items.filter((item) => !item.completed).length
);

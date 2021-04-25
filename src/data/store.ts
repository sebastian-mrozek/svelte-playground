import { EMPTY_LIST, TodoItem } from '../model/model';
import { writable, Readable, derived } from 'svelte/store';

export const todoStore = (() => {
	const { subscribe, set, update } = writable(EMPTY_LIST);

	const toggleItemInArray = (items: TodoItem[], caption: string): TodoItem[] => {
		return items.map((item) => {
			if (item.caption === caption) {
				return {
					...item,
					completed: !item.completed
				};
			} else {
				return item;
			}
		});
	};

	const toggleItem = (caption: string) => {
		update((todoList) => {
			return {
				...todoList,
				items: toggleItemInArray(todoList.items, caption)
			};
		});
	};

	return {
		subscribe,
		set,
		toggleItem
	};
})();

export const todoCountStore: Readable<number> = derived(
	todoStore,
	($todoStore) => $todoStore.items.filter((item) => !item.completed).length
);

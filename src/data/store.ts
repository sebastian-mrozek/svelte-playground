import { EMPTY_LIST, TodoItem, TodoList } from '../model/model';
import { writable, Writable, Readable, derived } from 'svelte/store';

// export const todoStore: Writable<TodoList> = writable(EMPTY_LIST);
function _toggleItem(items: TodoItem[], caption: string): TodoItem[] {
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
}

export const todoStore = (() => {
	const { subscribe, set, update } = writable(EMPTY_LIST);

	return {
		subscribe,
		set,
		toggleItem: (caption: string) => {
			update((todoList) => {
				return {
					...todoList,
					items: _toggleItem(todoList.items, caption)
				};
			});
		}
	};
})();
export const todoCountStore: Readable<number> = derived(todoStore, ($todoStore) => {
	const l = $todoStore.items.filter((item) => !item.completed).length;
	console.log(l);
	return l;
});

class TodoItem {
	caption: string;
	completed: boolean;
}

class TodoList {
	hideCompleted = false;
	items: TodoItem[];
}

export const emptyList = (): TodoList => {
	return {
		hideCompleted: false,
		items: []
	};
};

export { TodoItem, TodoList };

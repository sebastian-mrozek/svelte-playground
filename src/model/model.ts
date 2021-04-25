class TodoItem {
	caption: string;
	completed: boolean;
}

class TodoList {
	hideCompleted = false;
	items: TodoItem[];
}

export const EMPTY_LIST: TodoList = {
	hideCompleted: false,
	items: []
};

export { TodoItem, TodoList };

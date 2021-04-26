import { v4 as uuidv4 } from 'uuid';

class TodoItem {
	id: string;
	caption: string;
	completed: boolean;
}

class TodoList {
	id: string;
	name: string;
	hideCompleted = false;
	items: TodoItem[];
}

export const emptyList = (): TodoList => {
	return {
		id: uuidv4(),
		name: 'My first list',
		hideCompleted: false,
		items: []
	};
};

export { TodoItem, TodoList };

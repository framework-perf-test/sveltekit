export interface Todo {
  id: number;
  name: string;
  description: string;
  type: string;
  confidential: string;
  remind: boolean;
  date: string;
}

export interface TodoErrorStatus {
  name?: string;
  description?: string;
  type?: string;
  date?: string;
  status: boolean;
}

export const TYPES = [
  'Feature',
  'Docs',
  'Issue',
  'Backend',
  'Frontent'
];

export const TODOS: Todo[] = [
  { id: 1, name: 'Add more frameworks', description: 'We need to add more frameworks', type: 'Issue', confidential: 'Yes', remind: true, date: '2021-04-07' }
];

export const getTodos = () => {
  return TODOS;
}

export const getTodo = (id: number) => {
  const todos = getTodos();
  return todos.filter(todo => todo.id === id)[0];
}

export const addTodo = (todo: Partial<Todo>) => {
  const todos = getTodos();
  todo.id = todos.length ? todos[todos.length - 1].id + 1 : 1;
  todos.push(<Todo>todo);
}

export const deleteTodo = (id: number) => {
  const todos = getTodos();
  const todo = getTodo(id);
  const index = todos.indexOf(todo);
  todos.splice(index, 1);
}

export const updateTodo = (update: Todo) => {
  const todo = getTodo(update.id);
  const todos = getTodos();
  const index = todos.indexOf(todo);
  todos[index] = update;
}
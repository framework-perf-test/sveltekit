<script lang="ts">
	import TodoForm from './TodoForm.svelte';
	import type { Todo } from './todos';
	import { addTodo, deleteTodo, getTodo, getTodos, updateTodo } from './todos';

	let currentTodo: Partial<any> | null = null;
	let todos: any[] = getTodos();

	const addTodoHandler = () => {
		currentTodo = {
			confidential: 'No',
			remind: false
		};
	};

	function selectTodoHandler(id: number) {
		currentTodo = getTodo(id);
	}

	function onUpdateTodoHandler(todo: Partial<Todo>) {
		if (!todo.id) {
			addTodo(todo);
		} else {
			updateTodo(<Todo>todo);
		}
		currentTodo = null;
		todos = getTodos();
	}

	function deleteTodoHandler(id: number) {
		deleteTodo(id);
		todos = getTodos();
	}

	function onAddOrUpdate({ detail }) {
		onUpdateTodoHandler(detail);
	}
</script>

<h3>Todos <button on:click={addTodoHandler}>New</button></h3>
{#if currentTodo}
	<TodoForm todo={currentTodo} on:add-or-update={onAddOrUpdate} />
{/if}
<br />
<table width="100%">
	<thead>
		<tr>
			<th>Id</th>
			<th>Name</th>
			<th>description</th>
			<th>Type</th>
			<th>Confidential</th>
			<th>Remind</th>
			<th>Date</th>
			<th>Actions</th>
		</tr>
	</thead>
	<tbody>
		{#each todos as todo}
			<tr>
				<td>{todo.id}</td>
				<td>{todo.name}</td>
				<td>{todo.description}</td>
				<td>{todo.type}</td>
				<td>{todo.confidential}</td>
				<td>{todo.remind}</td>
				<td>{todo.date}</td>
				<td>
					<button type="button" on:click={() => selectTodoHandler(todo.id)}>Edit</button>
					<button type="button" on:click={() => deleteTodoHandler(todo.id)}>Delete</button>
				</td>
			</tr>
		{/each}
	</tbody>
</table>

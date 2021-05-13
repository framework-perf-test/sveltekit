<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { Todo } from './todos';
	import { TYPES } from './todos';

	const dispatch = createEventDispatcher();

	export let todo!: Partial<Todo>;
	let types = TYPES;
	let errors: any = {
		status: false
	};

	function updateTodoHandler(event: any) {
		event.preventDefault();
		errors = { status: false };
		if (!todo.name) {
			errors.name = 'Name is required.';
			errors.status = true;
		}
		if (!todo.description) {
			errors.description = 'Description is required.';
			errors.status = true;
		}
		if (!todo.type) {
			errors.type = 'Type is required.';
			errors.status = true;
		}
		if (!todo.date) {
			errors.date = 'Date is required.';
			errors.status = true;
		}
		if (!errors.status) {
			dispatch('add-or-update', todo);
		} else {
			alert('All fields are required.');
		}
	}
</script>

<h4>{todo.id ? 'Update' : 'Add'} Todo</h4>
<form on:submit={updateTodoHandler} novalidate>
	<table>
		<tbody>
			<tr>
				<th align="left">
					<label for="name">Name</label>
				</th>
				<td>
					<input id="name" type="text" name="name" bind:value={todo.name} required />
				</td>
				<td>
					{#if errors.name}
						{errors.name}
					{/if}
				</td>
			</tr>
			<tr>
				<th align="left">
					<label for="description">Description</label>
				</th>
				<td>
					<textarea id="description" name="description" bind:value={todo.description} required />
				</td>
				<td>
					{#if errors.description}
						{errors.description}
					{/if}
				</td>
			</tr>
			<tr>
				<th align="left">
					<label for="type">Type</label>
				</th>
				<td>
					<select id="type" name="type" bind:value={todo.type} required>
						{#each types as type}
							<option value={type}>{type}</option>
						{/each}
					</select>
				</td>
				<td>
					{#if errors.type}
						{errors.type}
					{/if}
				</td>
			</tr>
			<tr>
				<th align="left">
					<!-- svelte-ignore a11y-label-has-associated-control -->
					<label>Confidential</label>
				</th>
				<td>
					<label for="confidential1">Yes</label>
					<input
						id="confidential1"
						type="radio"
						name="confidential"
						value="Yes"
						bind:group={todo.confidential}
					/>
					<label for="confidential2">No</label>
					<input
						id="confidential2"
						type="radio"
						name="confidential"
						value="No"
						bind:group={todo.confidential}
					/>
				</td>
				<td />
			</tr>
			<tr>
				<th align="left">
					<!-- svelte-ignore a11y-label-has-associated-control -->
					<label>Remind</label>
				</th>
				<td>
					<label for="remind">Yes</label>
					<input id="remind" type="checkbox" name="checkbox" bind:checked={todo.remind} />
				</td>
				<td />
			</tr>
			<tr>
				<th align="left">
					<label for="date">Date</label>
				</th>
				<td>
					<input id="date" type="date" name="date" bind:value={todo.date} required />
				</td>
				<td>
					{#if errors.date}
						{errors.date}
					{/if}
				</td>
			</tr>
			<tr>
				<th colspan="2" align="right">
					<button type="submit">{todo.id ? 'Update' : 'Add'}</button>
				</th>
			</tr>
		</tbody>
	</table>
</form>

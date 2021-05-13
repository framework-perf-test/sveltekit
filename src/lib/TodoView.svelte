<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { Todo } from './todos';

	const dispatch = createEventDispatcher();

	export let todo!: Partial<Todo>;

	function closeTodoHandler() {
		dispatch('close');
	}
</script>

<h4>Todo</h4>
<table>
	<tbody>
		<tr>
			<th align="left"> Name </th>
			<td>
				{todo.name}
			</td>
		</tr>
		<tr>
			<th align="left"> Description </th>
			<td>
				{todo.description}
			</td>
		</tr>
		<tr>
			<th align="left"> Type </th>
			<td>
				{todo.type}
			</td>
		</tr>
		<tr>
			<th align="left"> Confidential </th>
			<td>
				{todo.confidential}
			</td>
		</tr>
		<tr>
			<th align="left"> Remind </th>
			<td>
				{todo.remind}
			</td>
			<td />
		</tr>
		<tr>
			<th align="left"> Date </th>
			<td>
				{todo.date}
			</td>
		</tr>
		<tr>
			<th colspan="2" align="right">
				<button type="button" on:click={closeTodoHandler}>Close</button>
			</th>
		</tr>
	</tbody>
</table>

<script lang="ts">
  import type { ActionData } from "./$types";



	export let form: ActionData;
</script>
<div>
	<form method="POST" action="?/logout">
		<button>LOGOUT</button>
	</form>
	
	
	<form method="POST" action="?/deleteaccount">
		<button>DELETE ACCOUNT</button>
		{#if form?.delete}
			{form?.delete}
		{/if}
	</form>
</div>

<style>
div{
	display: flex;
	place-content: center;
	margin-top: 15%;
}
button{
	padding: 10px;
	margin: 5px;
}
</style>
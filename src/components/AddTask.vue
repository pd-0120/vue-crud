<template>
	<v-card class="mx-auto">
		<v-card-title>
			<v-row>
				<v-col md="12" class="text-center">Add the new task</v-col>
			</v-row>
		</v-card-title>
		<v-card-text>
			<TaskForm />
		</v-card-text>
	</v-card>
</template>
<script>
	import TaskForm from "./TaskForm.vue"
	import Header from "./Shared/Header.vue"

	export default {
		name: "AddTask",
		components: {
			TaskForm,
			Header
		},
	};
</script>
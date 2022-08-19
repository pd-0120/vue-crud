<template>
	<v-card class="mx-auto">
		<v-card-title>
			<v-row>
				<v-col md="12" class="text-center">Edit the task</v-col>
			</v-row>
		</v-card-title>
		<v-card-text>
			<TaskForm />
		</v-card-text>
	</v-card>
</template>
<script>
	import TaskForm from './TaskForm.vue'

	export default {
		name: "EditTask",
		components: {
			TaskForm
		},
	};
</script>
<template>
	<v-card class="mx-auto">
		<v-card-title>
			<v-row>
				<v-col md="12" class="text-center">Add the new task</v-col>
			</v-row>
			<v-form ref="add_task_form" v-model="valid" lazy-validation>
				<v-row>
					<v-col sm="12" md="6">
						<v-text-field
							label="Task title"
							v-model="title"
							:rules="titleRules"
						></v-text-field>
					</v-col>
					<v-col sm="12" md="6">
						<v-text-field
							label="Task description"
							:rules="descriptionRules"
							v-model="description"
						></v-text-field>
					</v-col>

					<v-col sm="12" md="6">
						<v-select
							:items="items"
							label="Status"
							v-model="status"
							:rules="statusRules"
						></v-select>
					</v-col>
				</v-row>
				<v-row>
					<v-col sm="12" md="6">
						<v-btn
							type="button"
							color="success"
							@click="submitForm"
						>
							Submit
						</v-btn>
					</v-col>
				</v-row>
			</v-form>
		</v-card-title>
		<v-card-text> </v-card-text>
	</v-card>
</template>
<script>
	import axios from "axios";

	export default {
		name: "AddTask",
		data: () => ({
			valid: true,
			title: null,
			description: null,
			status: null,
			items: ["Pending", "Completed", "In Progress"],
			titleRules: [
				(v) => !!v || "Task title is required",
				(v) =>
					(v && v.length <= 25) || "Name must be less than 25 characters",
			],
			descriptionRules: [
				(v) => !!v || "Description is required",
				(v) =>
					(v && v.length >= 10) ||
					"Description must be grater than 10 characters",
				(v) =>
					(v && v.length <= 100) ||
					"Description must be less than 100 characters",
			],
			statusRules: [(v) => !!v || "Status is required"],
		}),
		methods: {
			async submitForm() {
				this.$refs.add_task_form.validate();
				const form = new FormData();
				form.append("title", this.title);
				form.append("description", this.description);
				form.append("status", this.status);

				await axios.post("http://localhost:3001/tasks", {
					title: this.title,
					description: this.description,
					status: this.status,
				});
			},
		},
	};
</script>
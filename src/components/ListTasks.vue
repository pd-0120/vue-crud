<template>
	<v-card class="mx-auto">
		<v-card-title>
			<v-row>
				<v-col md="12" class="text-center">Tasks List</v-col>
				<v-col md="12" class="text-center" justify-center>
					<v-table>
						<thead>
							<tr>
								<th>ID</th>
								<th>Name</th>
								<th>Description</th>
								<th>Status</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="task in tasks" :key="task.id">
								<td>{{ task.id }}</td>
								<td>{{ task.name }}</td>
								<td>{{ task.description }}</td>
								<td>{{ task.status }}</td>
								<td>
									<v-btn depressed color="success">
										<v-icon
											large
											color="darken-2"
											>
											mdi-pencil
											</v-icon>
									</v-btn>
									<v-btn depressed color="error ml-2" @click="deleteTask(task.id)">
										<v-icon
											large
											color="darken-2"
											>
											mdi-delete
											</v-icon>
									</v-btn>
								</td>
							</tr>
						</tbody>
					</v-table>
				</v-col>
			</v-row>
		</v-card-title>
	</v-card>
</template>
<script>
	import axios from "axios";

	export default {
		name: "ListTasks",
		data: () => ({
			tasks: [],
		}),
		mounted() {
			this.getTasks();
		},
		methods: {
			async getTasks() {
				const data = await axios.get("http://localhost:3001/tasks");
				this.tasks = data.data;
			},
			async deleteTask(id) {
				const data = await axios.delete(`http://localhost:3001/tasks/${id}`);
				this.getTasks()
			}
		},
	};
</script>
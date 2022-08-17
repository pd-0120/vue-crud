<template>
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
				<v-btn type="button" color="success" @click="submitForm">
					Submit
				</v-btn>
			</v-col>
		</v-row>
	</v-form>
    <v-snackbar
		v-model="snackbar"
		:timeout="1000"
	>
		{{ text }}
	</v-snackbar>
</template>
<script>
import axios from 'axios';

export default {
    name: "TaskForm",

    data: () => ({
        valid: true,
        title: null,
        description: null,
        id: null,
        snackbar:false,
        text:null,
        status: null,
        isEdit: false,
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
    async mounted() {
        const id = this.$route.params.id
        if(id) {
            let task = await axios.get(`http://localhost:3001/tasks/${id}`);
            if(task && this.$route.name === "EditTask") {
                task = task.data

                this.title = task.title;
                this.description = task.description;
                this.status = task.status;
                this.id = task.id
                this.isEdit = true;
            }
        }
    },
    methods: {
        async submitForm() {
            this.$refs.add_task_form.validate();
            const form = new FormData();
            form.append("title", this.title);
            form.append("description", this.description);
            form.append("status", this.status);
            const data = {title: this.title,description: this.description,status: this.status}
            let task = null;
            
            if(this.isEdit) {
                task = await axios.put(`http://localhost:3001/tasks/${this.id}`, data);
            } else {
                task = await axios.post(`http://localhost:3001/tasks`, data);
            }

            if(task) {
                this.snackbar = true;
                this.text = "Task Updated successfully."
                this.$refs.add_task_form.reset()
            }
        },
    },
}
</script>

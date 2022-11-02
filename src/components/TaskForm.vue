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
		:timeout="5000"
	>
		{{ text }}
	</v-snackbar>
</template>
<script>
import axios from 'axios';

export default {
    name: "TaskForm",

    data: () => ({
        endpoint: import.meta.env.VITE_API_ENDPOINT,
        valid: true,
        title: null,
        description: null,
        id: null,
        snackbar:false,
        text:null,
        status: null,
        isEdit: false,
        items: ["Pending", "Completed", "In-Progress"],
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
        if(id && this.$route.name === "EditTask") {
            let response = await axios.get(`${this.endpoint}tasks/${id}`);
            
            const post = response.data.post

            this.title = post.name;
            this.description = post.description;
            this.status = post.status;
            this.id = post.id
            this.isEdit = true;
        }
    },
    methods: {
        async submitForm() {
            this.valid = await this.$refs.add_task_form.validate();
            if(this.valid.valid) {
                const data = {name: this.title,description: this.description,status: this.status}
                let task = null;
                
                if(this.isEdit) {
                    task = await axios.put(`${this.endpoint}tasks/${this.id}/update`, data);
                } else {
                    task = await axios.post(`${this.endpoint}tasks/create   `, data);
                }
    
                if(task) {
                    this.snackbar = true;
                    this.text = "Task Updated successfully."
                    this.$refs.add_task_form.reset()
                    this.$router.push({name:'ListTasks'})
                }
            }
        },
    },
}
</script>

<template>
	<div>
		<v-app-bar color="deep-purple accent-4" dense dark>
			<v-toolbar-title>My Crud App</v-toolbar-title>

			<v-spacer></v-spacer>

			<v-btn depressed @click="updateNavigationPath('/add-task')">
				Add New Task
            </v-btn>

            <v-btn depressed @click="updateNavigationPath('/list-tasks')">
				List Tasks
			</v-btn>
		</v-app-bar>
	</div>
</template>
<script>
	export default {
		name: "Header",
		methods: {
			updateNavigationPath(route) {
				this.$router.push(route)
			},
		}
	};
</script>

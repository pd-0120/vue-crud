<template>
	<v-app>
		<v-main>
			<Header />
			<v-container>
				<router-view></router-view>
			</v-container>
			<Footer />
		</v-main>
	</v-app>
</template>

<script>
	import Header from "./components/Shared/Header.vue";
	import Footer from "./components/Shared/Footer.vue";

	export default {
		name: "App",

		components: {
			Header,
			Footer,
		},

		data: () => ({
			//
		}),
	};
</script>

<template>
	<v-app>
		<v-main>
			<Header />
			<router-view></router-view>
			<Footer />
		</v-main>
	</v-app>
</template>

<script>
	import HelloWorld from "./components/HelloWorld.vue";
	import Header from "./components/Shared/Header.vue";
	import Footer from "./components/Shared/Footer.vue";

	export default {
		name: "App",

		components: {
			HelloWorld,
			Header,
			Footer,
		},

		data: () => ({
			//
		}),
	};
</script>

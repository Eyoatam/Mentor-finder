<template>
	<the-header></the-header>
	<router-view v-slot="slotProps">
		<transition name="route-animate" mode="out-in">
			<component :is="slotProps.Component"></component>
		</transition>
	</router-view>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
export default {
	computed: {
		loggedOut() {
			return this.$store.getters.didLogOut;
		},
	},
	components: {
		TheHeader,
	},
	created() {
		this.$store.dispatch('autoLogin');
	},
	watch: {
		loggedOut(newVal, oldVal) {
			if (newVal && newVal !== oldVal) {
				this.$router.replace('/mentors');
			}
		},
	},
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap');

* {
	box-sizing: border-box;
}

html {
	font-family: 'Nunito', sans-serif;
}

body {
	margin: 0;
	background: #eee;
}

.route-animate-enter-from {
	opacity: 0;
	transform: translateY(-30px);
}

.route-animate-leave-to {
	opacity: 0;
	transform: translateY(30px);
}

.route-animate-enter-active {
	transition: all 300ms ease-in-out;
}

.route-animate-leave-active {
	transition: all 300ms ease-in;
}

.route-animate-enter-to,
.route-animate-leave-from {
	opacity: 1;
	transform: translateY(0px);
}
</style>
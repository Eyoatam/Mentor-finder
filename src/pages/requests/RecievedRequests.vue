<template>
	<section>
		<base-card>
			<header>
				<h2>Requests Recieved</h2>
			</header>
			<ul v-if="hasRequests">
				<requests-item
					v-for="req in requests"
					:key="req.id"
					:email="req.userEmail"
					:message="req.message"
				></requests-item>
			</ul>
			<h3 v-else>You Haven't Recieved Any Requests Yet</h3>
		</base-card>
	</section>
</template>

<script>
import RequestsItem from '../../components/requests/RequestsItem';
export default {
	components: {
		RequestsItem,
	},
	computed: {
		requests() {
			return this.$store.getters['requests/requests'];
		},
		hasRequests() {
			return this.$store.getters['requests/hasRequests'];
		},
	},
};
</script>

<style scoped>
header {
	text-align: center;
}

ul {
	list-style: none;
	margin: 2rem auto;
	padding: 0;
	max-width: 30rem;
}

h3 {
	text-align: center;
}
</style>
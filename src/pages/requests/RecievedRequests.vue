<template>
	<div>
		<base-dialog :show="!!error" title="An Error Occured!" @close="handleError">
			<p>{{ error }}</p>
		</base-dialog>
		<section>
			<base-card>
				<header>
					<h2>Requests Recieved</h2>
				</header>
				<div v-if="isLoading">
					<base-spinner></base-spinner>
				</div>
				<ul v-else-if="hasRequests && !isLoading">
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
	</div>
</template>

<script>
import RequestsItem from '../../components/requests/RequestsItem';
export default {
	data() {
		return {
			isLoading: false,
			error: null,
		};
	},
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
	methods: {
		async loadRequests() {
			this.isLoading = true;
			try {
				await this.$store.dispatch('requests/loadRequests');
			} catch (error) {
				this.error = error.message || 'Failed to fetch requests!';
			}
			this.isLoading = false;
		},
		handleError() {
			this.error = null;
		},
	},
	created() {
		this.loadRequests();
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
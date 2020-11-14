<template>
	<div>
		<base-dialog :show="!!error" title="An Error Occured!" @close="handleError">
			<p>{{ error }}</p>
		</base-dialog>
		<section>
			<mentor-filter @change-filter="setFilters"></mentor-filter>
		</section>
		<section>
			<base-card>
				<div class="controls">
					<base-button mode="outlined" @click="loadMentors(true)"
						>Refresh</base-button
					>
					<base-button v-if="!isMentor && !isLoading" link to="/register"
						>register as a coach</base-button
					>
				</div>
				<div v-if="isLoading">
					<base-spinner></base-spinner>
				</div>
				<ul v-else-if="hasMentors">
					<mentor-item
						v-for="mentor in filteredMentors"
						:key="mentor.id"
						:id="mentor.id"
						:firstName="mentor.firstName"
						:lastName="mentor.lastName"
						:rate="mentor.hourlyRate"
						:areas="mentor.areas"
					></mentor-item>
				</ul>
				<h3 v-else>No Mentors Found</h3>
			</base-card>
		</section>
	</div>
</template>

<script>
import MentorItem from '../../components/mentors/MentorItem.vue';
import MentorFilter from '../../components/mentors/MentorFilter.vue';
export default {
	components: {
		MentorItem,
		MentorFilter,
	},
	data() {
		return {
			isLoading: false,
			error: null,
			activeFilters: {
				motivational: true,
				spiritual: true,
				life: true,
			},
		};
	},
	computed: {
		isMentor() {
			return this.$store.getters['mentors/isMentor'];
		},
		filteredMentors() {
			const mentors = this.$store.getters['mentors/mentors'];
			return mentors.filter((mentor) => {
				if (
					this.activeFilters.motivational &&
					mentor.areas.includes('motivational')
				) {
					return true;
				}
				if (
					this.activeFilters.spiritual &&
					mentor.areas.includes('spiritual')
				) {
					return true;
				}
				if (this.activeFilters.life && mentor.areas.includes('life')) {
					return true;
				}
				return false;
			});
		},
		hasMentors() {
			return !this.isLoading && this.$store.getters['mentors/hasMentors'];
		},
	},
	methods: {
		async loadMentors(refresh = false) {
			this.isLoading = true;
			try {
				await this.$store.dispatch('mentors/loadMentors', {
					forceRefresh: refresh,
				});
			} catch (error) {
				this.error = error.message || 'Something went wrong!';
			}
			this.isLoading = false;
		},
		handleError() {
			this.error = null;
		},
		setFilters(updatedFilters) {
			this.activeFilters = updatedFilters;
		},
	},
	created() {
		this.loadMentors();
	},
};
</script>

<style scoped>
ul {
	list-style: none;
	margin: 0;
	padding: 0;
}

.controls {
	display: flex;
	justify-content: space-between;
}
</style>
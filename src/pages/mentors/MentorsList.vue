<template>
	<section>
		<mentor-filter @change-filter="setFilters"></mentor-filter>
	</section>
	<section>
		<base-card>
			<div class="controls">
				<base-button mode="outlined">Refresh</base-button>
				<base-button link to="/register">register as a coach</base-button>
			</div>
			<ul v-if="hasMentors">
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
			<h3 v-else>No Coaches Found</h3>
		</base-card>
	</section>
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
			activeFilters: {
				motivational: true,
				spiritual: true,
				life: true,
			},
		};
	},
	computed: {
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
			return this.$store.getters['mentors/hasMentors'];
		},
	},
	methods: {
		setFilters(updatedFilters) {
			this.activeFilters = updatedFilters;
		},
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
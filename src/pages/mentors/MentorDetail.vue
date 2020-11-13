<template>
	<section>
		<base-card>
			<h2>{{ fullName }}</h2>
			<h3>${{ rate }}/hour</h3>
			<base-badge
				v-for="area in areas"
				:key="area"
				:type="area"
				:title="area"
			></base-badge>
			<p>{{ description }}</p>
		</base-card>
	</section>
</template>

<script>
export default {
	props: ['id'],
	data() {
		return {
			selectedMentor: null,
		};
	},
	computed: {
		fullName() {
			return this.selectedMentor.firstName + ' ' + this.selectedMentor.lastName;
		},
		rate() {
			return this.selectedMentor.hourlyRate;
		},
		contactLink() {
			return this.$route.path + '/' + this.id + '/contact';
		},
		areas() {
			return this.selectedMentor.areas;
		},
		description() {
			return this.selectedMentor.description;
		},
	},
	created() {
		this.selectedMentor = this.$store.getters['mentors/mentors'].find(
			(mentor) => mentor.id === this.id
		);
	},
};
</script>
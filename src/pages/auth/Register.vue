<template>
	<section>
		<base-card>
			<h2>Register as a Mentor Now!</h2>
			<mentor-form @form-submitted="submitData"></mentor-form>
		</base-card>
	</section>
</template>

<script>
import MentorForm from '../../components/mentors/MentorForm.vue';
export default {
	components: {
		MentorForm,
	},
	methods: {
		submitData(formData) {
			this.$store.dispatch('mentors/addNewMentor', formData);
		},
	},
};
</script>
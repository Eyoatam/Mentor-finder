<template>
	<div>
		<base-dialog
			:show="!!error"
			title="Registration Failed!"
			@close="handleError"
		>
			<p>{{ error }}</p>
		</base-dialog>
		<section>
			<base-card>
				<h2>Register as a Mentor Now!</h2>
				<div v-if="isLoading">
					<base-loading></base-loading>
				</div>
				<mentor-form v-else @form-submitted="submitData"></mentor-form>
			</base-card>
		</section>
	</div>
</template>

<script>
import MentorForm from '../../components/mentors/MentorForm.vue';
export default {
	data() {
		return {
			isLoading: false,
			error: null,
		};
	},
	components: {
		MentorForm,
	},
	methods: {
		async submitData(formData) {
			this.isLoading = true;
			try {
				await this.$store.dispatch('mentors/addNewMentor', formData);
				this.$router.replace('/mentors');
			} catch (error) {
				this.error =
					error.message || 'Failed To Regiseter, Please Try Again Later!!';
			}
			this.isLoading = false;
		},
		handleError() {
			this.error = null;
		},
	},
};
</script>
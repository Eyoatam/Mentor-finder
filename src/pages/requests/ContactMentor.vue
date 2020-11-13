<template>
	<form @submit.prevent="submitForm">
		<div class="form-control">
			<label for="email">Your Email:</label>
			<input type="email" v-model="email.val" @blur="updateValidityStatus" />
		</div>
		<p class="errors" v-if="!email.isValid">an '@' is required in your email</p>
		<div class="form-cntrol">
			<label for="message">Your Message:</label>
			<textarea
				id="message"
				rows="5"
				v-model="message.val"
				@blur="updateValidityStatus"
			></textarea>
		</div>
		<p class="errors" v-if="!message.isValid">
			Please Enter a valid Information
		</p>
		<div class="actions">
			<base-button>Send Message</base-button>
		</div>
	</form>
</template>

<script>
export default {
	data() {
		return {
			email: {
				val: '',
				isValid: true,
			},
			message: {
				val: '',
				isValid: true,
			},
			validated: true,
		};
	},
	methods: {
		updateValidityStatus() {
			this.email.isValid = true;
			this.message.isValid = true;
			this.validated = true;
		},
		formValidator() {
			if (this.email.val.trim() === '') {
				this.validated = false;
			}
			if (!this.email.val.includes('@')) {
				this.email.isValid = false;
			}
			if (this.message.val.trim() === '') {
				this.message.isValid = false;
				this.validated = false;
				return;
			}
		},
		submitForm() {
			this.validated = true;
			this.formValidator();
			if (!this.validated) {
				return;
			}
			this.$store.dispatch('requests/addRequest', {
				mentorId: this.$route.params.id,
				userEmail: this.email.val,
				message: this.message.val,
			});
			this.$router.replace('/mentors');
		},
	},
};
</script>

<style scoped>
form {
	margin: 1rem;
	border: 1px solid #ccc;
	border-radius: 12px;
	padding: 1rem;
}

.form-control {
	margin: 0.5rem 0;
}

label {
	font-weight: bold;
	margin-bottom: 0.5rem;
	display: block;
}

input,
textarea {
	display: block;
	width: 100%;
	font: inherit;
	border: 1px solid #ccc;
	border-radius: 5px;
	padding: 0.15rem;
	transition: 200ms ease-in-out;
}

input:focus,
textarea:focus {
	outline: none;
	box-shadow: 0 0 3pt 2pt #c1dffc;
}

.errors {
	font-weight: bold;
	color: red;
}

.actions {
	text-align: center;
	margin: 0.5rem;
}
</style>
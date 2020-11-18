<template>
	<div>
		<base-dialog
			:show="!!error"
			title="Authentication Failed!"
			@close="handleError"
		>
			<p>
				{{ error }}
			</p>
		</base-dialog>
		<section>
			<base-card>
				<h2>Login</h2>
				<form>
					<div class="form-control">
						<label for="email">E-mail</label>
						<input type="text" id="email" v-model.trim="email" />
					</div>
					<div class="form-control">
						<label for="password">Password</label>
						<input type="password" id="password" v-model.trim="password" />
					</div>
					<div class="btn-container">
						<base-button @click.prevent="submitForm">{{
							submitButtonCaption
						}}</base-button>
						<base-button type="button" mode="flat" @click="switchAuthMode">{{
							switchAuthModeButton
						}}</base-button>
					</div>
					<div class="text">
						<p v-if="!formIsValid">Please Enter a valid email and password</p>
					</div>
				</form>
				<div v-if="isLoading">
					<base-loading></base-loading>
				</div>
			</base-card>
		</section>
	</div>
</template>

<script>
export default {
	data() {
		return {
			email: '',
			password: '',
			formIsValid: true,
			authMode: 'login',
			error: null,
			isLoading: false,
		};
	},
	computed: {
		submitButtonCaption() {
			if (this.authMode === 'login') {
				return 'Login';
			} else {
				return 'Signup';
			}
		},
		switchAuthModeButton() {
			if (this.authMode === 'login') {
				return 'Signup Instead';
			} else {
				return 'Login Instead';
			}
		},
	},
	methods: {
		async submitForm() {
			this.formIsValid = true;
			if (
				this.email === '' ||
				!this.email.includes('@') ||
				this.password.length < 6
			) {
				this.formIsValid = false;
				return;
			}
			this.isLoading = true;
			try {
				if (this.mode === 'login') {
					// this.$store.dispatch('login');
				} else {
					await this.$store.dispatch('signup', {
						email: this.email,
						password: this.password,
					});
				}
			} catch (error) {
				this.error = error.message || 'Failed to Authenticate';
			}
			this.isLoading = false;
		},
		switchAuthMode() {
			if (this.authMode === 'login') {
				this.authMode = 'signup';
			} else {
				this.authMode = 'login';
			}
		},
		handleError() {
			this.error = null;
		},
	},
};
</script>

<style scoped>
form {
	margin: 1rem;
	border: 1px solid #ccc;
	border-radius: 5px;
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
	box-shadow: 0 0 3px 2px #c1dffc;
}

.btn-container {
	text-align: center;
	margin: 5px auto;
}

.text {
	text-align: center;
}
</style>

<template>
	<form @submit.prevent="submitForm">
		<div class="form-control" :class="{ invalid: !firstName.isValid }">
			<label for="firstName">First Name</label>
			<input
				type="text"
				id="firstName"
				v-model.trim="firstName.val"
				@blur="updateValidityStatus('firstName')"
			/>
			<p v-if="!firstName.isValid">First Name is required</p>
		</div>
		<div class="form-control" :class="{ invalid: !lastName.isValid }">
			<label for="lastName">Last Name</label>
			<input
				type="text"
				id="lastName"
				v-model.trim="lastName.val"
				@blur="updateValidityStatus('lastName')"
			/>
			<p v-if="!lastName.isValid">Last Name is required</p>
		</div>
		<div class="form-control" :class="{ invalid: !description.isValid }">
			<label for="description">Description</label>
			<textarea
				type="text"
				id="description"
				rows="5"
				v-model.trim="description.val"
				@blur="updateValidityStatus('description')"
			></textarea>
			<p v-if="!description.isValid">Description field is required</p>
		</div>
		<div class="form-control" :class="{ invalid: !areas.isValid }">
			<h3>Areas Of Mentorship</h3>
			<div>
				<input
					type="checkbox"
					id="motivational"
					value="motivational"
					v-model="areas.val"
					@blur="updateValidityStatus('areas')"
				/>
				<label for="motivational">Motivational Mentorship</label>
			</div>
			<div>
				<input
					type="checkbox"
					id="spiritual"
					value="spiritual"
					v-model="areas.val"
					@blur="updateValidityStatus('areas')"
				/>
				<label for="spiritual">Spiritual Mentorship</label>
			</div>
			<div>
				<input
					type="checkbox"
					id="life"
					value="life"
					v-model="areas.val"
					@blur="updateValidityStatus('areas')"
				/>
				<label for="life">Life Advisory</label>
			</div>
			<p v-if="!areas.isValid">At least one area of mentorship is required</p>
		</div>
		<p v-if="!validated">please fix the above errors and submit again</p>
		<base-button>Register</base-button>
	</form>
</template>

<script>
export default {
	emits: ['form-submitted'],
	data() {
		return {
			firstName: {
				val: '',
				isValid: true,
			},
			lastName: {
				val: '',
				isValid: true,
			},
			description: {
				val: '',
				isValid: true,
			},
			areas: {
				val: [],
				isValid: true,
			},
			validated: true,
		};
	},
	methods: {
		updateValidityStatus(input) {
			this[input].isValid = true;
		},
		formValidator() {
			if (this.firstName.val === '') {
				this.firstName.isValid = false;
				this.validated = false;
			}
			if (this.lastName.val === '') {
				this.lastName.isValid = false;
				this.validated = false;
			}
			if (this.description.val === '') {
				this.description.isValid = false;
				this.validated = false;
			}
			if (this.areas.val.length === 0) {
				this.areas.isValid = false;
				this.validated = false;
			}
		},
		submitForm() {
			this.validated = true;
			this.formValidator();
			if (!this.validated) {
				return;
			} else if (this.validated) {
				const formData = {
					first: this.firstName.val,
					last: this.lastName.val,
					desc: this.description.val,
					areas: this.areas.val,
				};
				console.log(formData);
				this.$emit('form-submitted', formData);
				(this.firstName = ''),
					(this.lastName = ''),
					(this.description = ''),
					(this.areas = []);
			} else {
				return null;
			}
		},
	},
};
</script>

<style scoped>
.form-control {
	margin: 0.5rem 0;
}

label {
	font-weight: bold;
	display: block;
	margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
	font-weight: normal;
	display: inline;
	margin: 0 0 0 0.5rem;
}

input,
textarea {
	display: block;
	width: 100%;
	padding: 0.15rem;
	border: 1px solid #ccc;
	font: inherit;
	border-radius: 7px;
	transition: 200ms ease-in-out;
}

input:focus,
textarea:focus {
	outline: none;
	box-shadow: 0 0 3pt 2pt #c1dffc;
}

input[type='checkbox'] {
	display: inline;
	width: auto;
	border: none;
}

input[type='checkbox']:focus {
	box-shadow: 0 0 3pt 2pt #c1dffc;
}

h3 {
	margin: 0.5rem 0;
	font-size: 1rem;
}

.invalid label {
	color: #e60013;
}

.invalid input,
.invalid textarea {
	border: 1px solid #e60013;
}
</style>
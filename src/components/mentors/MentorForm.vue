<template>
	<form @submit.prevent="submitForm">
		<div class="form-control">
			<label for="firstName">First Name</label>
			<input type="text" id="firstName" v-model.trim="firstName" />
		</div>
		<div class="form-control">
			<label for="lastName">Last Name</label>
			<input type="text" id="lastName" v-model.trim="lastName" />
		</div>
		<div class="form-control">
			<label for="description">Description</label>
			<textarea
				type="text"
				id="description"
				rows="5"
				v-model.trim="description"
			></textarea>
		</div>
		<div class="form-control">
			<h3>Areas Of Mentorship</h3>
			<div>
				<input
					type="checkbox"
					id="motivational"
					value="motivational"
					v-model="areas"
				/>
				<label for="motivational">Motivational Mentorship</label>
			</div>
			<div>
				<input
					type="checkbox"
					id="spiritual"
					value="spiritual"
					v-model="areas"
				/>
				<label for="spiritual">Spiritual Mentorship</label>
			</div>
			<div>
				<input type="checkbox" id="life" value="life" v-model="areas" />
				<label for="life">Life Advisory</label>
			</div>
		</div>
		<base-button>Register</base-button>
	</form>
</template>

<script>
export default {
	emits: ['form-submitted'],
	data() {
		return {
			firstName: '',
			lastName: '',
			description: '',
			areas: [],
		};
	},
	methods: {
		submitForm() {
			const formData = {
				first: this.firstName,
				last: this.lastName,
				desc: this.description,
				areas: this.areas,
			};
			console.log(formData);
			this.$emit('form-submitted', formData);
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
	color: red;
}

.invalid input,
.invalid textarea {
	border: 1px solid red;
}
</style>
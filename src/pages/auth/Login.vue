<template>
	<div>
		<base-dialog :show="false" title="Registration Failed!">
			<p>something went wrong</p>
		</base-dialog>
		<section>
			<base-card>
				<h2>Login</h2>
				<form>
					<div class="form-control">
						<label for="email">E-mail</label>
						<input type="text" id="email" />
					</div>
					<div class="form-control">
						<label for="email">E-mail</label>
						<input type="text" id="email" />
					</div>
					<div class="btn-container">
						<base-button>Login</base-button>
					</div>
					<div class="text">
						<router-link to="/register"
							>Already Have an account? Sign Up</router-link
						>
					</div>
				</form>
				<!-- <div>
					<base-loading></base-loading>
				</div> -->
			</base-card>
		</section>
	</div>
</template>

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

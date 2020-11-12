<template>
	<button v-if="!link" :class="mode">
		<slot></slot>
	</button>
	<router-link v-else :to="to" :class="mode">
		<slot></slot>
	</router-link>
</template>

<script>
export default {
	props: {
		mode: {
			type: String,
			required: false,
			default: null,
		},
		link: {
			type: Boolean,
			required: false,
			default: false,
		},
		to: {
			type: String,
			required: false,
			default: '/',
		},
	},
};
</script>

<style scoped>
button,
a {
	outline: none;
	text-decoration: none;
	padding: 0.5rem 1rem;
	font: inherit;
	background-color: #0060ce;
	border: 1px solid #0060ce;
	color: white;
	cursor: pointer;
	border-radius: 5px;
	margin-right: 0.5rem;
	display: inline-block;
	transition: all 200ms ease-in-out;
}

a:hover,
a:active,
button:hover,
button:active {
	background-color: #004ea7;
	border-color: #004ea7;
}

.flat {
	background-color: transparent;
	color: #0060ce;
	border: none;
}

.outlined {
	background-color: transparent;
	border-color: #004ea7;
	color: #004ea7;
}

.flat:hover,
.flat:active,
.outlined:hover,
.outlined:active {
	background-color: #d2e6ff;
}
</style>
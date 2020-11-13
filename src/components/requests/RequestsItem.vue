<template>
	<li>
		<div class="tooltip">
			<a :href="emailLink">{{ email }}</a>
			<a class="tooltiptext" :href="emailLink">reply</a>
		</div>
		<p>{{ message }}</p>
	</li>
</template>

<script>
export default {
	props: ['message', 'email'],
	computed: {
		emailLink() {
			return 'mailto:' + this.email;
		},
	},
};
</script>

<style scoped>
li {
	margin: 1rem 0;
	border: 1px solid #ccc;
	border-radius: 5px;
	padding: 1rem;
}

a {
	color: #00318d;
	text-decoration: none;
	font-weight: bold;
}

a:hover,
a:active {
	color: #00428d;
}

p {
	margin: 0.5rem 0;
}

.tooltip {
	position: relative;
	display: inline-block;
}

.tooltip .tooltiptext {
	visibility: hidden;
	width: 100px;
	background-color: black;
	color: #fff;
	text-align: center;
	padding: 1px 0;
	margin: 0px 6px;
	border-radius: 3px;
	position: absolute;
	top: -30px;
	right: -16px;
	z-index: 1;
	animation: tooltip 0.2s ease-in-out;
}

.tooltip:hover .tooltiptext {
	visibility: visible;
}

.tooltip .tooltiptext::after {
	content: ' ';
	position: absolute;
	top: 100%;
	left: 50%;
	margin-left: -5px;
	border-width: 5px;
	border-style: solid;
	border-color: black transparent transparent transparent;
}

.tooltip .tooltiptext {
	opacity: 0;
	transition: opacity 0.2s ease-in-out;
}

.tooltip:hover .tooltiptext {
	opacity: 1;
}
</style>
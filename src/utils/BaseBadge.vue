<template>
	<span class="badge" :class="type">
		{{ text }}
	</span>
</template>

<script>
export default {
	props: ['type', 'title'],
	computed: {
		text() {
			return this.title.toUpperCase();
		},
	},
};
</script>

<style scoped>
.badge {
	background-color: #ccc;
	color: #252525;
	border-radius: 30px;
	padding: 0.2rem 1rem;
	display: inline-block;
	margin-right: 0.5rem;
	font-size: 12px;
}

.motivational {
	background-color: #00ce90;
	color: white;
}

.spiritual {
	background-color: #00718d;
	color: white;
}

.life {
	background-color: #ffc507;
	color: white;
}
</style>
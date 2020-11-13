<template>
	<teleport to="body">
		<div v-if="show" class="backdrop" @click="closeDialog"></div>
		<transition name="dialog">
			<dialog open v-if="show">
				<header>
					<slot name="header">
						<h2>{{ title }}</h2>
					</slot>
				</header>
				<section>
					<slot></slot>
				</section>
				<menu>
					<slot name="actions">
						<base-button @click="closeDialog">Close</base-button>
					</slot>
				</menu>
			</dialog>
		</transition>
	</teleport>
</template>

<script>
export default {
	props: {
		show: {
			type: Boolean,
			required: false,
		},
		title: {
			type: String,
			required: false,
		},
		fixed: {
			type: Boolean,
			required: false,
			default: false,
		},
	},
	emits: ['close'],
	methods: {
		closeDialog() {
			if (this.fixed) {
				return;
			}
			this.$emit('close');
		},
	},
};
</script>

<style scoped>
.backdrop {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	z-index: 10;
	background-color: rgba(0, 0, 0, 0.5);
}
dialog {
	position: fixed;
	top: 30vh;
	width: 30rem;
	left: calc(50% - 15rem);
	margin: 0;
	border-radius: 12px;
	padding: 1rem;
	background-color: white;
	z-index: 100;
	border: none;
}

header h2 {
	margin: 0;
}

section {
	padding: 1rem;
}

menu {
	padding: 1rem;
	display: flex;
	justify-content: flex-end;
	margin: 0;
}

@media (min-width: 768px) {
	dialog {
		left: calc(50% - 15rem);
		width: 30rem;
	}
}

.dialog-enter-active {
	animation: modal 0.3s ease-in-out;
}
.dialog-leave-active {
	animation: modal 0.2s ease-out reverse;
}
@keyframes modal {
	from {
		opacity: 0;
		transform: translateY(-150px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}
</style>
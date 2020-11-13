<template>
	<div class="sk-chase">
		<div class="sk-chase-dot"></div>
		<div class="sk-chase-dot"></div>
		<div class="sk-chase-dot"></div>
		<div class="sk-chase-dot"></div>
		<div class="sk-chase-dot"></div>
		<div class="sk-chase-dot"></div>
	</div>
</template>

<style scoped>
.sk-chase {
	width: 40px;
	height: 40px;
	position: relative;
	margin: auto;
	display: flex;
	padding: 1rem;
	text-align: center;
	animation: sk-chase 1.7s infinite linear;
}

.sk-chase-dot {
	width: 100%;
	height: 100%;
	position: absolute;
	left: 0;
	top: 0;
	animation: sk-chase-dot 2s infinite ease-in-out both;
}

.sk-chase-dot:before {
	content: '';
	display: block;
	width: 25%;
	height: 25%;
	background-color: #2c3e50;
	border-radius: 100%;
	animation: sk-chase-dot-before 1s infinite ease-in-out both;
}

.sk-chase-dot:nth-child(6) {
	animation-delay: 0.5s;
}
.sk-chase-dot:nth-child(5) {
	animation-delay: 0.4s;
}
.sk-chase-dot:nth-child(4) {
	animation-delay: 0.3s;
}
.sk-chase-dot:nth-child(3) {
	animation-delay: 0.2s;
}
.sk-chase-dot:nth-child(2) {
	animation-delay: 0.1s;
}
.sk-chase-dot:nth-child(1) {
	animation-delay: 0s;
}
.sk-chase-dot:nth-child(1):before {
	animation-delay: 0.5s;
}
.sk-chase-dot:nth-child(2):before {
	animation-delay: 0.4s;
}
.sk-chase-dot:nth-child(3):before {
	animation-delay: 0.3s;
}
.sk-chase-dot:nth-child(4):before {
	animation-delay: 0.2s;
}
.sk-chase-dot:nth-child(5):before {
	animation-delay: 0.1s;
}
.sk-chase-dot:nth-child(6):before {
	animation-delay: 0s;
}

@keyframes sk-chase-dot {
	65%,
	100% {
		transform: rotate(360deg);
	}
}

@keyframes sk-chase-dot-before {
	50% {
		transform: scale(0.5);
	}
	100%,
	0% {
		transform: scale(0.6);
	}
}
</style>
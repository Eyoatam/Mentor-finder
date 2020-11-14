<template>
	<div class="backdrop"></div>
	<div class="bouncer">
		<div class="bounce1"></div>
		<div class="bounce2"></div>
		<div class="bounce3"></div>
	</div>
</template>

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

.bouncer {
	margin: 100px auto 0;
	width: 70px;
	text-align: center;
}

.bouncer > div {
	width: 18px;
	height: 18px;
	background-color: #333;

	border-radius: 100%;
	display: inline-block;
	-webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
	animation: sk-bouncedelay 1.4s infinite ease-in-out both;
}

.bouncer .bounce1 {
	-webkit-animation-delay: -0.32s;
	animation-delay: -0.32s;
	background-color: #2c3e50;
}

.bouncer .bounce2 {
	background-color: #2c3e50;
	-webkit-animation-delay: -0.16s;
	animation-delay: -0.16s;
}

.bouncer .bounce3 {
	background-color: #2c3e50;
}

@-webkit-keyframes sk-bouncedelay {
	0%,
	80%,
	100% {
		-webkit-transform: scale(0);
	}
	40% {
		-webkit-transform: scale(1);
	}
}

@keyframes sk-bouncedelay {
	0%,
	80%,
	100% {
		-webkit-transform: scale(0);
		transform: scale(0);
	}
	40% {
		-webkit-transform: scale(1);
		transform: scale(1);
	}
}
</style>
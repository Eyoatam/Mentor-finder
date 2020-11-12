<template>
	<base-card>
		<h2>Filter Coaches By</h2>
		<input
			type="checkbox"
			name="motivational"
			id="motivational"
			checked
			@change="setFilter"
		/>
		<label for="motivational" id="checkbox">
			<svg viewBox="0 0 100 100">
				<path
					class="box"
					d="M82,89H18c-3.87,0-7-3.13-7-7V18c0-3.87,3.13-7,7-7h64c3.87,0,7,3.13,7,7v64C89,85.87,85.87,89,82,89z"
				/>
				<polyline class="check" points="25.5,53.5 39.5,67.5 72.5,34.5 " />
			</svg>
			<span>Motivational</span>
		</label>
		<input
			type="checkbox"
			name="spiritual"
			id="spiritual"
			checked
			@change="setFilter"
		/>
		<label for="spiritual" id="checkbox">
			<svg viewBox="0 0 100 100">
				<path
					class="box"
					d="M82,89H18c-3.87,0-7-3.13-7-7V18c0-3.87,3.13-7,7-7h64c3.87,0,7,3.13,7,7v64C89,85.87,85.87,89,82,89z"
				/>
				<polyline class="check" points="25.5,53.5 39.5,67.5 72.5,34.5 " />
			</svg>
			<span>Spiritual</span>
		</label>
		<input type="checkbox" name="life" id="life" checked @change="setFilter" />
		<label for="life" id="checkbox">
			<svg viewBox="0 0 100 100">
				<path
					class="box"
					d="M82,89H18c-3.87,0-7-3.13-7-7V18c0-3.87,3.13-7,7-7h64c3.87,0,7,3.13,7,7v64C89,85.87,85.87,89,82,89z"
				/>
				<polyline class="check" points="25.5,53.5 39.5,67.5 72.5,34.5 " />
			</svg>
			<span>Life</span>
		</label>
	</base-card>
</template>

<script>
export default {
	emits: ['change-filter'],
	data() {
		return {
			filters: {
				motivational: true,
				spiritual: true,
				life: true,
			},
		};
	},
	methods: {
		setFilter(event) {
			const inputId = event.target.id;
			const isActive = event.target.checked;
			const updatedFilters = {
				...this.filters,
				[inputId]: isActive,
			};
			this.filters = updatedFilters;
			this.$emit('change-filter', updatedFilters);
		},
	},
};
</script>


<style scoped>
h2 {
	margin: 0.5rem 0;
}

input[type='checkbox'] {
	display: none;
	pointer-events: none;
	vertical-align: middle;
}

input[type='checkbox'] + label {
	cursor: pointer;
	font-size: 0.8em;
	display: grid;
	grid-template-columns: auto 3fr;
}

input[type='checkbox'] + label svg {
	width: 2em;
	stroke: #007ce2;
	stroke-width: 5;
	fill: white;
}

input[type='checkbox'] + label svg .box {
	stroke-dasharray: 320;
	stroke-dashoffset: 0;
	fill: white;
	transition: stroke-dashoffset 0.3s linear;
}

input[type='checkbox'] + label svg .check {
	stroke-dasharray: 70;
	stroke-dashoffset: 70;
	fill: none;
	transition: stroke-dashoffset 0.3s linear;
}

input[type='checkbox'] + label span {
	padding-top: 0.3em;
	margin-left: 0.3em;
}

input[type='checkbox']:checked + label .box {
	stroke-dashoffset: 320;
}

input[type='checkbox']:checked + label .check {
	stroke-dashoffset: 0;
}
</style>

<template>
	<base-card>
		<h2>Filter Coaches By</h2>
		<span class="filter-option">
			<input type="checkbox" id="motivational" checked @change="setFilter" />
			<label for="motivational">Motivational</label>
		</span>
		<span class="filter-option">
			<input type="checkbox" id="spiritual" checked @change="setFilter" />
			<label for="spiritual">Spiritual</label>
		</span>
		<span class="filter-option">
			<input type="checkbox" id="life" checked @change="setFilter" />
			<label for="life">Life</label>
		</span>
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

.filter-option {
	margin-right: 1rem;
}

.filter-option label,
.filter-option input {
	vertical-align: middle;
}

.filter-option label {
	margin-left: 0.25rem;
}

.filter-option.active label {
	font-weight: bold;
}
</style>

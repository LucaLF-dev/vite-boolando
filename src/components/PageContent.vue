<script>
import CardPageContent from "./CardPageContent.vue";
import productsJson from "../db.json";

export default {
	components: {
		CardPageContent,
	},

	data() {
		return {
			products: productsJson.products,
		};
	},
	mounted() {
	},
};
</script>

<template>
	<main>
		<div class="container">
			<div class="row">
				<div
					v-for="(product, id) in products"
					:key="id"
					
					class="col-4"
				>
					<CardPageContent :item="product" />
				</div>
			</div>
		</div>
	</main>
</template>

<style lang="scss" scoped>
.row {
	display: flex;
	flex-wrap: wrap;
	row-gap: 40px;

	.col-4 {
		
		flex-basis: calc((100% / 12) * 4);
		padding: 10px;
	}
}
</style>

<script>
import CardContent from "./CardContent.vue";
// import productsJson from "../db.json";
import { store } from "../store"

export default {
	components: {
		CardContent,
	},

	data() {
		return {
			store: store,
			
				
		};
	},
	mounted() {
		console.log(this.products);
		console.log(this.contatore);
	},
};
</script>

<template>
	<main>
		<div class="container">
			<div class="row">
				<div
					v-for="(product, id) in store.products"
					:key="id" :log="console.log(product)"
					
					class="col-4"
				>
					<CardContent :item="product" />
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

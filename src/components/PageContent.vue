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
			products: store.products,
			contatore: store.contatore,		
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
		<h1>{{ store.contatore }}</h1>
		<button @click="store.incrementa()">INCR</button>
		<div class="container">
			<div class="row">
				<div
					v-for="(product, id) in products"
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

<script>
import CardContent from "./CardContent.vue";
// import productsJson from "../db.json";
import { store } from "../store";

export default {
	components: {
		CardContent,
	},

	data() {
		return {
			store: store,
			selectedProduct: {},
			open: false,
		};
	},
	methods: {
		showModal(value) {

        this.selectedProduct = value
        this.open = true
      },
		closeModal() {
        this.open = false
        this.selectedProduct = {}
      },
	},
	mounted() {},
};
</script>

<template>
	<main>
		<div class="container">
			<div class="row">
				<div
					v-for="(product, id) in store.products"
					:key="id"
					:log="console.log(product)"
					class="col-4"
				>
					<CardContent @show="showModal" :item="product" />
				</div>
			</div>
		</div>
	</main>

	<div v-if="open" class="modal">
		
		<div class="card">
			
			<div class="card__header">
				<figure>
					<img :src="selectedProduct.backImage" alt="">
				</figure>
				<div class="header__name">
					<span>
					{{ selectedProduct.name }}
				</span></div>
				<font-awesome-icon
					@click="closeModal" class="icon-closeMod"
					:icon="['far', 'circle-xmark']"
				/>
				
				
			</div>
			<div class="card__body">
				<p>{{ selectedProduct.brand }}</p>
			</div>
		</div>
	</div>
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

.modal {
	&::after {
		content: "";
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 40;
		background-color: rgba(0, 0, 0, 0.5);
	}
	.card {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 50;
		background-color: white;
		border-radius: 20px;
		padding: 40px;
		width: 100%;
		max-width: 500px;
		box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
		text-align: center;
		

		.card__header {
			display: flex;
			align-items: center;
			flex-direction: column;
			font-size: 22px;
			font-weight: 700;
			position: relative;
			

			.icon-closeMod {
				position: absolute;
				right: -28px;
				top: -28px;
			}
		}
	}
}
</style>

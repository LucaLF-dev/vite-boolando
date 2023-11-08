<script>
import { store } from "../store";

export default {
	data() {
		return {
			store: store,
			title: "Boolando s.r.l",
			policy_one: "Informazioni legali ",
			policy_two: "Informativa privacy ",
			policy_three: "Diritto di recesso ",
			menuBrands: [
				{
					type: ["fab", "square-instagram"],
					link: "#",
				},
				{
					type: ["fab", "square-facebook"],
					link: "#",
				},
				{
					type: ["fab", "square-twitter"],
					link: "#",
				},
				{
					type: ["fab", "square-pinterest"],
					link: "#",
				},
				{
					type: ["fab", "square-youtube"],
					link: "#",
				},
			],
		};
	},
};
</script>

<template>
	<footer class="page-footer">
		<div class="container">
			<div class="row">
				<div class="col policy">
					<h4>{{ title }}</h4>
					<ul class="footer-policy">
						<li>
							<a href="#">{{ policy_one }}</a>
						</li>
						<li>
							<a href="#">{{ policy_two }}</a>
						</li>
						<li>
							<a href="#">{{ policy_three }}</a>
						</li>
					</ul>
				</div>
				<div class="col social">
					<h5>Trovaci anche su</h5>
					<ul class="list-social-icon">
						<li v-for="(brand, i) in menuBrands"><a :href="brand.link"><font-awesome-icon class="icon-brand" :icon="brand.type" /></a></li>
					</ul>
				</div>
			</div>
		</div>
	</footer>
</template>

<style lang="scss" scoped>
.page-footer {
	padding: 20px 10px;
	background-color: #1a1a1a;
	color: white;
	
	.row {
		display: flex;
		padding: 0 10px;
	}
}

.col {
	flex-basis: 0;
	flex-grow: 1;
	justify-content:center ;

	&.policy {

		.footer-policy {
			display: flex;
			gap: 8px;
			margin-top: 10px;
		}
	}
	&.social {
		display: flex;
		flex-wrap: wrap;
		flex-direction: column;
		text-align: right;

		h5 {
			padding-right: 10px;
		}
		.list-social-icon {
			display: flex;
			justify-content: flex-end;
			gap: 5px;
			margin-top: 10px;

			.icon-brand {
				font-size: 25px;
			}
		}
	}
}
</style>

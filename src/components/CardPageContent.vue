<script>
export default {
	props: {
		item: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {};
	},
};
</script>

<template>
	<div class="card">
		<figure class="card-image">
			<img class="first-image" :src="item.frontImage" alt="" />
			<img class="second-image" :src="item.backImage" alt="" />
			<span class="heart-icon"> &hearts; </span>
			<div class="banner-image">
				<span class="banner discount-icon">-50%</span>
				<span class="banner mission-icon">Sostenibilità</span>
			</div>
		</figure>

		<div class="card-description">
			<ul>
				<li class="card-brand-description">{{ item.brand }}</li>
				<li class="card-name-description">{{ item.name }}</li>
				<li class="card-price-description">
					14,99 &euro; <span class="strike"> {{item.price}} &euro;</span>
				</li>
			</ul>
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

.card {
	&:hover {
		.second-image {
			opacity: 1;
		}
	}
}
.card-image {
	position: relative;
}

.card-marca-description {
	font-size: 10px;
	font-weight: 100;
}

.card-name-description {
	font-size: 18px;
	font-weight: 600;
	text-transform: uppercase;
}

.card-price-description {
	color: red;
}

span.strike {
	text-decoration: line-through;
	color: #1a1a1a;
}

.heart-icon {
	background-color: white;
	width: 40px;
	height: 40px;
	position: absolute;
	top: 20px;
	right: 0;
	display: block;
	padding: 10px;
	text-align: center;
	z-index: 1;
}

.banner-image {
	position: absolute;
	width: 100%;
	bottom: 20px;
	left: 0;
	.banner {
		color: white;
		font-size: 13px;
		font-weight: 500;
		height: 20px;
		padding: 3px;
	}

	.discount-icon {
		background-color: red;
		width: 5px;
	}

	.mission-icon {
		background-color: green;
		width: 20px;
		position: relative;
		left: 8px;
	}
}

.discount-icon {
	background-color: red;
	width: 5px;
}

.mission-icon {
	background-color: green;
	position: relative;
	left: 10px;
}

.second-image {
	position: absolute;
	top: 0;
	left: 0;
	opacity: 0;
	z-index: 0;
}
</style>

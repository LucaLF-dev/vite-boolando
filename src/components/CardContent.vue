<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

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
    components: { FontAwesomeIcon }
};
</script>

<template>
	<div class="card">
		<figure class="card-image">
			<img class="first-image" :src="item.frontImage" alt="" />
			<img class="second-image" :src="item.backImage" alt="" />
			<span class="heart-icon "  :class="{ 'active' : item.isInFavorites}" > &hearts; </span>
			<div class="banner-image">
				<span v-for="badge in item.badges" class="banner" :class="badge.type">{{ badge.value }}</span>
			</div>
		</figure>

		<div class="card-description">
			<ul>
				<li class="card-brand-description">{{ item.brand }}</li>
				<li class="card-name-description">{{ item.name }} 
					<span>
						<button @click="$emit('show',item)" class="button-info">
							<font-awesome-icon :icon="['fas', 'info']" />
						</button>
					</span>
				</li>
				<li class="card-price-description">
					<span > {{item.price}} &euro;</span>
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
    display: flex;
	justify-content: space-between;
	align-items: center;
	
	.button-info {
		width: 19px;
		aspect-ratio: 1;
		border-radius: 50%;
		border: 1px solid black;
		background-color: white;

	}
}

.card-price-description {
	color: black;
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

    &.active {
        color:red;
    }
}

.banner-image {
	position: absolute;
	width: 100%;
	bottom: 20px;
	
	.banner {
		color: white;
		font-size: 13px;
		font-weight: 500;
		height: 20px;
		padding: 3px;

        &.discount{
		background-color: red;
		width: 5px;
        position: relative;
     
	    }

        &.tag {
		background-color: green;
		width: 20px;
		position: relative;
      
		
	}

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

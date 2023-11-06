<script>
export default {
	data() {
		return {
			
		};
	},
};
</script>

<template>
	<main>
        <div class="container">
            <div class="row">
                <div v-for="n in 6" :key="n"  class="col-4">
                        <div class="card">
                            <figure class="card-image">
                                <img class="first-image" src="img/1.webp" alt="">
                                <img class="second-image" src="img/1b.webp" alt="">
                                <span class="heart-icon"> &hearts; </span>
                            </figure>
                            <div class="banner-image">
                                <span class="discount-icon">-50%</span>
                                <span class="mission-icon">Sostenibilità</span>
                            </div>
                            
                            <div class="card-description">
                                <ul>
                                    <li class="card-brand-description">Levi's</li>
                                    <li class="card-name-description">relaxed fit tee unisex</li>
                                    <li class="card-price-description"> 14,99 &euro; <span class="strike"> 29,99 &euro;</span></li>
                                </ul>
                            </div> 
                        </div> 
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>

.col-4 {
    flex-basis: calc((100% / 12) * 4);
    padding: 10px;
}

.row {
    display: flex;
    flex-wrap: wrap;
    row-gap: 40px;
   
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
    color: #1A1A1A;
}

.heart-icon {
    background-color: white;
    width: 40px;
    height: 40px;
    position: absolute;
    top: 20px ;
    right: 0;
    display: block;
    padding: 10px;
    text-align: center;
    z-index: 1;
}


.banner-image {
    
    position: absolute;
    width: 100%;
    bottom: 85px;
    z-index: 2;
}

.banner-image > span {
    color: white;
    font-size: 13px;
    
    left: 0;
    font-weight: 500;
    height: 20px;
    padding: 3px;
}

.discount-icon {
    background-color: red;
    width: 10px;

}

.mission-icon {
    background-color: green;
    position: relative;
    left: 4px;
} 


.second-image {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: 0;
}

.card:hover .second-image {
    opacity: 1;
} 
</style>

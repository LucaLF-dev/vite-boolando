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
                <div class="col-4">
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
}
</style>

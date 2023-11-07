<script>
import CardPageContent from './CardPageContent.vue';


export default {
    components: {
        CardPageContent,
    },

    data() {
        return {};
    },
   
};
</script>

<template>
	<main>
        <div class="container">
            <div class="row">
                <div v-for="n in 6" :key="n"  class="col-4">
                       <CardPageContent/>
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

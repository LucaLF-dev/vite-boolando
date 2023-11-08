<script >
// 1) importazione del componente
import PageHeader from './components/PageHeader.vue';
import PageFooter from './components/PageFooter.vue';
import PageContent from './components/PageContent.vue';
import {store} from './store'

export default {
  components: {
     //2) registrazione del componente -- es: //PageHeader: PageHeader,
     PageHeader,
     PageFooter,
     PageContent,
    
  },
  data() {
    return {
      store: store,
      message: 'Hello world!'
    }
  }
}

</script>

<template>
   <!-- 3) utilizzo del componente -->
 <PageHeader/>
 <PageContent/>
 <PageFooter/>
</template>

<style lang="scss">
@use './styles/general.scss';

.container {
  max-width: 1200px;
  margin: 0 auto;
}

</style>

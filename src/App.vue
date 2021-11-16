
<template>
  <div id="app">
    <Header></Header>
    <AllCategories></AllCategories>
    <TradeServices></TradeServices>
    <RegionSection></RegionSection>
    <ArticlePoster></ArticlePoster>
    <Subscribe></Subscribe>
    <Footer></Footer>
  </div>
  <!-- ene #app -->
</template>

<script>
import Header from './views/Header.vue'
import AllCategories from './views/AllCategoies.vue'
import TradeServices from './components/TradeServices.vue'
import RegionSection from './components/Region.vue'
import ArticlePoster from './components/ArticlePoster.vue'
import Subscribe from './components/Subscribe.vue'
import Footer from './views/Footer.vue'

export default {
  components: {
    Header,
    AllCategories,
    TradeServices,
    RegionSection,
    ArticlePoster,
    Subscribe,
    Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #f6f7f9;
}

#app a:hover {
  text-decoration: none;
}

</style>

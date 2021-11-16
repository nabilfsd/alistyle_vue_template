<template>
  <div class="container">
    <CategorySectionMain></CategorySectionMain>
    <CategorySectionDeal></CategorySectionDeal>
    <CategorySectionApparel></CategorySectionApparel>
    <CategorySectionElectronics></CategorySectionElectronics>
    <CategorySectionRequistionMain></CategorySectionRequistionMain>
    <CategorySectionItem></CategorySectionItem>
  </div>
</template>

<script>
import CategorySectionMain from '../components/category/CategorySectionMain.vue'
import CategorySectionDeal from '../components/category/CategorySectionDeal.vue'
import CategorySectionApparel from '../components/category/CategorySectionApparel.vue'
import CategorySectionElectronics from '../components/category/CategorySectionElectronics.vue'
import CategorySectionRequistionMain from '../components/category/CategorySectionRequision.vue'
import CategorySectionItem from '../components/category/CategorySectionItem.vue'

export default {
  name: 'AllCategories',
  components: {
    CategorySectionMain,
    CategorySectionDeal,
    CategorySectionApparel,
    CategorySectionElectronics,
    CategorySectionRequistionMain,
    CategorySectionItem
  }
}
</script>

<style scoped>
body {
  background: #f6f7f9;
}
</style>

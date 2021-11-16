<template>
  <div id="region-section">
    <div class="container">
      <section class="padding-bottom">
        <header class="section-heading heading-line">
          <h4 class="title-section text-uppercase">Choose region</h4>
        </header>

        <ul class="row mt-4">
          <li class="col-md col-6">
            <a href="#" class="icontext">
              <img class="icon-flag-sm" :src="require('../assets/img/icons/flags/CN.png')" />
              <span>China</span>
            </a>
          </li>
          <li class="col-md col-6">
            <a href="#" class="icontext">
              <img class="icon-flag-sm" :src="require('../assets/img/icons/flags/DE.png')" />
              <span>Germany</span>
            </a>
          </li>
          <li class="col-md col-6">
            <a href="#" class="icontext">
              <img class="icon-flag-sm" :src="require('../assets/img/icons/flags/AU.png')" />
              <span>Australia</span>
            </a>
          </li>
          <li class="col-md col-6">
            <a href="#" class="icontext">
              <img class="icon-flag-sm" :src="require('../assets/img/icons/flags/RU.png')" />
              <span>Russia</span>
            </a>
          </li>
          <li class="col-md col-6">
            <a href="#" class="icontext">
              <img class="icon-flag-sm" :src="require('../assets/img/icons/flags/IN.png')" />
              <span>India</span>
            </a>
          </li>
          <li class="col-md col-6">
            <a href="#" class="icontext">
              <img class="icon-flag-sm" :src="require('../assets/img/icons/flags/GB.png')" />
              <span>England</span>
            </a>
          </li>
          <li class="col-md col-6">
            <a href="#" class="icontext">
              <img class="icon-flag-sm" :src="require('../assets/img/icons/flags/TR.png')" />
              <span>Turkey</span>
            </a>
          </li>
          <li class="col-md col-6">
            <a href="#" class="icontext">
              <img class="icon-flag-sm" :src="require('../assets/img/icons/flags/UZ.png')" />
              <span>Uzbekistan</span>
            </a>
          </li>
          <li class="col-md col-6">
            <a href="#" class="icontext">
              <i class="mr-3 fa fa-ellipsis-h"></i> <span>More regions</span>
            </a>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegionSectoin'
}
</script>

<style scoped>
</style>

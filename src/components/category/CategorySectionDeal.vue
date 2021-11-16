<template>
  <!-- =============== SECTION DEAL =============== -->
  <section class="padding-bottom">
    <div class="card card-deal">
      <div class="col-heading content-body">
        <header class="section-heading">
          <h3 class="section-title">Deals and offers</h3>
          <p>Hygiene equipments</p>
        </header>
        <!-- sect-heading -->
        <div class="timer">
          <div><span class="num">04</span> <small>Days</small></div>
          <div><span class="num">12</span> <small>Hours</small></div>
          <div><span class="num">58</span> <small>Min</small></div>
          <div><span class="num">02</span> <small>Sec</small></div>
        </div>
      </div>
      <!-- col.// -->
      <div class="row no-gutters items-wrap">
        <div class="col-md col-6">
          <figure class="card-product-grid card-sm">
            <a href="#" class="img-wrap">
              <img :src="require('../../assets/img/items/3.jpg')" />
            </a>
            <div class="text-wrap p-3">
              <a href="#" class="title">Summer clothes</a>
              <span class="badge badge-danger"> -20% </span>
            </div>
          </figure>
        </div>
        <!-- col.// -->
        <div class="col-md col-6">
          <figure class="card-product-grid card-sm">
            <a href="#" class="img-wrap">
              <img :src="require('../../assets/img/items/4.jpg')" />
            </a>
            <div class="text-wrap p-3">
              <a href="#" class="title">Some category</a>
              <span class="badge badge-danger"> -5% </span>
            </div>
          </figure>
        </div>
        <!-- col.// -->
        <div class="col-md col-6">
          <figure class="card-product-grid card-sm">
            <a href="#" class="img-wrap">
              <img :src="require('../../assets/img/items/5.jpg')" />
            </a>
            <div class="text-wrap p-3">
              <a href="#" class="title">Another category</a>
              <span class="badge badge-danger"> -20% </span>
            </div>
          </figure>
        </div>
        <!-- col.// -->
        <div class="col-md col-6">
          <figure class="card-product-grid card-sm">
            <a href="#" class="img-wrap">
              <img :src="require('../../assets/img/items/6.jpg')" />
            </a>
            <div class="text-wrap p-3">
              <a href="#" class="title">Home apparel</a>
              <span class="badge badge-danger"> -15% </span>
            </div>
          </figure>
        </div>
        <!-- col.// -->
        <div class="col-md col-6">
          <figure class="card-product-grid card-sm">
            <a href="#" class="img-wrap">
              <img :src="require('../../assets/img/items/7.jpg')" />
            </a>
            <div class="text-wrap p-3">
              <a href="#" class="title text-truncate">Smart watches</a>
              <span class="badge badge-danger"> -10% </span>
            </div>
          </figure>
        </div>
        <!-- col.// -->
      </div>
    </div>
  </section>
  <!-- =============== SECTION DEAL // END =============== -->
</template>

<script>
export default {
  name: 'CategorySectionDeal'
}
</script>

<style scoped>
.card-deal {
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row
}

.card-deal .col-heading {
  min-width: 300px;
  -ms-flex-preferred-size: 350px;
  flex-basis: 350px;
  -ms-flex-negative: 0;
  flex-shrink: 0
}

.card-deal .row {
  width: 100%
}

.card-deal .items-wrap>[class*=col] {
  border-left: 1px solid #e5e7ea
}

.card-deal .card-product-grid {
  margin-bottom: 0;
  text-align: center
}
</style>

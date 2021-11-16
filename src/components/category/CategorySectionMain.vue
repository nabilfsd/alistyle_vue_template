<template>
  <!-- ========================= SECTION MAIN  ========================= -->
  <section class="section-main padding-y">
    <main class="card">
      <div class="card-body">
        <div class="row">
          <aside class="col-lg col-md-3 flex-lg-grow-0">
            <nav class="nav-home-aside">
              <h6 class="title-category">
                MY MARKETS <i class="d-md-none icon fa fa-chevron-down"></i>
              </h6>
              <ul class="menu-category">
                <li><a href="#">Fashion and clothes</a></li>
                <li><a href="#">Automobile and motors</a></li>
                <li><a href="#">Gardening and agriculture</a></li>
                <li><a href="#">Electronics and tech</a></li>
                <li><a href="#">Packaginf and printing</a></li>
                <li><a href="#">Home and kitchen</a></li>
                <li><a href="#">Digital goods</a></li>
                <li class="has-submenu">
                  <a href="#">More items</a>
                  <ul class="submenu">
                    <li><a href="#">Submenu name</a></li>
                    <li><a href="#">Great submenu</a></li>
                    <li><a href="#">Another menu</a></li>
                    <li><a href="#">Some others</a></li>
                  </ul>
                </li>
              </ul>
            </nav>
          </aside>
          <!-- col.// -->
          <div class="col-md-9 col-xl-7 col-lg-7">
            <!-- ================== COMPONENT SLIDER  BOOTSTRAP  ==================  -->
            <div
              id="carousel1_indicator"
              class="slider-home-banner carousel slide"
              data-ride="carousel"
            >
              <ol class="carousel-indicators">
                <li
                  data-target="#carousel1_indicator"
                  data-slide-to="0"
                  class="active"
                ></li>
                <li data-target="#carousel1_indicator" data-slide-to="1"></li>
                <li data-target="#carousel1_indicator" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img :src="require('../../assets/img/banners/slide1.jpg')" alt="First slide" />
                </div>
                <div class="carousel-item">
                  <img :src="require('../../assets/img/banners/slide2.jpg')" alt="Second slide" />
                </div>
                <div class="carousel-item">
                  <img :src="require('../../assets/img/banners/slide3.jpg')" alt="Third slide" />
                </div>
              </div>
              <a
                class="carousel-control-prev"
                href="#carousel1_indicator"
                role="button"
                data-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="carousel-control-next"
                href="#carousel1_indicator"
                role="button"
                data-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
            <!-- ==================  COMPONENT SLIDER BOOTSTRAP end.// ==================  .// -->
          </div>
          <!-- col.// -->
          <div class="col-md d-none d-lg-block flex-grow-1">
            <aside class="special-home-right">
              <h6 class="bg-blue text-center text-white mb-0 p-2">
                Popular category
              </h6>

              <div class="card-banner border-bottom">
                <div class="py-3" style="width: 80%">
                  <h6 class="card-title">Men clothing</h6>
                  <a href="#" class="btn btn-secondary btn-sm"> Source now </a>
                </div>
                <img :src="require('../../assets/img/items/1.jpg')" height="80" class="img-bg" />
              </div>

              <div class="card-banner border-bottom">
                <div class="py-3" style="width: 80%">
                  <h6 class="card-title">Winter clothing</h6>
                  <a href="#" class="btn btn-secondary btn-sm"> Source now </a>
                </div>
                <img :src="require('../../assets/img/items/2.jpg')" height="80" class="img-bg" />
              </div>

              <div class="card-banner border-bottom">
                <div class="py-3" style="width: 80%">
                  <h6 class="card-title">Home inventory</h6>
                  <a href="#" class="btn btn-secondary btn-sm"> Source now </a>
                </div>
                <img :src="require('../../assets/img/items/6.jpg')" height="80" class="img-bg" />
              </div>
            </aside>
          </div>
          <!-- col.// -->
        </div>
        <!-- row.// -->
      </div>
      <!-- card-body.// -->
    </main>
    <!-- card.// -->
  </section>
  <!-- ========================= SECTION MAIN END// ========================= -->
</template>

<script>
export default {
  name: 'CategorySectionMain'
}
</script>

<template>
  <footer class="section-footer bg-secondary">
    <div class="container">
      <section class="footer-top padding-y-lg text-white">
        <div class="row">
          <aside class="col-md col-6">
            <h6 class="title">Brands</h6>
            <ul class="list-unstyled">
              <li><a href="#">Adidas</a></li>
              <li><a href="#">Puma</a></li>
              <li><a href="#">Reebok</a></li>
              <li><a href="#">Nike</a></li>
            </ul>
          </aside>
          <aside class="col-md col-6">
            <h6 class="title">Company</h6>
            <ul class="list-unstyled">
              <li><a href="#">About us</a></li>
              <li><a href="#">Career</a></li>
              <li><a href="#">Find a store</a></li>
              <li><a href="#">Rules and terms</a></li>
              <li><a href="#">Sitemap</a></li>
            </ul>
          </aside>
          <aside class="col-md col-6">
            <h6 class="title">Help</h6>
            <ul class="list-unstyled">
              <li><a href="#">Contact us</a></li>
              <li><a href="#">Money refund</a></li>
              <li><a href="#">Order status</a></li>
              <li><a href="#">Shipping info</a></li>
              <li><a href="#">Open dispute</a></li>
            </ul>
          </aside>
          <aside class="col-md col-6">
            <h6 class="title">Account</h6>
            <ul class="list-unstyled">
              <li><a href="#"> User Login </a></li>
              <li><a href="#"> User register </a></li>
              <li><a href="#"> Account Setting </a></li>
              <li><a href="#"> My Orders </a></li>
            </ul>
          </aside>
          <aside class="col-md">
            <h6 class="title">Social</h6>
            <ul class="list-unstyled">
              <li>
                <a href="#"> <i class="fab fa-facebook"></i> Facebook </a>
              </li>
              <li>
                <a href="#"> <i class="fab fa-twitter"></i> Twitter </a>
              </li>
              <li>
                <a href="#"> <i class="fab fa-instagram"></i> Instagram </a>
              </li>
              <li>
                <a href="#"> <i class="fab fa-youtube"></i> Youtube </a>
              </li>
            </ul>
          </aside>
        </div>
        <!-- row.// -->
      </section>
      <!-- footer-top.// -->

      <section class="footer-bottom text-center">
        <p class="text-white">
          Privacy Policy - Terms of Use - User Information Legal Enquiry Guide
        </p>
        <p class="text-muted">
          <span>&#169;</span> 2019 Company name, All rights reserved
        </p>
        <br />
      </section>
    </div>
    <!-- //container -->
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.section-footer ul li {
  margin-bottom: 5px;
}

.section-footer ul a {
  color: inherit;
}

.section-footer ul a:hover {
  color: #ff6a00;
}

.section-footer .logo-footer {
  height: 40px;
}

.section-footer .title {
  font-weight: 600;
  margin-bottom: 16px;
  font-size: 18px;
}

.footer-bottom {
  padding-top: 20px;
  padding-bottom: 20px;
  border-top: 1px solid #1a3286;
}

.footer-copyright {
  padding-top: 20px;
  padding-bottom: 20px;
}

.btn-facebook {
  background-color: #405d9d;
  color: #fff;
}

.btn-facebook:hover {
  color: #fff;
}

.btn-instagram {
  background-color: #e52d27;
  color: #fff;
}

.btn-instagram:hover {
  color: #fff;
}

.btn-youtube {
  background-color: #c8046c;
  color: #fff;
}

.btn-youtube:hover {
  color: #fff;
}

.btn-twitter {
  background-color: #42aeec;
  color: #fff;
}

.btn-twitter:hover {
  color: #fff;
}

.btn-google {
  background-color: #af0000;
  color: #fff;
}

.btn-google:hover {
  color: #fff;
}

.btn-icon {
  width: calc(1.5em + 0.9rem + 2px);
  text-align: center;
  padding-left: 0;
  padding-right: 0;
}

.btn-icon i {
  line-height: 1;
}

.btn-light {
  background-color: #fff;
  border-color: #e5e7ea;
}

.btn-light i {
  color: #969696;
}

.btn-light:hover {
  background-color: #fff;
  border-color: #9099a6;
}

.btn-light.active i {
  color: #ff6a00;
}

.btn .text + i {
  margin-left: 10px;
}

.btn i + .text {
  margin-left: 10px;
}

.itemside {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
}

.itemside .aside {
  position: relative;
  -ms-flex-negative: 0;
  flex-shrink: 0;
}

.itemside .info {
  padding-left: 15px;
  padding-right: 7px;
}

.itemside p {
  margin-bottom: 0;
}

.itemside .title {
  display: block;
  margin-bottom: 5px;
  color: #212529;
}

.itemside a.title:hover {
  color: #ff6a00;
}

a.itemside {
  color: initial;
}

.items-bordered-wrap .itemside:not(:last-child) {
  border-bottom: 1px solid #e5e7ea;
  padding-bottom: 10px;
  margin-bottom: 10px;
}

.itemlist {
  padding: 20px;
  border-bottom: 1px solid #eee;
}

.list-inline {
  margin-bottom: 0;
}

.list-inline-item {
  vertical-align: middle;
}

dl[class="row"] {
  margin-bottom: 0;
}

[class*="dlist-"] {
  margin-bottom: 5px;
}

[class*="dlist-"] dd {
  margin-bottom: 0;
}

.dlist-inline dt,
.dlist-inline dd {
  display: inline-block;
}

.dlist-align {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.dlist-align dt {
  width: 120px;
  word-wrap: break-word;
  font-weight: normal;
}

.dlist-align dd {
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
}

ul.row,
ul.row-sm {
  list-style: none;
  padding: 0;
}

[class*="list-"] li:after {
  visibility: hidden;
  display: block;
  content: "";
  overflow: hidden;
  height: 0;
  clear: both;
}

.list-icon {
  list-style: none;
  padding-left: 0;
}

.list-icon li {
  margin-bottom: 7px;
  position: relative;
  padding-left: 30px;
}

.list-icon .icon {
  width: 22px;
  margin-right: 15px;
  vertical-align: middle;
  text-align: center;
  position: absolute;
  top: 3px;
  left: 0;
}

.list-icon span {
  vertical-align: middle;
}

.list-bullet {
  list-style: none;
  padding-left: 0;
}

.list-bullet li {
  margin-bottom: 5px;
  position: relative;
  padding-left: 15px;
}

.list-bullet li::before {
  content: " ";
  position: absolute;
  top: 8px;
  left: 0;
  width: 7px;
  border-radius: 100%;
  height: 7px;
  background: #ced4da;
}

.list-check {
  padding-left: 0;
  list-style: none;
}

.list-check > li {
  position: relative;
  padding-left: 24px;
  margin-bottom: 7px;
}

.list-check > li::before {
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  font-size: 13px;
  color: #00b517;
  position: absolute;
  top: 3px;
  left: 0;
  content: "\f00c";
}

.list-normal {
  list-style: none;
  padding-left: 0;
}

.list-normal li {
  padding-left: 1em;
  margin-bottom: 7px;
}

.list-normal li:before {
  content: "\2022";
  color: #ff6a00;
  display: inline-block;
  width: 1em;
  margin-left: -1em;
}

.list-menu {
  list-style: none;
  margin: 0;
  padding-left: 0;
}

.list-menu li {
  margin-bottom: 5px;
}

.list-menu a {
  color: #212529;
}

.list-menu a:hover {
  color: #ff6a00;
}

.cols-two {
  -webkit-column-count: 2;
  column-count: 2;
}

.cols-three {
  -webkit-column-count: 3;
  column-count: 3;
}

.cols-four {
  -webkit-column-count: 4;
  column-count: 4;
}
</style>

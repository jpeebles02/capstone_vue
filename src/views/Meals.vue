<template>
  <div class="meals">
    <div class="page__header">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h3 class="page-header__title">Shop</h3>
            <ol class="breadcrumb page-header__breadcrumb">
              <li><a href="index.html">Home</a></li>
              <li class="active">Shop</li>
            </ol>
          </div>
        </div>
      </div>
    </div>

    <!-- PAGE CONTENT
    ============================== -->
    <div class="container">
      <div class="row">
        <div class="col-sm-4 col-md-3">
          <!-- Categories -->
          <h3 class="header header_plain">Categories</h3>
          <div class="list-group">
            <a href="#" class="list-group-item active"> <span class="badge">25</span> Seashells </a>
            <a href="#" class="list-group-item"> <span class="badge">23</span> Fashion </a>
            <a href="#" class="list-group-item"> <span class="badge">15</span> Electronics </a>
            <a href="#" class="list-group-item"> <span class="badge">43</span> Collectibles </a>
            <a href="#" class="list-group-item"> <span class="badge">34</span> Home & Garden </a>
            <a href="#" class="list-group-item"> <span class="badge">19</span> Sporting Goods </a>
          </div>
          <!-- Recommended & Popular -->
          <h3 class="header header_plain">Top Products</h3>
          <ul class="nav nav-tabs nav-justified" role="tablist">
            <li role="presentation" class="active">
              <a href="#shop-tab_recommended" aria-controls="shop-tab_recommended" role="tab" data-toggle="tab"
                >Recommended</a
              >
            </li>
            <li role="presentation">
              <a href="#shop-tab_popular" aria-controls="shop-tab_popular" role="tab" data-toggle="tab">Popular</a>
            </li>
          </ul>
          <div class="tab-content">
            <!-- Recommended -->
            <div role="tabpanel" class="tab-pane active" id="shop-tab_recommended">
              <div class="list-group shop-tab__list">
                <a href="#" class="list-group-item">
                  <img class="img-responsive list-group-item__img" src="img/product_1.jpg" alt="..." />
                  <div class="list-group-item__content">
                    Lorem ipsum dolor sit amet
                    <ul class="rating_stars">
                      <li><i class="fa fa-star"></i></li>
                      <li><i class="fa fa-star"></i></li>
                      <li><i class="fa fa-star"></i></li>
                      <li><i class="fa fa-star"></i></li>
                      <li><i class="fa fa-star"></i></li>
                    </ul>
                  </div>
                  <div class="clearfix"></div>
                </a>
                <a href="#" class="list-group-item">
                  <img class="img-responsive list-group-item__img" src="img/product_2.jpg" alt="..." />
                  <div class="list-group-item__content">
                    Cras hendrerit tellus porttitor elementum
                    <ul class="rating_stars">
                      <li><i class="fa fa-star"></i></li>
                      <li><i class="fa fa-star"></i></li>
                      <li><i class="fa fa-star"></i></li>
                      <li><i class="fa fa-star"></i></li>
                      <li><i class="fa fa-star-o"></i></li>
                    </ul>
                  </div>
                  <div class="clearfix"></div>
                </a>
                <a href="#" class="list-group-item">
                  <img class="img-responsive list-group-item__img" src="img/product_3.jpg" alt="..." />
                  <div class="list-group-item__content">
                    Sed ultrices euismod hendrerit nunc augue
                    <ul class="rating_stars">
                      <li><i class="fa fa-star"></i></li>
                      <li><i class="fa fa-star"></i></li>
                      <li><i class="fa fa-star"></i></li>
                      <li><i class="fa fa-star"></i></li>
                      <li><i class="fa fa-star-half-o"></i></li>
                    </ul>
                  </div>
                  <div class="clearfix"></div>
                </a>
                <a href="#" class="list-group-item">
                  <img class="img-responsive list-group-item__img" src="img/product_4.jpg" alt="..." />
                  <div class="list-group-item__content">
                    Maecenas venenatis sodales sem
                    <ul class="rating_stars">
                      <li><i class="fa fa-star"></i></li>
                      <li><i class="fa fa-star"></i></li>
                      <li><i class="fa fa-star"></i></li>
                      <li><i class="fa fa-star"></i></li>
                      <li><i class="fa fa-star"></i></li>
                    </ul>
                  </div>
                  <div class="clearfix"></div>
                </a>
              </div>
            </div>
            <!-- Popular -->
            <div role="tabpanel" class="tab-pane" id="shop-tab_popular">
              <div class="list-group shop-tab__list">
                <a href="#" class="list-group-item">
                  <img class="img-responsive list-group-item__img" src="img/product_2.jpg" alt="..." />
                  <div class="list-group-item__content">
                    Cras hendrerit tellus porttitor elementum
                    <ul class="rating_stars">
                      <li><i class="fa fa-star"></i></li>
                      <li><i class="fa fa-star"></i></li>
                      <li><i class="fa fa-star"></i></li>
                      <li><i class="fa fa-star"></i></li>
                      <li><i class="fa fa-star-o"></i></li>
                    </ul>
                  </div>
                  <div class="clearfix"></div>
                </a>
                <a href="#" class="list-group-item">
                  <img class="img-responsive list-group-item__img" src="img/product_4.jpg" alt="..." />
                  <div class="list-group-item__content">
                    Maecenas venenatis sodales sem
                    <ul class="rating_stars">
                      <li><i class="fa fa-star"></i></li>
                      <li><i class="fa fa-star"></i></li>
                      <li><i class="fa fa-star"></i></li>
                      <li><i class="fa fa-star"></i></li>
                      <li><i class="fa fa-star"></i></li>
                    </ul>
                  </div>
                  <div class="clearfix"></div>
                </a>
                <a href="#" class="list-group-item">
                  <img class="img-responsive list-group-item__img" src="img/product_1.jpg" alt="..." />
                  <div class="list-group-item__content">
                    Lorem ipsum dolor sit amet
                    <ul class="rating_stars">
                      <li><i class="fa fa-star"></i></li>
                      <li><i class="fa fa-star"></i></li>
                      <li><i class="fa fa-star"></i></li>
                      <li><i class="fa fa-star"></i></li>
                      <li><i class="fa fa-star"></i></li>
                    </ul>
                  </div>
                  <div class="clearfix"></div>
                </a>
                <a href="#" class="list-group-item">
                  <img class="img-responsive list-group-item__img" src="img/product_3.jpg" alt="..." />
                  <div class="list-group-item__content">
                    Sed ultrices euismod hendrerit nunc augue
                    <ul class="rating_stars">
                      <li><i class="fa fa-star"></i></li>
                      <li><i class="fa fa-star"></i></li>
                      <li><i class="fa fa-star"></i></li>
                      <li><i class="fa fa-star"></i></li>
                      <li><i class="fa fa-star-half-o"></i></li>
                    </ul>
                  </div>
                  <div class="clearfix"></div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-sm-8 col-md-9">
          <div class="row">
            <div class="col-xs-12 visible-xs">
              <div class="h3 header">Seashells</div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-4">
              <div class="product-list__item">
                <!-- Image -->
                <div class="product-list__img">
                  <a href="shop-item.html">
                    <img src="img/product_1.jpg" alt="Product Image" />
                  </a>
                </div>
                <!-- Captions -->
                <div class="product-list__caption">
                  <h3 class="product-list__title">
                    <a href="/meals/1">Product Title</a>
                  </h3>
                  <ul class="rating_stars">
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                    <li class="rating__comment">(12 reviews)</li>
                  </ul>
                  <div class="product-list__price">17 USD <s class="text-muted">20 USD</s></div>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="product-list__item">
                <!-- Image -->
                <div class="product-list__img">
                  <a href="shop-item.html">
                    <img src="img/product_2.jpg" alt="Product Image" />
                  </a>
                </div>
                <!-- Captions -->
                <div class="product-list__caption">
                  <h3 class="product-list__title">
                    <a href="shop-item.html">Product Title</a>
                  </h3>
                  <ul class="rating_stars">
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star-half-o"></i></li>
                    <li class="rating__comment">(9 reviews)</li>
                  </ul>
                  <div class="product-list__price">15 USD</div>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="product-list__item">
                <!-- Image -->
                <div class="product-list__img">
                  <a href="shop-item.html">
                    <img src="img/product_3.jpg" alt="Product Image" />
                  </a>
                </div>
                <!-- Captions -->
                <div class="product-list__caption">
                  <h3 class="product-list__title">
                    <a href="shop-item.html">Product Title</a>
                  </h3>
                  <ul class="rating_stars">
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star-o"></i></li>
                    <li class="rating__comment">(15 reviews)</li>
                  </ul>
                  <div class="product-list__price">18 USD</div>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="product-list__item">
                <!-- Image -->
                <div class="product-list__img">
                  <a href="shop-item.html">
                    <img src="img/product_4.jpg" alt="Product Image" />
                  </a>
                </div>
                <!-- Captions -->
                <div class="product-list__caption">
                  <h3 class="product-list__title">
                    <a href="shop-item.html">Product Title</a>
                  </h3>
                  <ul class="rating_stars">
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                    <li class="rating__comment">(10 reviews)</li>
                  </ul>
                  <div class="product-list__price">25 USD</div>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="product-list__item">
                <!-- Image -->
                <div class="product-list__img">
                  <a href="shop-item.html">
                    <img src="img/product_5.jpg" alt="Product Image" />
                  </a>
                </div>
                <!-- Captions -->
                <div class="product-list__caption">
                  <h3 class="product-list__title">
                    <a href="shop-item.html">Product Title</a>
                  </h3>
                  <ul class="rating_stars">
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star-half-o"></i></li>
                    <li><i class="fa fa-star-o"></i></li>
                    <li class="rating__comment">(5 reviews)</li>
                  </ul>
                  <div class="product-list__price">35 USD</div>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="product-list__item">
                <!-- Image -->
                <div class="product-list__img">
                  <a href="shop-item.html">
                    <img src="img/product_6.jpg" alt="Product Image" />
                  </a>
                </div>
                <!-- Captions -->
                <div class="product-list__caption">
                  <h3 class="product-list__title">
                    <a href="shop-item.html">Product Title</a>
                  </h3>
                  <ul class="rating_stars">
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star-o"></i></li>
                    <li class="rating__comment">(7 reviews)</li>
                  </ul>
                  <div class="product-list__price">10 USD</div>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="product-list__item">
                <!-- Image -->
                <div class="product-list__img">
                  <a href="shop-item.html">
                    <img src="img/product_3.jpg" alt="Product Image" />
                  </a>
                </div>
                <!-- Captions -->
                <div class="product-list__caption">
                  <h3 class="product-list__title">
                    <a href="shop-item.html">Product Title</a>
                  </h3>
                  <ul class="rating_stars">
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                    <li class="rating__comment">(8 reviews)</li>
                  </ul>
                  <div class="product-list__price">16 USD</div>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="product-list__item">
                <!-- Image -->
                <div class="product-list__img">
                  <a href="shop-item.html">
                    <img src="img/product_1.jpg" alt="Product Image" />
                  </a>
                </div>
                <!-- Captions -->
                <div class="product-list__caption">
                  <h3 class="product-list__title">
                    <a href="shop-item.html">Product Title</a>
                  </h3>
                  <ul class="rating_stars">
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star-half-o"></i></li>
                    <li><i class="fa fa-star-o"></i></li>
                    <li class="rating__comment">(7 reviews)</li>
                  </ul>
                  <div class="product-list__price">32 USD</div>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="product-list__item">
                <!-- Image -->
                <div class="product-list__img">
                  <a href="shop-item.html">
                    <img src="img/product_2.jpg" alt="Product Image" />
                  </a>
                </div>
                <!-- Captions -->
                <div class="product-list__caption">
                  <h3 class="product-list__title">
                    <a href="shop-item.html">Product Title</a>
                  </h3>
                  <ul class="rating_stars">
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star-o"></i></li>
                    <li class="rating__comment">(16 reviews)</li>
                  </ul>
                  <div class="product-list__price">7 USD</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- / .row -->
    </div>
    <!-- / .container -->
  </div>
</template>

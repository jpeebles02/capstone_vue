<template>
  <div id="productsshow">
    <div class="page__header">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h3 class="page-header__title">Shop Item</h3>
            <ol class="breadcrumb page-header__breadcrumb">
              <li><a href="index.html">Home</a></li>
              <li><a href="shop.html">Shop</a></li>
              <li class="active">Shop Item</li>
            </ol>
          </div>
        </div>
      </div>
    </div>

    <!-- PAGE CONTENT
    ============================== -->
    <div class="container">
      <div class="row">
        <div class="col-sm-8">
          <!-- Carousel -->
          <div id="product-item__carousel" class="carousel slide" data-ride="carousel">
            <!-- Indicators -->
            <ol class="carousel-indicators">
              <li data-target="#product-item__carousel" data-slide-to="0" class="active"></li>
              <li data-target="#product-item__carousel" data-slide-to="1"></li>
              <li data-target="#product-item__carousel" data-slide-to="2"></li>
            </ol>

            <!-- Wrapper for slides -->
            <div class="carousel-inner" role="listbox">
              <div class="item active">
                <img src="img/product_2.jpg" alt="..." />
                <div class="carousel-caption">
                  Image 1
                </div>
              </div>
              <div class="item">
                <img src="img/product_3.jpg" alt="..." />
                <div class="carousel-caption">
                  Image 2
                </div>
              </div>
              <div class="item">
                <img src="img/product_4.jpg" alt="..." />
                <div class="carousel-caption">
                  Image 3
                </div>
              </div>
            </div>

            <!-- Controls -->
            <a class="left carousel-control" href="#product-item__carousel" role="button" data-slide="prev">
              <i class="fa fa-angle-left" aria-hidden="true"></i>
              <i class="sr-only">Previous</i>
            </a>
            <a class="right carousel-control" href="#product-item__carousel" role="button" data-slide="next">
              <i class="fa fa-angle-right" aria-hidden="true"></i>
              <i class="sr-only">Next</i>
            </a>
          </div>
          <!-- / .carousel -->
        </div>
        <div class="col-sm-4">
          <h3 class="header header_plain">
            Catchy product title
          </h3>
          <ul class="rating_stars">
            <li><i class="fa fa-star"></i></li>
            <li><i class="fa fa-star"></i></li>
            <li><i class="fa fa-star"></i></li>
            <li><i class="fa fa-star"></i></li>
            <li><i class="fa fa-star-half-o"></i></li>
            <li class="rating__comment">(3 reviews)</li>
          </ul>
          <p class="text-muted">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pulvinar blandit elementum. Aliquam a velit
            non ex ornare tincidunt at eu orci. Mauris imperdiet accumsan neque, in sollicitudin felis. Donec convallis
            nulla ut lacinia cursus. Ut vitae ante risus. Pellentesque ut nibh non nisi posuere pretium. Mauris et neque
            pulvinar, egestas nunc nec, pretium diam.
          </p>
          <ul class="list-group">
            <li class="list-group-item"><i class="fa fa-check fa-fw text-primary"></i> Cras justo odio</li>
            <li class="list-group-item"><i class="fa fa-check fa-fw text-primary"></i> Dapibus ac facilisis in</li>
            <li class="list-group-item"><i class="fa fa-check fa-fw text-primary"></i> Morbi leo risus</li>
            <li class="list-group-item"><i class="fa fa-check fa-fw text-primary"></i> Porta ac consectetur ac</li>
            <li class="list-group-item"><i class="fa fa-check fa-fw text-primary"></i> Vestibulum at eros</li>
          </ul>

          <!-- Add to cart -->
          <div class="product__add-to-cart">
            <form class="form-inline">
              <div class="form-group">
                <label class="sr-only">Price</label>
                <p class="form-control-static"><strong>US $14,99 x</strong></p>
              </div>
              <div class="form-group">
                <label for="product__quantity" class="sr-only">Quantity</label>
                <input type="number" id="product__quantity" value="1" class="form-control" />
              </div>
              <button type="submit" class="btn btn-default"><i class="fa fa-cart-plus"></i> Add to Cart</button>
            </form>
          </div>
          <!-- .product__add-to-cart -->
        </div>
      </div>
      <!-- / .row -->
      <div class="row">
        <div class="col-sm-8">
          <!-- New review -->
          <div class="comment comment_new">
            <div class="comment__author_img">
              <img class="img-responsive" alt="..." src="img/photo_4.jpg" />
            </div>
            <div class="comment__content">
              <ul class="rating_stars rating-stars__new">
                <li><i class="fa fa-star-o"></i></li>
                <li><i class="fa fa-star-o"></i></li>
                <li><i class="fa fa-star-o"></i></li>
                <li><i class="fa fa-star-o"></i></li>
                <li><i class="fa fa-star-o"></i></li>
              </ul>
              <form>
                <div class="form-group">
                  <label for="comment-new__textarea" class="sr-only">Enter your review</label>
                  <textarea
                    class="form-control"
                    rows="2"
                    id="comment-new__textarea"
                    placeholder="Enter your review"
                  ></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Send Review</button>
              </form>
            </div>
            <!-- / .comment__content -->
          </div>
          <!-- / .comment__new -->

          <!-- Reviews header -->
          <div class="comment__header">
            <span>Latest Reviews</span>
          </div>

          <!-- All comments -->
          <div class="comment">
            <div class="comment__author_img">
              <img src="img/photo_1.jpg" alt="..." class="img-responsive" />
            </div>
            <div class="comment__content">
              <div class="comment__author_name">John Doe</div>
              <time datetime="2015-01-30" class="comment__date">February 02, 2015</time>
              <ul class="rating_stars">
                <li><i class="fa fa-star"></i></li>
                <li><i class="fa fa-star"></i></li>
                <li><i class="fa fa-star"></i></li>
                <li><i class="fa fa-star"></i></li>
                <li><i class="fa fa-star"></i></li>
              </ul>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque gravida, est non tempus pharetra,
                erat velit convallis diam, quis blandit neque nulla a nulla. Quisque fringilla lacinia erat, at maximus
                erat bibendum quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div class="btn-group pull-right" role="group" aria-label="comment__actions">
                <a href="#" class="btn btn-default btn-xs"><i class="fa fa-times"></i> Remove</a>
                <a href="#" class="btn btn-default btn-xs"><i class="fa fa-edit"></i> Edit</a>
                <a href="#" class="btn btn-primary btn-xs"><i class="fa fa-reply"></i> Answer</a>
              </div>
            </div>
            <!-- / .comment__content -->
          </div>
          <!-- / .comment -->
          <div class="comment">
            <div class="comment__author_img">
              <img src="img/photo_2.jpg" alt="..." class="img-responsive" />
            </div>
            <div class="comment__content">
              <div class="comment__author_name">Judy Doe</div>
              <time datetime="2015-01-30" class="comment__date">February 02, 2015</time>
              <ul class="rating_stars">
                <li><i class="fa fa-star"></i></li>
                <li><i class="fa fa-star"></i></li>
                <li><i class="fa fa-star"></i></li>
                <li><i class="fa fa-star"></i></li>
                <li><i class="fa fa-star-o"></i></li>
              </ul>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque gravida, est non tempus pharetra,
                erat velit convallis diam, quis blandit neque nulla a nulla. Quisque fringilla lacinia erat, at maximus
                erat bibendum quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div class="btn-group pull-right" role="group" aria-label="comment__actions">
                <a href="#" class="btn btn-default btn-xs"><i class="fa fa-times"></i> Remove</a>
                <a href="#" class="btn btn-default btn-xs"><i class="fa fa-edit"></i> Edit</a>
                <a href="#" class="btn btn-primary btn-xs"><i class="fa fa-reply"></i> Answer</a>
              </div>
            </div>
            <!-- / .comment__content -->
          </div>
          <!-- / .comment -->
          <div class="comment">
            <div class="comment__author_img">
              <img src="img/photo_3.jpg" alt="..." class="img-responsive" />
            </div>
            <div class="comment__content">
              <div class="comment__author_name">Richard Roe</div>
              <time datetime="2015-01-30" class="comment__date">February 02, 2015</time>
              <ul class="rating_stars">
                <li><i class="fa fa-star"></i></li>
                <li><i class="fa fa-star"></i></li>
                <li><i class="fa fa-star"></i></li>
                <li><i class="fa fa-star"></i></li>
                <li><i class="fa fa-star-half-o"></i></li>
              </ul>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque gravida, est non tempus pharetra,
                erat velit convallis diam, quis blandit neque nulla a nulla. Quisque fringilla lacinia erat, at maximus
                erat bibendum quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div class="btn-group pull-right" role="group" aria-label="comment__actions">
                <a href="#" class="btn btn-default btn-xs"><i class="fa fa-times"></i> Remove</a>
                <a href="#" class="btn btn-default btn-xs"><i class="fa fa-edit"></i> Edit</a>
                <a href="#" class="btn btn-primary btn-xs"><i class="fa fa-reply"></i> Answer</a>
              </div>
            </div>
            <!-- / .comment__content -->
          </div>
          <!-- / .comment -->
        </div>
        <div class="col-sm-4">
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
      </div>
      <!-- / .row -->
    </div>
    <!-- / .container -->
  </div>
</template>

<template>
  <div class="carts">
    <div class="page__header">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h3 class="page-header__title">Shopping Cart</h3>
            <ol class="breadcrumb page-header__breadcrumb">
              <li><a href="index.html">Home</a></li>
              <li><a href="shop.html">Shop</a></li>
              <li class="active">Shopping Cart</li>
            </ol>
          </div>
        </div>
      </div>
    </div>

    <!-- PAGE CONTENT
    ============================== -->
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <h3 class="header">Items in your shopping cart</h3>
          <p class="text-muted">Please check the information below and click CHECKOUT to proceed with your purchase:</p>
          <div class="table-responsive shopping-cart__table">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Ship</th>
                  <th>QTY</th>
                  <th>Price</th>
                  <th>Total</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div class="media">
                      <div class="media-left media-middle">
                        <a href="#">
                          <img class="media-object shopping-cart__img" src="img/product_1.jpg" alt="..." />
                        </a>
                      </div>
                      <div class="media-body">
                        <a href="#">Beautiful Seashell from the Caribbean Sea</a>
                      </div>
                    </div>
                  </td>
                  <td>Free</td>
                  <td>
                    <form class="form-inline">
                      <div class="form-group">
                        <label for="product__quantity_1" class="sr-only">Quantity</label>
                        <input
                          type="number"
                          id="product__quantity_1"
                          value="1"
                          class="form-control shopping-cart__qty"
                        />
                      </div>
                    </form>
                  </td>
                  <td>$25.00</td>
                  <td>$25.00</td>
                  <td><button class="btn btn-default">Update</button></td>
                </tr>
                <tr>
                  <td>
                    <div class="media">
                      <div class="media-left media-middle">
                        <a href="#">
                          <img class="media-object shopping-cart__img" src="img/product_2.jpg" alt="..." />
                        </a>
                      </div>
                      <div class="media-body">
                        <a href="#">Beautiful Seashell from the Caribbean Sea</a>
                      </div>
                    </div>
                  </td>
                  <td>Free</td>
                  <td>
                    <form class="form-inline">
                      <div class="form-group">
                        <label for="product__quantity_2" class="sr-only">Quantity</label>
                        <input
                          type="number"
                          id="product__quantity_2"
                          value="2"
                          class="form-control shopping-cart__qty"
                        />
                      </div>
                    </form>
                  </td>
                  <td>$25.00</td>
                  <td>$50.00</td>
                  <td><button class="btn btn-default">Update</button></td>
                </tr>
                <tr>
                  <td>
                    <div class="media">
                      <div class="media-left media-middle">
                        <a href="#">
                          <img class="media-object shopping-cart__img" src="img/product_3.jpg" alt="..." />
                        </a>
                      </div>
                      <div class="media-body">
                        <a href="#">Beautiful Seashell from the Caribbean Sea</a>
                      </div>
                    </div>
                  </td>
                  <td>Free</td>
                  <td>
                    <form class="form-inline">
                      <div class="form-group">
                        <label for="product__quantity_3" class="sr-only">Quantity</label>
                        <input
                          type="number"
                          id="product__quantity_3"
                          value="3"
                          class="form-control shopping-cart__qty"
                        />
                      </div>
                    </form>
                  </td>
                  <td>$25.00</td>
                  <td>$75.00</td>
                  <td><button class="btn btn-default">Update</button></td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- / .table-responsive -->

          <!-- Subtotal -->
          <p class="text-right"><strong>Subtotal:</strong> $150.00 <a href="#" class="btn btn-primary">Checkout</a></p>
        </div>
      </div>
      <!-- / .row -->
    </div>
    <!-- / .container -->
  </div>
</template>

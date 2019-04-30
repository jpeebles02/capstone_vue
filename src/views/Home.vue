<template>
  <div class="home">
    <!-- HERO BLOCK
    ============================== -->
    <div class="hero">
      <div class="hero__inner">
        <!-- Carousel -->
        <div id="hero__carousel" class="carousel slide" data-ride="carousel" data-pause="false">
          <div class="carousel-inner" role="listbox">
            <!-- 1st Slide -->
            <div class="item active" id="hero-carousel__item_1">
              <div class="wrapper">
                <div class="wrapper__inner">
                  <div class="container">
                    <div class="row">
                      <div class="col-sm-12 text-center">
                        <h1 class="hero__h1">Create Personalized Worlout Schedules</h1>
                        <h2 class="hero__h2">Easily With Beatrix</h2>
                        <p class="hero__intro">
                          Multipurpose responsive template powered by Bootstrap
                        </p>
                        <div class="hero__action">
                          <a href="/userhomepage" class="btn btn-lg btn-primary">Your Home Page</a>
                        </div>
                      </div>
                    </div>
                    <!-- / .row -->
                  </div>
                  <!-- / .container -->
                </div>
                <!-- / .wrapper__inner -->
              </div>
              <!-- / .wrapper -->
            </div>
            <!-- / .item -->

            <!-- 2nd Slide -->
            <div class="item" id="hero-carousel__item_2">
              <div class="wrapper">
                <div class="wrapper__inner">
                  <div class="container">
                    <div class="row">
                      <div class="col-sm-12 text-center">
                        <h1 class="hero__h1">Super Flexible Layout</h1>
                        <h2 class="hero__h2">With 20+ HTML Templates</h2>
                        <p class="hero__intro">
                          Build upon existing templates or create new pages with custom UI elements
                        </p>
                        <div class="hero__action">
                          <a href="/exercises" class="btn btn-lg btn-primary">View Exercises</a>
                        </div>
                      </div>
                    </div>
                    <!-- / .row -->
                  </div>
                  <!-- / .container -->
                </div>
                <!-- / .wrapper__inner -->
              </div>
              <!-- / .wrapper -->
            </div>
            <!-- / .item -->

            <!-- 3d Slide -->
            <div class="item" id="hero-carousel__item_3">
              <div class="wrapper">
                <div class="wrapper__inner">
                  <div class="container">
                    <div class="row">
                      <div class="col-sm-12 text-center">
                        <h1 class="hero__h1">Free Updates & Support</h1>
                        <h2 class="hero__h2">For All Types of Licenses</h2>
                        <p class="hero__intro">
                          Feel free to contact us via e-mail or comments tab
                        </p>
                        <div class="hero__action">
                          <a href="/routines" class="btn btn-lg btn-primary">View Your Routines</a>
                        </div>
                      </div>
                    </div>
                    <!-- / .row -->
                  </div>
                  <!-- / .container -->
                </div>
                <!-- / .wrapper__inner -->
              </div>
              <!-- / .wrapper -->
            </div>
            <!-- / .item -->
          </div>
          <!-- . carousel-inner -->

          <!-- Carousel controls -->
          <div class="hero__ctrl js-hero-crsl__ctrl">
            <a href="#hero__carousel" role="button" data-slide="prev">
              <i class="fa fa-step-backward"></i>
            </a>
            <a href="#" data-slide="pause" class="playback visible-inline-block">
              <i class="fa fa-pause"></i>
            </a>
            <a href="#" data-slide="cycle" class="playback hidden">
              <i class="fa fa-play"></i>
            </a>
            <a href="#hero__carousel" role="button" data-slide="next">
              <i class="fa fa-step-forward"></i>
            </a>
          </div>
          <!-- / .hero__ctrl -->
        </div>
        <!-- / .carousel-->
      </div>
      <!-- / .hero__inner -->
    </div>
    <!-- / .hero -->

    <!-- KEY FEATURES
    ============================== -->
    <div class="section section_features">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1 class="section__title">
              Our Core Features
            </h1>
            <p class="section__intro">
              Beatrix is a super flexible HTML5 template that would perfectly fit a project of any size and complexity
            </p>
            <div class="section__hr section__hr_center"></div>
          </div>
        </div>
        <!-- / .row -->
        <div class="row">
          <div class="col-xs-12 col-sm-4">
            <!-- Features item #1 -->
            <div class="features__item">
              <!-- Icon -->
              <div class="features__icon wow flipInY">
                <i class="fa fa-check"></i>
                <i class="fa fa-check"></i>
                <!-- Required for animation -->
              </div>
              <!-- Title -->
              <h2 class="features__title">
                Truly Responsive
              </h2>
              <!-- Intro -->
              <p class="features__intro">
                Looks equally great on your laptop, tablet, and phone. Try to resize your window to see what we mean.
              </p>
            </div>
          </div>
          <div class="col-xs-12 col-sm-4">
            <!-- Features item #2 -->
            <div class="features__item">
              <!-- Icon -->
              <div class="features__icon wow flipInY" data-wow-delay=".2s">
                <i class="fa fa-birthday-cake"></i>
                <i class="fa fa-birthday-cake"></i>
                <!-- Required for animation -->
              </div>
              <!-- Title -->
              <h2 class="features__title">
                Built with LESS
              </h2>
              <!-- Intro -->
              <p class="features__intro">
                Build on the source LESS code or quickly get started with precompiled CSS if you are a novice developer.
              </p>
            </div>
          </div>
          <div class="col-xs-12 col-sm-4">
            <!-- Features item #3 -->
            <div class="features__item">
              <!-- Icon -->
              <div class="features__icon wow flipInY" data-wow-delay=".4s">
                <i class="fa fa-envelope"></i>
                <i class="fa fa-envelope"></i>
                <!-- Required for animation -->
              </div>
              <!-- Title -->
              <h2 class="features__title">
                PHP Contact Form
              </h2>
              <!-- Intro -->
              <p class="features__intro">
                Beatrix comes with a fully functional PHP contact form with built in spam protection powered by
                reCaptcha.
              </p>
            </div>
          </div>
        </div>
        <!-- / .row -->
      </div>
      <!-- / .container -->
    </div>
    <!-- / .section -->

    <!-- PORTFOLIO
    ============================== -->
    <div class="section section_portfolio section_alt">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1 class="section__title">
              Showcase Your Work
            </h1>
            <p class="section__intro">
              Powered by Isotope, your portfolio has never been more engaging
            </p>
            <div class="section__hr section__hr_center"></div>
          </div>
        </div>
        <!-- / .row -->

        <div class="row">
          <div class="col-xs-12">
            <!-- Portfolio Carousel -->
            <div id="portfolio__carousel" class="carousel slide" data-ride="carousel">
              <!-- Controls -->
              <div class="portfolio-carousel__controls">
                <a href="#portfolio__carousel" role="button" data-slide="prev">
                  <i class="fa fa-long-arrow-left"></i>
                </a>
                <a href="#portfolio__carousel" role="button" data-slide="next">
                  <i class="fa fa-long-arrow-right"></i>
                </a>
              </div>

              <!-- Wrapper for slides -->
              <div class="carousel-inner" role="listbox">
                <!-- Slide #1 -->
                <div class="item active">
                  <div class="row">
                    <div class="col-xs-6 col-sm-6 col-md-3">
                      <!-- Portfolio Item #1 -->
                      <div class="portfolio__item">
                        <!-- Image -->
                        <div class="portfolio__img">
                          <a href="#">
                            <img src="img/general_1.jpg" alt="Portfolio Image" />
                          </a>
                        </div>
                        <!-- Captions -->
                        <div class="portfolio__caption">
                          <h3 class="portfolio__title">Simple & Beautiful</h3>
                          <div class="portfolio__intro">
                            Morbi vulputate eget ipsum vel maximus. Morbi dictum blandit mattis.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-xs-6 col-sm-6 col-md-3">
                      <!-- Portfolio Item #2 -->
                      <div class="portfolio__item">
                        <!-- Image -->
                        <div class="portfolio__img">
                          <a href="#">
                            <img src="img/general_2.jpg" alt="Portfolio Image" />
                          </a>
                        </div>
                        <!-- Captions -->
                        <div class="portfolio__caption">
                          <h3 class="portfolio__title">Simple & Beautiful</h3>
                          <div class="portfolio__intro">
                            Morbi vulputate eget ipsum vel maximus. Morbi dictum blandit mattis.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-xs-6 col-sm-6 col-md-3">
                      <!-- Portfolio Item #3 -->
                      <div class="portfolio__item">
                        <!-- Image -->
                        <div class="portfolio__img">
                          <a href="#">
                            <img src="img/general_3.jpg" alt="Portfolio Image" />
                          </a>
                        </div>
                        <!-- Captions -->
                        <div class="portfolio__caption">
                          <h3 class="portfolio__title">Simple & Beautiful</h3>
                          <div class="portfolio__intro">
                            Morbi vulputate eget ipsum vel maximus. Morbi dictum blandit mattis.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-xs-6 col-sm-6 col-md-3">
                      <!-- Portfolio Item #4 -->
                      <div class="portfolio__item">
                        <!-- Image -->
                        <div class="portfolio__img">
                          <a href="#">
                            <img src="img/general_4.jpg" alt="Portfolio Image" />
                          </a>
                        </div>
                        <!-- Captions -->
                        <div class="portfolio__caption">
                          <h3 class="portfolio__title">Simple & Beautiful</h3>
                          <div class="portfolio__intro">
                            Morbi vulputate eget ipsum vel maximus. Morbi dictum blandit mattis.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- / .row -->
                </div>
                <!-- / .item -->

                <!-- Slide #2 -->
                <div class="item">
                  <div class="row">
                    <div class="col-xs-6 col-sm-6 col-md-3">
                      <!-- Portfolio Item #1 -->
                      <div class="portfolio__item">
                        <!-- Image -->
                        <div class="portfolio__img">
                          <a href="#">
                            <img src="img/general_5.jpg" alt="Portfolio Image" />
                          </a>
                        </div>
                        <!-- Captions -->
                        <div class="portfolio__caption">
                          <h3 class="portfolio__title">Simple & Beautiful</h3>
                          <div class="portfolio__intro">
                            Morbi vulputate eget ipsum vel maximus. Morbi dictum blandit mattis.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-xs-6 col-sm-6 col-md-3">
                      <!-- Portfolio Item #2 -->
                      <div class="portfolio__item">
                        <!-- Image -->
                        <div class="portfolio__img">
                          <a href="#">
                            <img src="img/general_6.jpg" alt="Portfolio Image" />
                          </a>
                        </div>
                        <!-- Captions -->
                        <div class="portfolio__caption">
                          <h3 class="portfolio__title">Simple & Beautiful</h3>
                          <div class="portfolio__intro">
                            Morbi vulputate eget ipsum vel maximus. Morbi dictum blandit mattis.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-xs-6 col-sm-6 col-md-3">
                      <!-- Portfolio Item #3 -->
                      <div class="portfolio__item">
                        <!-- Image -->
                        <div class="portfolio__img">
                          <a href="#">
                            <img src="img/general_7.jpg" alt="Portfolio Image" />
                          </a>
                        </div>
                        <!-- Captions -->
                        <div class="portfolio__caption">
                          <h3 class="portfolio__title">Simple & Beautiful</h3>
                          <div class="portfolio__intro">
                            Morbi vulputate eget ipsum vel maximus. Morbi dictum blandit mattis.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-xs-6 col-sm-6 col-md-3">
                      <!-- Portfolio Item #4 -->
                      <div class="portfolio__item">
                        <!-- Image -->
                        <div class="portfolio__img">
                          <a href="#">
                            <img src="img/general_8.jpg" alt="Portfolio Image" />
                          </a>
                        </div>
                        <!-- Captions -->
                        <div class="portfolio__caption">
                          <h3 class="portfolio__title">Simple & Beautiful</h3>
                          <div class="portfolio__intro">
                            Morbi vulputate eget ipsum vel maximus. Morbi dictum blandit mattis.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- / .row -->
                </div>
                <!-- / .item -->
              </div>
              <!-- / .carousel-inner -->
            </div>
            <!-- / .carousel -->
          </div>
        </div>
        <!-- / .row -->
      </div>
      <!-- / .container -->
    </div>
    <!-- / .section -->

    <!-- AUTHORS
    ============================== -->
    <div class="section section_authors">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1 class="section__title">
              Our Trainers
            </h1>
            <p class="section__intro">
              A team of hard-working enthusiastic people who helped this product come to life
            </p>
            <div class="section__hr section__hr_center"></div>
          </div>
        </div>
        <!-- / .row -->
        <div class="row">
          <!-- Author #1 -->
          <div class="col-xs-12 col-sm-4">
            <div class="authors__item">
              <div class="authors__img wow flipInY" data-wow-offset>
                <img src="img/photo_1.jpg" class="img-responsive" alt="..." />
              </div>
              <div class="authors__content">
                <div class="authors__title">John Doe, Designer</div>
                <div class="authors__intro">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu lacus enim. Aliquam eu elit justo.
                </div>
                <ul class="authors__contact">
                  <li class="facebook">
                    <a href="#"><i class="fa fa-facebook"></i></a>
                  </li>
                  <li class="twitter">
                    <a href="#"><i class="fa fa-twitter"></i></a>
                  </li>
                  <li class="linkedin">
                    <a href="#"><i class="fa fa-linkedin"></i></a>
                  </li>
                  <li class="envelope">
                    <a href="#"><i class="fa fa-envelope-o"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- Author #2 -->
          <div class="col-xs-12 col-sm-4">
            <div class="authors__item">
              <div class="authors__img wow flipInY" data-wow-delay=".2s">
                <img src="img/photo_2.jpg" class="img-responsive" alt="..." />
              </div>
              <div class="authors__content">
                <div class="authors__title">Judy Roe, Designer</div>
                <div class="authors__intro">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu lacus enim. Aliquam eu elit justo.
                </div>
                <ul class="authors__contact">
                  <li class="facebook">
                    <a href="#"><i class="fa fa-facebook"></i></a>
                  </li>
                  <li class="twitter">
                    <a href="#"><i class="fa fa-twitter"></i></a>
                  </li>
                  <li class="linkedin">
                    <a href="#"><i class="fa fa-linkedin"></i></a>
                  </li>
                  <li class="envelope">
                    <a href="#"><i class="fa fa-envelope-o"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- Author #3 -->
          <div class="col-xs-12 col-sm-4">
            <div class="authors__item">
              <div class="authors__img wow flipInY" data-wow-delay=".4s">
                <img src="img/photo_3.jpg" class="img-responsive" alt="..." />
              </div>
              <div class="authors__content">
                <div class="authors__title">Richard Doe, Developer</div>
                <div class="authors__intro">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu lacus enim. Aliquam eu elit justo.
                </div>
                <ul class="authors__contact">
                  <li class="facebook">
                    <a href="#"><i class="fa fa-facebook"></i></a>
                  </li>
                  <li class="twitter">
                    <a href="#"><i class="fa fa-twitter"></i></a>
                  </li>
                  <li class="linkedin">
                    <a href="#"><i class="fa fa-linkedin"></i></a>
                  </li>
                  <li class="envelope">
                    <a href="#"><i class="fa fa-envelope-o"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!-- / .row -->
      </div>
      <!-- /.container -->
    </div>
    <!-- / .section -->

    <!-- FEEDBACK
    ============================== -->
    <div class="section section_feedback">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <div class="feedback__icon wow zoomIn"><i class="fa fa-quote-right"></i></div>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12 col-md-10 col-md-offset-1">
            <div id="feedback__carousel" class="carousel slide" data-ride="carousel">
              <!-- Wrapper for slides -->
              <div class="carousel-inner" role="listbox">
                <!-- First item -->
                <div class="item active">
                  <div class="feedback__item">
                    <div class="feedback__content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec turpis eget augue vulputate porta
                      non et lectus. Mauris aliquet elementum ligula id commodo.
                    </div>
                    <div class="feedback__author">- Richard Roe -</div>
                  </div>
                </div>
                <!-- Second item -->
                <div class="item">
                  <div class="feedback__item">
                    <div class="feedback__content">
                      Fusce a efficitur tortor. Vestibulum eget iaculis libero, sed rhoncus augue. Aenean sit amet
                      pharetra quam. Nunc nec sem eget diam mattis pulvinar at eget metus.
                    </div>
                    <div class="feedback__author">- Judy Doe -</div>
                  </div>
                </div>
                <!-- Third item -->
                <div class="item">
                  <div class="feedback__item">
                    <div class="feedback__content">
                      Curabitur sit amet tortor ac elit mattis fermentum vel eu sem. In vestibulum mattis turpis ac
                      dictum. Pellentesque eros velit, pellentesque sed odio id.
                    </div>
                    <div class="feedback__author">- John Doe -</div>
                  </div>
                </div>
              </div>

              <!-- Indicators -->
              <ol class="carousel-indicators">
                <li data-target="#feedback__carousel" data-slide-to="0" class="active"></li>
                <li data-target="#feedback__carousel" data-slide-to="1"></li>
                <li data-target="#feedback__carousel" data-slide-to="2"></li>
              </ol>
            </div>
            <!-- / .feedback__carousel -->
          </div>
        </div>
        <!-- / .row -->
      </div>
      <!-- / .container -->
    </div>
  </div>
  <!-- / .container -->

  <!-- / .section -->
</template>

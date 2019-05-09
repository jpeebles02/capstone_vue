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
                        <h1 class="hero__h1">iFit</h1>
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
                        <h1 class="hero__h1">iFit</h1>
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

            <div class="item" id="hero-carousel__item_3">
              <div class="wrapper">
                <div class="wrapper__inner">
                  <div class="container">
                    <div class="row">
                      <div class="col-sm-12 text-center">
                        <h1 class="hero__h1">iFit</h1>
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

            <div class="item" id="hero-carousel__item_1">
              <div class="wrapper">
                <div class="wrapper__inner">
                  <div class="container">
                    <div class="row">
                      <div class="col-sm-12 text-center">
                        <h1 class="hero__h1">iFit</h1>
                        <div class="hero__action">
                          <a href="/schedules" class="btn btn-lg btn-primary">Book an Appointment with a Trainer</a>
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

            <!-- 3d Slide -->
            <div class="item" id="hero-carousel__item_2">
              <div class="wrapper">
                <div class="wrapper__inner">
                  <div class="container">
                    <div class="row">
                      <div class="col-sm-12 text-center">
                        <h1 class="hero__h1">iFit</h1>
                        <div class="hero__action">
                          <a href="/mappage" class="btn btn-lg btn-primary">Find a local gym</a>
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
              These are the keys to a succesful workout
            </h1>
            <p class="section__intro">
              The workout starts before you get to the gym.
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
                <i class="fa fa-list"></i>
                <i class="fa fa-list"></i>
                <!-- Required for animation -->
              </div>
              <!-- Title -->
              <h2 class="features__title">
                Stay Committed 
              </h2>
              <!-- Intro -->
              <p class="features__intro">
                You must keep a steady schedule. If you stray away from a consistent schdule you wont see progress. 
              </p>
            </div>
          </div>
          <div class="col-xs-12 col-sm-4">
            <!-- Features item #2 -->
            <div class="features__item">
              <!-- Icon -->
              <div class="features__icon wow flipInY" data-wow-delay=".2s">
                <i class="fa fa-apple"></i>
                <i class="fa fa-apple"></i>
                <!-- Required for animation -->
              </div>
              <!-- Title -->
              <h2 class="features__title">
                Eat Proper 
              </h2>
              <!-- Intro -->
              <p class="features__intro">
                Even if you workout intensely everyday, you wont see the progress you are looking for if you dont eat properly.
              </p>
            </div>
          </div>
          <div class="col-xs-12 col-sm-4">
            <!-- Features item #3 -->
            <div class="features__item">
              <!-- Icon -->
              <div class="features__icon wow flipInY" data-wow-delay=".4s">
                <i class="fa fa-bed"></i>
                <i class="fa fa-bed"></i>
                <!-- Required for animation -->
              </div>
              <!-- Title -->
              <h2 class="features__title">
                Sleep
              </h2>
              <!-- Intro -->
              <p class="features__intro">
                You must get proper rest so thet your body has time to recover
              </p>
            </div>
          </div>
        </div>
        <!-- / .row -->
      </div>
      <!-- / .container -->
    </div>
    <!-- / .section -->


        
    <!-- / .section -->

    <!-- AUTHORS
    ============================== -->
    <div class="section section_authors">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1 class="section__title">
              Book an Appointment with a local Trainer
            </h1>
            <p class="section__intro">
              A team of hard-working enthusiastic people
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
                <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mh-trainer-2-1533576998.png?resize=480:*" class="img-responsive" alt="..." />
              </div>
              <div class="authors__content">
                <div class="authors__title">Carl, Personal Trainer</div>
                <div class="authors__intro">
                  Specializes in Cardio Workouts
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
                <img src="https://static1.squarespace.com/static/543e9a68e4b0bed3afbae5c7/t/5a2af55253450a215ad50bbd/1512764783292/778FEF84-FB67-4A6A-9909-770C3491F9CE.JPG" class="img-responsive" alt="..." />
              </div>
              <div class="authors__content">
                <div class="authors__title">Jacob, Personal Trainer</div>
                <div class="authors__intro">
                  Specializes in Workouts using Weights
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
                <img src="http://the-mac.com/wp-content/blogs.dir/13692/files/2017/08/Updated-Jane-Pi-1-3j5.jpg?w=316&h=237&a=t" class="img-responsive" alt="..." />
              </div>
              <div class="authors__content">
                <div class="authors__title">Janet, Personal Trainer</div>
                <div class="authors__intro">
                  Specialize in Core Workouts
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
          <a href="/schedules" class="btn btn-lg btn-primary"><i></i>Book an Appointment</a>

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
                      “Strength does not come from the physical capacity. It comes from an indomitable will.” 
                    </div>
                    <div class="feedback__author">– Ghandi -</div>
                  </div>
                </div>
                <!-- Second item -->
                <div class="item">
                  <div class="feedback__item">
                    <div class="feedback__content">
                      “Training gives us an outlet for suppressed energies created by stress and thus tones the spirit just as exercise conditions the body.” 
                    </div>
                    <div class="feedback__author">– Arnold Schwarzenegger -</div>
                  </div>
                </div>
                <!-- Third item -->
                <div class="item">
                  <div class="feedback__item">
                    <div class="feedback__content">
                      “Work hard in silence. Let success be your noise.”
                    </div>
                    <div class="feedback__author">- Frank Ocean -</div>
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
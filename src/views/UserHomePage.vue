<template>
  <div class="userhomepage">
    <!-- / .container -->
    <div class="profile__header">
      <div class="container">
        <div class="row">
          <div class="col-sm-4 col-md-3 col-lg-2">
            <!-- User avatar -->
            <div class="profile__avatar">
              <img src="img/photo_4.jpg" alt="..." class="img-responsive center-block" />
            </div>
          </div>
          <div class="col-sm-8 col-md-9 col-lg-10">
            <div class="profile__summary">
              <!-- User name -->
              <h3 class="profile__name">john</h3>
              <!-- User status -->
              <p class="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla faucibus maximus lectus ut auctor.
              </p>
              <!-- Contact -->
              <a href="#" class="btn btn-primary btn-sm"><i class="fa fa-envelope"></i> Contact</a>
              <a href="#" class="btn btn-default btn-sm"><i class="fa fa-sign-out"></i> Sign Out</a>
            </div>
            <!-- / .profile__summary -->
          </div>
        </div>
        <!-- / .row -->
      </div>
      <!-- / .container -->
    </div>
    <!-- .profile__header -->
    <div class="container">
      <div class="row">
        <div class="col-sm-4 col-md-3 col-lg-2">
          <!-- Social links -->
          <ul class="list-unstyled profile-social center-block">
            <li>
              <a href="#" class="btn btn-default btn-block"><i class="fa fa-google-plus-square"></i> Google</a>
            </li>
            <li>
              <a href="#" class="btn btn-default btn-block"><i class="fa fa-facebook-square"></i> Facebook</a>
            </li>
            <li>
              <a href="#" class="btn btn-default btn-block"><i class="fa fa-twitter-square"></i> Twitter</a>
            </li>
          </ul>
        </div>
        <div class="col-sm-8 col-md-9 col-lg-10">
          <!-- Tabs -->
          <ul class="nav nav-tabs" role="tablist">
            <li role="presentation" class="active">
              <a href="#personal-info" aria-controls="personal-info" role="tab" data-toggle="tab">Personal Info</a>
            </li>
            <li role="presentation">
              <a href="#user-portfolio" aria-controls="user-portfolio" role="tab" data-toggle="tab">Portfolio</a>
            </li>
          </ul>
          <!-- Tab content -->
          <div class="tab-content">
            <div role="tabpanel" class="tab-pane active" id="personal-info">
              <h3 class="header header_plain">Personal Info</h3>
              <div class="table-responsive">
                <table class="table">
                  <tbody>
                    <tr>
                      <th scope="row">Location</th>
                      <td>Los Angeles, CA</td>
                    </tr>
                    <tr>
                      <th scope="row">Occupation</th>
                      <td>Designer</td>
                    </tr>
                    <tr>
                      <th scope="row">Skills</th>
                      <td>HTML, CSS, JS, Bootstrap</td>
                    </tr>
                    <tr>
                      <th scope="row">Experience</th>
                      <td>5 years</td>
                    </tr>
                    <tr>
                      <th scope="row">Education</th>
                      <td>California State University, Los Angeles</td>
                    </tr>
                    <tr>
                      <th scope="row">Username</th>
                      <td>@SuperJohn</td>
                    </tr>
                    <tr>
                      <th scope="row">Type</th>
                      <td>Individual</td>
                    </tr>
                    <tr>
                      <th scope="row">Member Since</th>
                      <td>May 2012</td>
                    </tr>
                    <tr>
                      <th scope="row">Page URL</th>
                      <td>http://www.yoursite.com/profile</td>
                    </tr>
                    <tr>
                      <th scope="row">Verified User</th>
                      <td>Yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- / .table-responsive -->
            </div>
            <div role="tabpanel" class="tab-pane" id="user-portfolio">
              <h3 class="header header_plain">User Portfolio</h3>
              <div class="row">
                <div class="col-xs-12 col-sm-6 col-md-4">
                  <div class="portfolio__item">
                    <!-- Image -->
                    <div class="portfolio__img">
                      <a href="portfolio-item.html">
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
                <div class="col-xs-12 col-sm-6 col-md-4">
                  <div class="portfolio__item">
                    <!-- Image -->
                    <div class="portfolio__img">
                      <a href="portfolio-item.html">
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
                <div class="col-xs-12 col-sm-6 col-md-4">
                  <div class="portfolio__item">
                    <!-- Image -->
                    <div class="portfolio__img">
                      <a href="portfolio-item.html">
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
                <div class="col-xs-12 col-sm-6 col-md-4">
                  <div class="portfolio__item">
                    <!-- Image -->
                    <div class="portfolio__img">
                      <a href="portfolio-item.html">
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
                <div class="col-xs-12 col-sm-6 col-md-4">
                  <div class="portfolio__item">
                    <!-- Image -->
                    <div class="portfolio__img">
                      <a href="portfolio-item.html">
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
                <div class="col-xs-12 col-sm-6 col-md-4">
                  <div class="portfolio__item">
                    <!-- Image -->
                    <div class="portfolio__img">
                      <a href="portfolio-item.html">
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
              </div>
              <!-- / .row -->
              <div class="row">
                <div class="col-xs-12 text-right">
                  <a href="#" class="btn btn-default">View Full Portfolio</a>
                </div>
              </div>
            </div>
          </div>
          <!-- / .tab-content -->
        </div>
      </div>
      <!-- / .row -->
    </div>
    <!-- / .container -->
    <h1>My Info</h1>
    <div v-for="user in users">
      <h2>{{ user.name }}</h2>
      <p>email: {{ user.email }}</p>
      <p>phone_number: {{ user.phone_number }}</p>
      <p>Birth Date: {{ user.birth_date }}</p>
      <p>Height: {{ user.height_in_inches }}</p>
      <p>Weight: {{ user.weight_in_pounds }}</p>
      <p>Waist Size: {{ user.waist_size }}</p>
      <p>Target Weight: {{ user.target_weight }}</p>
      <p>Target Waist Size: {{ user.target_waist_size }}</p>
      <p>Target Weight: {{ user.weight_in_pounds }}</p>
    </div>
    <router-view v-on:changeJwt="setJwt()" />
  </div>
</template>

<script>
var axios = require("axios");

export default {
  data: function() {
    return {
      user: [],
      jwt: null
    };
  },
  created: function() {
    this.jwt = localStorage.jwt;
    console.log("My jwt is", this.jwt);
  },
  mounted: function() {
    axios
      .get("/api/users/current_user")
      .then(response => {
        this.user = response.data;
        console.log(this.user);
      })
      .catch(error => {
        console.log("Something went wrong...", error);
        if (error.response && error.response.status === 401) {
          this.$router.push("/login");
        }
      });
  },
  methods: {
    setJwt: function() {
      this.jwt = localStorage.jwt;
    }
  }
};
</script>

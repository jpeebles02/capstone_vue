<template>
  <div class="signup">
    <!-- PRELOADER (uncomment to enable)
    ============================== -->
    <!-- <div class="preloader">
      <img src="img/preloader.gif" alt="Loading..." class="preloader__img">
    </div> -->

    <!-- PAGE CONTENT
    ============================== -->
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <div class="body-plain__title">
            <h1 class="text-center">Sign Up</h1>
          </div>
        </div>
      </div>
      <!-- / .row -->
      <div class="row">
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-sm-offset-3 col-md-offset-3 col-lg-offset-4">
          <div class="body-plain__form">
            <!-- Sign Up form -->
            <form v-on:submit.prevent="submit()">
              <ul>
                <li class="text-danger" v-for="error in errors">{{ error }}</li>
              </ul>
              <div class="form-group">
                <label for="sign-up__name" class="sr-only">Enter Name</label>
                <input type="text" class="form-control" id="sign-up__name" placeholder="Name" v-model="name" />
              </div>
              <div class="form-group">
                <label for="sign-up__email" class="sr-only">Enter Email: yourname@email.com</label>
                <input
                  type="email"
                  class="form-control"
                  id="sign-up__email"
                  placeholder="Enter Email: yourname@email.com"
                  v-model="email"
                />
              </div>
              <div class="form-group">
                <label for="sign-up__phonenumber" class="sr-only">Enter Phone Number: (888) 888-8888</label>
                <input
                  type="phone_number"
                  class="form-control"
                  id="sign-up__phonenumber"
                  placeholder="Enter Phone Number: (888) 888-8888"
                  v-model="phone_number"
                />
              </div>

              <div class="form-group">
                <label for="sign-up__birthdate" class="sr-only">Enter Birthdate: 01/01/0101</label>
                <input
                  type="birth_date"
                  class="form-control"
                  id="sign-up__birthdate"
                  placeholder="Enter Birthdate: 01/01/0101"
                  v-model="birth_date"
                />
              </div>

              <div class="form-group">
                <label for="sign-up__height" class="sr-only">Enter Height (in inches)</label>
                <input
                  type="height"
                  class="form-control"
                  id="sign-up__height"
                  placeholder="Enter Height (in inches)"
                  v-model="height"
                />
              </div>

              <div class="form-group">
                <label for="sign-up__weight" class="sr-only">Enter Weight (in pounds)</label>
                <input
                  type="weight"
                  class="form-control"
                  id="sign-up__weight"
                  placeholder="Enter Weight (in pounds)"
                  v-model="weight"
                />
              </div>

              <div class="form-group">
                <label for="sign-up__waistsize" class="sr-only">Enter Waist Size</label>
                <input
                  type="waist_size"
                  class="form-control"
                  id="sign-up__waistsize"
                  placeholder="Enter Waist Size"
                  v-model="waist_size"
                />
              </div>

              <div class="form-group">
                <label for="sign-up__targetweight" class="sr-only">Enter Target Weight</label>
                <input
                  type="target_weight"
                  class="form-control"
                  id="sign-up__targetweight"
                  placeholder="Enter Target Weight"
                  v-model="target_weight"
                />
              </div>

              <div class="form-group">
                <label for="sign-up__targetwaistsize" class="sr-only">Enter Target Waist Size</label>
                <input
                  type="target_waist_size"
                  class="form-control"
                  id="sign-up__targetwaistsize"
                  placeholder="Enter Target Waist Size"
                  v-model="target_waist_size"
                />
              </div>

              <div class="form-group">
                <div class="row">
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label for="sign-up__password" class="sr-only">Enter password</label>
                      <input
                        type="password"
                        class="form-control"
                        id="sign-up__password"
                        placeholder="Password"
                        v-model="password"
                      />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label for="sign-up__password_repeat" class="sr-only">Repeat password</label>
                      <input
                        type="password"
                        class="form-control"
                        id="sign-up__password_repeat"
                        placeholder="Repeat Password"
                        v-model="passwordConfirmation"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="checkbox">
                <label>
                  <input type="checkbox" /> I agree to the <a href="#">Terms of Service</a> and
                  <a href="#">Privacy Policy</a>
                </label>
              </div>
              <button type="submit" class="btn btn-primary btn-block btn-lg" value="Submit">Create Account</button>
            </form>

            <!-- Sign In link -->
            <hr />
            <p>Already a member? <a href="/login">Sign into your account.</a></p>
          </div>
          <!-- / .body-plain__form -->

          <!-- Footer -->
          <div class="body-plain__footer">
            Copyright 2015 <a href="http://simpleqode.com/">Simpleqode.com</a>. All Rights Reserved.
          </div>
        </div>
      </div>
      <!-- / .row -->
    </div>
    <!-- / .container -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      phone_number: "",
      birth_date: "",
      height: "",
      weight: "",
      waist_size: "",
      target_weight: "",
      target_waist_size: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        name: this.name,
        email: this.email,
        phone_number: this.phone_number,
        birth_date: this.birth_date,
        height: this.height,
        weight: this.weight,
        waist_size: this.waist_size,
        target_weight: this.target_weight,
        target_waist_size: this.target_waist_size,
        password: this.password,
        password_confirmation: this.passwordConfirmation
      };
      axios
        .post("/api/users", params)
        .then(response => {
          this.$router.push("/login");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>

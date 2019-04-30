<template>
  <div class="login">
    <div class="container">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-6 col-md-6 col-lg-8">
            <!-- Sign In options -->
            <h3 class="header">Sign In Options</h3>
            <p>
              Please enter your account information to log into your account or choose one of the options below:
            </p>
            <ul class="list-unstyled profile-social">
              <li>
                <a href="#" class="btn btn-default btn-block"
                  ><i class="fa fa-google-plus-square"></i> Sign in using Google</a
                >
              </li>
              <li>
                <a href="#" class="btn btn-default btn-block"
                  ><i class="fa fa-facebook-square"></i> Sign in using Facebook</a
                >
              </li>
              <li>
                <a href="#" class="btn btn-default btn-block"
                  ><i class="fa fa-twitter-square"></i> Sign in using Twitter</a
                >
              </li>
            </ul>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4">
            <!-- Sing In form -->
            <h3 class="header">Sign In</h3>
            <form v-on:submit.prevent="submit()">
              <ul>
                <li class="text-danger" v-for="error in errors">{{ error }}</li>
              </ul>
              <label for="sign-in__email" class="sr-only">Enter email</label>
              <div class="input-group">
                <span class="input-group-addon"><i class="fa fa-user"></i></span>
                <input
                  type="email"
                  class="form-control"
                  id="sign-in__email"
                  placeholder="Enter email"
                  v-model="email"
                />
              </div>
              <br />
              <label for="sign-in__password" class="sr-only">Enter password</label>
              <div class="input-group">
                <span class="input-group-addon"><i class="fa fa-lock"></i></span>
                <input
                  type="password"
                  class="form-control"
                  id="sign-in__password"
                  placeholder="Password"
                  v-model="password"
                />
              </div>
              <div class="checkbox">
                <label> <input type="checkbox" /> Remember me </label>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>

            <!-- Sign Up link -->
            <hr />
            <p>Not registered? <a href="/signup">Create an Account.</a></p>

            <!-- Lost password form -->
            <p>
              Lost your password?
              <a
                href="#lost-password__form"
                data-toggle="collapse"
                aria-expanded="false"
                aria-controls="lost-password__form"
                >Click here to recover.</a
              >
            </p>
            <div class="collapse" id="lost-password__form">
              <p class="text-muted">
                Enter your email address below and we will send you a link to reset your password.
              </p>
              <form class="form-inline" role="form">
                <div class="form-group">
                  <label class="sr-only" for="lost-password__email">Email address</label>
                  <input type="email" class="form-control" id="lost-password__email" placeholder="Enter email" />
                </div>
                <button type="submit" class="btn btn-info" value="Submit">Send</button>
              </form>
            </div>
            <!-- lost-password__form -->
          </div>
        </div>
        <!-- / .row -->
      </div>
    </div>
    <!-- / .container -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      email: "",
      password: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        email: this.email,
        password: this.password
      };
      axios
        .post("/api/sessions", params)
        .then(response => {
          axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          this.$emit("changeJwt");
          this.$router.push("/");
        })
        .catch(error => {
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    }
  }
};
</script>

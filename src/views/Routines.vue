<template>
  <div class="routines">
    <div class="page__header">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h3 class="page-header__title">Routines</h3>
            <ol class="breadcrumb page-header__breadcrumb">
              <li><a href="/">Back Home</a></li>
              <li><a href="/userhomepage">Your Home Page</a></li>
              <li><a href="/exercises">Exercises</a></li>
              <li class="active">Routines</li>
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
          <h3 class="header">These are all of your routines</h3>
          <br /><br />
        </div>
      </div>
      <!-- / .row -->
      <div class="row">
        <div v-for="routine in routines" v-bind:key="routine.id">
          <div class="col-xs-12 col-sm-6 col-md-3">
            <!-- Pricing item #1 -->
            <div class="pricing__item">
              <!-- Pricing header -->
              <div class="pricing__header">
                <div class="pricing__title">{{ routine.name }}</div>
                <div class="pricing__price">{{ routine.day_of_week }}</div>
              </div>
              <!-- Pricing body -->
              <div class="pricing__body">
                <ul class="pricing__list">
                  <div v-for="exercise in routine.exercises" v-bind:key="exercise.id">
                    <p>{{ exercise.name }}</p>
                  </div>
                </ul>
                <div class="pricing__btn">
                  <router-link v-bind:to="`/routines/${routine.id}`">More info</router-link>
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

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      routines: []
    };
  },
  created: function() {
    axios
      .get("/api/routines")
      .then(response => {
        this.routines = response.data;
        console.log(this.routines);
      })
      .catch(error => {
        console.log("Something went wrong...", error);
        if (error.response && error.response.status === 401) {
          this.$router.push("/login");
        }
      });
  },
  methods: {}
};
</script>

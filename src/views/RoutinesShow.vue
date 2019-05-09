<template>
  <div class="routines-show">
    <div class="page__header">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h3 class="page-header__title">Routine</h3>
            <ol class="breadcrumb page-header__breadcrumb">
              <li><a href="/">Back Home</a></li>
              <li><a href="/userhomepage">Your Home Page</a></li>
              <li><a href="/routines">Back to All Routines</a></li>
              <li><a href="/exercises">Exercises</a></li>
              <li class="active">Routine</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
    <!-- ABOUT (SKILLS, COUNTERS)
    ============================== -->
    <div class="section section_about">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1 class="section__title">
              {{ routine.name }}
            </h1>
            <h2 class="section__intro">
              {{ routine.day_of_week }}
            </h2>
            <div class="section__hr section__hr_center"></div>
          </div>
        </div>
        <!-- / .row -->
        <div class="row">
          <div class="col-m-4 col-m-4">
            <div
              class="about-us"
              v-for="exercise_routine in routine.exercise_routines"
              v-bind:key="exercise_routine.id"
            >
              <h2 class="about-us__title">{{ exercise_routine.exercise.name }}</h2>
              <p class="text-muted">
                {{ exercise_routine.exercise.description }}
              </p>
              <p class="text-muted">
                {{ exercise_routine.amount }}
              </p>
            </div>
          </div>
        </div>
        <!-- / .row -->

        <!-- Counters -->
        <div class="counter">
          <div class="row">
            <div class="col-xs-12 col-sm-3">
              <div class="counter__item">
                <button v-on:click="destroyRoutine(routine)">Delete Routine</button>
              </div>
            </div>
          </div>
          <!-- / .row -->
        </div>
        <!-- / .counter -->
      </div>
      <!-- / .container -->
    </div>
    <!-- / .section -->
  </div>
</template>

<style></style>

<script>
import axios from "axios";
import Toasted from 'vue-toasted';
 
Vue.use(Toasted)

export default {
  data: function() {
    return {
      routine: {},
      exercise_routine: []
    };
  },
  created: function() {
    axios.get("/api/routines/" + this.$route.params.id).then(response => {
      this.routine = response.data;
      console.log(this.routine);
    });
    // axios.get("/api/exercise_routines").then(response => {
    //   this.exercise_routines = response.data;
    // });
  },
  methods: {
    destroyRoutine: function(routine) {
      axios.delete("/api/routines/" + routine.id).then(response => {
        console.log("Successfully deleted routine", response.data);
        this.$router.push("/routines");
      });
    let toast = Vue.toasted.show("You Deleted A Routine", { 
         theme: "toasted-primary", 
         position: "top-right", 
         duration : 5000
      });
  }
  }
};
</script>


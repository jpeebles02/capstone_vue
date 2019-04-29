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
    }
  }
};
</script>

<div class="container">
      <form v-on:submit.prevent="submit()">
        <h1>Signup</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>Name:</label>
          <input type="text" class="form-control" v-model="name" />
        </div>
        <div class="form-group">
          <label>Email:</label>
          <input type="email" class="form-control" v-model="email" />
        </div>
        <div class="form-group">
          <label>Phone Number:</label>
          <input type="phone_number" class="form-control" v-model="phone_number" />
        </div>
        <div class="form-group">
          <label>Birth Date:</label>
          <input type="birth_date" class="form-control" v-model="birth_date" />
        </div>
        <div class="form-group">
          <label>Height:</label>
          <input type="height" class="form-control" v-model="height" />
        </div>
        <div class="form-group">
          <label>Weight:</label>
          <input type="weight" class="form-control" v-model="weight" />
        </div>
        <div class="form-group">
          <label>Waist Size:</label>
          <input type="waist_size" class="form-control" v-model="waist_size" />
        </div>
        <div class="form-group">
          <label>Target Weight:</label>
          <input type="target_weight" class="form-control" v-model="target_weight" />
        </div>
        <div class="form-group">
          <label>Target Waist Size:</label>
          <input type="target_waist_size" class="form-control" v-model="target_waist_size" />
        </div>
        <div class="form-group">
          <label>Password:</label>
          <input type="password" class="form-control" v-model="password" />
        </div>
        <div class="form-group">
          <label>Password confirmation:</label>
          <input type="password" class="form-control" v-model="passwordConfirmation" />
        </div>
        <input type="submit" class="btn btn-primary" value="Submit" />
      </form>
    </div>

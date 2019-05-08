<template>
  <div class="exercises-index">
    <!-- PAGE HEADER
    ============================== -->
    <div class="page__header">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h3 class="page-header__title">All Exercises</h3>
            <ol class="breadcrumb page-header__breadcrumb">
              <li><a href="/">Back Home</a></li>
              <li><a href="/userhomepage" v-if="jwt">Your Home Page</a></li>
              <li><a href="/routines" v-if="jwt">Your Routines</a></li>
              <li class="active">All Exercises</li>
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
          <div class="portfolio__nav">
            <div class="row">
              <div class="col-sm-8 col-md-9">
                <!-- Categories -->
                <ul class="nav nav-tabs nav-justified filter__nav" role="tablist">
                  <li role="presentation">
                    <a
                      href="#"
                      role="tab"
                      data-toggle="tab"
                      data-filter=".filter_modernism"
                      v-on:click="setSortAttribute('name')"
                      >Sort by Name</a
                    >
                  </li>
                  <li role="presentation">
                    <a
                      href="#"
                      role="tab"
                      data-toggle="tab"
                      data-filter=".filter_impressionism"
                      v-on:click="setSortAttribute('category_id')"
                      >Sort by Category</a
                    >
                  </li>
                </ul>
              </div>
              <!-- Columns -->
              <div class="col-sm-4 col-md-3">
                <ul class="nav nav-tabs nav-justified columns__nav hidden-xs" role="tablist">
                  <li role="presentation">
                    <a href="/exercises" role="tab" data-toggle="tab" data-grid="col-sm-6"> <i class="fa fa-columns"></i> 2</a>
                  </li>
                  <li role="presentation" class="active">
                    <a href="/exercises" role="tab" data-toggle="tab" data-grid="col-sm-4"> <i class="fa fa-columns"></i> 3</a>
                  </li>
                  <li role="presentation">
                    <a href="/exercises" role="tab" data-toggle="tab" data-grid="col-sm-4 col-md-3">
                      <i class="fa fa-columns"></i> 4</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- / .portfolio__nav -->
        </div>
      </div>
      <!-- / .row -->

      <!-- Portfolio -->
      <div class="portfolio__items">
        <div class="row">
          <div
            v-for="exercise in orderBy(
              filterBy(exercises, searchFilter, 'name', 'category_id'),
              sortAttribute,
              sortAscending
            )"
            v-bind:key="exercise.id"
          >
            <div class="col-xs-12 col-sm-4 filter__item filter_modernism">
              <div class="portfolio__item">
                <!-- Image -->
                <div class="portfolio__img">
                  <!-- <a href=/exercises/${exercise.id}> -->
                  <img v-bind:src="exercise.primary_image" v-bind:alt="exercise.name" />
                  <!-- </a> -->
                </div>
                <!-- Captions -->
                <div class="portfolio__caption">
                  <h3 class="portfolio__title">{{ exercise.name }}</h3>
                  <div class="portfolio__intro">
                    <router-link v-bind:to="`/exercises/${exercise.id}`">More info</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- / .row -->
      </div>
      <!-- / .portfolio__items -->
    </div>
    <!-- / .container -->
    <!-- <h1>{{ message }}</h1>
    <div>
      <button v-on:click="setSortAttribute('name')">Sort by Name</button>
      <button v-on:click="setSortAttribute('category_id')">Sort by Category</button>
    </div>
    Search by name or category_id:
    <input type="text" v-model="searchFilter" list="names" />
    <datalist id="names">
      <option v-for="exercise in exercises">{{ exercise.name }}</option>
    </datalist> -->
    <!-- <transition-group appear enter-active-class="animated lightSpeedOut" leave-active-class="animated jackInTheBox"> -->
    <!-- <div
        v-for="exercise in orderBy(
          filterBy(exercises, searchFilter, 'name', 'category_id', 'muscle_group_id'),
          sortAttribute,
          sortAscending
        )"
        v-bind:key="exercise.id"
      >
        <h2>{{ exercise.name }}</h2>
        <img v-bind:src="exercise.primary_image" v-bind:alt="exercise.name" />
        <router-link v-bind:to="`/exercises/${exercise.id}`">More info</router-link>
      </div> -->
    <!-- </transition-group> -->
  </div>
</template>

<style>
img {
  width: 250px;
}
</style>

<script>
var axios = require("axios");
import Vue2Filters from "vue2-filters";
export default {
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      message: "All Exercises",
      exercises: [],
      searchFilter: "",
      sortAttribute: "name",
      sortAscending: 1,
      jwt: null
    };
  },
  created: function() {
    // RUBY WEB REQUEST
    // response = HTTP.get("/api/products")
    // @exercises = response.data;
    // JAVASCRIPT WEB REQUEST
    axios
      .get("/api/exercises")
      .then(response => {
        this.exercises = response.data;
        console.log(this.exercises);
      })
      .catch(error => {
        console.log("Something went wrong...", error);
        if (error.response && error.response.status === 401) {
          this.$router.push("/login");
        }
      });
  },
  methods: {
    setSortAttribute: function(inputAttribute) {
      if (this.sortAttribute === inputAttribute) {
        if (this.sortAscending === 1) {
          this.sortAscending = -1;
        } else {
          this.sortAscending = 1;
        }
      } else {
        this.sortAscending = 1;
      }
      this.sortAttribute = inputAttribute;
    },
     muscleOne: function() {
    axios.get("/api/muscle_groups/" + this.$route.params.id).then(response => {
      this.muscle_group = response.data;
      // this.muscle_groupId = this.muscle_group.id;
      console.log(this.muscle_group);
    });
  }
  }
};
</script>

<template>
  <div class="exercises-index">
    <h1>{{ message }}</h1>
    <div>
      <button v-on:click="setSortAttribute('name')">Sort by Name</button>
      <button v-on:click="setSortAttribute('category_id')">Sort by Category</button>
    </div>
    Search by name or category_id:
    <input type="text" v-model="searchFilter" list="names" />
    <datalist id="names">
      <option v-for="exercise in exercises">{{ exercise.name }}</option>
    </datalist>
    <transition-group appear enter-active-class="animated rollIn" leave-active-class="animated bounceOutDown">
      <div
        v-for="exercise in orderBy(
          filterBy(exercises, searchFilter, 'name', 'category_id'),
          sortAttribute,
          sortAscending
        )"
        v-bind:key="exercise.id"
      >
        <h2>{{ exercise.name }}</h2>
        <img v-bind:src="exercise.primary_image" v-bind:alt="exercise.name" />
        <router-link v-bind:to="`/exercises/${exercise.id}`">More info</router-link>
      </div>
    </transition-group>
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
      sortAscending: 1
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
    }
  }
};
</script>

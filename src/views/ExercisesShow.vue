<template>
  <div class="exercises-show">
    <h2>{{ exercise.name }}</h2>
    <img v-bind:src="exercise.primary_image" v-bind:alt="exercise.name" />
    <p>Description: {{ exercise.description }}</p>
    <p>Routine: {{ exercise.routine }}</p>
    <p>Muscle Group: {{ exercise.muscle_group_id }}</p>
    <p>Category: {{ exercise.catrgory_id }}</p>
    <router-link to="/">Back to all exercises</router-link>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      exercise: {}
    };
  },
  created: function() {
    axios.get("/api/exercises/" + this.$route.params.id).then(response => {
      this.exercise = response.data;
    });
  },
  methods: {}
};
</script>

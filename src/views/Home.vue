<template>
  <div class="home"></div>
</template>

<script>
export default {
  name: "home",
  components: {}
};
</script>


  <h1>All Routines</h1>
    <div v-for="routine in routines" v-bind:key="routine.id">
      <h4>Name: {{ routine.name }}</h4>
      <h4>Day of week: {{ routine.day_of_week }}</h4>
      <router-link v-bind:to="`/routines/${routine.id}`">More info</router-link>
    </div>
  </div>

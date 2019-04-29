<template>
  <div class="routinesnew">
    <h1>New Routine</h1>
    <div>
      Routine name: <input type="text" v-model="routineName" /> Day of Week:
      <select v-model="selected">
        <option selected> Sunday </option>
        <option> Monday </option>
        <option> Tuesday </option>
        <option> Wednesday </option>
        <option> Thursday </option>
        <option> Friday </option>
        <option> Saturday </option>
      </select>
      <p>You selected {{ this.selected }}</p>
      <button v-on:click="createPlan()">Create Routine</button>
    </div>
    <div>
      <router-link to="/userhomepage">Back to your home page</router-link> |
      <router-link to="/routines">My Routines</router-link> |
    </div>
  </div>
</template>

<script>
var axios = require("axios");

export default {
  data: function() {
    return {
      rotines: [],
      routineName: "",
      selected: ""
    };
  },
  created: function() {
    axios.get("/api/routines").then(response => {
      this.routines = response.data;
    });
  },
  methods: {
    createPlan: function() {
      var params = {
        name: this.routineName,
        day_of_week: this.selected
      };
      axios.post("/api/routines", params).then(response => {
        this.routines.push(response.data);
        this.routineName = "";
        this.selected = "";
      });
    }
  }
};
</script>

<template>
  <div class="exerciseroutinesnew">
    <h1>Add Exercise to Routine</h1>
    <div>
      Exercise Id: <input type="text" v-model="exerciseId" /> Routine Id:
      <select v-model="selected">
        <option selected>A</option>
        <option>B</option>
        <option>C</option>
      </select>
      Amount: <input type="text" v-model="amount" />
      <button v-on:click="createRoutine()">Add to Routine</button>
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
      routines: [],
      exerciseId: "",
      routineId: "",
      amount: ""
    };
  },
  created: function() {
    axios.get("/api/exercise_routines").then(response => {
      this.exerciseroutines = response.data;
    });
  },
  methods: {
    createRoutine: function() {
      var params = {
        exercise_id: this.exerciseId,
        routine_id: this.routineId,
        amount: this.amount
      };
      axios.post("/api/exercise_routines", params).then(response => {
        this.exerciseroutines.push(response.data);
        this.exerciseId = "";
        this.routineId = "";
        this.amount = "";
      });
    }
  }
};
</script>

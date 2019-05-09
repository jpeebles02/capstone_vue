<template>
  <div class="meals">
    <h1>Graph</h1>
    <div>
      Weight: <input type="text" v-model="newUserWeight">
      Date: <input type="text" v-model="newUserDate">
      <button v-on:click="createGraphEntry()">Add to Graph</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      user_weights: [],
      newUserWeight: "",
      newUserDate: ""
    };
  },
  created: function() {
    axios.get("/api/user_weights").then(response => {
      this.user_weights = response.data;
    });
  },
  methods: {
    createGraphEntry: function() {
      var params = {
        weight: this.newUserWeight,
        date: this.newUserDate
      };
      axios.post("/api/user_weights", params).then(response => {
        this.user_weights.push(response.data);
        this.newUserWeight = "";
        this.newUserDate = ""
      });
    }
  }
};
</script>

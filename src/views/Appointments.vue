<template>
  <div class="appointments">
    hello

    <div v-for appointment in appointments v-bind:key="appointments.id">
    {{ appointments.date }}
  </div>

  </div>  
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      appointments: [],
      selected: ""
    };
  },
  created: function() {
    axios.get("/api/appointments/").then(response => {
      this.appointments = response.data;
      console.log(this.appointments)
    });
  }
};
</script>
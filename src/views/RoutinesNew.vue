<template>
  <div class="routines-new">
    <!-- PAGE CONTENT
    ============================== -->
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <h3 class="header">Create a New Routine</h3>
          <p>
            Below you can create a new routine. View the exercises and add them to your routine. You can choose a day of
            the week for each routine.
            <br /><br />
          </p>

          <!-- Pricing Table -->
          <div class="table-responsive">
            <table class="table table-bordered pricing__table">
              <thead>
                <tr>
                  <th></th>
                  <th class="text-center">Routine Name</th>
                  <th class="text-center">Day of Week</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Input</td>
                  <td class="text-center">
                    <strong><input type="text" v-model="routineName"/></strong>
                  </td>
                  <td class="text-center">
                    <strong
                      ><select v-model="selected">
                        <option selected> Sunday </option>
                        <option> Monday </option>
                        <option> Tuesday </option>
                        <option> Wednesday </option>
                        <option> Thursday </option>
                        <option> Friday </option>
                        <option> Saturday </option>
                      </select></strong
                    >
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td class="text-center" v-on:click="createPlan()">
                    <a href="/routines" class="btn btn-primary">Create Routine</a>
                  </td>
                  <td class="text-center">
                    <strong>{{ this.selected }}</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <!-- / .row -->
    </div>
    <!-- / .container -->
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

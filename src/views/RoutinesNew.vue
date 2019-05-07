<template>
  <div class="routinesnew">
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
                  <th class="text-center">Intensity Level</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td class="text-center">
                    <strong><input type="text" v-model="routineName"/></strong>
                  </td>
                  <td class="text-center">
                    <strong
                      ><select v-model="selected">
                        <option> very-light </option>
                        <option> light </option>
                        <option selected> intermediate </option>
                        <option> high </option>
                        <option> very-high </option>
                      </select></strong>
                    </td>
                </tr>
                <tr>
                  <td></td>
                  <div class="text-center" >
                    <button class="btn btn-primary" v-on:click="createPlan()">Create Routine</button>
                  </div>
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
// register the plugin on vue
import Toasted from 'vue-toasted';
 
Vue.use(Toasted)

export default {
  data: function() {
    return {
      routines: [],
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
      let toast = Vue.toasted.show("You Created A Routine", { 
         theme: "toasted-primary", 
         position: "top-right", 
         duration : 5000
      });
      axios.post("/api/routines", params).then(response => {
        this.routines.push(response.data);
        this.$router.push("/routines");
      });
    }
  }
};
</script>

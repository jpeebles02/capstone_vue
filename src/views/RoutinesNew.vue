<template>
  <div class="routines-new">
    <!-- PAGE CONTENT
    ============================== -->
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <h3 class="header">Please choose one of the pricing options below to subscribe</h3>
          <p>
            Donec tincidunt nec mi eu venenatis. Nulla facilisi. Maecenas venenatis condimentum porttitor. Aliquam erat
            volutpat. In ac mollis odio. Praesent ac mi nisi. Nulla congue mi at porttitor ultrices. Nulla pellentesque
            placerat elit, sit amet egestas mi consectetur eleifend. Integer molestie ultricies libero ut consectetur.
            Maecenas consectetur quis elit quis consequat. Sed tincidunt nulla in lorem ullamcorper, ut aliquam odio
            malesuada.
            <br /><br />
          </p>

          <!-- Pricing Table -->
          <div class="table-responsive">
            <table class="table table-bordered pricing__table">
              <thead>
                <tr>
                  <th></th>
                  <th class="text-center">Basic Plan</th>
                  <th class="text-center">Pro Plan</th>
                  <th class="text-center">Business Plan</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Price</td>
                  <td class="text-center"><strong>$25/month</strong></td>
                  <td class="text-center"><strong>$35/month</strong></td>
                  <td class="text-center"><strong>$45/month</strong></td>
                </tr>
                <tr>
                  <td>Lorem ipsum dolor sit amet</td>
                  <td class="text-center text-success"><i class="fa fa-check"></i></td>
                  <td class="text-center text-success"><i class="fa fa-check"></i></td>
                  <td class="text-center text-success"><i class="fa fa-check"></i></td>
                </tr>
                <tr>
                  <td>Pellentesque vitae dolor</td>
                  <td class="text-center text-danger"><i class="fa fa-times"></i></td>
                  <td class="text-center text-success"><i class="fa fa-check"></i></td>
                  <td class="text-center text-success"><i class="fa fa-check"></i></td>
                </tr>
                <tr>
                  <td>Phasellus id elit a felis</td>
                  <td class="text-center text-danger"><i class="fa fa-times"></i></td>
                  <td class="text-center text-danger"><i class="fa fa-times"></i></td>
                  <td class="text-center text-success"><i class="fa fa-check"></i></td>
                </tr>
                <tr>
                  <td>Mauris eget ligula in elit</td>
                  <td class="text-center text-danger"><i class="fa fa-times"></i></td>
                  <td class="text-center text-danger"><i class="fa fa-times"></i></td>
                  <td class="text-center text-success"><i class="fa fa-check"></i></td>
                </tr>
                <tr>
                  <td></td>
                  <td class="text-center"><a href="#" class="btn btn-primary">Subscribe</a></td>
                  <td class="text-center"><a href="#" class="btn btn-primary">Subscribe</a></td>
                  <td class="text-center"><a href="#" class="btn btn-primary">Subscribe</a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <!-- / .row -->
    </div>
    <!-- / .container -->
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

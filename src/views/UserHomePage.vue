<template>
  <div class="userhomepage" style="min-height: 180vh;">

    <!-- / .container -->
    <div class="profile__header">
      <div class="container">
        <div class="row">
          <div class="col-sm-4 col-md-3 col-lg-2">
            <!-- User avatar -->
            <div class="profile__avatar">
              <!-- <img src="img/photo_4.jpg" alt="..." class="img-responsive center-block" /> -->
              <img v-bind:src="user.image_url" v-bind:alt="user.name" class="img-responsive center-block" />

            </div>
          </div>
          <div class="col-sm-8 col-md-9 col-lg-10">
            <div class="profile__summary">
              <!-- User name -->
              <h3 class="profile__name">{{ user.name }}</h3>
              <!-- User status -->
              <p class="text-muted">
                <avatar :username="`${user.name}`"></avatar>
              </p>
            </div>
            <!-- / .profile__summary -->
          </div>
        </div>
        <!-- / .row -->
      </div>
      <!-- / .container -->
    </div>
    <!-- .profile__header -->
    <div class="container">
      <div class="row">
        <div class="col-sm-4 col-md-3 col-lg-2">
          <!-- Social links -->
          <ul class="list-unstyled profile-social center-block">
            <li>
              <a href="#" class="btn btn-default btn-block"><i class="fa fa-google-plus-square"></i> Google</a>
            </li>
            <li>
              <a href="#" class="btn btn-default btn-block"><i class="fa fa-facebook-square"></i> Facebook</a>
            </li>
            <li>
              <a href="#" class="btn btn-default btn-block"><i class="fa fa-twitter-square"></i> Twitter</a>
            </li>
          </ul>
        </div>
        <div class="col-sm-8 col-md-9 col-lg-10">
          <!-- Tabs -->
          <ul class="nav nav-tabs" role="tablist">
            <li role="presentation" class="active">
              <a href="#personal-info" aria-controls="personal-info" role="tab" data-toggle="tab">Personal Info</a>
            </li>
            <li role="presentation">
              <a href="#user-portfolio" aria-controls="user-portfolio" role="tab" data-toggle="tab">Weight Tracker</a>
            </li>
          </ul>
          <!-- Tab content -->
          <div class="tab-content">
              <div role="tabpanel" class="tab-pane active" id="personal-info">
                <h3 class="header header_plain">Personal Info</h3>
                <div class="table-responsive">
                  <table class="table">
                    <tbody>
                      <tr>
                        <th scope="row">Email</th>
                        <td>{{ user.email }}</td>
                      </tr>
                      <tr>
                        <th scope="row">Phone Number</th>
                        <td>{{ user.phone_number }}</td>
                      </tr>
                      <tr>
                        <th scope="row">Birth Date</th>
                        <td>{{ user.birth_date }}</td>
                      </tr>
                      <tr>
                        <th scope="row">Height (in)</th>
                        <td>{{ user.height_in_inches }}</td>
                      </tr>
                      <tr>
                        <th scope="row">Weight (lbs)</th>
                        <td><input type="text" v-model="user.current_weight"></td>
                      </tr>
                      <tr>
                        <th scope="row">Target Weight</th>
                        <td><input type="text" v-model="user.target_weight"></td>
                      </tr>
                      <div>
                        <button v-on:click="updateUser(user)">Update Weight</button>
                      </div>

                    </tbody>
                  </table>
                </div>
                <!-- / .table-responsive -->
              </div>
              <div role="tabpanel" class="tab-pane" id="user-portfolio">
                <h3 class="header header_plain">User data</h3>
                <div class="row">
                  <div class="col-lg-12 col-md-12">
                    <div id="container"></div>
                  <!--   <input type="text" v-model="columnOne"> -->

                    <thead>
                      <tr>
                        <th></th>
                        <th class="text-center">Your weight</th>
                        <th class="text-center">Todays Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td></td>
                        <td class="text-center">
                          <strong><input type="text" v-model="userWeight"/></strong>
                        </td>
                        <td class="text-center">
                          <strong><input type="text" v-model="userDate"/></strong>
                        </td>
                      </tr>
                      <tr>

                        <tr>
                          <td></td>
                          <td class="text-center" v-on:click="createUserWeight()">
                            <a href="/userhomepage" class="btn btn-primary">Add to Graph</a>
                          </td>
                        </tr>
                      </tbody>
                    </div>
                    <div class="col-lg-6 col-md-6">
                      <header class="container">
                        <h1>BPI Calculator</h1>
                      </header>
                      <main class="container">

                        <div class="col-lg-6 col-md-6 form-group">
                          <label for="weight" class="col-xs-4 control-label">weight <em>(in lbs)</em></label>
                          <div class="col-lg-6 col-md-6"><input v-model="weight" id="weight" type="text" class="form-control"></div>
                        </div>
                        <div class="col-lg-6 col-md-6 form-group">
                          <label for="height" class="col-xs-4 control-label">height <em>(in inches)</em></label>
                          <div class="col-lg-6 col-md-6"><input v-model="height" id="height" type="text" class="form-control"></div>
                        </div>
                        <div class="col-lg-6 col-md-6 form-group">
                          <button class="btn btn-success btn-block" @click="calculate">Calculate</button>
                        </div>
                        <div class="result">
                          <em>{{result}}</em>
                        </div>
                      </main>
                    </div>

                  </div>
                  <!-- / .row -->
                  <div class="row">
                    <div class="col-xs-12 text-right">
                      <a href="/carts" class="btn btn-default">View Full BMI Chart</a>
                    </div>
                  </div>
                </div>

              </div>
              <!-- / .tab-content -->
            </div>
          </div>
          <!-- / .row -->
        </div>
        <!-- / .container -->

        <router-view v-on:changeJwt="setJwt()" />

      </div>
    </template>

<style>
/*body {
  margin: 0;
  padding: 0;
}*/
</style>

<script>
import Vue from "vue";
import HighchartsVue from 'highcharts-vue';
import {Chart} from 'highcharts-vue'
import moment from "moment";
import Avatar from 'vue-avatar'


Vue.use(HighchartsVue);

var axios = require("axios");
export default {
  components: {
    Avatar
  },
  data: function() {
    return {
      weight: '',
      height: '',
      result: 'Click "Calculate"',
      userWeight: "",
      userDate: "",
      routineId: "",
      routines: [],
      format: "MM/DD/YYYY hh:mm",
      user: [],
      jwt: null,
      chartOptions: {
        series: [{
        data: [, 70, 50, 30, 10],
        type: 'column',
        name: "me"
      }]
      },
     options: {
        title: {
            text: 'Weight Tracker'
        },
        xAxis: {
            categories: [],
            title: {
            text: "Dates"
          }
        },
        yAxis: {
          title: {
            text: "Weight"
          }

        },
        series: [{
          name: "Your Weight",
          data: [],
          type: 'column', 
        }]
      },
      chart: null,
      columnOne: null,
      weights: [],
      dates: []
    };
  },

  mounted: function() {
    this.jwt = localStorage.jwt;
    console.log("My jwt is", this.jwt);

    axios.get("/api/users/current_user").then(response => {
      this.user = response.data;
    });

    axios.get("/api/users/current_user").then(response => {
      this.userweights = response.data.user_weights;

      this.userweights.forEach((weight) => {
        this.dates.push(weight['date']);
      });

      this.userweights.forEach((weight) => {
        this.weights.push(weight['weight']);
      });

      this.setupChart();

    });
  },
  methods: {
    setJwt: function() {
      this.jwt = localStorage.jwt;
    },
    setupChart: function() {
      this.options.xAxis.categories = this.dates;
      this.options.series[0].data = this.weights;

      console.log("CHART DATA", this.options.series[0].data);
      console.log("CHART CATEGORIES", this.options.xAxis.categories);

      this.chart = Highcharts.chart('container', this.options);
      this.columnOne = this.options.series[0].data[5];
      console.log('graph rendered');
    },
    createUserWeight: function() {
        var params = {
          weight: this.userWeight,
          date: this.userDate
        };

        axios.post("/api/user_weights", params).then(response => {
        this.userweights.push(response.data);
        this.userWeight = "";
        this.userDate = "";
        });
    },
    calculate() {
      let weight = (this.weight)
      let height = (this.height)
      this.result = (weight / (height * height)) * 703
    },
    updateUser: function(user) {
      var params = {
        target_weight: user.target_weight,
        current_weight: user.current_weight
      };
      axios
        .patch("/api/users/" + user.id, params)
        .then(response => {
          this.currentUser = {};
        });
    }
  },
  watch: {
    columnOne: function() {
      console.log("columnOne changed");
      const value = Number(this.columnOne) || null
      if (this.chart.series[0].data[5]) {
        this.chart.series[0].data[5].update(value) 
      }
    }
  }
};
</script>



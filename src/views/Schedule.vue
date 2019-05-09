<template>
  <div id="schedules">

    <div class="page__header">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h3 class="page-header__title">Trainers Schedules</h3>
            <ol class="breadcrumb page-header__breadcrumb">
              <li><a href="/">Home</a></li>
              <li class="active">Trainer Schedules</li>
            </ol>
          </div>
        </div>
      </div>
    </div>

    <!-- PAGE CONTENT
    ============================== -->
    <div class="container">
      <div class="row">
        <div class="col-sm-8">
          <div class="portfolio-item__img"><datepicker :inline="true" :highlighted="highlighted"></datepicker></div>
        </div>
        <div class="col-sm-4">
          <h3 class="header">Book An appointment</h3>
          <p class="text-muted">
            Below Select a date, time, and a routine you would like to work on for your appointment with one of the
            Trainers
          </p>
          <h3 class="header header_plain">Project Details</h3>
          <div class="table-responsive">
            <table class="table">
              <tbody>
                <tr>
                  <th scope="row">Start Time: sessions run for one hour</th>
                  <td>
                    <strong
                      ><select v-model="selected">
                        <option selected> 6:00 am </option>
                        <option> 7:00 am </option>
                        <option> 8:00 am </option>
                        <option> </option>
                        <option> 9:00 am </option>
                        <option> 6:00 pm </option>
                        <option> 7:00 pm </option>
                        <option> 8:00 pm </option>
                      </select></strong
                    >
                  </td>
                </tr>
                <tr>
                  <th scope="row">Choose a Personal Trainer</th>
                  <td>
                    <strong
                      ><select v-model="selected">
                        <option>Janet </option>
                        <option> Jacob </option>
                        <option> Carl </option>
                      
                      </select></strong
                    >
                  </td>
                </tr>
                <tr>
                  <th scope="row">Date</th>
                  <datepicker placeholder="Select Date"></datepicker>
                </tr>
                <tr>
                 
                  <th scope="row">Choose a Routine</th>
                  <select v-model="routineId">
                    <option selected>-select-</option>
                    <option v-for="routine in routines" :value="`${routine.id}`">
                      {{ routine.name }}
                    </option>
                  </select>
                </tr>
              </tbody>
              <button class="btn btn-primary" v-on:click="bookAppointment()">Book Appointment</button>
            </table>
          </div>
          <!-- / .table-responsive -->
        </div>
      </div>
    </div>
    <!-- <datepicker :inline="true" :highlighted="highlighted"></datepicker>
    <div>highlighted: {{ highlighted }}</div>
    <div class="example">
      <h3>Highlighting Dates</h3>
      <div>
        <div>
          <label>Start Date:</label>
          <datepicker v-on:selected="highlightFrom"></datepicker>
        </div>
        <div class="form-group">
          <label>End Date:</label>
          <datepicker v-on:selected="highlightTo"></datepicker>
        </div>

        <h5>Dates Selected</h5>
        <datepicker :highlighted="highlighted"></datepicker>
      </div>
    </div> -->
    <!-- / .container -->
  </div>
</template>

<script>
var axios = require("axios");
import Datepicker from "vuejs-datepicker/dist/vuejs-datepicker.esm.js";
import * as lang from "vuejs-datepicker/src/locale";
import moment from "moment";
import Toasted from 'vue-toasted';
 
Vue.use(Toasted)


export default {
  name: "app",
  components: {
    Datepicker
  },
  data: function() {
    return {
      routineId: "",
      routines: [],
      format: "MM/DD/YYYY hh:mm",
      // highlightedFn: {
      //   customPredictor(date) {
      //     if (date.getDate() % 4 === 0) {
      //       return true;
      //     }
      //   }
      // },
      highlighted: {
          customPredictor: function (date) {
            // highlights every day of a month which is a multiple of 4
            if (date.getDate() % 4 === 0) {
              return true
            }
          }
        },
    };
  },
  created: function() {
    axios.get("/api/routines").then(response => {
      this.routines = response.data;
    });

  },
  methods: {
    bookAppointment: function() {
      let toast = Vue.toasted.show("Your appointment is booked, a trainer will contact you shortly.", { 
         theme: "toasted-primary", 
         position: "top-right", 
         duration : 5000
      });
    },
    highlightTo(val) {
      if (typeof this.highlighted.to === "undefined") {
        this.highlighted = {
          to: this.highlighted.from,
          daysOfMonth: this.highlighted.daysOfMonth,
          from: this.highlighted.from
        };
      }
      this.highlighted.to = val;
    },
    

    // highlightFrom(val) {
    //   if (typeof this.highlighted.from === "undefined") {
    //     this.highlighted = {
    //       to: this.highlighted.to,
    //       daysOfMonth: this.highlighted.daysOfMonth,
    //       from: null
    //     };
    //   }
    //   this.highlighted.from = val;
    // }
    // setHighlightedDays(elem) {
    //   if (elem.target.value === "undefined") {
    //     return;
    //   }
    //   let highlightedDays = elem.target.value.split(",").map(day => parseInt(day));
    //   this.highlighted = {
    //     from: this.highlighted.from,
    //     to: this.highlighted.to,
    //     daysOfMonth: highlightedDays
    //   };
    // }
  },

};
</script>

<style>
body {
  font-family: "Helvetica Neue Light", Helvetica, sans-serif;
  padding: 1em 2em 2em;
}
input,
select {
  padding: 0.75em 0.5em;
  font-size: 100%;
  border: 1px solid #ccc;
  width: 100%;
}

select {
  height: 2.5em;
}

.example {
  background: #f2f2f2;
  border: 1px solid #ddd;
  padding: 0em 1em 1em;
  margin-bottom: 2em;
}

code,
pre {
  margin: 1em 0;
  padding: 1em;
  border: 1px solid #bbb;
  display: block;
  background: #ddd;
  border-radius: 3px;
}

.settings {
  margin: 2em 0;
  border-top: 1px solid #bbb;
  background: #eee;
}

h5 {
  font-size: 100%;
  padding: 0;
}

.form-group {
  margin-bottom: 1em;
}

.form-group label {
  font-size: 80%;
  display: block;
}
</style>

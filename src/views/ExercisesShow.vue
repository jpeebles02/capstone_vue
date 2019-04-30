<template>
  <div class="exercises-show">
    <!-- PAGE HEADER
    ============================== -->
    <div class="page__header">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h3 class="page-header__title">More Info</h3>
            <ol class="breadcrumb page-header__breadcrumb">
              <li><a href="/">Back Home</a></li>
              <li><a href="/userhomepage">Your Home Page</a></li>
              <li><a href="/exercises">Back To All Exercises</a></li>
              <li><a href="/routines">Your Routines</a></li>
              <li class="active">More Info</li>
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
          <div class="portfolio-item__img">
            <img v-bind:src="exercise.primary_image" v-bind:alt="exercise.name" class="img-responsive" />
          </div>
        </div>
        <div class="col-sm-4">
          <h3 class="header">{{ exercise.name }}</h3>
          <p class="text-muted">
            {{ exercise.description }}
          </p>
          <h3 class="header header_plain">Exercise Details</h3>
          <div class="table-responsive">
            <table class="table">
              <tbody>
                <tr>
                  <th scope="row">Recommended Amount</th>
                  <td>{{ exercise.amount }}</td>
                </tr>
                <tr>
                  <th scope="row">Muscle Group</th>
                  <td>{{ exercise.muscle_group_id }}</td>
                </tr>
                <tr>
                  <th scope="row">Category</th>
                  <td>{{ exercise.category_id }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 class="header header_plain">Add Exercise to a Routine</h3>
          <div class="table-responsive">
            <table class="table">
              <tbody>
                <tr>
                  <th scope="row">Exercise name</th>
                  <td>{{ this.exercise.name }}<input type="hidden" v-model="exerciseId" /></td>
                </tr>
                <tr>
                  <th scope="row">Routine Name</th>
                  <td>
                    <select v-model="routineId">
                      <option selected>-select-</option>
                      <option v-for="routine in routines" :value="`${routine.id}`">
                        {{ routine.name }}
                      </option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <th scope="row">How many reps are you doing?</th>
                  <td>{{ this.exercise.amount }}<input type="text" v-model="amount" /></td>
                </tr>
                <tr>
                  <th scope="row">Add to Routine</th>
                  <td><button v-on:click="createRoutine()">Add</button></td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- / .table-responsive -->
        </div>
      </div>
      <!-- / .row -->
      <div class="row">
        <div class="col-xs-12">
          <h3 class="header">Related Exercises</h3>

          <!-- Portfolio Carousel -->
          <div id="portfolio__carousel" class="carousel slide" data-ride="carousel">
            <!-- Controls -->
            <div class="portfolio-carousel__controls">
              <a href="#portfolio__carousel" role="button" data-slide="prev">
                <i class="fa fa-long-arrow-left"></i>
              </a>
              <a href="#portfolio__carousel" role="button" data-slide="next">
                <i class="fa fa-long-arrow-right"></i>
              </a>
            </div>

            <!-- Wrapper for slides -->
            <div class="carousel-inner" role="listbox">
              <!-- Slide #1 -->
              <div class="item active">
                <div class="row">
                  <div class="col-xs-6 col-sm-6 col-md-3">
                    <!-- Portfolio Item #1 -->
                    <div class="portfolio__item">
                      <!-- Image -->
                      <div class="portfolio__img">
                        <a href="#">
                          <img src="img/general_1.jpg" alt="Portfolio Image" />
                        </a>
                      </div>
                      <!-- Captions -->
                      <div class="portfolio__caption">
                        <h3 class="portfolio__title">Simple & Beautiful</h3>
                        <div class="portfolio__intro">
                          Morbi vulputate eget ipsum vel maximus. Morbi dictum blandit mattis.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xs-6 col-sm-6 col-md-3">
                    <!-- Portfolio Item #2 -->
                    <div class="portfolio__item">
                      <!-- Image -->
                      <div class="portfolio__img">
                        <a href="#">
                          <img src="img/general_2.jpg" alt="Portfolio Image" />
                        </a>
                      </div>
                      <!-- Captions -->
                      <div class="portfolio__caption">
                        <h3 class="portfolio__title">Simple & Beautiful</h3>
                        <div class="portfolio__intro">
                          Morbi vulputate eget ipsum vel maximus. Morbi dictum blandit mattis.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xs-6 col-sm-6 col-md-3">
                    <!-- Portfolio Item #3 -->
                    <div class="portfolio__item">
                      <!-- Image -->
                      <div class="portfolio__img">
                        <a href="#">
                          <img src="img/general_3.jpg" alt="Portfolio Image" />
                        </a>
                      </div>
                      <!-- Captions -->
                      <div class="portfolio__caption">
                        <h3 class="portfolio__title">Simple & Beautiful</h3>
                        <div class="portfolio__intro">
                          Morbi vulputate eget ipsum vel maximus. Morbi dictum blandit mattis.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xs-6 col-sm-6 col-md-3">
                    <!-- Portfolio Item #4 -->
                    <div class="portfolio__item">
                      <!-- Image -->
                      <div class="portfolio__img">
                        <a href="#">
                          <img src="img/general_4.jpg" alt="Portfolio Image" />
                        </a>
                      </div>
                      <!-- Captions -->
                      <div class="portfolio__caption">
                        <h3 class="portfolio__title">Simple & Beautiful</h3>
                        <div class="portfolio__intro">
                          Morbi vulputate eget ipsum vel maximus. Morbi dictum blandit mattis.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- / .row -->
              </div>
              <!-- / .item -->

              <!-- Slide #2 -->
              <div class="item">
                <div class="row">
                  <div class="col-xs-6 col-sm-6 col-md-3">
                    <!-- Portfolio Item #1 -->
                    <div class="portfolio__item">
                      <!-- Image -->
                      <div class="portfolio__img">
                        <a href="#">
                          <img src="img/general_5.jpg" alt="Portfolio Image" />
                        </a>
                      </div>
                      <!-- Captions -->
                      <div class="portfolio__caption">
                        <h3 class="portfolio__title">Simple & Beautiful</h3>
                        <div class="portfolio__intro">
                          Morbi vulputate eget ipsum vel maximus. Morbi dictum blandit mattis.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xs-6 col-sm-6 col-md-3">
                    <!-- Portfolio Item #2 -->
                    <div class="portfolio__item">
                      <!-- Image -->
                      <div class="portfolio__img">
                        <a href="#">
                          <img src="img/general_6.jpg" alt="Portfolio Image" />
                        </a>
                      </div>
                      <!-- Captions -->
                      <div class="portfolio__caption">
                        <h3 class="portfolio__title">Simple & Beautiful</h3>
                        <div class="portfolio__intro">
                          Morbi vulputate eget ipsum vel maximus. Morbi dictum blandit mattis.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xs-6 col-sm-6 col-md-3">
                    <!-- Portfolio Item #3 -->
                    <div class="portfolio__item">
                      <!-- Image -->
                      <div class="portfolio__img">
                        <a href="#">
                          <img src="img/general_7.jpg" alt="Portfolio Image" />
                        </a>
                      </div>
                      <!-- Captions -->
                      <div class="portfolio__caption">
                        <h3 class="portfolio__title">Simple & Beautiful</h3>
                        <div class="portfolio__intro">
                          Morbi vulputate eget ipsum vel maximus. Morbi dictum blandit mattis.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xs-6 col-sm-6 col-md-3">
                    <!-- Portfolio Item #4 -->
                    <div class="portfolio__item">
                      <!-- Image -->
                      <div class="portfolio__img">
                        <a href="#">
                          <img src="img/general_8.jpg" alt="Portfolio Image" />
                        </a>
                      </div>
                      <!-- Captions -->
                      <div class="portfolio__caption">
                        <h3 class="portfolio__title">Simple & Beautiful</h3>
                        <div class="portfolio__intro">
                          Morbi vulputate eget ipsum vel maximus. Morbi dictum blandit mattis.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- / .row -->
              </div>
              <!-- / .item -->
            </div>
            <!-- / .carousel-inner -->
          </div>
          <!-- / .carousel -->
        </div>
      </div>
    </div>
    <!-- / .container -->
  </div>
</template>

<style></style>

<script>
import axios from "axios";
import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import BDropdown from "bootstrap-vue/es/components/dropdown/dropdown";
Vue.component("b-dropdown", BDropdown);

Vue.use(BootstrapVue);

export default {
  data: function() {
    return {
      exercise: {},
      routines: [],
      exerciseId: "",
      routineId: "",
      amount: ""
    };
  },
  created: function() {
    axios.get("/api/exercises/" + this.$route.params.id).then(response => {
      this.exercise = response.data;
      this.exerciseId = this.exercise.id;
      console.log(this.exercise);
    });
    axios.get("/api/exercise_routines").then(response => {
      this.exerciseroutines = response.data;
    });
    axios.get("/api/routines").then(response => {
      this.routines = response.data;
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

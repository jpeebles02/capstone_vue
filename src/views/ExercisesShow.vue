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
                  <td>{{ muscle_group.name }}</td>
                </tr>
                <tr>
                  <th scope="row">Category</th>
                  <td>{{ category.name }}</td>
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
                  <td v-on:click="createRoutine()"><a href="/routines" class="btn btn-primary">Add to Routine</a></td>
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
                  <div v-for="exercise in exercise.related_exercises">
                    <div class="col-xs-6 col-sm-6 col-md-3">
                      <!-- Portfolio Item #1 -->
                      <div class="portfolio__item">
                        <!-- Image -->
                        <div class="portfolio__img">
                          <!-- <a href="#"> -->
                          <img v-bind:src="exercise.primary_image" v-bind:alt="exercise.name" />
                          <!-- </a> -->
                        </div>
                        <!-- Captions -->
                        <div class="portfolio__caption">
                          <h3 class="portfolio__title">{{ exercise.name }}</h3>
                          <div class="portfolio__intro">
                            <router-link v-bind:to="`/exercises/${exercise.id}`">More info</router-link>
                          </div>
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
                  <div v-for="exercise in exercise.related_exercises">
                    <div class="col-xs-6 col-sm-6 col-md-3">
                      <!-- Portfolio Item #1 -->
                      <div class="portfolio__item">
                        <!-- Image -->
                        <div class="portfolio__img">
                          <!-- <a href="#"> -->
                          <img v-bind:src="exercise.primary_image" v-bind:alt="exercise.name" />
                          <!-- </a> -->
                        </div>
                        <!-- Captions -->
                        <div class="portfolio__caption">
                          <h3 class="portfolio__title">{{ exercise.name }}</h3>
                          <div class="portfolio__intro">
                            <router-link v-bind:to="`/exercises/${exercise.id}`">More info</router-link>
                          </div>
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
      <div class="col-sm-8">
        <!-- New review -->
        <div class="comment comment_new">
          <div class="comment__author_img">
            <img class="img-responsive" alt="..." src="img/photo_4.jpg" />
          </div>
          <div class="comment__content">
            <ul class="rating_stars rating-stars__new">
              <li><i class="fa fa-star-o"></i></li>
              <li><i class="fa fa-star-o"></i></li>
              <li><i class="fa fa-star-o"></i></li>
              <li><i class="fa fa-star-o"></i></li>
              <li><i class="fa fa-star-o"></i></li>
            </ul>
            <form>
              <div class="form-group">
                <label for="comment-new__textarea" class="sr-only">Enter your review</label>
                <textarea
                  class="form-control"
                  rows="2"
                  id="comment-new__textarea"
                  placeholder="Enter your review"
                ></textarea>
              </div>
              <button type="submit" class="btn btn-primary">Send Review</button>
            </form>
          </div>
          <!-- / .comment__content -->
        </div>
        <!-- / .comment__new -->

        <!-- Reviews header -->
        <div class="comment__header">
          <span>Latest Reviews</span>
        </div>

        <!-- All comments -->
        <div class="comment">
          <div class="comment__author_img">
            <img src="img/photo_1.jpg" alt="..." class="img-responsive" />
          </div>
          <div class="comment__content">
            <div class="comment__author_name">John Doe</div>
            <time datetime="2015-01-30" class="comment__date">February 02, 2015</time>
            <ul class="rating_stars">
              <li><i class="fa fa-star"></i></li>
              <li><i class="fa fa-star"></i></li>
              <li><i class="fa fa-star"></i></li>
              <li><i class="fa fa-star"></i></li>
              <li><i class="fa fa-star"></i></li>
            </ul>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque gravida, est non tempus pharetra,
              erat velit convallis diam, quis blandit neque nulla a nulla. Quisque fringilla lacinia erat, at maximus
              erat bibendum quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div class="btn-group pull-right" role="group" aria-label="comment__actions">
              <a href="#" class="btn btn-default btn-xs"><i class="fa fa-times"></i> Remove</a>
              <a href="#" class="btn btn-default btn-xs"><i class="fa fa-edit"></i> Edit</a>
              <a href="#" class="btn btn-primary btn-xs"><i class="fa fa-reply"></i> Answer</a>
            </div>
          </div>
          <!-- / .comment__content -->
        </div>
        <!-- / .comment -->
        <div class="comment">
          <div class="comment__author_img">
            <img src="img/photo_2.jpg" alt="..." class="img-responsive" />
          </div>
          <div class="comment__content">
            <div class="comment__author_name">Judy Doe</div>
            <time datetime="2015-01-30" class="comment__date">February 02, 2015</time>
            <ul class="rating_stars">
              <li><i class="fa fa-star"></i></li>
              <li><i class="fa fa-star"></i></li>
              <li><i class="fa fa-star"></i></li>
              <li><i class="fa fa-star"></i></li>
              <li><i class="fa fa-star-o"></i></li>
            </ul>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque gravida, est non tempus pharetra,
              erat velit convallis diam, quis blandit neque nulla a nulla. Quisque fringilla lacinia erat, at maximus
              erat bibendum quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div class="btn-group pull-right" role="group" aria-label="comment__actions">
              <a href="#" class="btn btn-default btn-xs"><i class="fa fa-times"></i> Remove</a>
              <a href="#" class="btn btn-default btn-xs"><i class="fa fa-edit"></i> Edit</a>
              <a href="#" class="btn btn-primary btn-xs"><i class="fa fa-reply"></i> Answer</a>
            </div>
          </div>
          <!-- / .comment__content -->
        </div>
        <!-- / .comment -->
        <div class="comment">
          <div class="comment__author_img">
            <img src="img/photo_3.jpg" alt="..." class="img-responsive" />
          </div>
          <div class="comment__content">
            <div class="comment__author_name">Richard Roe</div>
            <time datetime="2015-01-30" class="comment__date">February 02, 2015</time>
            <ul class="rating_stars">
              <li><i class="fa fa-star"></i></li>
              <li><i class="fa fa-star"></i></li>
              <li><i class="fa fa-star"></i></li>
              <li><i class="fa fa-star"></i></li>
              <li><i class="fa fa-star-half-o"></i></li>
            </ul>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque gravida, est non tempus pharetra,
              erat velit convallis diam, quis blandit neque nulla a nulla. Quisque fringilla lacinia erat, at maximus
              erat bibendum quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div class="btn-group pull-right" role="group" aria-label="comment__actions">
              <a href="#" class="btn btn-default btn-xs"><i class="fa fa-times"></i> Remove</a>
              <a href="#" class="btn btn-default btn-xs"><i class="fa fa-edit"></i> Edit</a>
              <a href="#" class="btn btn-primary btn-xs"><i class="fa fa-reply"></i> Answer</a>
            </div>
          </div>
          <!-- / .comment__content -->
        </div>
        <!-- / .comment -->
      </div>
      <div class="col-sm-4">
        <!-- Recommended & Popular -->
        <h3 class="header header_plain">Top Products</h3>
        <ul class="nav nav-tabs nav-justified" role="tablist">
          <li role="presentation" class="active">
            <a href="#shop-tab_recommended" aria-controls="shop-tab_recommended" role="tab" data-toggle="tab"
              >Recommended</a
            >
          </li>
          <li role="presentation">
            <a href="#shop-tab_popular" aria-controls="shop-tab_popular" role="tab" data-toggle="tab">Popular</a>
          </li>
        </ul>
        <div class="tab-content">
          <!-- Recommended -->
          <div role="tabpanel" class="tab-pane active" id="shop-tab_recommended">
            <div class="list-group shop-tab__list">
              <a href="#" class="list-group-item">
                <img class="img-responsive list-group-item__img" src="img/product_1.jpg" alt="..." />
                <div class="list-group-item__content">
                  Lorem ipsum dolor sit amet
                  <ul class="rating_stars">
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                  </ul>
                </div>
                <div class="clearfix"></div>
              </a>
              <a href="#" class="list-group-item">
                <img class="img-responsive list-group-item__img" src="img/product_2.jpg" alt="..." />
                <div class="list-group-item__content">
                  Cras hendrerit tellus porttitor elementum
                  <ul class="rating_stars">
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star-o"></i></li>
                  </ul>
                </div>
                <div class="clearfix"></div>
              </a>
              <a href="#" class="list-group-item">
                <img class="img-responsive list-group-item__img" src="img/product_3.jpg" alt="..." />
                <div class="list-group-item__content">
                  Sed ultrices euismod hendrerit nunc augue
                  <ul class="rating_stars">
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star-half-o"></i></li>
                  </ul>
                </div>
                <div class="clearfix"></div>
              </a>
              <a href="#" class="list-group-item">
                <img class="img-responsive list-group-item__img" src="img/product_4.jpg" alt="..." />
                <div class="list-group-item__content">
                  Maecenas venenatis sodales sem
                  <ul class="rating_stars">
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                  </ul>
                </div>
                <div class="clearfix"></div>
              </a>
            </div>
          </div>
          <!-- Popular -->
          <div role="tabpanel" class="tab-pane" id="shop-tab_popular">
            <div class="list-group shop-tab__list">
              <a href="#" class="list-group-item">
                <img class="img-responsive list-group-item__img" src="img/product_2.jpg" alt="..." />
                <div class="list-group-item__content">
                  Cras hendrerit tellus porttitor elementum
                  <ul class="rating_stars">
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star-o"></i></li>
                  </ul>
                </div>
                <div class="clearfix"></div>
              </a>
              <a href="#" class="list-group-item">
                <img class="img-responsive list-group-item__img" src="img/product_4.jpg" alt="..." />
                <div class="list-group-item__content">
                  Maecenas venenatis sodales sem
                  <ul class="rating_stars">
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                  </ul>
                </div>
                <div class="clearfix"></div>
              </a>
              <a href="#" class="list-group-item">
                <img class="img-responsive list-group-item__img" src="img/product_1.jpg" alt="..." />
                <div class="list-group-item__content">
                  Lorem ipsum dolor sit amet
                  <ul class="rating_stars">
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                  </ul>
                </div>
                <div class="clearfix"></div>
              </a>
              <a href="#" class="list-group-item">
                <img class="img-responsive list-group-item__img" src="img/product_3.jpg" alt="..." />
                <div class="list-group-item__content">
                  Sed ultrices euismod hendrerit nunc augue
                  <ul class="rating_stars">
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star-half-o"></i></li>
                  </ul>
                </div>
                <div class="clearfix"></div>
              </a>
            </div>
          </div>
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
      exercise: [],
      routines: [],
      muscle_group: [],
      category: [],
      exerciseId: "",
      routineId: "",
      amount: ""
    };
  },
  created: function() {
    axios.get("/api/exercises/" + this.$route.params.id).then(response => {
      this.exercise = response.data;
      this.exerciseId = this.exercise.id;
      console.log(response);
    });
    axios.get("/api/exercise_routines").then(response => {
      this.exerciseroutines = response.data;
    });
    axios.get("/api/routines").then(response => {
      this.routines = response.data;
    });
    axios.get("/api/muscle_groups/" + this.$route.params.id).then(response => {
      this.muscle_group = response.data;
      // this.muscle_groupId = this.muscle_group.id;
      console.log(this.muscle_group);
    });
    axios.get("/api/categories/" + this.$route.params.id).then(response => {
      this.category = response.data;
      // this.categoryId = this.category.id;
      console.log(this.category);
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

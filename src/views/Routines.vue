<template>
  <div class="routines">
    <div class="page__header">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h3 class="page-header__title">Routines</h3>
            <ol class="breadcrumb page-header__breadcrumb">
              <li><a href="/">Back Home</a></li>
              <li><a href="/userhomepage">Your Home Page</a></li>
              <li><a href="/exercises">Exercises</a></li>
              <li class="active">Routines</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
    <!-- PAGE CONTENT
    ============================== -->
    <div class="container">

      <div class="row">
        <div class="col-xs-12">
          <h3 class="header">These are all of your routines</h3>
          <br /><br />
        </div>
      </div>
      <!-- / .row -->
      <div class="row">
        <div v-for="routine in routines" v-bind:key="routine.id">
          <div class="col-xs-12 col-sm-6 col-md-3">
            <!-- Pricing item #1 -->
            <div class="pricing__item">
              <!-- Pricing header -->
              <div class="pricing__header">
                <div class="pricing__title">{{ routine.name }}</div>
                <div class="pricing__price">{{ routine.day_of_week }}</div>
              </div>
              <!-- Pricing body -->
              <div class="pricing__body">
                <ul class="pricing__list">
                  <div v-for="exercise in routine.exercises" v-bind:key="exercise.id">
                    <p>{{ exercise.name }}</p>
                  </div>
                </ul>
                <div class="pricing__btn">
                  <router-link v-bind:to="`/routines/${routine.id}`">More info</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
  </div>
      </div>

      <!-- / .row -->
    </div>
    <!-- / .container -->
  </div>
</template>

<script>
import axios from "axios";
import draggable from 'vuedraggable';

export default {
  components: {
    draggable
  },
  data: function() {
    return {
      routines: [],
      enabled: true
    };
  },
  created: function() {
    axios
      .get("/api/routines")
      .then(response => {
        this.routines = response.data;
      });
      axios.get("/api/exercises").then(response => {
      this.exerciseroutines = response.data;
    });
  },
};
</script>

<!-- <template>
  <div class="row">
    <div class="col-2">
      <div class="form-group">
        <div
          class="btn-group-vertical buttons"
          role="group"
          aria-label="Basic example"
        >
          <button class="btn btn-secondary" @click="add">Add</button>
          <button class="btn btn-secondary" @click="replace">Replace</button>
        </div>

        <div class="form-check">
          <input
            id="disabled"
            type="checkbox"
            v-model="enabled"
            class="form-check-input"
          />
          <label class="form-check-label" for="disabled">DnD enabled</label>
        </div>
      </div>
    </div>

    <div class="col-6">
      <h3>Draggable {{ draggingInfo }}</h3>

      <draggable
        :list="list"
        :disabled="!enabled"
        class="list-group"
        ghost-class="ghost"
        @start="dragging = true"
        @end="dragging = false"
      >
        <div
          class="list-group-item"
          v-for="element in list"
          :key="element.name"
        >
          {{ element.name }}
        </div>
      </draggable>
    </div>

    <rawDisplayer class="col-3" :value="list" title="List" />
  </div>
</template>

<script>
import draggable from "@/vuedraggable";
let id = 1;
export default {
  name: "simple",
  display: "Simple",
  order: 0,
  components: {
    draggable
  },
  data() {
    return {
      enabled: true,
      list: [
        { name: "John", id: 0 },
        { name: "Joao", id: 1 },
        { name: "Jean", id: 2 }
      ],
      dragging: false
    };
  },
  computed: {
    draggingInfo() {
      return this.dragging ? "under drag" : "";
    }
  },
  methods: {
    add: function() {
      this.list.push({ name: "Juan " + id, id: id++ });
    },
    replace: function() {
      this.list = [{ name: "Edgard", id: id++ }];
    }
  }
};
</script>
<style scoped>
.buttons {
  margin-top: 35px;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
</style> -->
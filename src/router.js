import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Signup from "./views/Signup.vue";
import Login from "./views/Login.vue";
import Logout from "./views/Logout.vue";
import UserHomePage from "./views/UserHomePage.vue";
import ExercisesIndex from "./views/ExercisesIndex.vue";
import ExercisesShow from "./views/ExercisesShow.vue";
import RoutinesNew from "./views/RoutinesNew.vue";
import RoutinesShow from "./views/RoutinesShow.vue";
import ExerciseRoutinesNew from "./views/ExerciseRoutinesNew.vue";
import Routines from "./views/Routines.vue";
import MapPage from "./views/MapPage.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    { path: "/", name: "home", component: Home },
    { path: "/signup", name: "signup", component: Signup },
    { path: "/login", name: "login", component: Login },
    { path: "/logout", name: "logout", component: Logout },
    { path: "/userhomepage", name: "user-home-page", component: UserHomePage },
    { path: "/exercises", name: "exercises-index", component: ExercisesIndex },
    { path: "/exercises/:id", name: "exercises-show", component: ExercisesShow },
    { path: "/exercise_routines/new", name: "exercise-routines-new", component: ExerciseRoutinesNew },
    { path: "/routines/new", name: "routines-new", component: RoutinesNew },
    { path: "/routines/:id", name: "routines-show", component: RoutinesShow },
    { path: "/routines", name: "routines", component: Routines },
    { path: "/mappage", name: "mappage", component: MapPage }
  ]
});

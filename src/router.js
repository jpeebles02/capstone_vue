import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Signup from "./views/Signup.vue";
import Login from "./views/Login.vue";
import Logout from "./views/Logout.vue";
import UserHomePage from "./views/UserHomePage.vue";
import ExercisesIndex from "./views/ExercisesIndex.vue";
import ExercisesShow from "./views/ExercisesShow.vue";

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
    { path: "/exercise/:id", name: "exercises-show", component: ExercisesShow }
  ]
});

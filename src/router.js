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
import AppointmentsNew from "./views/AppointmentsNew.vue";
import RoutinesShow from "./views/RoutinesShow.vue";
import UserWeightsNew from "./views/UserWeightsNew.vue";
import Routines from "./views/Routines.vue";
import Products from "./views/Products.vue";
import ProductsShow from "./views/ProductsShow.vue";
import Appointments from "./views/Appointments.vue";
import Meals from "./views/Meals.vue";
import Schedules from "./views/Schedule.vue";
import Carts from "./views/Carts.vue";
import Notification from "./views/Notification.vue";


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
        { path: "/userweights/new", name: "user-weights-new", component: UserWeightsNew },
        { path: "/routines/new", name: "routines-new", component: RoutinesNew },
        { path: "/appointments/new", name: "appointments-new", component: AppointmentsNew },
        { path: "/routines/:id", name: "routines-show", component: RoutinesShow },
        { path: "/routines", name: "routines", component: Routines },
        { path: "/products", name: "products", component: Products },
        { path: "/products/1", name: "products-show", component: ProductsShow },
        { path: "/appointments", name: "appointments", component: Appointments },
        { path: "/meals", name: "meals", component: Meals },
        { path: "/schedules", name: "schedule", component: Schedules },
        { path: "/carts", name: "cart", component: Carts },
        { path: "/notification", name: "notification", component: Notification }
    ]
});

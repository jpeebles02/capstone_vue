import Vue from "vue";
import './plugins/vuetify'
import Vuetify from 'vuetify'
import App from "./App.vue";
import router from "./router";
import axios from "axios";
Vue.use(Vuetify);
import 'vuetify/dist/vuetify.min.css';

axios.defaults.baseURL = process.env.NODE_ENV === "development" ? "http://localhost:3000" : "/";

var jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = "Bearer " + jwt;
}

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

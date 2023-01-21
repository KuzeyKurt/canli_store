
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import store from "./vuex/store.js"
import router from './router/router'
import "./assets/styles/styles.scss";

Vue.config.productionTip = false
Vue.use(Vuex)


new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')

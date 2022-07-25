import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

let store = new Vuex.Store (  {
    state: {},
    mutations: {},
    actions: {},
    getters: {}
});

export default store;

// import { createApp } from 'vue'
// import { createStore } from 'vuex'
// import canMainWrapper from "../components/can-main-wrapper.vue";

// // Create a new store instance.
// const store = createStore({
//   state () { },
//   mutations: {},
//   actions: {},
//   getters: {}
//   })

// const app = createApp({ canMainWrapper })

// // Install the store instance as a plugin
// app.use(store)
// export default store;

// import Vue from 'vue'
// import Vuex from 'vuex'
// Vue.use(Vuex)

// export default new Vuex.Store({
//     state:{
//      // Current state of the application lies here.
//     },
//     getters:{
//      // Compute derived state based on the current state. More like computed property.
//     },
//     mutations:{
//      // Mutate the current state
//     },
//     actions:{
//      // Get data from server and send that to mutations to mutate the current state
//     }
//    })
//    // You can assign a store to variable and export 
//     export const store = new Vuex.Store({})
//    // Import the store
//    import { storem } from '../main'
//    storem
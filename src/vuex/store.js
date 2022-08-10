import axios from 'axios';
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex); // вью использует вьюэкс

let store = new Vuex.Store (  { // создание хранилища - объект вьюэкс стор
    state: { // state - хранение данных
        products: []
    },
    mutations: { // мутации - смена состояний, они синхронны
        SET_PRODUCTS_TO_STATE: (state, products) => {
            state.products = products;
        }
    },
    actions: {  // действия - асинхронныы
        GET_PRODUCTS_FROM_API({commit}){
            return axios ('http://localhost:3000/products', {
                method: "GET"
            })
            .then((products) => {
                commit('SET_PRODUCTS_TO_STATE', products.data);
                return products;
            })
            .catch((error) => {
                console.log(error)
                return error;
            })
        }
    },
    getters: { // короткий путь до получения данных в state
        PRODUCTS(state){
            return state.products;
        }
    }
});

export default store; // для экспорта

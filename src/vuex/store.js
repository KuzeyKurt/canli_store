import axios from 'axios';
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex); // вью использует вьюэкс
Vue.config.devtools = true

let store = new Vuex.Store (  { // создание хранилища - объект вьюэкс стор
    state:() => ( { // state - хранение данных
        products: [],
        cart: []
    }),
    mutations: { // мутации - смена состояний, они синхронны
        SET_PRODUCTS_TO_STATE: (state, products) => {
            state.products = products;
        },
        SET_CART:(state, product) =>
        {
            if (state.cart.length)
            {
                let isProductExists = false;
                state.cart.map(function (item) 
                {
                    if (item.name === product.name)
                    {
                        isProductExists = true;
                        item.quantity++;
                    }
                })
                if (!isProductExists)
                {
                    state.cart.push(product)
                }
            } else {
                state.cart.push(product)
            }
        },
        REMOVE_FROM_CART:(state, index) =>
        {
            state.cart.splice(index, 1)
        }
    },
    actions: {  // действия - асинхронныы
        GET_PRODUCTS_FROM_API({commit}){
            return axios ('http://localhost:3000/products', {
                method: "GET"
            })
            .then((products) => {       
                try {

                    commit('SET_PRODUCTS_TO_STATE', products.data);
                return products;
                  
                  } catch (error) {
                  
                    console.log(error);
                  
                  }         
                commit('SET_PRODUCTS_TO_STATE', products.data);
                return products;
            })
            .catch((error) => {
                console.log(error)
                return error;
            })
        },
        ADD_TO_CART({commit}, product)
        {
            commit('SET_CART', product);
        },
        DELETE_FROM_CART({commit}, index)
        {
            commit('REMOVE_FROM_CART', index);
        }
    },
    getters: { // короткий путь до получения данных в state
        PRODUCTS(state){
            return state.products;
        },
        CART(state){
            console.log("SSSS");
            return state.cart;

        }
    }
});

export default store; // для экспорта

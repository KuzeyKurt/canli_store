<template>
    <div class = "can-catalog">
        <h1>Catalog</h1>
    

    <div class = "can-catalog__list">
        <can-catalog-item-vue 
            v-for="product in PRODUCTS"
            :key="product.name"
            v-bind:product_data="product"
            @addToCart="addToCart"
        />
    </div> </div>
</template>

<script>
import canCatalogItemVue from './can-catalog-item.vue'
import { mapActions, mapGetters } from "vuex";
// import { response } from 'express';
//import { response } from 'express';
// import { response } from 'express';

 // import json from '../../db.json'

export default {
    name: "can-catalog",
    components: {
        canCatalogItemVue
    },   
    props: {},
    data() {
        return { 
            

        }
    },
    computed: {
        ...mapGetters ([
            'PRODUCTS'
        ]),
    },
    methods: 
    {
        ...mapActions([
            'GET_PRODUCTS_FROM_API',
            'ADD_TO_CART'
            ]),
        addToCart(data) { // функция для получения имени товара с дочернего компонента и отображения в консоли
            this.ADD_TO_CART(data) // выводит аргумент в консоль
        }
    },
    mounted() {
        this.GET_PRODUCTS_FROM_API()
        .then((response) => {
            if (response.data)
            {
                console.log('Data arrived')
            }
        })
        
        
    }
    
}
 
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables.scss'; 

.can-catalog
{

    &__list
    {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
    }    
}

</style>
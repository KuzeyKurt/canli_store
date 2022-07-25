<template>
    <!-- <div class = "can-catalog">
        <h1>Catalog</h1>
    </div> -->

    <div class = "can-catalog__list">
        <can-catalog-item-vue 
            v-for="product in products"
            :key="product.name"
            v-bind:product_data="product"
            @sendName="showChildNameConsole"
        />
    </div>
</template>

<script>
import canCatalogItemVue from './can-catalog-item.vue'

export default {
    name: "can-catalog",
    components: {
        canCatalogItemVue
    },   
    props: {},
    data() {
        return { 
            "products": [
        {
            "image": "joker.jpg",
            "name": "Picture",
            "price": "500",
            "available": true
        },
        {
            "image": "shvarc.jpg",
            "name": "Dress",
            "price": "2500",
            "available": true
        },
        {
            "image": "cage.jpg",
            "name": "Сanli qurabie",
            "price": "200",
            "available": false
        },
        {
            "image": "cat1.jpg",
            "name": "shoper",
            "price": "1500",
            "available": true
        },
        {
            "image": "chan.jpg",
            "name": "T-shirt",
            "price": "2000",
            "available": true
        },
        {
            "image": "stat.jpg",
            "name": "Blue T-shirt",
            "price": "2000",
            "available": true
        }
    ]

        }
    },
    computed: {},
    methods: 
    {
        showChildNameConsole(data) { // функция для получения имени товара с дочернего компонента и отображения в консоли
            console.log(data) // выводит аргумент в консоль
        }
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
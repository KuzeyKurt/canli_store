<template>
    <div class = "can-catalog">
        <h1>Catalog</h1>
    </div>

    <div class = "can-catalog__list">
        <can-catalog-item-vue 
            v-for="product in products"
            :key="product.name"
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
            "image": "1.jpg",
            "name": "picture",
            "price": "500",
            "available": true
        },
        {
            "image": "2.jpg",
            "name": "dress",
            "price": "2500",
            "available": true
        },
        {
            "image": "3.jpg",
            "name": "Сanli qurabie",
            "price": "200",
            "available": false
        },
        {
            "image": "4.jpg",
            "name": "shoper",
            "price": "1500",
            "available": true
        },
        {
            "image": "5.jpg",
            "name": "T-shirt",
            "price": "2000",
            "available": true
        }
    ]

        }
    },
    computed: {}
    
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
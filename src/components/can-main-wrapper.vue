<template>
    <div class="can-main=wrapper">
        <p>{{title}}</p>
        <can-catalog-vue />
        <can-cart-vue 
            v-if = "CART.length"
            :cart_data="CART"
        
        />
    </div>
</template>

<script>
import canCatalogVue from './can-catalog.vue';
import canCartVue from './can-cart.vue';
import { mapGetters } from 'vuex';

export default {
    name: 'can-main-wrapper',
    components:{
    canCartVue,
    canCatalogVue
    },
    props: {},
    data(){
        return {
            title: 'Main Wrapper'
        }
    },
    computed: {
        ...mapGetters([
        'CART'])

    },
    methods: {},
    watch: {},
    mounted() {
        console.log('Hello, I am alive' );
    }
}
</script>

<style scoped>
 .can-main-wrapper
 {
    
    max-width: 900px;
    margin: 0 auto;
 }
</style>
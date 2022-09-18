<template>
  <div class = "can-cart">
    <h1>Cart</h1>
    <can-cart-item-vue />
  </div>
</template>

<script>
import canCartItemVue from './can-cart-item.vue';

export default {
    name: "can-cart",
    components: {
        canCartItemVue
    }

}
</script>

<style>
@import '../assets/styles/variables.scss'; 

</style>
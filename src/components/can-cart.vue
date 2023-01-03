<template>
  <div class = "can-cart">
    <h1>Cart</h1>
    <can-cart-item-vue
    v-for="(item, index) in cart_data"
    :key="item.name"
    :cart_item_data="item"
    @deleteFromCart="deleteFromCart(index)"
    />
    
  </div>
</template>

<script>
import canCartItemVue from './can-cart-item.vue';
import { mapActions } from 'vuex';

export default {
    name: "can-cart",
    components: {
        canCartItemVue
    },
    props:
    {
      cart_data:
      {
        type: Array,
        default()
        {
          return[]
        }
      }
    },
    computed:
    {

    },
    methods:
    {
      ...mapActions([
        'DELETE_FROM_CART'
    ]),
      deleteFromCart(index)
      {
        this.DELETE_FROM_CART(index)
      }
    }

}
</script>

<style scoped>
@import '../assets/styles/variables.scss'; 

</style>
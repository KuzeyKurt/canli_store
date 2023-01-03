<template>
    <div class="can-cart-item">
        <img class="can-cart-item__image" :src=" require ('../assets/img/' + cart_item_data.image)" alt="img">
        <div class="can-cart-item__info">
            <p>{{cart_item_data.name}}</p>
            <p>{{ cart_item_data.price}}</p>
        </div>
        <div class="can-cart-item__quantity">
            <p>Количество</p>
            {{ cart_item_data.quantity }}
        </div>
            <button @click="deleteFromCart">Delete</button>
        
    </div>    
</template>

<script>
export default{
    name: "can-cart-item",
    props:
    {
        cart_item_data:
        {
            type: Object,
            default() 
            {
                return{}
            }
        }
    },
    data ()
    {
        return {}
    },
    computed: {},
    methods:
    {
        deleteFromCart()
        {
            this.$emit('deleteFromCart')
        }
    },
    mounted()
    {
        this.$set(this.cart_item_data, "quantity", 1)
    }
}

</script>

<style lang="scss">
@import '../assets/styles/variables.scss'; 
.can-cart-item
{
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 0 8px 0 #e0e0e0;
    padding: $padding*2;
    margin-top: $margin*2;
    &__image
    {
        border-radius: 15px;
        max-width: 100px;
    }
}





</style>
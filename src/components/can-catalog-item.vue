<template>
    <div class = "can-catalog-item">
        <img class = "can-catalog-item__image" :src=" require ('../assets/img/' + product_data.image)" alt="img"> 

        <p class = "can-catalog-item__name">{{product_data.name}}</p>
        <p class = "can-catalog-item__price">{{product_data.price}} руб.</p>
        

        <button class = "can-catalog-item__add_to_card_btn btn" 
        @click="addToCart">Add to cart</button>  <!-- вызываем функцию по нажатию кнопки -->
    </div>
</template>

<script>


export default {
    name: "can-catalog",
    components: {

    },
    props: { // то что получает компонент сверху, то есть от родительского компонента
        product_data: 
        {
            type: Object,
            default() 
            {
                return {}
            }
        }
    },
    data() {
        return {}
    },
    computed: {},
    methods: 
    {
        addToCart()
        {
            this.$emit('addToCart', this.product_data)
        }

        /* sendDataToParent() // функция для передачи наименования родительскому элементу с дочернего
        {
            this.$emit( 'sendName', this.product_data.name)
        } */ 
    },
    mounted()
    {
        this.$set(this.product_data, "quantity", 1)
    }
    
}
 
</script>

<style scoped lang = "scss">
@import '../assets/styles/variables.scss'; 

.can-catalog-item
{
    box-shadow: 0 0 8px 0 #e0e0e0;
    width: 158px;
    height: 280px;
    margin: 10px;
    border-radius: 5px;
    background-color: aliceblue;


    // margin: 20px 0 0 0;
    // flex-basis: 25%;
    // box-shadow: 0 0  8px 0 #9c9c9c;
    // padding: $padding * 2;
    // margin-bottom: $margin*2;
}

.can-catalog-item__image
{
    margin: 15px;
    width: 115px;
    border-radius: 15px;
}


button
{
    background-color: aquamarine;
    box-shadow: 0 0 8px 0 #e0e0e0;
    border-color: #e0e0e0;
    border-radius: 10px;
    margin-top: $margin;
}

// @media screen (max-width: 400px) {
    
// }

</style>

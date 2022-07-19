<template>
    <div class = "can-catalog-item">
        <p>Item 1</p>
        <p>Price: 1500</p>
        <button>Add to cart</button>
    </div>
</template>

<script>


export default {
    name: "can-catalog",
    components: {

    },
    props: {},
    data() {
        return {}
    },
    computed: {}
    
}
 
</script>

<style scoped lang = "scss">
@import '../assets/styles/variables.scss'; 

.can-catalog-item
{
    flex-basis: 25%;
    box-shadow: 0 0  8px 0 #9c9c9c;
    padding: $padding * 2;
    margin-bottom: $margin*2;
}
button
{
    margin-top: $margin;
}

</style>

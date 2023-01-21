<template>
    <div class="can-main-wrapper">
        <keep-alive>
            <router-view>

            </router-view>
        </keep-alive>
        
    </div>
</template>

<script>

export default {
    
    props: {},
    data(){
        return {
            title: 'Main Wrapper'
        }
    },
    computed: {},
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
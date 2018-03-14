<template>
    <div class="about">
        <nav-view></nav-view>
        <div class="cat">
            <div class="cat_left"></div>
            <div class="cat_right"></div>
        </div>
    </div>
</template>

<script>
    import Nav from '../components/Tabs.vue'
    export default {
        components:{
            "nav-view":Nav
        }
    }
</script>

<style scoped>

</style>
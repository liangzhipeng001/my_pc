<template>
    <div class="product">
        <nav-view></nav-view>
        <div class="product_bg">
            <ul class="product_box">
                <li class="item"></li>
                <li class="item"></li>
                <li class="item"></li>
                <li class="item"></li>
                <li class="item"></li>
                <li class="item"></li>
            </ul>
            <div class="bott">
                <div class="previous con">
                    <div class="l_sj"></div>
                </div>
                <div class="next con">
                    <div class="r_sj"></div>                    
                </div>                
            </div>
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
.product{
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 101;
}
.product_bg{
   width: 1200px;
   margin: 0 auto;
   margin-top: 200px;
}
.product .product_bg .product_box{
    display: flex;
    display: -webkit-flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
}
.product .product_bg .product_box .item{
    width: 340px;
    height: 280px;
    background: #ddd;
    border-radius: 10px;
    margin-bottom: 20px;
}
.product .product_bg .bott{
    width: 100%;
    display: flex;
    justify-content: center;
}
.product .product_bg .bott .con{
    width: 110px;
    height: 50px;
    border-radius: 10px;
    background: #fff;
}
.product .product_bg .bott .con:nth-child(1){
    margin-right: 30px;
}
.product .product_bg .bott .con .l_sj{
    width: 0; 
    height: 0; 
    border-top: 20px solid transparent; 
    border-right: 30px solid #999999; 
    border-bottom:20px solid transparent;
    margin: 0 auto;
    margin-top: 4px;
}
.product .product_bg .bott .con .r_sj{
    width: 0; 
    height: 0; 
    border-top: 20px solid transparent; 
    border-left: 30px solid #999999; 
    border-bottom:20px solid transparent;
    margin: 0 auto;
    margin-top: 4px;
}
</style>
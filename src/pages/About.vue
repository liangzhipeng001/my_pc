<template>
    <div class="about">
        <nav-view></nav-view>
        <div class="cat_wrap">
            <div class="cat">
                <div class="cat_left cat_box"></div>
                <div class="cat_right cat_box"></div>
            </div>
        </div>
        <div class="about_bottom">
            <div class="val">兄Die，你好啊！兄Die，你好啊！兄Die，你好啊！兄Die，你好啊！兄Die，你好啊！兄Die，你好啊！兄Die，你好啊！兄Die，你好啊！兄Die，你好啊！兄Die，你好啊！兄Die，你好啊！兄Die，你好啊！兄Die，你好啊！兄Die，你好啊！兄Die，你好啊！兄Die，你好啊！兄Die，你好啊！兄Die，你好啊！兄Die，你好啊！兄Die，你好啊！兄Die，你好啊！兄Die，你好啊！兄Die，你好啊！兄Die，你好啊！兄Die，你好啊！兄Die，你好啊！兄Die，你好啊！兄Die，你好啊！兄Die，你好啊！兄Die，你好啊！兄Die，你好啊！兄Die，你好啊！兄Die，你好啊！兄Die，你好啊！兄Die，你好啊！兄Die，你好啊！兄Die，你好啊！兄Die，你好啊！兄Die，你好啊！兄Die，你好啊！兄Die，你好啊！兄Die，你好啊！兄Die，你好啊！兄Die，你好啊！兄Die，你好啊！兄Die，你好啊！</div>
            <div class="icon">
                <img src="../../static/images/qq.png" alt="">
                <img src="../../static/images/wx.png" alt="">
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
.about{
    position: absolute;
    width: 100%;
    top: 0;
    bottom: 0;
    z-index: 101;
}
.cat_wrap{
    width: 100%;
    position: absolute;
    z-index: 102;
    top: 26%;
    display: flex;
    justify-content: center;
}
.cat_wrap .cat{
    width: 60%;
    display: flex;
    justify-content: space-between
}
.cat_wrap .cat_box{
    width: 420px;
    height: 300px;
    background: #333333;
    border-radius: 20px;
    box-shadow: 1px 4px 10px #000
}
.about_bottom{
    position: absolute;
    width: 100%;
    height: 50%;
    background: #fff;
    left: 0;
    bottom: 0;
    padding-top: 6%;
    box-sizing: border-box;
}
.about_bottom .val{
    width: 60%;
    font-size: 18px;
    text-indent: 2em;   
    margin: 0 auto; 
}
.about_bottom .icon{
    width: 16%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}
</style>
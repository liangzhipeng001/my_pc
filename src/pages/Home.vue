<template>
    <div class="wrap">
        <div class="left_js animated fadeInLeft" swiper-animate-effect="fadeInLeft"></div>
        <div class="content">
            <p class="animated lightSpeedIn hel one"  swiper-animate-effect="lightSpeedIn" >HELLO!!</p>
            <div class="title animated lightSpeedIn two"  swiper-animate-effect="lightSpeedIn" >Welcome to my <p><span class="clo">P</span>ersonal <span class="clo">WEB</span>site</p></div>
            <nav class="list animated lightSpeedIn three" swiper-animate-effect="lightSpeedIn" >
                <router-link class="item" v-for="(item , index) in listTab" :key="index"
                :to="item.path">{{item.item}}</router-link>
            </nav>
            <div class="log animated fadeInDownBig four"  swiper-animate-effect="fadeInDownBig"  @click="ontabsshow(item.item)">
                <img src="../../static/images/log.png" width="134" height="110" alt="logo">
            </div>
        </div>
        <div class="right_sj fadeInRight animated" swiper-animate-effect="fadeInRight"></div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      listTab: [
        { item: "HOME", path: "/home" },
        { item: "ABOUT ME", path: "/about" },
        { item: "PRODUCT", path: "/product" },
        { item: "CANTACT ME", path: "/contact" }
      ]
    };
  }
};
</script>

<style scoped>
.wrap {
  position: absolute;
  bottom: 0;
  top: 0;
  width: 100%;
  overflow: hidden;
}

.wrap .left_js {
  position: absolute;
  left: 0;
  top: 0;
  width: 0;
  height: 0;
  border-top: 24vw solid #2f6bb5;
  border-right: 20vw solid transparent;
  z-index: 101;
  opacity: 0.7;
}
.wrap .right_sj {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 0;
  height: 0;
  border-bottom: 20vw solid #e0e800;
  border-left: 24vw solid transparent;
  z-index: 101;
  opacity: 0.7;
}
.wrap .content {
  width: 100vw;
  position: absolute;
  z-index: 102;
  left: 0;
  bottom: 0;
  right: 0;
  top: 0;
  margin: auto;
  margin-top: 300px;
  overflow: hidden;
}
.wrap .content .hel {
  font-size: 82px;
  color: #fff;
  text-align: center;
}
.wrap .content .title {
  font-size: 48px;
  color: #fff;
  text-align: center;
}
.wrap .content .title p {
  display: inline;
  font-size: 48px;
  border-bottom: 4px solid #0092ff;
}
.clo {
  font-size: 48px;
  color: #0092ff;
}
.wrap .content .list {
  padding: 0 400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: #fff;
  font-size: 18px;
  margin-top: 50px;
}
.wrap .content .list .item {
  padding: 12px 30px;
  border: 2px solid transparent;
}
.wrap .content .list .item:nth-of-type(1) {
  border: 2px solid #f0ff00;
  color: #f0ff00;
  border-radius: 2vw;
}
.wrap .content .list a:hover {
  border: 2px solid #f0ff00;
  color: #f0ff00;
  border-radius: 2vw;
}
.log {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
}
.one {
  animation-duration: 1s;
  -webkit-animation-duration: 1s;
  animation-delay: 0.5s;
  -webkit-animation-delay: 0.5s;
}
.two {
  animation-duration: 1s;
  -webkit-animation-duration: 1s;
  animation-delay: 1s;
  -webkit-animation-delay: 1s;
}
.three {
  animation-duration: 1s;
  -webkit-animation-duration: 1s;
  animation-delay: 1.5s;
  -webkit-animation-delay: 1.5s;
}
.four {
  animation-duration: 1s;
  -webkit-animation-duration: 1s;
  animation-delay: 2s;
  -webkit-animation-delay: 2s;
}

</style>
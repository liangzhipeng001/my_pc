<template>
    <div class="bg-wrap">
      <div class="swiper-container banner">
      <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in lbt" :key="index">
              <div class="bg" :style="{backgroundImage:item.img }" ></div>
          </div>
      </div>
    </div>
    <div class="bg_opact"></div>    
    
    </div>
</template>
<script>
export default {
  data() {
    return {
      lbt: [
        { img: 'url(' + require('../../static/images/bg.png') + ')'},
        { img: 'url(' + require('../../static/images/bg1.png') + ')' },
        { img: 'url(' + require('../../static/images/bg2.png') + ')'},
        { img: 'url(' + require('../../static/images/bg3.png') + ')' }
      ]
    };
  },
  mounted() {
    var mySwiper = new Swiper(".banner", {
      pagination: ".swiper-pagination",
      speed:1600,
      autoplay: {
        delay:5000,
      },
      effect : 'fade',
    });
  }
};
</script>

<style scoped>
.swiper-container {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  width: 100%;
  height: 100%;
}
.bg {
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
}
.bg_opact {
  position: absolute;
  width: 100%;
  bottom: 0;
  top: 0;
  background: rgba(000, 000, 000, 0.4);
  z-index: 100;
}
.bg-wrap {
  position: absolute;
  bottom: 0;
  top: 0;
  width: 100%;
  overflow: hidden;
}
</style>
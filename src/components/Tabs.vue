<template>
    <div class="nav_wrap">
      <div class="nav">
        <img src="../../static/images/log.png" width="134" height="110" alt="logo">
        <nav class="tabs" >       
            <router-link v-for="(item , index) in listTab" :key="index" :to="item.path" >{{item.item}}</router-link>            
        </nav>
      </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                listTab: 
                [
                    { item: "HOME", path: "/home" },
                    { item: "ABOUT ME", path: "/about" },
                    { item: "PRODUCT", path: "/product" },
                    { item: "CANTACT ME", path: "/contact" }
                ]
            }
        }
    }
</script>

<style scoped>
.nav_wrap {
  position: absolute;
  width: 100%;
  z-index: 102;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
}
.nav_wrap .nav {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.nav_wrap .nav .tabs {
  flex: 1;
  height: 110px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.nav_wrap .nav .tabs a {
  display: inline-block;
  padding: 12px 30px;
  border: 2px solid transparent;
}
.nav_wrap .nav .tabs a.router-link-active {
  border: 2px solid #f0ff00;
  color: #f0ff00;
  border-radius: 2vw;
}
.nav_wrap .nav .tabs a:hover {
  border: 2px solid #f0ff00;
  color: #f0ff00;
  border-radius: 2vw;
}
</style>
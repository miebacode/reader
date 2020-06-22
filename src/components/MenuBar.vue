<template>
  <transition name="slide-up">
    <div class="menu-wrapper" v-show="isShow">
      <div class="menu-icon">
        <img src="../assets/styles/fonts/menu.png" class="icon">
      </div>
      <div class="menu-icon">
        <img src="../assets/styles/fonts/progress.png" class="icon">
      </div>
      <div class="menu-icon">
        <img src="../assets/styles/fonts/bright.png" class="icon">
      </div>
      <div class="menu-icon">
        <img src="../assets/styles/fonts/font.png" class="icon">
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    props:{
      isShow:{
        type: Boolean,
        default : false
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "../assets/styles/global.scss";
  .icon{
    width: 30px;
    height: 30px;
    color: #333;
  }
  .menu-wrapper{
    position: absolute;
    /*bottom: 0;*/
    /*left: 0;*/
    z-index: 101;
    height: px2rem(50);
    width: 100%;
    display: flex;
    background: white;
    box-shadow: 0 -8px 8px rgba(0,0,0,.15);
    justify-content: flex-end;
  }
  .slide-up-enter,.slide-up-leave-to{
    transform: translate3d(0,100%,0);
  }
  .slide-up-enter-to,.slide-up-leave{
    transform: translate3d(0,0,0);
  }
  .slide-up-enter-active,.slide-up-leave-active{
    transition: all .3s linear;
  }
  .menu-icon{
    flex:1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>

<template>
  <transition name="slide-down">
    <div class="title-wrapper" v-show="isShow">
      <div class="leftSide">
        <img src="../assets/styles/fonts/back.png" class="icon">
      </div>
      <div class="rightSide">
        <div class="icon-wrapper">
          <img src="../assets/styles/fonts/cart.png" class="icon">
        </div>
        <div class="icon-wrapper">
          <img src="../assets/styles/fonts/person.png" class="icon">
        </div>
        <div class="icon-wrapper">
          <img src="../assets/styles/fonts/more.png" class="icon">
        </div>
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
  .title-wrapper{
    position: absolute;
    top: 0;
    left: 0;
    z-index: 101;
    height: px2rem(40);
    width: 100%;
    display: flex;
    background: white;
    box-shadow: 0 8px 8px rgba(0,0,0,.15);
  }
  .slide-down-enter,.slide-down-leave-to{
    transform: translate3d(0,-100%,0);
  }
  .slide-down-enter-to,.slide-down-leave{
    transform: translate3d(0,0,0);
  }
  .slide-down-enter-active,.slide-down-leave-active{
    transition: all .3s linear;
  }
  .leftSide{
    flex: 0 0  px2rem(50);
  }
  .rightSide{
    flex: 1;
    display: flex;
    justify-content: flex-end;
  }
  .icon-wrapper{
    flex: 0 0 60px;
  }
</style>

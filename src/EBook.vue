<template>
  <div class="ebook">
    <title-bar :isShow="isShow"></title-bar>
    <div class="read-wrapper">
      <div id="read"></div>
      <div class="mask">
        <div class="left" @click="prePage"></div>
        <div class="center" @click="toggle"></div>
        <div class="right" @click="nextPage"></div>
      </div>
    </div>
    <menu-bar :isShow="isShow"></menu-bar>
  </div>
</template>

<script>
  import Epub from 'epubjs'
  import TitleBar from './components/TitleBar'
  import MenuBar from './components/MenuBar'
  const DOWNLOAD_URL = '/static/haodoo.epub'
  global.epub = Epub
  export default {
    components: {
      TitleBar,
      MenuBar
    },
    data () {
      return {
        isShow: false
      }
    },
    methods:{
      prePage(){
        //使用rendition.prev方法實現翻看上一頁
        if (this.rendition){
          this.rendition.prev()
        }
      },
      nextPage(){
        //使用rendition.next方法實現翻看下一頁
        if (this.rendition){
          this.rendition.next()
        }
      },
      //控制菜單欄和標題欄的顯示
      toggle(){
         this.isShow = !this.isShow
      },
      //電子書解釋和渲染
      showEpub(){
        //生成電子書
        this.book = new Epub(DOWNLOAD_URL)
        console.log(this.book)
        //生成rendition,通過book的RenderTo方法生成
        this.rendition=this.book.renderTo('read',{
          width: window.innerWidth,
          height: window.innerHeight
        })
        //通過rendition.display渲染電子書
        this.rendition.display()
      }
    },
  mounted () {
      this.showEpub()
    }
}
</script>

<style>
  @import "./assets/styles/global.scss";
  .ebook{
    position: relative;
  }
  .mask{
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    z-index: 100;
    width: 100%;
    height: 100%;
  }
  /*background: yellow;*/
  .left {
    flex: 0 0 30%;
  }
  .center{
    flex: 1;
  }
  .right{
    flex: 0 0 30%;
  }
  .icon{
    width: 30px;
    height: 30px;
    color: #333;
  }
</style>

<template>
  <div id="app">

    <div class="bg" id="bg">
      <img src="../static/bg.jpg" alt="a cool bg" width="1920" height="2664">
    </div>

    <swiper :options="swiperOption" class="swiper-box">

      <swiper-slide>
        <index></index>
      </swiper-slide>
      <swiper-slide>
        <intros></intros>
      </swiper-slide>
      <swiper-slide>
        <skills></skills>
      </swiper-slide>
      <swiper-slide>
        <projects></projects>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>

    </swiper>

  </div>
</template>

<script>
  import index from './pages/index/index.vue'
  import intros from './pages/intros/intros.vue'
  import projects from './pages/projects/projects.vue'
  import skills from './pages/skills/skills.vue'
  export default {
    name: 'app',
    data() {
      return {
        CurrentIndex: 1,
        swiperOption: {
          pagination: '.swiper-pagination',
          direction: 'vertical',
          slidesPerView: 1,
          paginationClickable: true,
          spaceBetween: 0,
          keyboardControl: true,
          mousewheelControl: true,
          speed: 700,
//          loop: true,
          onTransitionStart(swiper) {
            this.CurrentIndex = swiper.activeIndex
//            console.log(document.getElementById('bg'))
//            console.log(this.$refs.bg)
            if (window.innerWidth < 768) { // mobile
              document.getElementById('bg').style.top = -this.CurrentIndex * 50 - 800 + 'px'
              console.log(document.getElementById('bg').style.top)
              return
            } else if (window.innerWidth < 769) { // 768
              document.getElementById('bg').style.top = -this.CurrentIndex * 90 + 'px'
              console.log(document.getElementById('bg').style.top)
              return
            } else if (window.innerWidth < 1025) { // 1024
              document.getElementById('bg').style.top = -this.CurrentIndex * 90 - 300 + 'px'
              console.log(document.getElementById('bg').style.top)
              return
            } else if (window.innerWidth < 1367) { // 1366
              document.getElementById('bg').style.top = -this.CurrentIndex * 90 - 200 + 'px'
              console.log(document.getElementById('bg').style.top)
              return
            } else {
              document.getElementById('bg').style.top = -this.CurrentIndex * 130 - 300 + 'px'
              console.log(document.getElementById('bg').style.top)
            }
          }
        }
      }
    },
    components: {
      index, intros, projects, skills
    }
  }
</script>

<style type="text/stylus" lang='stylus' rel='stylesheet/stylus'>

  ::-webkit-scrollbar
    display: none;

  html, body
    position: relative;
    height: 100%;
    #app
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      height: 100%;
      .swiper-box
        width: 100%;
        height: 100%;
        .page
          height: 100%;
          padding: 40px;
          font-size: 1rem;
        .swiper-pagination
          right: 20px !important;
        .swiper-pagination-bullet
          width: .7rem !important;
          height: .7rem !important;
          margin-top: 1rem !important;
          transition: all .7s;
          &.swiper-pagination-bullet-active
            transform: scale(1.5);
            transition: all .7s;
            background: rgb(131, 252, 216) !important;

  @media only screen and (min-width: 1367px)
  //destop
    #bg
      position: fixed;
      top: -300px;
      right: 0;
      transition: all .7s

    html
      font-size: 32px

  @media only screen and (max-width: 1366px) and (min-width: 1025px)
  //1366
    #bg
      position: fixed
      right: -350px
      top: -200px
      transition: all .7s

    html
      font-size: 32px

  @media only screen and (max-width: 1365px) and (min-width: 1024px)
  //1024
    #bg
      position: fixed
      right: -350px
      top: -300px
      transition: all .7s

    html
      font-size: 32px

  @media only screen and (max-width: 1023px) and (min-width: 768px)
  //768
    #bg
      position: fixed
      right: -350px
      top: -200px
      transition: all .7s

    html
      font-size: 32px

  @media only screen and (max-width: 767px)
  //mobile
    #bg
      transform: scale(0.5)
      position: fixed
      right: -700px
      top: -800px
      transition: all .7s

    html
      font-size: 20px


</style>

<template>
  <div id="app" @touchstart="touchstart" @touchend="touchend">

    <div class="bg" id="bg" ref="bg">
      <img src="./assets/img/bg.jpg" alt="a cool bg" width="1920" height="2664">
    </div>

    <lang-controller></lang-controller>

    <navigator></navigator>

    <div class="page-wrapper" :class="{
      'activePage':currentPage==0,
      'prevPage':currentPage>0,
      'nextPage':currentPage<0
      }">
      <index></index>
    </div>

    <div class="page-wrapper" :class="{
      'activePage':currentPage==1,
      'prevPage':currentPage>1,
      'nextPage':currentPage<1
      }">
      <projects></projects>
    </div>
    <div class="page-wrapper" :class="{
      'activePage':currentPage==2,
      'prevPage':currentPage>2,
      'nextPage':currentPage<2
      }">
      <skills></skills>
    </div>
    <div class="page-wrapper" :class="{
      'activePage':currentPage==3,
      'prevPage':currentPage>3,
      'nextPage':currentPage<3
      }">
      <contact></contact>
    </div>

  </div>
</template>

<script>
  import index from './pages/index/index.vue'
  import contact from './pages/contact/contact.vue'
  import projects from './pages/projects/projects.vue'
  import skills from './pages/skills/skills.vue'
  import langController from './components/langController.vue'
  import navigator from './components/navigator.vue'
  export default {
    name: 'app',
    computed: {
      currentPage() {
        return this.$store.state.currentPage
      }
    },
    methods: {
      changePage(i) {
        this.$store.commit('changePage', i)
        if (window.innerWidth < 768) { // mobile
          document.getElementById('bg').style.top = -this.currentPage * 50 - 800 + 'px'
          return
        } else if (window.innerWidth < 769) { // 768
          document.getElementById('bg').style.top = -this.currentPage * 90 + 'px'
          return
        } else if (window.innerWidth < 1025) { // 1024
          document.getElementById('bg').style.top = -this.currentPage * 90 - 300 + 'px'
          return
        } else if (window.innerWidth < 1367) { // 1366
          document.getElementById('bg').style.top = -this.currentPage * 90 - 200 + 'px'
          return
        } else { // destop
          document.getElementById('bg').style.top = -this.currentPage * 130 - 300 + 'px'
        }
      },
      slideNext() {
        if (this.currentPage >= 3) {
          // 最后一页回到首页
//          this.changePage(0)
          return
        }
        this.changePage(this.currentPage + 1)
      },
      slidePrev() {
        if (this.currentPage === 0) return
        this.changePage(this.currentPage - 1)
      },
      touchstart(e) {
        this.startY = e.changedTouches[0].pageY
      },
      touchend(e) {
        this.endY = e.changedTouches[0].pageY
        let diffY = this.endY - this.startY
        if (diffY > 30) {
          this.slidePrev()
          return
        }
        if (diffY < -30) {
          this.slideNext()
        }
      }
    },
    mounted() {
      window.onmousewheel = (e) => {
        e.stopPropagation()
        e.preventDefault()
        if (this.lock) return

        if (e.wheelDelta < 0) {
          this.lock = true
          this.slideNext()
          setTimeout(() => {
            this.lock = false
          }, 700)
        } else if (e.wheelDelta > 0) {
          this.lock = true
          setTimeout(() => {
            this.lock = false
          }, 700)
          this.slidePrev()
        }
      }
    },
    components: {
      index, contact, projects, skills, langController, navigator
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
      overflow: hidden
      #bg
        z-index: -1000
      .page-wrapper
        width: 100%
        height: 100%
        position: fixed
        transition: all .7s
        &.activePage
          transform translate3d(0, 0, 0)
        &.nextPage
          transform translate3d(0, 100%, 0)
        &.prevPage
          transform translate3d(0, -100%, 0)
        .page
          height: 100%;
          padding: 40px;
          font-size: 1rem
          .title
            line-height: 80px;
            font-weight: normal
            font-size: 1.5rem
            text-align: center;
            text-shadow: 0 0 6px rgba(0, 0, 0, .2);

  /*.swiper-box
    width: 100%;
    height: 100%;

    .swiper-pagination
      right: 20px !important;
    .swiper-pagination-bullet
      width: .5rem !important;
      height: .5rem !important;
      margin-top: .7rem !important;
      transition: all .7s;
      &.swiper-pagination-bullet-active
        transform: scale(1.7);
        transition: all .7s;
        background: rgba(0, 0, 0, .4) !important;*/

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

<template>
  <div id="app">

    <div class="bg" id="bg">
      <img src="../static/bg.jpg" alt="a cool bg" width="1920" height="1638">
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
            document.getElementById('bg').style.top = -this.CurrentIndex * 130 - 300 + 'px'
          }
        }
      }
    },
    components: {
      index, intros, projects, skills
    }
  }
</script>

<style>
  html, body {
    position: relative;
    height: 100%;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 10px;
    height: 100%;
    /*color: #fff;*/
  }

  #bg {
    position: fixed;
    top: -300px;
    right: 0;
    transition: all .7s
  }
  @media only screen and (max-width:1200px) {
    #bg {
      transform: scale(1.5);
      right: -100px;
    }
  }

  ::-webkit-scrollbar {
    display: none;
  }

  .swiper-box {
    width: 100%;
    height: 100%;
  }

  .swiper-pagination {
    right: 20px !important;
  }

  .swiper-pagination-bullet {
    width: 1.2rem !important;
    height: 1.2rem !important;
    margin-top: 1rem !important;
    transition: all .7s;
  }

  .swiper-pagination-bullet-active {
    transform: scale(1.5);
    transition: all .7s;
    background: rgb(131, 252, 216) !important;
  }

  .page {
    height: 100%;
    padding: 40px;
    font-size: 3rem;
  }

</style>

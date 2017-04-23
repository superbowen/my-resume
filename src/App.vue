<template>
  <div id="app">

    <swiper :options="swiperOption" style="width: 100%;height: 100%;">

      <swiper-slide>
        <index></index>
      </swiper-slide>
      <swiper-slide>
        <intros></intros>
      </swiper-slide>
      <swiper-slide>
        <projects></projects>
      </swiper-slide>
      <swiper-slide>
        <skills></skills>
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
        swiperOption: {
          pagination: '.swiper-pagination',
          direction: 'vertical',
          slidesPerView: 1,
          paginationClickable: true,
          spaceBetween: 0,
          keyboardControl: true,
          mousewheelControl: true,
          speed: 700,
          loop: true
        }
      }
    },

    components: {
      index, intros, projects, skills
    }
  }
</script>

<style>
  html,body {
    position: relative;
    height: 100%;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 10px;
    height: 100%;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  .swiper-pagination{
    right: 20px !important;
    transform: scale(2) translate3d(0px, -50%, 0) !important;
  }
  .page {
    height: 100%;
    padding: 40px;
    font-size: 3rem;
  }

</style>

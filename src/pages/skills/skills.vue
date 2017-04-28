<template>
  <div class="skills page" :class="{'animateClass':pageIdx===2}">
    <h1 class="title">{{_data.skills.title}}</h1>
    <div class="container">
      <div class="img-wrapper">
        <img src="../../assets/img/s-html.png" alt="html" title="html">
      </div>
      <div class="img-wrapper">
        <img src="../../assets/img/s-css.png" alt="css" title="css">
      </div>
      <div class="img-wrapper">
        <img src="../../assets/img/s-js.png" alt="js" title="js">
      </div>
      <div class="img-wrapper">
        <img src="../../assets/img/s-jquery.png" alt="jquery" title="jquery">
      </div>
      <div class="img-wrapper">
        <img src="../../assets/img/s-bootstrap.png" alt="bootstrap" title="bootstrap">
      </div>
      <div class="img-wrapper">
        <img src="../../assets/img/s-vue.png" alt="vue" title="vue">
      </div>
      <div class="img-wrapper">
        <img src="../../assets/img/s-stylus.png" alt="stylus" title="stylus">
      </div>
      <div class="img-wrapper">
        <img src="../../assets/img/s-ps.png" alt="ps" title="ps">
      </div>
      <div class="img-wrapper">
        <img src="../../assets/img/s-webpack.png" alt="webpack" title="webpack">
      </div>
      <div class="img-wrapper">
        <img src="../../assets/img/s-git.png" alt="git" title="git">
      </div>
    </div>
    <p class="desc">{{_data.skills.desc}}</p>
  </div>
</template>

<script>
  export default {
    computed: {
      _data() {
        return this.$store.getters.data
      },
      pageIdx() {
        return this.$store.state.currentPage
      }
    }
  }
</script>

<style type="text/stylus" lang='stylus' rel='stylesheet/stylus' scoped>
  @import '../../assets/animation.styl'
  .skills
    display: flex
    flex-direction: column
    justify-content: space-around
    align-items center
    .container
      width: 80%
      display: flex
      flex-direction row
      justify-content: space-around
      flex-wrap: wrap
      .img-wrapper
        background: rgba(255, 255, 255, .5)
        transition all .3s
        border-radius 50%
        cursor: pointer
        width: 4rem;
        height: 4rem
        text-align: center
        padding-top: .4rem
        margin: 1.5rem
        opacity: 0;
        &:hover
          border-radius 10px
        img
          height: 80%
    .desc
      text-align center
      font-size: .7rem
      width: 70%
      opacity: 0;

  .animateClass
    .container
      for i in 1..10
        .img-wrapper:nth-child({i})
          animation-name: ani-scroll-left
          animation-duration: 300ms * i + 500ms
          animation-delay 800ms
          animation-timing-function: ease
          animation-fill-mode: forwards
    .title
      animation-name: ani-slide-left
      animation-duration: 1s
      animation-timing-function: ease
      animation-fill-mode: forwards
    .desc
      animation-name: ani-slide-left
      animation-duration: 2s
      animation-delay 1s
      animation-timing-function: ease
      animation-fill-mode: forwards

  @media screen and (max-width: 1025px)
    .container
      width: 100% !important
      .img-wrapper
        margin: .3rem !important

  @media screen and (max-width: 800px)
    .desc
      display: none
</style>

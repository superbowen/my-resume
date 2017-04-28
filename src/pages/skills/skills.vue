<template>
  <div class="skills page">
    <h1 class="title">{{_data.skills.title}}</h1>
    <div class="container" :class="{'animateClass':pageIdx===2}">
      <div class="img-wrapper">
        <img src="../../assets/logo/html.png" alt="html" title="html">
      </div>
      <div class="img-wrapper">
        <img src="../../assets/logo/css.png" alt="css" title="css">
      </div>
      <div class="img-wrapper">
        <img src="../../assets/logo/js.png" alt="js" title="js">
      </div>
      <div class="img-wrapper">
        <img src="../../assets/logo/jquery.png" alt="jquery" title="jquery">
      </div>
      <div class="img-wrapper">
        <img src="../../assets/logo/bootstrap.png" alt="bootstrap" title="bootstrap">
      </div>
      <div class="img-wrapper">
        <img src="../../assets/logo/vue.png" alt="vue" title="vue">
      </div>
      <div class="img-wrapper">
        <img src="../../assets/logo/stylus.png" alt="stylus" title="stylus">
      </div>
      <div class="img-wrapper">
        <img src="../../assets/logo/ps.png" alt="ps" title="ps">
      </div>
      <div class="img-wrapper">
        <img src="../../assets/logo/webpack.png" alt="webpack" title="webpack">
      </div>
      <div class="img-wrapper">
        <img src="../../assets/logo/git.png" alt="git" title="git">
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

  .animateClass
    for i in 1..10
      .img-wrapper:nth-child({i})
        animation-name: animationStyle1
        animation-duration: 300ms * i + 500ms
        animation-delay 500ms
        animation-timing-function: ease-in-out
        animation-fill-mode: forwards
    & + p
      animation-name: animationStyle2
      animation-duration: 3.5s
      animation-timing-function: ease-in-out
      animation-fill-mode: forwards

  @keyframes animationStyle1
    0%
      opacity: 0;
      transform: translate3d(100%, 0, 0) rotateZ(100deg)
    40%
      transform translate3d(-15%, 0, 0) rotateZ(-15deg)
    60%
      opacity: 1
      transform translate3d(-15%, 0, 0) rotateZ(-15deg)
    100%
      opacity: 1;
      transform: translate3d(0, 0, 0)

  @media screen and (max-width: 1025px)
    .container
      width: 100% !important
      .img-wrapper
        margin: .3rem !important
    .desc
      display: none
</style>

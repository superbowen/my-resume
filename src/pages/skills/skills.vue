<template>
  <div class="skills page">
    <h1 class="title">{{_data.skills.title}}</h1>
    <div class="container">
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
      }
    }
  }
</script>

<style type="text/stylus" lang='stylus' rel='stylesheet/stylus' scoped>
  .skills
    //background: radial-gradient(ellipse closest-side, rgba(255, 255, 255, .6), rgba(255, 255, 255, 0))
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
        &:hover
          border-radius 10px
        img
          height: 80%
    .desc
      text-align center
      font-size: .7rem
      width: 80%
  @media screen and (max-width:1025px)
    .container
      width: 100%!important
      .img-wrapper
        margin: .3rem!important
    .desc
      display: none
</style>

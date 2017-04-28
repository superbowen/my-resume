<template>
  <div class="index page" :class="{'animateClass':pageIdx===0}">
    <div class="avatar">
      <img src="https://avatars3.githubusercontent.com/u/20217146?v=3&s=460" alt="avatar" ref="avatar" @mouseover="hover" @mouseout="revertHover">
    </div>
    <p class="name ani">{{_data.name}}</p>
    <p class="desc ani">{{_data.desc}}</p>
    <div class="social ani">
      <a :href="_data.social.blog.href" target="_blank"><i class="iconfont icon-blog1"></i></a>
      <a :href="_data.social.github.href" target="_blank"><i class="iconfont icon-github1"></i></a>
      <a :href="_data.social.zhihu.href" target="_blank"><i class="iconfont icon-zhihu"></i></a>
    </div>
    <div class="footer ani">
      <a href="https://github.com/superbowen/my-resume" target="_blank">Star or fork this page at Github</a>
    </div>
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
    },
    methods: {
      hover() {
        this.$refs.avatar.src = 'http://mypics.zhaopin.com/pic/2017/1/29/2FA4A258B2484D89AB624380CC551C5E.jpg'
      },
      revertHover() {
        this.$refs.avatar.src = 'https://avatars3.githubusercontent.com/u/20217146?v=3&s=460'
      }
    }
  }
</script>

<style type="text/stylus" lang='stylus' rel='stylesheet/stylus' scoped>
  @import '../../assets/iconfont/iconfont.styl'
  @import '../../assets/animation.styl'

  .index
    background: radial-gradient(ellipse closest-side, rgba(255, 255, 255, .6), rgba(255, 255, 255, 0))
    display: flex
    flex-flow: column nowrap
    justify-content center
    align-items center
    .avatar
      flex: 0 1 auto
      width: 5rem
      height: 5rem
      opacity: 0
      img
        width: 100%
        height: 100%
        border-radius: 50%
        border 5px solid #fff
        box-shadow: 0 5px 10px rgba(0, 0, 0, .2);
        transition all .3s
        /*&:hover*/
          /*border-radius 10px*/
    .name
      margin-top: 20px
      color: #444
      line-height: 2rem
      display: block
      font-size: 1rem
    .desc
      color: #222
      font-size: .5rem
      line-height: 2rem

    .social
      line-height: 2rem
      a
        display: inline-block
        width: 1.7rem
        height: 1.7rem
        color: rgba(3, 3, 3, .7)
        border-radius 50%
        text-align center
        text-decoration: none
        margin-right: .3rem
        background: rgba(255, 255, 255, .5)
        transition all .3s
        &:hover
          border-radius 5px
        .iconfont
          transition: all .3s
          line-height: 1.7rem
        .icon-github1
          font-size: 1.2rem

    .footer
      position: absolute
      left: 50%
      bottom: 20px
      margin-left: -3.5rem
      a
        color: #333
        font-size: .5rem

  .animateClass
    .avatar
      animation: ani-scroll-left 2s ease .5s 1 normal forwards
    for i in 1..5
      .ani:nth-child({i})
        animation-name ani-little-slide-left
        animation-duration 1s
        animation-delay: .5s * i
        animation-timing-function ease
        animation-fill-mode forwards

  @media screen and (max-width: 768px)
    .avatar
      width: 6rem !important
      height: 6rem !important
      img
        border 3px solid #fff !important

    .name
      font-size: 1.3rem !important;

    .desc
      font-size: .8rem !important
</style>

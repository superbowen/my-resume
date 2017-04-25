<template>
  <div class="index page">
    <div class="avatar">
      <img src="https://avatars3.githubusercontent.com/u/20217146?v=3&s=460" alt="avatar">
    </div>
    <p class="name">{{_data.name}}</p>
    <p class="desc">{{_data.desc}}</p>
    <div class="social">
      <a :href="_data.social.blog.href" target="_blank"><i class="iconfont icon-blog"></i></a>
      <a :href="_data.social.github.href" target="_blank"><i class="iconfont icon-github1"></i></a>
      <a :href="_data.social.zhihu.href" target="_blank"><i class="iconfont icon-zhihu"></i></a>
    </div>
    <div class="footer">
      <a href="https://github.com/superbowen/my-resume" target="_blank">Star or fork this page at Github</a>
    </div>
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
  @import '../../assets/iconfont/iconfont.styl'

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
      img
        width: 100%
        border-radius: 50%
        border 5px solid #fff
        box-shadow: 0 5px 10px rgba(0, 0, 0, .2);
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
      line-height: 3rem
      a
        color: #333
        text-decoration: none
        margin-right: .3rem
        .icon-zhihu:hover
          color: #0f88eb
        .icon-github1
          font-size: 1.4rem
          &:hover
            color: mediumpurple
        .icon-blog:hover
          color: orange

    .footer
      position: absolute
      left: 50%
      bottom: 20px
      transform: translateX(-50%)
      a
        color: #333
        font-size: .5rem

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

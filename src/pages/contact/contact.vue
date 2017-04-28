<template>
  <div class="contact page" :class="{'animateClass':pageIdx===3}">
    <p class="desc" v-for="desc in _data.contact.desc">{{desc}}</p>
    <div class="icons-wrapper">
      <a class="icon" :href="'tel:'+_data.contact.phone" target="_blank">
        <i class="iconfont icon-mobile"></i>
      </a>
      <a class="icon" :href="'mailto:'+_data.contact.mail" target="_blank">
        <i class="iconfont icon-mail"></i>
      </a>
      <a class="icon icon-hover" target="_blank">
        <i class="iconfont icon-weixin1"></i>
        <div class="qr-wrapper">
          <img :src="_data.contact.wechatqrcode">
        </div>
      </a>
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
    }
  }
</script>

<style type="text/stylus" lang='stylus' rel='stylesheet/stylus' scoped>
  @import '../../assets/iconfont/iconfont.styl'
  @import '../../assets/animation.styl'

  .contact
    background: radial-gradient(ellipse closest-side, rgba(255, 255, 255, .6), rgba(255, 255, 255, 0))
    display: flex
    flex-direction column
    justify-content center
    align-items center
    .desc
      line-height: 2rem
      text-align center
      opacity: 0
    .icons-wrapper
      margin-top: 1rem
      opacity: 0
      .icon
        display: inline-block
        position: relative
        width: 1.7rem
        height: 1.7rem
        text-decoration none
        color: rgba(3, 3, 3, .7)
        border-radius 50%
        text-align center
        margin-right: .3rem
        background: rgba(255, 255, 255, .5)
        transition all .3s
        &:hover
          border-radius 5px
        .iconfont
          font-size: 1rem
          line-height: 1.7rem
        .qr-wrapper
          position: absolute
          bottom: 2rem
          left: -1rem
          width: 4rem
          height: 4rem
          opacity: 0
          transition: opacity .3s
          img
            width: 100%
            border-radius 10px
        &.icon-hover:hover
          .qr-wrapper
            opacity: 1

  .animateClass
    for i in 1..5
      .desc:nth-child({i})
        animation-name: ani-slide-from-left
        animation-duration: 700ms
        animation-delay 700ms * i - 500ms
        animation-timing-function: ease-in-out
        animation-fill-mode: forwards

  .animateClass
    .icons-wrapper
      animation-name: ani-slide-from-left
      animation-duration: 700ms
      animation-delay: 3500ms
      animation-timing-function: ease-in-out
      animation-fill-mode: forwards

</style>

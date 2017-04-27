<template>
  <div class="contact page">
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
      }
    }
  }
</script>

<style type="text/stylus" lang='stylus' rel='stylesheet/stylus' scoped>
  @import '../../assets/iconfont/iconfont.styl'

  .contact
    background: radial-gradient(ellipse closest-side, rgba(255, 255, 255, .6), rgba(255, 255, 255, 0))
    display: flex
    flex-direction column
    justify-content center
    align-items center
    .desc
      line-height: 2rem
      text-align center
    .icons-wrapper
      margin-top: 1rem
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
          opacity:0
          transition: opacity .3s
          img
            width: 100%
            border-radius 10px
        &.icon-hover:hover
          .qr-wrapper
            opacity:1
</style>

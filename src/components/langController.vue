<template>
  <div class="wrapper">
    <div class="lang"
         :class="{'active':CurrentLang == lang.language}"
         v-for="lang in langs"
         @click="selectLang(lang.language)"
    >{{lang.desc}}
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      langs: {
        type: Array,
        default() {
          return [{language: 'cn', desc: '中'}, {language: 'en', desc: 'En'}]
        }
      }
    },
    methods: {
      selectLang(lang) {
        this.$store.commit('selLang', lang)
        document.title = this.$store.getters.data.title
      }
    },
    computed: {
      CurrentLang() {
        return this.$store.state.language
      }
    }
  }
</script>

<style type="text/stylus" lang='stylus' rel='stylesheet/stylus' scoped>
  .wrapper
    position: fixed
    right: 20px
    top: 20px
    height: 1.4rem;
    font-size: .7rem
    background-color: #333
    opacity: .5;
    border-radius .7rem
    padding: .2rem
    z-index: 100;
    .lang
      display: inline-block
      cursor: pointer
      line-height: 1rem
      width: 1.2rem
      text-align center
      margin-right .2px
      border-radius: 1rem
      &:last-child
        margin-right: 0
      &.active
        background: #fff

</style>

<template>
  <div class="nav">
    <div class="item" :class="{'active':currentPage===0}" @click="linkTo(0)"></div>
    <div class="item" :class="{'active':currentPage===1}" @click="linkTo(1)"></div>
    <div class="item" :class="{'active':currentPage===2}" @click="linkTo(2)"></div>
    <div class="item" :class="{'active':currentPage===3}" @click="linkTo(3)"></div>
  </div>
</template>

<script>
  export default {
    computed: {
      currentPage() {
        return this.$store.state.currentPage
      }
    },
    methods: {
      linkTo(i) {
        this.$store.commit('changePage', i)
      }
    }
  }
</script>

<style type="text/stylus" lang='stylus' rel='stylesheet/stylus' scoped>
  .nav
    position: fixed
    right: 20px
    top: 50%
    z-index: 100
    margin-top: -1.5rem;
    .item
      background: rgba(3, 3, 3, .3)
      width: .5rem
      height: .5rem
      margin-top: .5rem
      border-radius 50%
      transition: all .7s
      cursor: pointer
      &.active
        transform: scale(1.5)
        background: rgba(3, 3, 3, .6)
</style>

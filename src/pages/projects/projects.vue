<template>
  <div class="projects page">
    <h1 class="title">{{_data.projects.title}}</h1>
    <div class="card-wrapper0">
      <div class="card-wrapper">
        <card :project="project" v-for="(project, i) in _data.projects.items" :key="i"></card>
      </div>
    </div>
    <a href="https://github.com/superbowen" class="see-more" target="_blank">
      <i class="iconfont icon-github"></i>{{_data.projects.footerDesc}}
    </a>
  </div>

</template>

<script>
  import card from '../../components/card.vue'
  export default {
    computed: {
      _data() {
        return this.$store.getters.data
      }
    },
    components: {
      card
    }
  }
</script>

<style type="text/stylus" lang='stylus' rel='stylesheet/stylus' scoped>
  @import "../../assets/iconfont/iconfont.styl"

  .projects
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 !important
    .title
      padding-bottom: 30px
      color: #343c41
    .card-wrapper0
      width: 100%
      overflow: auto
      .card-wrapper
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    .see-more
      width: 48%;
      height: 2rem;
      margin-top: 1.5rem
      font-size: .8rem
      color: #859398
      border: 1px solid #859398;
      background: transparent;
      border-radius: 4px;
      text-decoration none
      transition: all 300ms ease;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      .iconfont
        font-size: 1rem
        margin-right: .3rem
      &:hover
        background: #859398;
        color: #fff
        opacity: .7;

  @media screen and (min-width: 1025px)
    .card-wrapper
      width: 80%;
      margin-left: 10%;

  @media screen and (max-width: 1025px)
    .card-wrapper
      width: 800px;
</style>

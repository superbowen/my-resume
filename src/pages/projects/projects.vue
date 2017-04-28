<template>
  <div class="projects page" :class="{'animateClass':pageIdx===1}">
    <h1 class="title ani">{{_data.projects.title}}</h1>
    <div class="cards-wrapper ani" @touchstart.prevent="touchstart" @touchend.prevent="touchend">
      <div class="card-wrapper"
           v-for="(project, i) in _data.projects.items"
           :class="{
              'prev': idx>i,
              'active': idx===i,
              'next': idx<i
            }">
        <card :project="project"></card>
      </div>
    </div>
    <a href="https://github.com/superbowen" class="see-more ani" target="_blank">
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
      },
      idx() {
        return this.$store.state.cardIdx
      },
      pageIdx() {
        return this.$store.state.currentPage
      }
    },
    methods: {
      changeCard(i) {
        this.$store.commit('changeCard', i)
      },
      nextCard() {
        if (this.idx >= 2) return
        this.changeCard(this.idx + 1)
      },
      prevCard() {
        if (this.idx === 0) return
        this.changeCard(this.idx - 1)
      },
      touchstart(e) {
        this.startX = e.changedTouches[0].pageX
      },
      touchend(e) {
        this.endX = e.changedTouches[0].pageX
        let diffX = this.endX - this.startX
        console.log(diffX)
        if (diffX > 40) {
          this.prevCard()
          return
        }
        if (diffX < -40) {
          this.nextCard()
        }
      }
    },
    components: {
      card
    }
  }
</script>

<style type="text/stylus" lang='stylus' rel='stylesheet/stylus' scoped>
  @import "../../assets/iconfont/iconfont.styl"
  @import '../../assets/animation.styl'

  .projects
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 !important
    .title
      padding-bottom: 30px
      color: #343c41
    .cards-wrapper
      position: relative
      .card-wrapper
        display: inline-block
    .see-more
      width: 48%;
      height: 2rem;
      margin: 1.2rem 0
      font-size: .8rem
      color: #333
      border: 1px solid #333;
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
        background: #333;
        color: #fff
        opacity: .6;


  .ani
    opacity: 0

  .animateClass
    for i in 1 2 3
      .ani:nth-child({i})
        animation-name ani-little-slide-up
        animation-duration 1s
        animation-delay: .5s * i
        animation-timing-function ease
        animation-fill-mode forwards

  @media screen and (min-width: 1365px)
    .title
      padding-bottom: 30px

  @media screen and (max-width: 1365px)
    .cards-wrapper
      width: 100%;
      height: 18rem
      .card-wrapper
        position: absolute
        top: 50%
        left: 50%
        margin-top: -8rem
        margin-left: -6rem
        transition: all .7s
        &.active
          transform translate3d(0, 0, 0)
        &.prev
          transform translate3d(-100%, 0, 0) scale(.8)
        &.next
          transform translate3d(100%, 0, 0) scale(.8)
</style>

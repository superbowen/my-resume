<template>
  <div class="projects page">
    <h1 class="title">{{_data.projects.title}}</h1>
    <div class="card-wrapper0">
      <div class="card-wrapper">
        <card :project="project" v-for="(project, i) in _data.projects.items" :key="i"></card>
      </div>
    </div>
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
  .projects
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0!important
    .card-wrapper0
      width: 100%
      overflow: auto
      .card-wrapper
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;

  @media screen and (min-width: 1025px)
    .card-wrapper
      width: 80%;
      margin-left:10%;

  @media screen and (max-width: 1025px)
    .card-wrapper
      width: 800px;
</style>

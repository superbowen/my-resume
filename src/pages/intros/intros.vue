<template>
  <div class="intros page">
    <h1 class="title">{{_data.intros.title}}</h1>
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
  .intros
    //background: rgb(129, 146, 214);
</style>

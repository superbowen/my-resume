<template>
  <div class="skills page">this is skills</div>
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
  .skills
    //background: rgb(220, 247, 161);
</style>

<template>
  <div class="card wrapper">
    <div class="img-wrapper">
      <img :src="project.screenShot">
    </div>
    <div class="desc">{{project.desc}}</div>
    <div class="btn-wrapper">
      <a :href="project.site" class="btn" target="_blank">
        <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24">
          <path d="M630.88 528.36c-7.264 0-14.512-0.576-21.664-1.736l73.896-73.936 0.568-0.376a27.52 27.52 0 0 0 3.336-2.872l100.792-101.056c30.944-31.016 30.944-81.488 0-112.504a78.68 78.68 0 0 0-56.112-23.304 78.848 78.848 0 0 0-56.152 23.304l-96.68 96.96-4.304 4.192-76.824 76.832c-6.424-42.224 7.424-85.632 37.76-116.064l100.92-101.208a133.68 133.68 0 0 1 95.264-39.576c35.984 0 69.824 14.056 95.272 39.576 52.552 52.688 52.552 138.408 0 191.08L726.024 488.904a133.48 133.48 0 0 1-95.144 39.456z"></path>
          <path d="M391.624 661.72a28.304 28.304 0 0 1-28.256-28.264c0-7.856 3.224-15.184 9.096-20.656L612.56 372.664c5.648-6.064 12.976-9.288 20.832-9.288a28.28 28.28 0 0 1 28.248 28.256 28.24 28.24 0 0 1-8.16 19.864l-6.112 6.232 0.064 0.048-230.576 230.584-0.056-0.032-5.088 4.936a27.92 27.92 0 0 1-20.088 8.456z"></path>
          <path d="M292.288 867a133.672 133.672 0 0 1-95.264-39.56c-52.536-52.688-52.536-138.44 0-191.128l100.92-101.184a133.456 133.456 0 0 1 95.104-39.456c7.128 0 14.224 0.56 21.248 1.68l-76.152 76.136a10.84 10.84 0 0 0-0.672 0.528L236.152 675.64c-30.928 31.016-30.928 81.472 0 112.472a78.792 78.792 0 0 0 56.136 23.312 78.696 78.696 0 0 0 56.112-23.312l100.92-101.168c0.656-0.656 1.24-1.392 1.8-2.128l75.056-75.144c6.608 42.392-7.216 86-37.688 116.592l-100.96 101.176a133.6 133.6 0 0 1-95.24 39.56z"></path>
        </svg>
      </a>
      <button class="btn qrcode" @click="showQrcode = true">
        <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18" height="18">
          <path d="M796.444444 1024 796.444444 910.222222 910.222222 910.222222 910.222222 796.444444 1024 796.444444 1024 1024 796.444444 1024ZM910.222222 568.888889 1024 568.888889 1024 682.666667 910.222222 682.666667 910.222222 568.888889ZM967.111111 455.111111 625.777778 455.111111C594.375111 455.111111 568.888889 429.624889 568.888889 398.222222L568.888889 56.888889C568.888889 25.486222 594.375111 0 625.777778 0L967.111111 0C998.513778 0 1024 25.486222 1024 56.888889L1024 398.222222C1024 429.624889 998.513778 455.111111 967.111111 455.111111ZM910.222222 113.777778 682.666667 113.777778 682.666667 341.333333 910.222222 341.333333 910.222222 113.777778ZM853.333333 284.444444 739.555556 284.444444 739.555556 170.666667 853.333333 170.666667 853.333333 284.444444ZM398.222222 1024 56.888889 1024C25.486222 1024 0 998.513778 0 967.111111L0 625.777778C0 594.375111 25.486222 568.888889 56.888889 568.888889L398.222222 568.888889C429.624889 568.888889 455.111111 594.375111 455.111111 625.777778L455.111111 967.111111C455.111111 998.513778 429.624889 1024 398.222222 1024ZM341.333333 682.666667 113.777778 682.666667 113.777778 910.222222 341.333333 910.222222 341.333333 682.666667ZM284.444444 853.333333 170.666667 853.333333 170.666667 739.555556 284.444444 739.555556 284.444444 853.333333ZM398.222222 455.111111 56.888889 455.111111C25.486222 455.111111 0 429.624889 0 398.222222L0 56.888889C0 25.486222 25.486222 0 56.888889 0L398.222222 0C429.624889 0 455.111111 25.486222 455.111111 56.888889L455.111111 398.222222C455.111111 429.624889 429.624889 455.111111 398.222222 455.111111ZM341.333333 113.777778 113.777778 113.777778 113.777778 341.333333 341.333333 341.333333 341.333333 113.777778ZM284.444444 284.444444 170.666667 284.444444 170.666667 170.666667 284.444444 170.666667 284.444444 284.444444ZM796.444444 796.444444 568.888889 796.444444 568.888889 568.888889 796.444444 568.888889 796.444444 796.444444ZM682.666667 1024 568.888889 1024 568.888889 910.222222 682.666667 910.222222 682.666667 1024Z"></path>
        </svg>
      </button>
    </div>
    <transition name="fade">
      <div class="qrcode-mask"v-if="project.qrcode"  v-show="showQrcode" @click="showQrcode=false">
        <img :src="project.qrcode">
      </div>
    </transition>

  </div>
</template>

<script>
  export default {
    props: {
      project: {
        type: Object,
        default() {
          return {
            imgUrl: '',
            desc: 'project desc',
            site: '',
            qrcode: ''
          }
        }
      }
    },
    data() {
      return {
        showQrcode: false
      }
    }
  }
</script>

<style type="text/stylus" lang='stylus' rel='stylesheet/stylus' scoped>
  .card
    position: relative;
    margin: 0 10px;
    padding: 10px;
    padding-bottom: 60px;
    width: 280px;
    height: 410px;
    background: linear-gradient(to bottom, #FFF, #F0F0F0);
    border-radius: 6px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, .1);
    border: 1px solid rgba(255, 255, 255, .3);
    transition: all 300ms ease;
    display: flex;
    flex-direction: column;
    /*justify-content: space-around;
    align-items: center;*/
    .img-wrapper
      flex 0 1 150px
      height: 150px
      border-radius 4px
      img
        height: 100%
        width: 100%
        border-radius 4px
    .desc
      flex 1
      font-size: 16px;
      margin-top: 6px
      line-height: 28px;
      text-indent: 2em;
      text-align: justify;
      text-overflow: ellipsis
    .btn-wrapper
      position: absolute;
      left: 0;
      bottom: 0;
      /*flex 0 1 36px*/
      width: 100%;
      padding: 10px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      .btn
        width: 48%;
        height: 36px;
        border: 1px solid #859398;
        background: transparent;
        border-radius: 4px;
        cursor: pointer;
        opacity: .6;
        transition: all 300ms ease;
        outline: 0;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        svg
          fill: #859398;
        &:hover
          opacity: 1;
          background: #859398;
          svg
            fill: #FFF;
    .qrcode-mask
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      z-index: 100;
      background-color: rgba(0, 0, 0, .5)
      border-radius 4px
      img
        position: absolute
        top: 50%
        left: 50%
        transform: translate(-50%, -50%)
        width: 60%
        border-radius 5px

  .fade-enter-active, .fade-leave-active
    transition: all .5s

  .fade-enter, .fade-leave-active
    opacity: 0
    margin-top: 40px

</style>

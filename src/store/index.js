import Vue from 'vue'
import Vuex from 'vuex'
import SourceData from './SourceData.json'
Vue.use(Vuex)

const state = {
  language: 'cn',
  currentPage: 0
}
const getters = {
  data(state) {
    return SourceData[state.language]
  }
}
const actions = {}
const mutations = {
  selLang(state, lang) {
    state.language = lang
  },
  changePage(state, page) {
    state.currentPage = page
  }
}
export default new Vuex.Store({
  state, getters, actions, mutations
})

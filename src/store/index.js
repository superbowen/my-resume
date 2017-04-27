import Vue from 'vue'
import Vuex from 'vuex'
import SourceData from './SourceData.json'
Vue.use(Vuex)

const state = {
  language: 'cn',
  currentPage: 0,
  cardIdx: 1
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
  },
  changeCard(state, card) {
    state.cardIdx = card
  }
}
export default new Vuex.Store({
  state, getters, actions, mutations
})

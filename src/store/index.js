import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drawer: false,
  },
  getters: {
    getDrawer: state => state.drawer,
  },
  mutations: {
    changeDrawer: (state, status) => (state.drawer = status),
  },
  actions: {
    hideDrawer: ({ commit }) => commit('changeDrawer', false),
    showDrawer: ({ commit }) => commit('changeDrawer', true),
  },
  
});

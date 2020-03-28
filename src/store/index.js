import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drawer: false,
    user: '',
  },
  getters: {
    getDrawer: state => state.drawer,
    getUser: state => state.user,
  },
  mutations: {
    changeDrawer: (state, status) => (state.drawer = status),
    settingUser: (state, user) => (state.user = user),

  },
  actions: {
    hideDrawer: ({ commit }) => commit('changeDrawer', false),
    showDrawer: ({ commit }) => commit('changeDrawer', true),
    setUser: ({ commit }, user) => commit('settingUser', user),

  },
  plugins: [createPersistedState()]
  
});

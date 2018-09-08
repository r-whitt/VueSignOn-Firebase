import Vue from "vue";
import auth from '@/auth';

const state = {
  user: null,
};

const getters = {
  // eslint-disable-next-line no-shadow
  user: state => state.user,
  // eslint-disable-next-line no-shadow
  isLogged: state => state.user !== null,
};

const mutations = {
  // eslint-disable-next-line no-shadow
  setUser: (state, user) => {
    state.user = user;
  },
};

const actions = {
  setCurrentUser: ({ commit }) => {
    commit('setUser', auth.user());
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

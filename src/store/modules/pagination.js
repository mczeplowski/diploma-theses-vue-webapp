const state = {
  limit: 10,
  page: 1
};

const getters = {};

const actions = {
  setLimit: ({ commit }, payload) => {
    commit("setLimit", payload);
  },
  setPage: ({ commit }, payload) => {
    commit("setPage", payload);
  }
};

const mutations = {
  setLimit: (state, payload) => {
    state.limit = payload;
  },
  setPage: (state, payload) => {
    state.page = payload;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};

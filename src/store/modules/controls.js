const state = {
  searchBy: undefined,
  searchPhrase: "",
  sortBy: undefined,
  sortType: undefined
};

const getters = {};

const actions = {
  setSearchBy: ({ commit }, payload) => {
    commit("setSearchBy", payload);
  },
  setSearchPhrase: ({ commit }, payload) => {
    commit("setSearchPhrase", payload);
  },
  setSortBy: ({ commit }, payload) => {
    commit("setSortBy", payload);
  }
};

const mutations = {
  setSearchBy: (state, payload) => {
    state.searchBy = payload;
  },
  setSearchPhrase: (state, payload) => {
    state.setSearchPhrase = payload;
  },
  setSortBy: (state, payload) => {
    if (!state.sortType) {
      state.sortType = 1;
    }

    if (state.sortBy === payload) {
      state.sortType *= -1;
    }

    state.sortBy = payload;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};

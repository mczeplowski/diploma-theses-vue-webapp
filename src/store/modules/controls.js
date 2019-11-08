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
  setSearchBy: (state, n) => {
    state.searchBy = n;
  },
  setSearchPhrase: (state, n) => {
    state.setSearchPhrase = n;
  },
  setSortBy: (state, n) => {
    if (!state.sortType) {
      state.sortType = 1;
    }

    if (state.sortBy === n) {
      state.sortType *= -1;
    }

    state.sortBy = n;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};

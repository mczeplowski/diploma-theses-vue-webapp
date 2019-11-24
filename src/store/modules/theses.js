const getUrl = queryStringsObject => {
  let url = "http://localhost:3001/theses?";

  Object.keys(queryStringsObject).forEach(key => {
    const queryString = queryStringsObject[key];
    if (!queryString) {
      return;
    }

    url += `${key}=${queryString}&`;
  });

  return url.slice(0, url.length - 1);
};

const state = {
  isLoading: false,
  list: [],
  pagination: {}
};

const getters = {};

const actions = {
  fetchTheses: ({ commit, rootState }) => {
    commit("fetchThesesRequested");

    const { controls, pagination } = rootState;
    const { page, limit } = pagination;

    const queryStrings = {
      ...controls,
      limit,
      page: page - 1
    };

    const url = getUrl(queryStrings);

    fetch(url)
      .then(res => res.json())
      .then(data => commit("fetchThesesSuccess", data))
      .catch(() => commit("fetchThesesFail"));
  }
};

const mutations = {
  fetchThesesRequested: state => {
    state.isLoading = true;
  },
  fetchThesesSuccess: (state, payload) => {
    state.list = payload.theses;
    state.isLoading = false;
    state.pagination = payload.pagination;
  },
  fetchThesesFail: state => {
    state.isLoading = false;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};

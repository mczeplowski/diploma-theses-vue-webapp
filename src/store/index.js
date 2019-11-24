import Vue from "vue";
import Vuex from "vuex";
import { controls, theses, pagination } from "./modules";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    controls,
    theses,
    pagination
  }
});

import Vue from "vue";
import Vuex from "vuex";
import { controls, theses } from "./modules";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    controls,
    theses
  }
});

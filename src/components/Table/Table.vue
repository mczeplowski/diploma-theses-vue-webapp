<template>
  <div class="container d-flex flex-column">
    <Row :data="headerData" />
    <Row :key="these._key" v-for="these in theses" :data="these" />
  </div>
</template>

<script>
import Row from "./Row.vue";
import { mapActions, mapState } from "vuex";

export default {
  data: () => ({
    headerData: {
      surname: "Surname",
      name: "Name",
      topic: "Topic",
      promoter: "Promoter",
      defenseDate: "Defense Date"
    }
  }),
  created: function() {
    this.fetchTheses();
  },
  computed: mapState({
    theses: state => state.theses.list
  }),
  methods: mapActions("theses", ["fetchTheses"]),
  components: {
    Row
  }
};
</script>

<style lang="scss" scoped>
.container {
  margin-top: 5rem;
  margin-bottom: 5rem;
}
</style>
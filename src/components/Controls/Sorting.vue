<template>
  <Dropdown :items="sortByList" :noValueLabel="'Sort by'" :value="sortBy" :setValue="setSortBy" />
</template>

<script>
import { mapState, mapActions } from "vuex";
import Dropdown from "@/components/Dropdown.vue";

export default {
  name: "Sorting",
  data: () => ({
    sortByList: [
      { id: "name", label: "Name" },
      { id: "surname", label: "Surname" },
      { id: "topic", label: "Topic" },
      { id: "promoter", label: "Promoter" },
      { id: "reviewer", label: "Reviewer" },
      { id: "studies", label: "Studies" },
      { id: "field", label: "Filed" },
      { id: "specialty", label: "Specialty" },
      { id: "defenseDate", label: "Defense Date" }
    ]
  }),
  components: {
    Dropdown
  },
  computed: mapState({
    sortBy: state => state.controls.sortBy
  }),
  methods: mapActions("controls", ["setSortBy"])
};
</script>

<style lang="scss" scoped>
div {
  flex: 1;
  background: #3d3d3d;
  color: #0080ff;
  transition: box-shadow 0.5s;

  &:hover {
    box-shadow: 0 0 2rem #3d3d3d;
  }
}
</style>

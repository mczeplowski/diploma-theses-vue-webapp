<template>
  <div class="search-container">
    <Dropdown
      :items="searchByList"
      :noValueLabel="'Search by'"
      :value="searchBy"
      :setValue="setSearchBy"
    />
    <input
      class="input"
      placeholder="Enter search phrase..."
      type="text"
      :value="searchPhrase"
      @change="e => setSearchPhrase(e.target.value)"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Dropdown from "@/components/Dropdown.vue";

export default {
  name: "Search",
  data: () => ({
    searchByList: [
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
    searchBy: state => state.controls.searchBy,
    searchPhrase: state => state.controls.searchPhrase
  }),
  methods: mapActions("controls", ["setSearchBy", "setSearchPhrase"])
};
</script>

<style lang="scss" scoped>
.search-container {
  flex: 2;
  display: flex;
  margin-right: 20px;
  background: #3d3d3d;
  color: #0080ff;
  transition: box-shadow 0.5s;

  .dropdown-container {
    border-right: 1px solid #bebebe;
  }

  &:hover {
    box-shadow: 0 0 2rem #3d3d3d;
  }
}
.input {
  flex: 3;
  height: 5rem;
  background-color: transparent;
  border: none;
  color: #0080ff;
  font-size: 2rem;
  padding: 1rem;
}
</style>

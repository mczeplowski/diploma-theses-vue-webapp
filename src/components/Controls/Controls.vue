<template>
  <section>
    <div class="container d-flex">
      <Search />
      <Sorting />
    </div>
  </section>
</template>

<script>
import Search from "./Search.vue";
import Sorting from "./Sorting.vue";

export default {
  name: "Controls",
  components: {
    Search,
    Sorting
  }
};
</script>

<style scoped>
section {
  background: #bebebe;
  padding: 5rem 0;
}
</style>

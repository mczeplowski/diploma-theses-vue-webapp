<template>
  <div>
    <Controls />
    <Table />
    <Pagination />
  </div>
</template>

<script>
import Controls from "@/components/Controls/Controls.vue";
import Table from "@/components/Table/Table.vue";
import Pagination from "@/components/Pagination/Pagination.vue";
export default {
  name: "HomePage",
  components: {
    Controls,
    Table,
    Pagination
  }
};
</script>

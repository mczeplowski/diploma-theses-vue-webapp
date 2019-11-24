<template>
  <div class="pagination-container">
    <div class="buttonContainer">
      <button @click="handlePrevPageClick">&#60;</button>
      <div class="inputContainer">
        <input @change="handlePageChange" :value="page" />
        z {{paginationPages}}
      </div>
      <button @click="handleNextPageClick">></button>
    </div>
    <div class="limitContainer">
      <span>Theses per page:</span>
      <input @change="handleLimitChange" :value="limit" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Pagination",
  computed: mapState({
    limit: state => state.pagination.limit,
    page: state => state.pagination.page,
    paginationPages: state => state.theses.pagination.pages
  }),
  methods: {
    handlePrevPageClick: function() {
      this.$store.dispatch("pagination/setPage", this.page - 1);
    },
    handleNextPageClick: function() {
      this.$store.dispatch("pagination/setPage", this.page + 1);
    },
    handlePageChange: function(e) {
      this.$store.dispatch("pagination/setPage", e.target.value);
    },
    handleLimitChange: function(e) {
      this.$store.dispatch("pagination/setLimit", e.target.value);
    }
  }
};
</script>

<style lang="scss" scoped>
.pagination-container {
  display: flex;
  flex-direction: column;
  margin: 5rem auto;
  width: 300px;
  color: #3d3d3d;
  font-size: 1.6rem;

  button,
  input {
    background: transparent;
    color: #3d3d3d;
    border: none;
  }

  input {
    width: 25%;
    margin: 0 5px;
    border-bottom: 1px solid #3d3d3d;
    text-align: center;
  }
}

.buttonContainer {
  display: flex;
  align-items: center;

  button {
    width: 25%;
    font-size: 3rem;
    padding: 21px 30px;
    transition: background-color 0.3s;

    &:hover {
      background: #bebebe;
      cursor: pointer;
    }

    &:disabled {
      cursor: not-allowed;
    }
  }
}

.inputContainer {
  width: 50%;
  display: flex;
  justify-content: center;
}

.limitContainer {
  display: flex;
  justify-content: center;
  padding: 10px;
}
</style>
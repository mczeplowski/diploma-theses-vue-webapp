<template>
  <div class="row-container">
    <div :title="data.surname">{{ data.surname }}</div>
    <div :title="data.name">{{ data.name }}</div>
    <div :title="data.topic">{{ data.topic }}</div>
    <div :title="data.promoter">{{ data.promoter }}</div>
    <div :title="data.date">{{ date }}</div>
  </div>
</template>

<script>
export default {
  props: ["data"],
  computed: {
    date: function() {
      const { defenseDate } = this.$options.propsData.data;
      return defenseDate === "Defense Date"
        ? defenseDate
        : new Date(defenseDate).toLocaleDateString("pl-PL");
    }
  }
};
</script>

<style lang="scss" scoped>
.row-container {
  display: flex;
  background: #bebebe;
  color: #3d3d3d;
  font-size: 1.6rem;
  padding: 15px 0;
  border-bottom: 1px solid #3d3d3d;
  transition: background-color 0.3s;

  &:last-of-type {
    border-bottom: none;
  }

  &:first-of-type {
    border-bottom: 1px solid #3d3d3d;
  }

  &:hover {
    background: #adadad;
  }

  div {
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0 5px;

    &:nth-child(1) {
      flex: 1;
    }

    &:nth-child(2) {
      flex: 1;
    }

    &:nth-child(3) {
      flex: 4;
    }

    &:nth-child(4) {
      flex: 2;
    }

    &:nth-child(5) {
      flex: 1;
    }
  }
}
</style>
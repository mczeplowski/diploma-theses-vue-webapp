<template>
  <div class="dropdown-container">
    <button class="label" @click="toggleIsOpen()">
      {{ dropdownLabel }}
      <i />
    </button>
    <div class="content" v-if="isOpen">
      <button
        :key="item.id"
        v-for="item in items"
        @click="() => handleItemClick(item.id)"
      >{{ item.label }}</button>
    </div>
  </div>
</template>

<script>
const getLabel = (items, v) => items.find(item => item.id === v);
export default {
  data: () => ({
    isOpen: false
  }),
  computed: {
    dropdownLabel() {
      return this.value
        ? getLabel(this.items, this.value).label
        : this.noValueLabel;
    }
  },
  methods: {
    toggleIsOpen: function() {
      this.isOpen = !this.isOpen;
    },
    handleItemClick: function(value) {
      this.setValue(value);
      this.toggleIsOpen();
    }
  },
  props: ["value", "setValue", "noValueLabel", "items"]
};
</script>

<style lang="scss" scoped>
.dropdown-container {
  position: relative;
  height: 5rem;
  flex: 1;

  button {
    background: #3d3d3d;
    color: #e9e9e9;
    font-size: 1.8rem;
    border: none;

    &:hover {
      cursor: pointer;
      color: #fff;
    }
  }
}

.label {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  outline: none;
  border: none;

  i {
    display: block;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid #e9e9e9;
    margin-left: 5px;
  }
}

.content {
  position: absolute;
  left: 0;
  top: 5rem;
  display: flex;
  flex-direction: column;
  background: #3d3d3d;
  width: 100%;
  box-shadow: 0 0 2rem #3d3d3d;
  padding: 10px;
}
</style>

<template>
  <button @click="onClick" :class="['my-button', btnTypeClass]">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "MyButton",
  props: {
    btnType: {
      type: String,
      default: "blue",
    },
  },
  computed: {
    btnTypeClass() {
      return `my-button__${this.btnType}`;
    },
  },
  methods: {
    onClick() {
      this.$emit("click");
    },
  },
};
</script>

<style scoped>
.my-button {
  border-radius: 20px;
  border: none;
  color: white;
}
.my-button__blue {
  background-color: blue;
}
.my-button__red {
  background-color: red;
}
</style>
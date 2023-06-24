<script setup>
import { computed } from "vue";

const props = defineProps({
  text: String,
  backgroundColor: String,
  width: Number,
  height: Number,
});

const style = computed(() => {
  return {
    width: props.width + "px",
    height: props.height + "px",
  };
});
</script>

<template>
  <button
    class="button"
    :class="{
      button_red: backgroundColor === 'red',
      button_white: backgroundColor === 'white',
    }"
    :style="style"
  >
    {{ text }}
  </button>
</template>

<style scoped lang="scss">
.button {
  border-radius: 8px;
  text-align: center;
  font-size: 14px;
  border: none;
  cursor: pointer;

  &_red {
    color: var(--c-white);
    background-color: var(--c-red);

    &:hover {
      background-color: var(--c-red-light);
    }
  }

  &_white {
    color: var(--c-mine-shaft-very-dark);
    background-color: var(--c-white);
  }
}
</style>

<script setup>
import { computed } from "vue";

const props = defineProps({
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
  <div class="line" :style="style"></div>
</template>

<style scoped lang="scss">
.line {
  border-radius: 8px;
  background: linear-gradient(
    90deg,
    var(--c-mine-shaft) 0%,
    var(--c-tundora-dark) 51.04%,
    var(--c-mine-shaft-dark) 100%
  );
}
</style>

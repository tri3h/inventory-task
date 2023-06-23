<script setup>
import InventoryLine from "@/components/UI/InventoryLine.vue";
</script>

<template>
  <div class="message">
    <img class="message__image" src="/icons/close.svg" alt="close" />
    <InventoryLine :width="699" :height="36" />
  </div>
</template>

<style scoped lang="scss">
.message {
  width: 785px;
  height: 72px;
  position: relative;
  background-color: var(--c-mine-shaft-very-dark);
  padding: 18px;
  border-radius: 12px;
  border: 1px solid var(--c-tundora);

  &__image {
    position: absolute;
    top: 8px;
    right: 8px;
  }
}
</style>

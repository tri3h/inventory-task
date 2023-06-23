<script setup>
import InventoryLine from "@/components/UI/InventoryLine.vue";
</script>

<template>
  <div class="stats">
    <img class="stats__image" src="/images/picture.png" alt="avatar" />
    <div class="info">
      <InventoryLine :width="190" :height="26" />
      <div class="info__content">
        <InventoryLine :width="155" :height="10" />
        <InventoryLine :width="190" :height="10" />
        <InventoryLine :width="170" :height="10" />
        <InventoryLine :width="160" :height="10" />
        <InventoryLine :width="140" :height="10" />
      </div>
      <InventoryLine :width="80" :height="10" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.stats {
  width: 236px;
  height: 500px;
  background-color: var(--c-mine-shaft-very-dark);
  padding: 18px 14px;
  border-radius: 12px;
  border: 1px solid var(--c-tundora);

  &__image {
    margin-bottom: 20px;
  }
}

.info {
  padding: 0 7px 6px 7px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }
}
</style>

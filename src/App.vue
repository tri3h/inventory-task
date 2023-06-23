<script setup>
import StatsPanel from "@/components/StatsPanel.vue";
import MessagePanel from "@/components/MessagePanel.vue";
import InventoryPanel from "@/components/InventoryPanel.vue";
</script>

<template>
  <div class="container">
    <StatsPanel />
    <InventoryPanel />
    <MessagePanel />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 24px;
}
</style>

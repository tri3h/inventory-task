<script setup>
import StatsPanel from "@/components/StatsPanel.vue";
import MessagePanel from "@/components/MessagePanel.vue";
import InventoryPanel from "@/components/InventoryPanel.vue";
import { useStore } from "vuex";

const store = useStore();

window.addEventListener("beforeunload", () => {
  localStorage.setItem("state", JSON.stringify(store.state));
});
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
  flex-wrap: wrap;
  gap: 24px;
  max-width: 850px;
}
</style>

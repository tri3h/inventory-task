<script setup>
import InventoryModal from "@/components/InventoryModal.vue";
import { ref } from "vue";

const showModal = ref(false);

const items = [
  {
    src: "/images/item-green.png",
    amount: 3,
    index: 0,
  },
];
</script>

<template>
  <div class="inventory">
    <div class="inventory__grid">
      <div class="inventory__row">
        <div class="inventory__item item" @click="() => (showModal = true)">
          <div class="item__counter">{{ items[0].amount }}</div>
        </div>

        <div class="inventory__item"></div>
        <div class="inventory__item"></div>
        <div class="inventory__item"></div>
        <div class="inventory__item"></div>
      </div>
      <div class="inventory__row">
        <div class="inventory__item"></div>
        <div class="inventory__item"></div>
        <div class="inventory__item"></div>
        <div class="inventory__item"></div>
        <div class="inventory__item"></div>
      </div>
      <div class="inventory__row">
        <div class="inventory__item"></div>
        <div class="inventory__item"></div>
        <div class="inventory__item"></div>
        <div class="inventory__item"></div>
        <div class="inventory__item"></div>
      </div>
      <div class="inventory__row">
        <div class="inventory__item"></div>
        <div class="inventory__item"></div>
        <div class="inventory__item"></div>
        <div class="inventory__item"></div>
        <div class="inventory__item"></div>
      </div>
      <div class="inventory__row">
        <div class="inventory__item"></div>
        <div class="inventory__item"></div>
        <div class="inventory__item"></div>
        <div class="inventory__item"></div>
        <div class="inventory__item"></div>
      </div>
    </div>
    <InventoryModal
      v-if="showModal"
      class="inventory__modal"
      @close="() => (showModal = false)"
    />
  </div>
</template>

<style scoped lang="scss">
.inventory {
  width: 525px;
  height: 500px;
  position: relative;
  border-radius: 12px;
  border: 1px solid var(--c-tundora);
  background-color: var(--c-mine-shaft-very-dark);

  &__row {
    height: 100px;
    display: flex;
    border-bottom: 1px solid var(--c-tundora);

    &:last-child {
      border-bottom: none;
    }
  }

  &__item {
    width: 105px;
    height: 100px;
    border-right: 1px solid var(--c-tundora);

    &:last-child {
      border-right: none;
    }
  }

  &__modal {
    position: absolute;
    top: 0;
    right: 0;
  }
}
</style>

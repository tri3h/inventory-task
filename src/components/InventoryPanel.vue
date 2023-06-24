<script setup>
import InventoryModal from "@/components/InventoryModal.vue";
import { ref } from "vue";

const showModal = ref(false);
const clickedItem = ref(null);

const items = [
  {
    src: "/images/item-green.png",
    amount: 4,
  },
  {
    src: "/images/item-orange.png",
    amount: 2,
  },
  {
    src: "/images/item-purple.png",
    amount: 5,
  },
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
];

const onItemClick = (item) => {
  if (item.hasOwnProperty("amount")) {
    clickedItem.value = item;
    showModal.value = true;
  }
};
</script>

<template>
  <div class="inventory">
    <div class="inventory__container">
      <div class="item" v-for="item in items" @click="onItemClick(item)">
        <img :src="item.src" />
        <div v-if="item.amount" class="item__counter">
          {{ item.amount }}
        </div>
      </div>
    </div>
    <InventoryModal
      v-if="showModal"
      :item="clickedItem"
      class="inventory__modal"
      @close="() => (showModal = false)"
    />
  </div>
</template>

<style scoped lang="scss">
.inventory {
  width: 527px;
  height: 500px;
  position: relative;
  border-radius: 12px;
  border: 1px solid var(--c-tundora);
  background-color: var(--c-mine-shaft-very-dark);

  &__container {
    display: flex;
    flex-wrap: wrap;
  }

  &__modal {
    position: absolute;
    top: 0;
    right: 0;
  }
}

.item {
  width: 105px;
  height: 100px;
  position: relative;
  border-right: 1px solid var(--c-tundora);
  border-bottom: 1px solid var(--c-tundora);
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: var(--c-mine-shaft-light);
  }

  &:nth-child(5n) {
    border-right: none;
  }

  &:nth-child(n + 21) {
    border-bottom: none;
  }

  &:nth-child(1) {
    border-top-left-radius: 12px;
  }

  &:nth-child(5) {
    border-top-right-radius: 12px;
  }

  &:nth-child(21) {
    border-bottom-left-radius: 12px;
  }

  &:nth-child(25) {
    border-bottom-right-radius: 12px;
  }

  &__counter {
    position: absolute;
    bottom: 0;
    right: 0;
    display: block;
    width: 16px;
    height: 16px;
    color: var(--c-white);
    text-align: center;
    font-size: 10px;
    font-weight: 500;
    opacity: 0.4;
    border-radius: 6px 0px 0px 0px;
    border: 1px solid var(--c-tundora);
  }
}
</style>

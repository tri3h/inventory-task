<script setup>
import InventoryModal from "@/components/InventoryModal.vue";
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

const showModal = ref(false);
const clickedItemIndex = ref(null);
const container = ref(null);

const onItemClick = (item, index) => {
  if (item.hasOwnProperty("amount")) {
    clickedItemIndex.value = index;
    showModal.value = true;
  }
};

const onItemDragend = (event, index) => {
  const ITEM_WIDTH = 105;
  const ITEM_HEIGHT = 100;
  const { top, bottom, left, right } = container.value.getBoundingClientRect();
  const { clientX, clientY, offsetX, offsetY } = event;
  const newIndex =
    Math.floor(offsetX / ITEM_WIDTH) +
    Math.floor(offsetY / ITEM_HEIGHT) * 5 +
    index;
  if (
    newIndex >= 0 &&
    newIndex <= 25 &&
    clientX > left &&
    clientX < right &&
    clientY < bottom &&
    clientY > top
  ) {
    store.commit("SET_ITEM_INDEX", { oldIndex: index, newIndex });
  }
};
</script>

<template>
  <div class="inventory">
    <div class="inventory__container" ref="container">
      <div
        class="item"
        v-for="(item, index) in store.state.items"
        @click="onItemClick(item, index)"
        @dragend="(event) => onItemDragend(event, index)"
      >
        <img :src="item.src" />
        <div v-if="item.hasOwnProperty('amount')" class="item__counter">
          {{ item.amount }}
        </div>
      </div>
    </div>
    <Transition name="slide">
      <InventoryModal
        v-if="showModal"
        :itemIndex="clickedItemIndex"
        class="inventory__modal"
        @close="() => (showModal = false)"
      />
    </Transition>
  </div>
</template>

<style scoped lang="scss">
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}
.inventory {
  width: 527px;
  height: 500px;
  position: relative;
  border-radius: 12px;
  border: 1px solid var(--c-tundora);
  background-color: var(--c-mine-shaft-very-dark);
  overflow: hidden;

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
  cursor: pointer;

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

.slide {
  &-enter-active {
    transition: all 0.8s ease-out;
  }

  &-leave-active {
    transition: all 0.8s;
  }

  &-enter-from,
  &-leave-to {
    transform: translateX(200px);
    opacity: 0;
  }
}
</style>

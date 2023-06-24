<script setup>
import InventoryLine from "@/components/UI/InventoryLine.vue";
import InventoryButton from "@/components/UI/InventoryButton.vue";
import InventoryInput from "@/components/UI/InventoryInput.vue";
import { ref } from "vue";

const showDeleting = ref(false);
const amount = ref(0);

const emit = defineEmits(["close"]);

const onCloseClick = () => {
  console.log("click");
  emit("close");
};

const onDeleteClick = () => {
  showDeleting.value = true;
};

const onCancelClick = () => {
  showDeleting.value = false;
};

const onConfirmClick = () => {
  //delete
};
</script>

<template>
  <div class="modal">
    <img
      class="modal__close"
      src="/icons/close.svg"
      alt="close"
      @click="onCloseClick"
    />
    <div class="modal__content">
      <div class="modal__image">
        <img
          src="/images/item-green.png"
          alt="item-green"
          width="130"
          height="130"
        />
      </div>
      <div class="info">
        <InventoryLine :width="211" :height="30" />
        <div class="info__description">
          <InventoryLine :width="211" :height="10" />
          <InventoryLine :width="211" :height="10" />
          <InventoryLine :width="211" :height="10" />
          <InventoryLine :width="180" :height="10" />
          <InventoryLine :width="80" :height="10" />
        </div>
      </div>
      <div class="control">
        <InventoryButton
          text="Удалить предмет"
          backgroundColor="red"
          :width="220"
          :height="39"
          @click="onDeleteClick"
        />
      </div>
    </div>
    <div class="deleting" v-if="showDeleting">
      <InventoryInput
        placeholder="Введите количество"
        @change="(v) => (amount = v)"
      />
      <div class="deleting__control">
        <InventoryButton
          text="Отмена"
          backgroundColor="white"
          :width="88"
          :height="33"
          @click="onCancelClick"
        />
        <InventoryButton
          text="Подтвердить"
          backgroundColor="red"
          :width="112"
          :height="33"
          @click="onConfirmClick"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.modal {
  width: 250px;
  height: 498px;
  padding: 0 15px;
  border-left: 1px solid var(--c-tundora);
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  background: var(--c-mine-shaft-very-dark);
  backdrop-filter: blur(8px);

  &__content {
    position: relative;
    height: 100%;
  }

  &__close {
    position: absolute;
    top: 8px;
    right: 8px;
    z-index: 1;
    display: block;
  }

  &__image {
    padding: 55px 45px 30px 45px;
    border-bottom: 1px solid var(--c-tundora);
  }
}

.info {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 16px 5px 24px 5px;
  border-bottom: 1px solid var(--c-tundora);

  &__description {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }
}

.control {
  padding-top: 18px;
}

.deleting {
  width: 249px;
  height: 133px;
  padding: 20px 15px;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: var(--c-mine-shaft-very-dark);
  border: none;
  border-radius: 12px;
  border-top: 1px solid var(--c-tundora);
  border-top-left-radius: 0;
  border-top-right-radius: 0;

  &__control {
    display: flex;
    gap: 10px;
  }
}
</style>

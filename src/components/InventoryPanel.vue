<script setup></script>

<template>
  <div class="inventory">
    <div class="inventory__row">
      <div class="inventory__cell"></div>
      <div class="inventory__cell"></div>
      <div class="inventory__cell"></div>
      <div class="inventory__cell"></div>
      <div class="inventory__cell"></div>
    </div>
    <div class="inventory__row">
      <div class="inventory__cell"></div>
      <div class="inventory__cell"></div>
      <div class="inventory__cell"></div>
      <div class="inventory__cell"></div>
      <div class="inventory__cell"></div>
    </div>
    <div class="inventory__row">
      <div class="inventory__cell"></div>
      <div class="inventory__cell"></div>
      <div class="inventory__cell"></div>
      <div class="inventory__cell"></div>
      <div class="inventory__cell"></div>
    </div>
    <div class="inventory__row">
      <div class="inventory__cell"></div>
      <div class="inventory__cell"></div>
      <div class="inventory__cell"></div>
      <div class="inventory__cell"></div>
      <div class="inventory__cell"></div>
    </div>
    <div class="inventory__row">
      <div class="inventory__cell"></div>
      <div class="inventory__cell"></div>
      <div class="inventory__cell"></div>
      <div class="inventory__cell"></div>
      <div class="inventory__cell"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.inventory {
  width: 525px;
  height: 500px;
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

  &__cell {
    width: 105px;
    height: 100px;
    border-right: 1px solid var(--c-tundora);

    &:last-child {
      border-right: none;
    }
  }
}
</style>

<script setup>
defineProps({
  placeholder: String,
});

const emit = defineEmits(["change"]);

const onChange = (event) => {
  emit("change", event.target.value);
};
</script>

<template>
  <input
    class="input"
    type="number"
    :placeholder="placeholder"
    @change="onChange"
  />
</template>

<style scoped lang="scss">
.input {
  width: 210px;
  height: 40px;
  border-radius: 4px;
  border: 1px solid var(--c-tundora);
  background: var(--c-mine-shaft-very-dark);
  font-size: 14px;
  font-weight: 500;
  padding-left: 12px;
  color: var(--c-white);
}
</style>

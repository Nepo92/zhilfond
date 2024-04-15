<script setup>
const props = defineProps({
  type: "text",
  placeholder: "",
});

const model = defineModel();
</script>

<template>
  <input
    class="input"
    :type="type"
    v-model="model"
    :placeholder="placeholder"
  />
</template>

<style lang="scss" scoped>
.input {
  width: 100%;
  font-size: 14px;
  font-weight: 400;
  line-height: 17.07px;
  text-align: left;
  padding: 15px 25px;
  border: 1px solid $borderInput;
  color: $fontColorLight;
  outline: none;

  &::placeholder {
    color: rgba($fontColorLight, 0.5);
    font-weight: 400;
  }
}
</style>

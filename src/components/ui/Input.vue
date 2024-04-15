<script setup>
const props = defineProps({
  type: "text",
  placeholder: "",
});

const model = defineModel();
</script>

<template>
  <input :type="type" v-model="model" :placeholder="placeholder" />
</template>

<style></style>

<script setup>
const props = defineProps({
  error: {},
});
</script>

<template>
  <div class="error">{{ error.message }}</div>
</template>

<style lang="scss">
.error {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #d9253d;
  width: 350px;
  height: 150px;
  padding: 25px 20px;
  color: white;
  font-weight: 700;
}
</style>

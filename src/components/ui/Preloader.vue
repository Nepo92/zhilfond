<script setup>
import Spiner from "@/assets/images/spiner.png";
</script>

<template>
  <div class="preloader">
    <img class="preloader__img" :src="Spiner" alt="spiner" />
  </div>
</template>

<style lang="scss" scoped>
.preloader {
  position: fixed;
  z-index: 10;
  inset: 0;
  display: grid;
  align-items: center;
  justify-content: center;
  background-color: rgba($gray, 0.4);

  &__img {
    transform: scale(1.2);
    pointer-events: none;
  }
}
</style>

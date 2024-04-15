<script setup></script>

<template>
  <header class="header">
    <h1 class="header__title">Жилфонд</h1>
    <span class="header__user">Пользователь</span>
  </header>
</template>

<style lang="scss">
.header {
  display: grid;
  grid-auto-flow: column;
  align-items: start;
  justify-content: space-between;

  &__title {
    font-family: Montserrat;
    font-size: 32px;
    font-weight: 700;
    line-height: 39.01px;
    text-align: left;
    color: $headTitleColor;
  }
}
</style>

<script setup>
import Header from "@/components/Header.vue";
import Sidebar from "@/components/sidebar/Sidebar.vue";
import Card from "@/components/Card.vue";
</script>

<template>
  <div class="wrapper">
    <Header />
    <main class="wrapper__content">
      <Sidebar />
      <Card />
    </main>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;

  &__content {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 290px 1fr;
    border: 1px solid gray;
  }
}
</style>

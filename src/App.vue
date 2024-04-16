<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

import Header from "@/components/Header.vue";
import Sidebar from "@/components/sidebar/Sidebar.vue";
import Card from "@/components/Card.vue";
import Preloader from "@/components/ui/Preloader.vue";
import Error from "@/components/ui/Error.vue";

const store = useStore();

const fetching = computed({ get: store.getters.fetchUsers });
const hasError = computed({ get: store.getters.hasError });
</script>

<template>
  <div class="wrapper">
    <Header />
    <main class="wrapper__content">
      <Sidebar />
      <Card />
    </main>
    <Preloader v-if="fetching" />
    <Error v-if="hasError" :error="hasError" />
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  width: 100%;
  max-width: 1265px;
  margin: 80px auto 0;

  &__content {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 290px 1fr;
    height: 575px;
    margin-block-start: 25px;
    border: 1px solid rgba(black, 0.1);
  }
}
</style>

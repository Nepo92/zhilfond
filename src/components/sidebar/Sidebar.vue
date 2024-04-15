<script setup>
import { useStore } from "vuex";
import { computed, ref, watch } from "vue";

import useDebounce from "@/composables/useDebounce.js";

import mutations from "@/store/mutations";
import actions from "@/store/actions";

import Input from "@/components/ui/Input.vue";
import UserItem from "@/components/sidebar/UserItem.vue";

const store = useStore();

const usersList = computed({ get: store.getters.users });
const search = computed({
  get: store.getters.search,
  set: (value) => {
    useDebounce(() => store.commit(mutations.users.__search, value), 400);
  },
});

function selectUser(user) {
  store.commit(mutations.user.__success, user);
}

watch(
  search,
  async (val) => {
    if (!val) store.commit(mutations.user.__success, undefined);
    else await store.dispatch(actions.users.__search);
  },
  {
    deep: true,
  }
);
</script>

<template>
  <aside class="sidebar">
    <h2 class="sidebar__subtitle">Поиск сотрудников</h2>
    <Input
      class="sidebar__input"
      v-model="search"
      placeholder="Введите id или имя"
    />
    <h2 class="sidebar__subtitle">Результаты</h2>
    <p class="sidebar__placeholder" v-if="!search">начните поиск</p>
    <p class="sidebar__placeholder" v-else-if="search && !usersList.length">
      ничего не найдено
    </p>
    <ul v-else-if="search && usersList.length" class="sidebar__list">
      <UserItem
        v-for="user in usersList"
        :key="user.id"
        :user="user"
        @click="() => selectUser(user)"
      />
    </ul>
  </aside>
</template>

<style lang="scss">
.sidebar {
  border-right: 1px solid gray;
  padding: 30px 30px 30px 20px;

  &__list {
    display: grid;
    grid-gap: 20px 0;
  }
}
</style>

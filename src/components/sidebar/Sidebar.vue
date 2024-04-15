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
const fetching = computed({ get: store.getters.fetchUsers });

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
    <div class="sidebar__top">
      <h2 class="sidebar__subtitle">Поиск сотрудников</h2>
      <Input
        class="sidebar__input"
        v-model="search"
        placeholder="Введите id или имя"
      />
    </div>
    <h2 class="sidebar__subtitle">Результаты</h2>
    <div class="sidebar__bottom">
      <p class="sidebar__placeholder" v-if="!search">начните поиск</p>
      <p
        class="sidebar__placeholder"
        v-else-if="search && !usersList.length && !fetching"
      >
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
    </div>
  </aside>
</template>

<style lang="scss" scoped>
.sidebar {
  border-inline-end: 1px solid rgba(black, 0.1);

  &__top {
    padding: 30px 30px 0 20px;
  }

  &__bottom {
    overflow-y: auto;
    height: 100%;
    max-height: calc(575px - 180px);
    padding: 0 30px 30px 20px;
  }

  &__subtitle {
    font-size: 16px;
    font-weight: 600;
    line-height: 22.4px;
    text-align: left;

    &:nth-child(2) {
      padding: 0 30px 10px 20px;
      margin-block-start: 30px;
    }
  }

  &__list {
    margin-block-start: 10px;
    display: grid;
    grid-gap: 20px 0;
  }

  &__input {
    margin-block-start: 15px;
  }

  &__placeholder {
    font-size: 14px;
    font-weight: 400;
    line-height: 17.07px;
    text-align: left;
    margin-block-start: 10px;
  }
}
</style>

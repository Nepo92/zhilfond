<script setup>
import PlaceholderImg from "@/assets/images/placeholder-mini.png";

const props = defineProps({
  user: {},
});
</script>

<template>
  <li class="sidebar__user">
    <img class="sidebar-user__photo" :src="PlaceholderImg" alt="user photo" />
    <div class="sidebar-user__info">
      <p class="sidebar-user__title" :title="user.name">{{ user.name }}</p>
      <p class="sidebar-user__email" :title="user.email">{{ user.email }}</p>
    </div>
  </li>
</template>

<style lang="scss" scoped>
.sidebar {
  &__user {
    display: flex;
    cursor: pointer;
    box-shadow: 0 0 10px 0 rgb($gray, 1);
    border-radius: 15px;
    overflow: hidden;

    &:hover {
      .sidebar-user {
        &__info {
          background-color: $gray;
        }

        &__title {
          transform: translateX(10px);
        }
      }
    }
  }
}

.sidebar-user {
  &__photo {
    flex-shrink: 0;
    width: 70px;
    height: 70px;
    border-inline-end: 1px solid $gray;
    aspect-ratio: 1/1;
  }

  &__info {
    transition: all 0.1s linear;
    padding: 13px 15px;
    width: 100%;
    max-width: calc(100% - 70px);
    height: 70px;
  }

  &__title {
    position: relative;
    font-size: 14px;
    font-weight: 600;
    line-height: 17.07px;
    transition: all 0.3s linear;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
  }

  &__email {
    display: inline-block;
    font-size: 14px;
    font-weight: 400;
    line-height: 17.07px;
    text-align: left;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-block-start: 5px;
    white-space: nowrap;
  }
}
</style>

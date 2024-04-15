<script setup>
const props = defineProps({
  user: {},
});
</script>

<template>
  <li class="sidebar__user">
    <img class="sidebar-user__photo" src="" alt="user photo" />
    <div class="sidebar-user__info">
      <p class="sidebar-user__title">{{ user.name }}</p>
      <p class="sidebar-user__email">{{ user.email }}</p>
    </div>
  </li>
</template>

<style lang="scss">
.sidebar {
  &__user {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 70px 1fr;
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
    display: block;
    width: 70px;
    height: 70px;
    border-inline-end: 1px solid $gray;
  }

  &__info {
    transition: all 0.1s linear;
    padding: 15px;
  }

  &__title {
    position: relative;
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 600;
    line-height: 17.07px;
    transition: all 0.3s linear;
  }

  &__email {
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 400;
    line-height: 17.07px;
    text-align: left;
  }
}
</style>

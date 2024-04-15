<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

import PlaceholderImg from "@/assets/images/placeholder.png";

const store = useStore();

const user = computed({ get: store.getters.user });

const contacts = [
  {
    type: "email",
  },
  {
    type: "phone",
  },
];
</script>

<template>
  <div class="card" :class="{ empty: !user }">
    <p class="card__placeholder" v-if="!user">
      Выберите сотрудника, чтобы посмотреть его профиль
    </p>
    <div v-else class="card__content">
      <img class="card__img" :src="PlaceholderImg" alt="card placeholder" />
      <div class="card__info">
        <h2 class="card__title">{{ user?.name }}</h2>
        <div class="card__contact">
          <p
            v-for="(contact, index) in contacts"
            :key="index + '-contact'"
            class="card-contact"
          >
            <span class="card-contact__type">{{ contact.type }}: </span>
            <a
              :href="(index === 0 ? 'mailto:' : 'tel:') + user[contact.type]"
              class="card-contact__value"
            >
              {{ user[contact.type] }}</a
            >
          </p>
        </div>
        <div class="card__about">
          <p class="card-about__title">О себе:</p>
          <p class="card-about__value">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quasi
            sint, vitae aperiam sed consequatur voluptate ipsa voluptatem, quas
            nihil ab neque tempora optio officia a reiciendis quia eos? In, ut
            rem nisi sapiente, repellendus neque placeat autem repudiandae vitae
            laboriosam a omnis consequatur necessitatibus officiis molestiae
            modi fuga non?
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  &.empty {
    display: grid;
    align-items: center;
    justify-content: center;
  }

  &__placeholder {
    font-size: 14px;
    font-weight: 400;
    line-height: 17.07px;
    color: $fontColorLight;
  }

  &__content {
    display: grid;
    grid-auto-flow: column;
    grid-gap: 0 60px;
    grid-template-columns: 425px 1fr;
    padding: 30px 30px 30px 20px;
  }

  &__img {
    display: block;
    height: 286px;
    border: 1px solid $gray;
  }

  &__title {
    font-size: 16px;
    font-weight: 600;
    line-height: 22.4px;
    text-align: left;
  }

  &__contact {
    display: grid;
    grid-gap: 10px 0;
    margin-block-start: 10px;
    font-size: 14px;
    font-weight: 600;
    line-height: 19.6px;
    text-align: left;
  }

  &__about {
    margin-block-start: 20px;
  }
}

.card-contact {
  &__value {
    font-weight: 400;
    color: $fontColorLight;
    text-decoration: none;
  }
}

.card-about {
  &__title {
    font-size: 16px;
    font-weight: 600;
    line-height: 22.4px;
    text-align: left;
  }

  &__value {
    font-size: 14px;
    font-weight: 400;
    line-height: 17.07px;
    text-align: left;
    margin-block-start: 25px;
    color: $fontColorLight;
  }
}
</style>

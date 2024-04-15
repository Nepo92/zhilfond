<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

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
  <div class="card">
    <p v-if="!user">Выберите сотрудника, чтобы посмотреть его профиль</p>
    <div v-else class="card__content">
      <img class="card__img" src="" alt="card placeholder" />
      <div class="card__info">
        <h2 class="card__title">{{ user?.name }}</h2>
        <div class="card__contact">
          <p
            v-for="(contact, index) in contacts"
            :key="index + '-contact'"
            class="card__contact"
          >
            <span class="card-contact__type">{{ contact.type }}: </span>
            <span class="card-contact__value"> {{ user[contact.type] }}</span>
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

<style lang="scss"></style>

import { createStore } from "vuex";
import usersStore from "./modules/users";
import userStore from "./modules/user";

const store = createStore({
  modules: {
    users: usersStore,
    user: userStore,
  },
});

export default store;

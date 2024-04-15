import { createStore } from "vuex";
import usersStore from "./modules/users";

const store = createStore({
  modules: {
    users: usersStore,
  },
});

export default store;

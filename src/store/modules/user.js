import { user } from "@/store/mutations/user";

const userStore = {
  state: {
    data: undefined,
    fetching: false,
    error: undefined,
  },
  getters: {
    user: (state) => () => state.data,
  },
  mutations: {
    [`${user.__fetch}`](state) {
      state.fetching = true;
      state.error = undefined;
    },
    [`${user.__success}`](state, payload) {
      state.fetching = false;
      state.data = payload;
      state.error = undefined;
    },
    [`${user.__error}`](state, payload) {
      state.fetching = false;
      state.error = payload;
    },
  },
  actions: {
    async fetchUser(context, id) {
      try {
        context.commit(user.__fetch);
        const data = await usersAPI.getUser(id);

        context.commit(user.__success, data);
      } catch (e) {
        context.commit(user.__error, e);
      }
    },
  },
};

export default userStore;

import { users } from "@/store/mutations/users";
import { usersAPI } from "@/api/api";
import useUsersPayload from "@/composables/useUsersPayload";
import actions from "@/store/actions";

const usersStore = {
  state: {
    users: {
      data: [],
      search: "",
      fetching: false,
      error: undefined,
    },
  },
  mutations: {
    [`${users.__fetch}`](state) {
      state.users.fetching = true;
      state.users.error = undefined;
    },
    [`${users.__success}`](state, payload) {
      state.users.fetching = false;
      state.users.data = payload;
      state.users.error = undefined;
    },
    [`${users.__error}`](state, payload) {
      state.users.fetching = false;
      state.users.error = payload;
    },
    [`${users.__search}`](state, payload) {
      state.users.search = payload;
    },
  },
  actions: {
    async [`${actions.users.__search}`](context) {
      try {
        context.commit(users.__fetch);

        const payload = useUsersPayload(context.state.users.search);

        const data = await usersAPI.searchUsers(payload);

        context.commit(users.__success, data);
      } catch (error) {
        context.commit(users.__error, error);
        throw new Error(error);
      }
    },
  },
  getters: {
    users: (state) => () => state.users.data,
    search: (state) => () => state.users.search,
    fetchUsers: (state) => () => state.users.fetching,
    hasError: (state) => () => state.users.error,
  },
};

export default usersStore;

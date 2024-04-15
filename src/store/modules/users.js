import { createStore } from "vuex";
import { users } from "./mutations/users";
import { usersAPI } from '../api/api'
import useUsersPayload from "../composables/useUsersPayload";

const usersStore = createStore({
  state: {
    users: {
        data: [],
        search: '',
        fetching: false,
        error: undefined
    },
  },
  mutations: {
    `${users.search.__fetch}`(state, payload) {
        state.users.fetching = true
        state.users.error = undefined
    },
    `${users.search.__success}`(state, payload) {
        state.users.fetching = false
        state.users.data = payload
        state.users.error = undefined
    },
    `${users.search.__error}`(state, payload) {
        state.users.fetching = false
        state.users.error = payload
    },
  },
  actions: {
    async fetchUsers(context) {
        try {
            context.commit(users.__fetch)
            const data = await usersAPI.getUsers()

            context.commit(users.__success, data)
        } catch (error) {
            context.commit(users.__error, error)
        }
    },
    async searchUsers(context) {
        try {
            context.commit(users.search.__fetch)

            const payload = useUsersPayload(state.users.search)
            const data = await usersAPI.searchUsers(payload)

            context.commit(users.search.__success, data)
        } catch(error) {
            context.commit(users.search.__error)
        }
    }
  },
  getters: {
    users(state) {
        return state.users.data
    },
    search(state) {
        return state.users.search
    }
  }
});

export default usersStore;

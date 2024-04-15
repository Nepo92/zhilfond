import axios from "axios";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

export const usersAPI = {
  async getUsers() {
    try {
      const response = await instance.get("users");
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  },
  async searchUsers(payload) {
    try {
      const response = await instance.get(`users?${payload}`);
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  },
  async getUser(id) {
    try {
      const response = await instance.get("user");
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  },
};

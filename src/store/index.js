import { defineStore } from 'pinia'
import getUsers from '../service/getUser';

export const useUserStore = defineStore('users', {
  state: () => ({
    users: []
  }),
  actions: {
    async getUsers() {
        

      this.users = getUsers();
    }
  }
})

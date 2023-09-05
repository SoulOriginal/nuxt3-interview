import { defineStore } from "pinia";
import { IUser, Users} from "~~/interfaces/users";
import { IUsersStore } from "~~/interfaces/stores/users";
export const useUsers = defineStore("users", {
  state: (): IUsersStore => ({
    cummon: undefined,
    isLoading: false,
    filters: {}
  }),
  actions: {
    async featchUsers(variables: any) {

    },
  },
});

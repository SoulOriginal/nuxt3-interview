import { defineStore } from "pinia";
import { Users } from "~~/interfaces/users";
import { IUsersStore } from "~~/interfaces/stores/users";
import { IHelperSorterQuery } from "~~/interfaces/api/users";
export const useUsersStore = defineStore("users", {
  state: (): IUsersStore => ({
    cummon: undefined,
    isLoading: false,
    filters: {},
  }),
  actions: {
    async featchUsers(variables: IHelperSorterQuery) {
      const { data } = await useFetch<Users>("/api/users", {
        query: variables
      });
      return data.value
      console.log(data);
    },
  },
});

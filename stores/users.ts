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
      try {
        this.isLoading = true;
        const { data } = await useFetch<Users>("/api/users", {
          query: variables,
        });
        this.cummon = data.value!;
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        console.error(error);
      }
    },
  },
  getters: {
    getUsersCountries: (state) => {
      const getCountries = state?.cummon?.map((user) => user.county);
      return [...new Set(getCountries)];
    },
    getUsersTitles: (state) => {
      const getTitles = state?.cummon?.map((user) => user.title);
      return [...new Set(getTitles)];
    },
    getUsersByFilters: (state) => {
      const { title, county } = state.filters;
      let compireData = state.cummon;
      if (title) {
        compireData = compireData?.filter((user) => user.title === title);
      }
      if (county) {
        compireData = compireData?.filter((user) => user.county === county);
      }
      return compireData;
    },
  },
});

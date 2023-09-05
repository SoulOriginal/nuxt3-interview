import { Users } from "~~/interfaces/users";
export interface IUsersStore {
  cummon?: Users;
  isLoading: boolean;
  filters: {
    title?: string;
    county?: string;
    sort_by?: string;
    sort_order?: string;
  };
}

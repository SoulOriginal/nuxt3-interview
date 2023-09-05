export type OrderVatiants = "DESC" | "ASC";
import { Users } from "~~/interfaces/users";
export interface IHelperSorterArgs {
  order: OrderVatiants;
  data: Users;
}

export interface IHelperSorterQuery {
  sort_by?: "title";
  sort_order?: OrderVatiants;
}

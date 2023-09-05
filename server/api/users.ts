import UsersMocks from "~~/mocks/users";
import { IHelperSorterArgs, IHelperSorterQuery } from "~~/interfaces/api/users";
const helpers = {
  sortByTitle(args: IHelperSorterArgs) {
    const { order = "ASC", data } = args;

    if (order === "ASC") {
      return data.slice().sort((a, b) => a.title.localeCompare(b.title));
    }
    if (order === "DESC") {
      return data.slice().sort((a, b) => b.title.localeCompare(a.title));
    }

    // Возвращаем исходный массив, если порядок не указан или некорректен
    return data.slice();
  },
};
export default defineEventHandler(async (event) => {
  const { sort_by, sort_order } = getQuery<IHelperSorterQuery>(event);
  await new Promise((resolve, _) => setTimeout(() => resolve(true), 1500));
  if (sort_by) {
    return helpers.sortByTitle({ order: sort_order, data: UsersMocks });
  }
  return UsersMocks;
});

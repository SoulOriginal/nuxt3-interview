import { Users } from "~~/interfaces/users"
export interface IUsersStore {
    cummon?: Users,
    isLoading: boolean
    filters: {}
}
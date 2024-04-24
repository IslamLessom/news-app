import { User } from "../app/types";

interface InitialState {
    user: User | null
    isAuthenticate: boolean
    users: User[] | null
}
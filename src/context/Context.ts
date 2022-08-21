import {createContext} from "react";
import UserStore from "../store/UserStore";
import ProductStore from "../store/ProductStore";

interface AppContext {
    userStore: UserStore
    productStore: ProductStore
}

export const Context = createContext<AppContext>(null)

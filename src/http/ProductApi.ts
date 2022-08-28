import {$host} from "./index";
import {JsonProduct} from "../types";

export async function fetchProducts(){
    const {data} = await $host.get("product/getProducts")
    return data
}

export async function fetchAmount(cart: JsonProduct[]){
    const {data} = await $host.post("order/getAmount", {cart})
    return data
}
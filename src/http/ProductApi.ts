import {$host} from "./index";

export async function fetchProducts(){
    const {data} = await $host.get("product/getProducts")
    return data
}
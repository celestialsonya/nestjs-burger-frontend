import {CartInterface, JsonProduct, Product} from "../types";
const CART_KEY = "cart"

export function useCart(){

    function toJSON(i: any){
        return JSON.stringify(i)
    }

    function parseJSON(i: any){
        return JSON.parse(i)
    }

    function getCart(){
        const cart: JsonProduct[] = parseJSON(localStorage.getItem(CART_KEY))
        return cart != null ? cart : []
    }

    function addProduct(product: JsonProduct){

        const actualCart = getCart()
        const isExistsProduct = actualCart.find((p) => p.product_id === product.product_id)
        let newCart;
        if (!isExistsProduct){
            newCart = actualCart.concat(product)
        } else {
            newCart = actualCart.map((p: JsonProduct) => {
                if (p.product_id === product.product_id){
                    p.quantity += 1
                    return p
                }
            })
        }

        updateCart(newCart);
        return;
    }

    function updateCart(newCart: JsonProduct[]){
        localStorage.setItem(CART_KEY, toJSON(newCart))
        return
    }

    function clearCart(){
        localStorage.removeItem(CART_KEY)
    }

    function getById(id: number){
        const actualCart = getCart()
        return actualCart.find((p: JsonProduct) => p.product_id === id)
    }

    const cart: CartInterface = {
        getCart,
        addProduct,
        clearCart,
        getById
    }

    return cart;
}
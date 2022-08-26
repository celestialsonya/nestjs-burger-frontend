import {CartInterface, JsonProduct} from "../types";
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
        console.log(product)
        const isExistsProduct = actualCart.findIndex((p) => p.product_id === product.product_id)
        let newCart;
        if (isExistsProduct === -1){
            newCart = actualCart.concat(product)
            console.log(newCart)
        } else {
            newCart = actualCart.map((p: JsonProduct) => {
                if (p.product_id === product.product_id){
                    p.quantity += 1
                    return p
                }
                return p
            })
        }

        updateCart(newCart);
        return;
    }

    function removeProduct(id: number){
        const actualCart = getCart()
        const productFind = actualCart.find((p: JsonProduct) => p.product_id === id)

        let newCart;
        if (productFind.quantity === 1){
            newCart = actualCart.filter((p: JsonProduct) => p.product_id !== id)
        } else {
            newCart = actualCart.map((p: JsonProduct) => {
                if (p.product_id === id){
                    p.quantity -= 1
                    return p
                }
                return p
            })
        }

        updateCart(newCart)
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

    function getActualQuantity(id: number){
        const actualCart = getCart()
        const product = actualCart.find(p => p.product_id === id)
        if (product){
            return product.quantity
        }

        return 0
    }

    const cart: CartInterface = {
        getCart,
        addProduct,
        clearCart,
        getById,
        getActualQuantity,
        removeProduct
    }

    return cart;
}
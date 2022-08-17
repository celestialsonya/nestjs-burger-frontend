import {makeAutoObservable} from "mobx";

export type Product = {
    id: number
    name: string
    description: string
    price: number
    category: string
}

export default class ProductStore {

    _products: Product[];
    constructor() {
        this._products = []
        makeAutoObservable(this)
    }

    setProducts(products: Product[]){
        this._products = products
    }

    getProducts(): Product[]{
        return this._products
    }

}
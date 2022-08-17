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
        this._products = [
            {id: 1, name: "Crab Burger", description: "very spicy", price: 240, category: "burgers"},
            {id: 2, name: "BigSanders de lux", description: "very spicy!!", price: 360, category: "burgers"},
            {id: 4, name: "BigSanders de lux", description: "very spicy!!", price: 360, category: "drinks"},
            {id: 5, name: "BigSanders de lux", description: "very spicy!!", price: 360, category: "drinks"},
            {id: 6, name: "BigSanders", description: "original", price: 320, category: "burgers"}
        ]
        makeAutoObservable(this)
    }

    setProducts(products: Product[]){
        this._products = products
    }

    getProducts(): Product[]{
        return this._products
    }

}
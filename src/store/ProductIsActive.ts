import {makeAutoObservable} from "mobx";

export type Product = {
    id: number
    name: string
    description: string
    price: number
    category: string
}

export default class ProductIsActive {

    _isActive: boolean;
    _product: Product;
    constructor() {
        this._product = null
        this._isActive = false
        makeAutoObservable(this)
    }

    setProduct(product: Product){
        this._product = product
    }

    getProduct(): Product{
        return this._product
    }

    setIsActive(isActive: boolean){
        this._isActive = isActive
    }

    getIsActive(): boolean{
        return this._isActive
    }

}
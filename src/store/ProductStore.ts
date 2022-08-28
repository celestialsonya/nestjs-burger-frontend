import {makeAutoObservable} from "mobx";
import {Product} from "../types";

interface Overview {
    isActive: boolean;
    product: Product;
}

export default class ProductStore {

    private products: Product[];
    private overview: Overview
    private amount: number;

    constructor() {
        this.products = []
        this.overview = {
            isActive: false,
            product: null
        }
        this.amount = 0
        makeAutoObservable(this)
    }

    setProducts(products: Product[]){
        this.products = products
    }

    setOverviewProduct(product: Product){
        this.overview.product = product
    }

    setIsActive(isActive: boolean){
        this.overview.isActive = isActive
    }

    setAmount(amount: number){
        this.amount = amount
    }

    getProducts(): Product[]{
        return this.products
    }

    getOverviewProduct(): Product{
        return this.overview.product
    }

    getIsActive(): boolean{
        return this.overview.isActive
    }

    getAmount(): number{
        return this.amount
    }

}
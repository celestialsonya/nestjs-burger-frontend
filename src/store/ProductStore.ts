import {makeAutoObservable} from "mobx";
import {Product} from "../types";

interface Overview {
    isActive: boolean;
    product: Product;
}

export default class ProductStore {

    private products: Product[];
    private overview: Overview

    constructor() {
        this.products = []
        this.overview = {
            isActive: false,
            product: null
        }
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

    getProducts(): Product[]{
        return this.products
    }

    getOverviewProduct(): Product{
        return this.overview.product
    }

    getIsActive(): boolean{
        return this.overview.isActive
    }

}
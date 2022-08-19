import React, {useContext, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import ProductList from "../components/products/ProductList";
import {Context} from "../index";
import {fetchProducts} from "../http/ProductApi";
import {Product} from "../store/ProductStore";
import "./styles/Catalog.css"
import ProductOverview from "../components/products/ProductOverview";

const Catalog = observer(() => {

    const {products} = useContext(Context)

    useEffect(() => {
        fetchProducts().then(data => {
            products.setProducts(data)
        })
    }, [])

    let categories: string[] = []
    products._products.map((p: Product) => {
        if (!categories.includes(p.category)){
            categories.push(p.category)
        }
    })

    const {productIsActive} = useContext(Context)
    const isActive = productIsActive.getIsActive()
    const product = productIsActive.getProduct()

    return (
        <div className="catalog">
            {categories.map((category: string) =>
                <ProductList category={category} products={products}/>
            )}

            {isActive? <ProductOverview product={product}/> : null}
        </div>
    );
});

export default Catalog;
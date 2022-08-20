import React, {useContext, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import {fetchProducts} from "../http/ProductApi";
import {Product} from "../types";
import "./styles/Catalog.css"
import {Context} from "../context/Context";
import ProductList from "../components/products/productList/ProductList";
import ProductOverview from "../components/products/productOverview/ProductOverview";

const Catalog = observer(() => {

    const {productStore} = useContext(Context)

    useEffect(() => {
        fetchProducts().then(data => {
            productStore.setProducts(data)
        })
    }, [])

    let categories: string[] = []
    productStore.getProducts().map((p: Product) => {
        if (!categories.includes(p.category)){
            categories.push(p.category)
        }
    })

    const isActive = productStore.getIsActive()
    const overviewProduct = productStore.getOverviewProduct()

    return (
        <div className="catalog">
            {categories.map((category: string) =>
                <ProductList category={category} key={category} />
            )}

            {isActive? <ProductOverview product={overviewProduct}/> : null}
        </div>
    );
});

export default React.memo(Catalog);
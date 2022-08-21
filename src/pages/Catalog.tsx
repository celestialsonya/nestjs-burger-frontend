import React, {useContext, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {fetchProducts} from "../http/ProductApi";
import {Product} from "../types";
import "./styles/Catalog.css"
import {Context} from "../context/Context";
import ProductList from "../components/products/productList/ProductList";

const Catalog = observer(() => {

    const {productStore} = useContext(Context)

    useEffect(() => {
        fetchProducts().then(data => {
            console.log(data)
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

    return (
        <div className="catalog" >
            {categories.map((category: string) =>
                <ProductList category={category} key={category} />
            )}
        </div>
    );
});

export default React.memo(Catalog);
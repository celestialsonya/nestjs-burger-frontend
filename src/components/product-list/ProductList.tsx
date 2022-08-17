import React, {useContext, useEffect} from 'react';
import {Context} from "../../index";
import {Product} from "../../store/ProductStore";
import {observer} from "mobx-react-lite";
import ProductItem from "./ProductItem";
import logoLittle from "../../assets/logoLittle.svg"
import "./ProductList.css"
import {fetchProducts} from "../../http/ProductApi";

const ProductList = observer(() => {

    const {products} = useContext(Context)

    useEffect(() => {
        fetchProducts().then(data => {
            console.log(data)
            products.setProducts(data)
        })
    }, [])

    console.log(fetchProducts())

    let categories: string[] = []
    products._products.map((p: Product) => {
        if (!categories.includes(p.category)){
            categories.push(p.category)
        }
    })

    return (
        <div>
            {
                categories.map((category: string) => {
                    return <div className={ `products ${category}` }>
                        <p className="typeProductList">{category[0].toUpperCase() + category.substring(1) + `:`}</p>
                        <ul className="productList">
                            {
                                products._products.map((p: Product) => {
                                    if (p.category === category){
                                        return <ProductItem key={p.id} product={p} />
                                    }
                                })
                            }
                        </ul>
                        <img className="logoLittle" src={logoLittle} alt=""/>
                    </div>
                })
            }

        </div>
    );
})

export default ProductList;
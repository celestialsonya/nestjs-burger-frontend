import React, {useContext, useEffect} from 'react';
import ProductStore, {Product} from "../../store/ProductStore";
import ProductItem from "./ProductItem";
import logoLittle from "../../assets/logoLittle.svg"
import "./ProductList.css"

interface IProps {
    category: string
    products: ProductStore
}

const ProductList = (props: IProps) => {

    const {category, products} = props

    return (
        <div className={ `productList ${category}` } >
            <p className="typeProductList">{category[0].toUpperCase() + category.substring(1) + `:`}</p>
            <div className="products">
                {
                    products._products.map((p: Product) => {
                        if (p.category === category){
                            return <ProductItem key={p.id} product={p}/>
                        }
                    })
                }
            </div>
            <img className="logoLittle" src={logoLittle} alt=""/>
        </div>
    )
}

export default ProductList;
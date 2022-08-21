import React, {useContext, useEffect} from 'react';
import logoLittle from "../../../assets/logoLittle.svg"
import "./ProductList.css"
import {Context} from "../../../context/Context";
import {Product} from "../../../types";
import ProductItem from "../productItem/ProductItem";

interface IProps {
    category: string
}

const ProductList = (props: IProps) => {

    const {category} = props
    const {productStore} = useContext(Context)

    return (
        <div className={ `productList ${category}` } onScroll={(e) => {
            console.log(e)
        }} >
            <p className="typeProductList">{category[0].toUpperCase() + category.substring(1) + `:`}</p>
            <div className="products">
                {
                    productStore.getProducts().map((p: Product) => {
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

export default React.memo(ProductList);
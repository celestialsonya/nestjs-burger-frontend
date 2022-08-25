import React, {useContext, useEffect, useState} from 'react';
import "./ProductOverview.css"
import burger1 from "../../../assets/burger1.png"
import favoriteIcon from "../../../assets/favorit-icon.svg";
import cartIconWhite from "../../../assets/cartIconWhite.png"
import {JsonProduct, Product} from "../../../types";
import {useLocalStore} from "mobx-react-lite";
import {useLocalStorage} from "../../../hooks/useLocalStorage";
import {useCart} from "../../../hooks/useCart";
import {queries} from "@testing-library/react";

interface IProps {
    product: Product
    scrollPosition: number
}

const ProductOverview = (props: IProps) => {

    const {product, scrollPosition} = props
    const {addProduct, getById} = useCart()

    function addProductByCart(product: Product){
        const productFind = getById(product.id)

        let jsonProduct: JsonProduct;
        if (!productFind){
            jsonProduct = {product_id: product.id, product_name: product.name, quantity: 1}
        } else {
            jsonProduct = productFind
        }

        return addProduct(jsonProduct)
    }

    return (
        <div className={ scrollPosition > 85 ? "productOverview --productOverview-scroll" : "productOverview"}>
            
            <div className="backgroundOverview">
                <img className="burgerOverview" src={burger1} alt=""/>
            </div>
            
            <div className="productOverviewInfo">
                <div className="productNameAndIconFavoriteOverview">
                    <p className="productNameOverview">{product.name}</p>
                    <img className="favoriteIconOverview" src={favoriteIcon} alt=""/>
                </div>

                <p className="descriptionOverview">{product.description}</p>
                <p className="priceOverview">{`₽ ` + product.price + ` RUB`}</p>
            </div>
            
            <div onClick={() => addProductByCart(product)} className="addProductButton">
                <div className="empty">
                    &nbsp;
                </div>
                <p className="addProductText">Add to cart</p>
                <img className="cartIconOverview" src={cartIconWhite} alt=""/>
            </div>
            
        </div>
    );
};

export default ProductOverview;
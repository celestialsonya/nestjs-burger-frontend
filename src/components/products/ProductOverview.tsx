import React from 'react';
import "./ProductOverview.css"
import burger1 from "../../assets/burger1.png"
import {Product} from "../../store/ProductStore";
import favoriteIcon from "../../assets/favorit-icon.svg";
import cartIconWhite from "../../assets/cartIconWhite.png"

interface IProps {
    product: Product
}

const ProductOverview = (props: IProps) => {

    const {product} = props

    return (
        <div className="productOverview">
            
            <div className="backgroundOverview">
                <img className="burgerOverview" src={burger1} alt=""/>
            </div>
            
            <div className="productNameAndIconFavoriteOverview">
                <p className="productNameOverview">{product.name}</p>
                <img className="favoriteIconOverview" src={favoriteIcon} alt=""/>
            </div>
            
            <p className="descriptionOverview">{product.description}</p>
            <p className="priceOverview">{`₽ ` + product.price + ` RUB`}</p>
            
            <div className="addProductButton">
                <p className="addProductText">Add to cart</p>
                <img className="cartIconOverview" src={cartIconWhite} alt=""/>
            </div>
            
        </div>
    );
};

export default ProductOverview;
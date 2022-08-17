import React from 'react';
import {Product} from "../../store/ProductStore";
import favoriteIcon from "../../assets/favorit-icon.svg"
import cartIcon from "../../assets/cart-icon.svg"
import burger1 from "../../assets/burger1.png"
import "./ProductItem.css"

interface IProps {
    product: Product;
}

const ProductItem = (props: IProps) => {

    const {product} = props
    return (
        <li className="productItem">
            <img className="burger1" src={burger1} alt=""/>
            <div className="back">
                <div className="productNameAndIconFavorite">
                    <p className="productName">{product.name}</p>
                    <img className="favoriteIcon" src={favoriteIcon} alt=""/>
                </div>
                <p className="description">{product.description}</p>
                <div className="priceAndCartIcon">
                    <p className="price">{`₽ ` + product.price + ` RUB`}</p>
                    <img className="cartIcon" src={cartIcon} alt=""/>
                </div>
            </div>
        </li>
    );
};

export default ProductItem;
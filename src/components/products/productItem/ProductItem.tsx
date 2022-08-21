import React, {useContext} from 'react';
import favoriteIcon from "../../../assets/favorit-icon.svg"
import cartIcon from "../../../assets/cart-icon.svg"
import burger1 from "../../../assets/burger1.png"
import "./ProductItem.css"
import {Context} from "../../../context/Context";
import {Product} from "../../../types";
import { useOverview } from "../../../hooks/useOverview";

interface IProps {
    product: Product;
}

const ProductItem = (props: IProps) => {

    const {product} = props
    const {handleOpen} = useOverview()

    function handleOpenOverview(){
        handleOpen(product)
    }

    return (
        <div className="productItem">
            <img className="burger1" src={burger1} alt=""/>
            <div className="back">
                <div className="productNameAndIconFavorite">
                    <p className="productName">{product.name}</p>
                    <img className="favoriteIcon" src={favoriteIcon} alt=""/>
                </div>
                <p className="description">{product.description}</p>
                <div className="priceAndCartIcon">
                    <p className="price">{`₽ ` + product.price + ` RUB`}</p>
                    <img
                        onClick={ handleOpenOverview }
                        className="cartIcon"
                        src={cartIcon}
                        alt=""/>
                </div>
            </div>
        </div>
    );
};

export default React.memo(ProductItem);
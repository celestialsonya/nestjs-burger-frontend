import React, { useEffect, useRef, useState} from 'react';
import "./ProductOverview.css"
import burger1 from "../../../assets/burger1.png"
import favoriteIcon from "../../../assets/favorit-icon.svg";
import cartIconWhite from "../../../assets/cartIconWhite.png"
import {JsonProduct, Product} from "../../../types";
import {useCart} from "../../../hooks/useCart";
import {IoAddSharp} from "react-icons/io5"
import {AiOutlineMinus} from "react-icons/ai"

interface IProps {
    product: Product
    scrollPosition: number
}

const ProductOverview = (props: IProps) => {

    const {product, scrollPosition} = props
    const {addProduct, getById, getActualQuantity} = useCart()
    const [addingProductIsActive, setAddingProductIsActive] = useState(false)
    const ulref = useRef<HTMLDivElement>(null)
    const [actualQuantity, setActualQuantity] = useState(getActualQuantity(product.id))

    function addQuantity(){
        setActualQuantity(actualQuantity + 1)
    }

    function reduceQuantity(){
        setActualQuantity(actualQuantity - 1)
    }

    function animate(){
        if (ulref.current){
            ulref.current.classList.add("addingQuantityByProduct-resized")
            ulref.current.classList.add("addingQuantityByProduct-transformed")
        }
    }

    useEffect(() => {
        ulref.current.animate([{ width: "10%" }, { width: "40%" }], {
            duration: 700,
            easing: "ease-in",
            fill: "forwards",
            delay: 300
        })
    }, [ulref])

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
            
            <div onClick={() => {
                setAddingProductIsActive(true)
                addProductByCart(product)
            }}  className="addProductButton">
                <div className="empty">
                    &nbsp;
                </div>
                <p className={ addingProductIsActive ? "addProductText --addProductText-hidden" : "addProductText"}>Add to cart</p>
                <div ref={ulref} className={ addingProductIsActive ? "addingQuantityByProduct" : "--addingQuantityByProduct-hidden"}>
                    <IoAddSharp onClick={addQuantity} className="addQuantityBtn" color="white"/>
                    <p className="productQuantity">{actualQuantity}</p>
                    <AiOutlineMinus onClick={reduceQuantity} className="reduceQuantityBtn"/>
                </div>
                <img className="cartIconOverview" src={cartIconWhite} alt=""/>
            </div>
            
        </div>
    );
};

export default ProductOverview;
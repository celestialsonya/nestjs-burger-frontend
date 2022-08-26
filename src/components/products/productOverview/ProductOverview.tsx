import React, { useEffect, useRef, useState} from 'react';
import "./ProductOverview.css"
import burger1 from "../../../assets/burger1.png"
import favoriteIcon from "../../../assets/favorit-icon.svg";
import cartIconWhite from "../../../assets/cartIconWhite.png"
import {JsonProduct, Product} from "../../../types";
import {useCart} from "../../../hooks/useCart";
import {IoAddSharp} from "react-icons/io5"
import {AiOutlineMinus} from "react-icons/ai"
import {once} from "mobx/dist/utils/utils";

interface IProps {
    product: Product
    scrollPosition: number
}

const ProductOverview = (props: IProps) => {

    const {product, scrollPosition} = props
    const {addProduct, getById, getActualQuantity, removeProduct} = useCart()
    const [addingProductIsActive, setAddingProductIsActive] = useState(false)
    const ulref = useRef<HTMLDivElement>(null)
    const [actualQuantity, setActualQuantity] = useState(getActualQuantity(product.id))
    const [buttonIsClicked, setButtonIsClicked] = useState(false)

    function buttonAddProductClick(){
        // if on the button "Add product" was clicked for the first time:
        if (buttonIsClicked === false){
            addProductByCart(product)
        }
        setButtonIsClicked(true)
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

        // if on the button "Add product" was clicked for the first time:
        if (buttonIsClicked === false){

            if (actualQuantity !== 0){
                return
            }
            const jsonProduct: JsonProduct = {product_id: product.id, product_name: product.name, quantity: 1}
            setActualQuantity(actualQuantity + 1)

            return addProduct(jsonProduct)
        }

        // if you clicked on the button "+":
        const productFind = getById(product.id)

        let jsonProduct: JsonProduct;
        if (productFind){
            jsonProduct = productFind
        } else {
            jsonProduct = {product_id: product.id, product_name: product.name, quantity: 1}
        }

        setActualQuantity(actualQuantity + 1)
        return addProduct(jsonProduct)
    }
    function deleteProductByCart(product: Product){
        // if you clicked on the button "-":
        if (actualQuantity !== 0){
            setActualQuantity(actualQuantity - 1)
            return removeProduct(product.id)
        } else {
            setActualQuantity(0)
            return
        }
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
                buttonAddProductClick()
            }}  className="addProductButton">
                <div className="empty">
                    &nbsp;
                </div>
                <p className={ addingProductIsActive ? "addProductText --addProductText-hidden" : "addProductText"}>Add to cart</p>
                <div ref={ulref} className={ addingProductIsActive ? "addingQuantityByProduct" : "--addingQuantityByProduct-hidden"}>
                    <IoAddSharp onClick={() => addProductByCart(product)} className="addQuantityBtn" color="white"/>
                    <p className="productQuantity">{actualQuantity}</p>
                    <AiOutlineMinus onClick={() => deleteProductByCart(product)} className="reduceQuantityBtn"/>
                </div>
                <img className="cartIconOverview" src={cartIconWhite} alt=""/>
            </div>
            
        </div>
    );
};

export default ProductOverview;
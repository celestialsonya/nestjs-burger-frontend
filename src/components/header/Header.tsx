import React, {useContext, useEffect} from 'react';
import "./Header.css"
import logo from '../../assets/logo.svg';
import categoriesIcon from '../../assets/categories-icon.svg';
import cart from "../../assets/cart-icon.svg"
import {observer} from "mobx-react-lite";
import {Context} from "../../context/Context";
import {fetchAmount} from "../../http/ProductApi";
import {useCart} from "../../hooks/useCart";

const Header = () => {

    const {productStore} = useContext(Context)
    const {getCart} = useCart()
    const amount = productStore.getAmount()

    useEffect(() => {
        const cart = getCart()
        fetchAmount(cart).then(data => {
            productStore.setAmount(data)
        })
    }, [])

    return (
        <div className="header">
            <img src={logo} alt="" className="logo"/>
            <div className="categories">
                <p className="category">Меню</p>
                <p className="category">Напитки и десерты</p>
                <p className="category">Акции</p>
            </div>
            <div className="cartAndPrice">
                <img className="cartIconHeader" src={cart} alt=""/>
                <p className="priceHeader">{amount} ₽</p>
            </div>
            <img src={categoriesIcon} className="categoriesIcon" alt=""/>
        </div>
    );
};

export default observer(Header);
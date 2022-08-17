import React from 'react';
import "./Header.css"
import logo from '../../assets/logo.svg';
import categoriesIcon from '../../assets/categories-icon.svg';

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="" className="logo"/>
            <div className="categories">
                <p className="category">Меню</p>
                <p className="category">Напитки и десерты</p>
                <p className="category">Акции</p>
            </div>
            <img src={categoriesIcon} className="categoriesIcon" alt=""/>
        </div>
    );
};

export default Header;
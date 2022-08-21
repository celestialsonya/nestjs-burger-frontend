import AppRouter from "./components/AppRouter";
import NavBar from "./components/header/Header";
import React, {useContext, useEffect, useState} from 'react'
import AppForm from "./components/appForm/AppForm";
import "./globals.css"
import {Context} from "./context/Context";
import {observer} from "mobx-react-lite";
import ProductOverview from "./components/products/productOverview/ProductOverview";

function App() {

    const {productStore} = useContext(Context)

    const isActive = productStore.getIsActive()
    const overviewProduct = productStore.getOverviewProduct()

    useEffect(() => {
        if (isActive){
            document.body.style.overflowY = 'hidden'
        }
        if (!isActive){
            document.body.style.overflowY = 'auto'
        }
    }, [isActive])

    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

  return (

    <div className="app">
        <NavBar/>
        <AppRouter/>
        <AppForm />
        {isActive? <ProductOverview product={overviewProduct} scrollPosition={scrollPosition}/> : null}
    </div>
  );
}

export default observer(App);

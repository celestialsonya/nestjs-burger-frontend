import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from "./store/UserStore";
import ProductStore from "./store/ProductStore";
import {BrowserRouter} from "react-router-dom";
import {Context} from "./context/Context";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <BrowserRouter>
        <Context.Provider value={{
            userStore: new UserStore(),
            productStore: new ProductStore()
            }}>
        <App />
        </Context.Provider>
    </BrowserRouter>

);

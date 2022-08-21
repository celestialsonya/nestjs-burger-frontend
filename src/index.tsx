import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from "./store/UserStore";
import ProductStore from "./store/ProductStore";
import {Context} from "./context/Context";
import {BrowserRouter} from "react-router-dom";

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

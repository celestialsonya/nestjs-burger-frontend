import React from 'react';
import {observer} from "mobx-react-lite";
import ProductList from "../components/product-list/ProductList";

const Catalog = observer(() => {

    return (
        <div className="catalog">
            <ProductList />
        </div>
    );
});

export default Catalog;
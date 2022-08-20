import { useContext } from "react";
import { Context } from "../context/Context";
import { Product } from "../types";

export function useOverview(){

    const {productStore} = useContext(Context)

    function handleOpen(product: Product){
        productStore.setOverviewProduct(product)
        productStore.setIsActive(true)

        return
    }

    function handleClose(){
        productStore.setOverviewProduct(null)
        productStore.setIsActive(false)

        return;
    }

    return {
        handleOpen, handleClose
    }
}
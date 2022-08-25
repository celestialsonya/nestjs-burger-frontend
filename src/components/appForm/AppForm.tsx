import React, { useContext } from "react";
import "./app-form.styles.css"
import { Context } from "../../context/Context";
import { observer } from "mobx-react-lite";
import { useOverview } from "../../hooks/useOverview";

const AppForm = observer(() => {

    const {productStore} = useContext(Context)
    const {handleClose} = useOverview()

    function handleCloseOverview(){
        handleClose()
    }

    return (
        <div onClick={
            handleCloseOverview
        } className={ productStore.getIsActive()? "appForm --app-form-active" : "appForm"}>
            &nbsp;
        </div>
);
})
export default AppForm;
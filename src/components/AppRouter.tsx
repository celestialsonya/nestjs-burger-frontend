import React, {useContext} from 'react';
import {Routes, Route, Navigate} from "react-router-dom"
import {authRoutes, publicRoutes} from "../Routes";
import {CATALOG_ROUTE} from "../consts/Consts";
import {Context} from "../context/Context";

const AppRouter = () => {

    const {userStore} = useContext(Context)

    return (
        <Routes>

            {userStore.getIsAuth() && authRoutes.map( ({path, Element}) =>
                <Route key={path} path={path} element={<Element/>}/>
            )}

            {publicRoutes.map( ({path, Element}) =>
                <Route key={path} path={path} element={<Element/>}/>
            )}

            <Route path="*" element={<Navigate to={CATALOG_ROUTE} />}/>

        </Routes>
    );
};

export default AppRouter;
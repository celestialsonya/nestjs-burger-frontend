import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/header/Header";
import React from 'react'
import AppForm from "./components/appForm/AppForm";
import "./globals.css"

function App() {


  return (

    <div className="app">
        <NavBar/>
        <AppRouter/>
        <AppForm />
    </div>
  );
}

export default App;

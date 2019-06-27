import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import "./App.css"
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'

import Logo from "../componentes/templates/Logo"
import Nav from "../componentes/templates/Nav"
import Footer from "../componentes/templates/Fotter"

export default props =>
    <BrowserRouter>
        <div className="app">
            <Logo  />
            <Nav />
            <Routes />         
            <Footer />
        </div>
    </BrowserRouter>
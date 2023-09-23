import React from 'react'
import Header from '../../componmts/header/Header'
import Fooder from '../../componmts/fooder/Fooder'
import { Outlet, Link } from "react-router-dom";

function Homepage() {
    return (
        <div>
            <Header />
            <div>Homepage</div>
            <Link to="/Sanpham">
                sản phẩm
            </Link>
            <Fooder />
        </div>
    )
}

export default Homepage
import React, { useState } from 'react'
import './Navbar.css'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [menu,setMenu]= useState("shop")
  return (
    <div className="navbar">
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>SHOPPY</p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:"none",color: "rgb(19, 19, 19"}} to={"/"}>Shop</Link>{menu=="shop"?<hr />:<></>}</li>
            <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:"none",color: "rgb(19, 19, 19"}} to={"/mens"}>Men</Link>{menu=="mens"?<hr />:<></>}</li>
            <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:"none",color: "rgb(19, 19, 19"}} to={"/womens"}>Women</Link>{menu=="womens"?<hr />:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:"none",color: "rgb(19, 19, 19"}} to={"/kids"}>Kids</Link>{menu=="kids"?<hr />:<></>}</li>
        </ul>
        <nav className="login-cart">
            <Link style={{textDecoration:"none",color:"grey"}} to={"/login"}><button>Login</button></Link>
            <Link to={"/cart"}><img src={cart_icon} alt="" /></Link>
            <div className='nav-cart-count'>0</div>
        </nav>
    </div>
  )
}

export default Navbar

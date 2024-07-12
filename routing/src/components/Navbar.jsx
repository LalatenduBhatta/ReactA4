import React from 'react'
import "../css/Navbar.css"
import { Link, NavLink } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className="navbar">
                <Link to={"/"} className='link'>Home</Link>
                <NavLink to={"/about"} className='link'>About</NavLink>
                <Link to={"/contact"} className='link'>Contact</Link>
                <NavLink to={"/product"} className='link'>Product</NavLink>
                <NavLink to={"/login"} className='link'>Login</NavLink>
            </div>
        </>
    )
}

export default Navbar
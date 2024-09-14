import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header () {

    return (<>
        <div className="my-header">
            <div className="container">
                <div className="wrapper-header">
                    <div className="logo-link-wrapper">
                        <Link to="home" className="logo-link">
                            <img src="/logoIcon.svg" className="logo-img" alt="logoIcon"/>
                            Ddsgnr
                        </Link>
                    </div>

                    <nav className="wrapper-menu">
                        <ul className="base-nemu">
                            <li><NavLink to="home" className={({isActive}) => isActive ? "active-app" : ""}>Home</NavLink></li>
                            <li><NavLink to="about-us" className={({isActive}) => isActive ? "active-app" : ""}>About Us</NavLink></li>
                            <li><NavLink to="our-products" className={({isActive}) => isActive ? "active-app" : ""}>Our Products</NavLink></li>
                            <li><NavLink to="services" className={({isActive})=>isActive ? "active-app" : ""}>Services</NavLink></li>
                            <li><NavLink to="contact" className={({isActive}) => isActive ? "active-app" : ""}>Contact</NavLink></li>
                        </ul>
                    </nav>

                    <div className="search-cart">
                        <Link to="wishlist" className="wishlist">
                            <img />
                            <span>Wishlist</span>
                        </Link>
                        <Link to="cart" className="wishlist">
                            <img />
                            <span>Cart</span>
                        </Link>
                        <Link to="notification" className="wishlist">
                            <img />
                            <span>Notification</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </>)
} 

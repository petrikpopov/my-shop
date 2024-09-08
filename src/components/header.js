import { Link } from "react-router-dom";

export default function Header () {
    return (<>
        <div className="my-header">
            <div className="container">
                <div className="wrapper-header">
                    <div className="logo-link-wrapper">
                        <Link to="/" className="logo-link">
                            <img className="logo-img"/>
                            Ddsgnr
                        </Link>
                    </div>

                    <div className="wrapper-menu">
                        <ul className="base-nemu">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="about-us">About Us</Link></li>
                            <li><Link to="products">Our Products</Link></li>
                            <li><Link to="services">Services</Link></li>
                            <li><Link to="contact">Contact</Link></li>
                        </ul>
                    </div>

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

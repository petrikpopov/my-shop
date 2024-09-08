import { Link } from "react-router-dom";

export default function Header () {
    return (<>
        <div className="my-header">
            <div className="container">
                <div className="wrapper-header">
                    <div className="logo-link-wrapper">
                        <Link to="/" className="logo-link">
                            <img src="/logoIcon.svg" className="logo-img" alt="logoIcon"/>
                            Ddsgnr
                        </Link>
                    </div>

                    <nav className="wrapper-menu">
                        <ul className="base-nemu">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="about-us">About Us</Link></li>
                            <li><Link to="our-products">Our Products</Link></li>
                            <li><Link to="services">Services</Link></li>
                            <li><Link to="contact">Contact</Link></li>
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

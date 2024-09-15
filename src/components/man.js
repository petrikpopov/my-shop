import { NavLink } from "react-router-dom"
import TovarItemMan from "./tovarItemMan"

export default function Man ({tovar}) {
    return (<>
        <div className="container">
            <div className="content-wrapper">
                <div className="man-about">
                    <h2>Men</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <ul className="top-popular">
                        <li><NavLink  className={({isActive})=> isActive ? "active-top" : ""}>Top Sellers</NavLink></li>
                        <li><NavLink to="/popular-items" className={({isActive})=> isActive ? "active-top" : ""}>Popular Items</NavLink></li>
                        <li><NavLink to="/top-rated" className={({isActive})=> isActive ? "active-top" : ""}>Top Rated</NavLink></li>
                    </ul>
                </div>
                <div className="wrapper-tovar">
                    {
                        tovar.map(item=>(
                            <TovarItemMan key={item} tovar={item}></TovarItemMan>
                        ))
                    }
                </div>
            </div>
       </div>
    </>)
}
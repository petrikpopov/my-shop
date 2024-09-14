import { Link, NavLink } from "react-router-dom"
import TovarItem from "./tovarItem"

export default function HomePage ({tovar}) {
    return (<>
       <div className="container">
            <div className="content-wrapper-home">
                <ul className="list-type">
                    <li><NavLink to="/man">Man</NavLink></li>
                    <li><NavLink to="/woman">Woman</NavLink></li>
                    <li><NavLink to="/children">Children</NavLink></li>
                </ul>
                <div className="wrapper-tovar">
                    {tovar.map(item=>(
                        <TovarItem key={item} tovar={item}></TovarItem>
                    ))}
                </div>
            </div>
       </div>
    </>)
}
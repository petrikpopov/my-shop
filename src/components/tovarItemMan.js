import ButtonAddInCart from "./buttun-addTovar"

export default function TovarItemMan ({tovar}) {
    return (<>
         <div className="tovar-card">
            <img src={`./manTovar/${tovar.img}`}/>
            <h3>{tovar.title}</h3>
            <p>{tovar.brand}</p>
            <span><b>${tovar.price}</b></span>
            <ButtonAddInCart></ButtonAddInCart>
         </div>
    </>)
}
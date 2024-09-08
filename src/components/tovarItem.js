export default function TovarItem ({tovar}) {
    return (<>
        <div className="tovar-card">
            <img src={`./homeTovar/${tovar.img}`}/>
            <h3>{tovar.title}</h3>
            <p>{tovar.brand}</p>
            <span>{tovar.price}</span>
        </div>
    </>)
}
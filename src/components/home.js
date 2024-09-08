import TovarItem from "./tovarItem"

export default function HomePage ({tovar}) {
    return (<>
       <div className="container">
            <div className="content-wrapper-home">
                {tovar.map(item=>(
                    <TovarItem key={item} tovar={item}></TovarItem>
                ))}
            </div>
       </div>
    </>)
}
import Product from "./display";
function Items(){
    const data=[
        {name:"Product A", price: 50, inStock:true},
        {name:"Product B", price: 100, inStock:false},
        {name:"Product C", price: 20, inStock:false}
    ];
    return(
        <>
        <ul>
            {data.map((info)=><li><Product data={info}/></li>)}
        </ul>
        </>
    )
}
export default Items;
function Product(props){
    const {data}=props;
    const {name,price,inStock}=data;
    return(
        <>
        <p>Product name: {name}</p>
        <p>Price: Rs.{price} {price>=100?"Premium Product":null}</p>
        <p>Stock: {inStock?"In stock":"Outof stock"}</p>
        </>
    )

}
export default Product;
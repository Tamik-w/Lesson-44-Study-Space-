import React from "react";
import iphone from "../assets/iphone.jpg";

function Product({id, name, price, onRemove}){

    const remove = () => {
        onRemove(id)
    }

    return (
        <div className="product">

            <div className="img">
                <img src={iphone}/>
            </div>
            <div className="body">
                <h1 className="title">{name}</h1>
                <div className="price">{price}</div>
            </div>
            <button onClick={remove} type="button">Remove</button>
        </div>
    )
}

export default Product;
import React from "react";

const Products = (props) => {
    return (
      <div className="product">
        <div className="body">
          <h1 className="title">{props.name}</h1>
          <div className="price">{props.price}</div>
        </div>
        <button onClick={() => props.remove(props.id)}>REMOVE</button>
     </div>
    );
  }
  export default Products;
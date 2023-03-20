import React, { useState } from "react";
import Products from "./components/Products.js";
import Add from "./components/Add/Add.js";
import { v4 as uuid } from 'uuid';

const App = () => {
  const [products, setProducts] = useState([
    {
      name: 'Iphone',
      price: 450,
      id: uuid(),
    },
    {
      name: 'Watch',
      price: 500,
      id: uuid(),
    }
  ]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const removeProduct = (id) => {
    const newList = products.filter(product => product.id !== id);
    setProducts(newList)
  };

  return (
    <div className="wrapper">
      <Add addProduct={addProduct} />
      <div className="list">
        {products.map(product => (
          <Products
            key={product.id}
            name={product.name}
            price={`${product.price} $`}
            id={product.id}
            remove={(id) => removeProduct(id)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

const Add = ({ addProduct }) => {
  const [newProduct, setNewProduct] = useState({ name: '', price: '' });

  const nameChange = (e) => {
    setNewProduct({ ...newProduct, name: e.target.value });
  };

  const priceChange = (e) => {
    setNewProduct({ ...newProduct, price: e.target.value });
  };

  const addProducts = (e) => {
    e.preventDefault();

    const name = newProduct.name.trim();
    if (name.length < 1) {
      alert("Please enter a valid product name (at least 1 character)");
      return;
    }

    const price = parseFloat(newProduct.price);
    if (isNaN(price) || price <= 0) {
      alert("Please enter a valid product price (greater than 0)");
      return;
    }

    const id = uuid();
    const product = { ...newProduct, id };

    addProduct(product);

    setNewProduct({ name: '', price: 0 });
  };

  return (
    <div className="add">
        <label>Product name</label>
        <input
          type="text"
          id="name"
          value={newProduct.name}
          onChange={nameChange}
        />
        <label>Product price</label>
        <input
          type="number"
          id="price"
          value={newProduct.price}
          onChange={priceChange}
        />
        <button onClick={addProducts} type="submit">Add</button>
    </div>
  );
};

export default Add;